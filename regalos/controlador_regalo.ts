import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export const obtenerRegalos = async (req: Request, res: Response) => {
    try {
        const { streamerId } = req.params;
        // Validate that streamerId exists
        if (!streamerId) {
            return res.status(400).json({ msg: "streamerId is required" });
        }
        const regalos = await prisma.regalo.findMany({
            where: { streamerId: streamerId, activo: true } // streamerId ahora es String
        });
        res.json(regalos);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener regalos" });
    }
};

export const crearRegalo = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).userId; // Viene como String del token
        const { nombre, costo, puntos, icono } = req.body;

        const nuevoRegalo = await prisma.regalo.create({
            data: {
                nombre,
                costo,
                puntos,
                icono: icono || "🎁",
                streamerId: userId
            }
        });
        res.json({ msg: "Regalo creado", regalo: nuevoRegalo });
    } catch (error) {
        res.status(500).json({ msg: "Error al crear regalo" });
    }
};

export const enviarRegalo = async (req: Request, res: Response) => {
    try {
        const espectadorId = (req as any).userId;
        const { regaloId } = req.body; // IDs son Strings

        const resultado = await prisma.$transaction(async (tx) => {
            // 1. Obtener regalo
            const regalo = await tx.regalo.findUnique({ where: { id: regaloId } });
            if (!regalo) throw new Error("Regalo no encontrado");

            // 2. Obtener Usuario (sus monedas están aquí ahora)
            const espectador = await tx.user.findUnique({ where: { id: espectadorId } });
            if (!espectador || espectador.coins < regalo.costo) {
                throw new Error("Saldo insuficiente");
            }

            // 3. Descontar monedas y sumar puntos (todo en User)
            const usuarioActualizado = await tx.user.update({
                where: { id: espectadorId },
                data: { 
                    coins: { decrement: regalo.costo },
                    points: { increment: regalo.puntos }
                }
            });

            return { 
                msg: `Enviaste ${regalo.nombre}`, 
                nuevoSaldo: usuarioActualizado.coins,
                nuevosPuntos: usuarioActualizado.points
            };
        });

        res.json(resultado);
    } catch (error: any) {
        res.status(400).json({ msg: error.message || "Error al enviar regalo" });
    }
};