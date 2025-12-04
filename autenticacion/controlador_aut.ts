import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '../generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

// ... configuración de pool igual ...
const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

export const register = async (req: Request, res: Response) => {
    try {
        // Frontend envía 'usuario', nosotros guardamos en 'name'
        const { usuario, email, password } = req.body;

        const existing = await prisma.user.findFirst({
            where: { OR: [{ email }, { name: usuario }] },
        });

        if (existing) return res.status(400).json({ message: 'El usuario ya existe' });

        const passwordHash = await bcrypt.hash(password, 10);
        const created = await prisma.user.create({
            data: {
                name: usuario,
                email,
                password: passwordHash,
                coins: 0,
                points: 0
            },
        });

        const token = jwt.sign({ id: created.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '24h' });

        return res.status(201).json({
            token,
            user: { 
                id: created.id, 
                usuario: created.name, // Mapeamos para el frontend
                email: created.email,
                coins: created.coins,
                points: created.points
            },
            message: 'Registrado con éxito'
        });
    } catch (error) {
        return res.status(500).json({ message: 'Error servidor' });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, usuario, password } = req.body;
        
        const user = await prisma.user.findFirst({
            where: {
                OR: [
                    email ? { email } : undefined,
                    usuario ? { name: usuario } : undefined,
                ].filter(Boolean) as any,
            },
            include: { currentLevel: true } 
        });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '24h' });

        return res.status(200).json({
            token,
            user: { 
                id: user.id, 
                usuario: user.name, 
                email: user.email,
                coins: user.coins,
                points: user.points,
                nivelStreamer: user.currentLevel?.nombre || "Sin rango"
            },
        });
    } catch (error) {
        return res.status(500).json({ message: 'Error login' });
    }
};