import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

// ... configuración pool ...
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export const getStreams = async (req: Request, res: Response) => {
    try {
        const streams = await prisma.stream.findMany({
            include: { user: { select: { name: true } } } // Es 'user' y 'name'
        });

        const formattedStreams = streams.map(s => ({
            ...s,
            usuario: s.user.name // Adaptador para frontend
        }));

        res.json(formattedStreams);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener streams" });
    }
};

export const startStream = async (req: Request, res: Response) => {
    try {
        const { usuario, titulo, categoria, avatar } = req.body;
        
        const userRecord = await prisma.user.findFirst({
            where: { name: usuario } // Es 'name'
        });

        if (!userRecord) return res.status(404).json({ msg: "Usuario no encontrado" });

        const newStream = await prisma.stream.create({
            data: {
                title: titulo, // Schema usa 'title'
                // categoria: categoria, // Si usas el modelo Category, esto cambia. Asumiré string simple por ahora o null
                userId: userRecord.id,
                isLive: true,
                // ... mapea el resto de campos según tu schema exacto
            }
        });

        res.json({ msg: "Stream iniciado", streamId: newStream.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al iniciar stream" });
    }
};

// stopStream se queda similar, asegurando que 'id' sea String
export const stopStream = async (req: Request, res: Response) => {
    const { id } = req.params;
    // Validate that id exists
    if (!id) {
        return res.status(400).json({ msg: "Stream ID is required" });
    }
    try {
        await prisma.stream.delete({ where: { id: id } });
        res.json({ msg: "Stream eliminado" });
    } catch (error) {
        res.status(500).json({ msg: "Error" });
    }
};