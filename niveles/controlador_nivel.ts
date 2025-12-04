import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// Ya no "configuramos" niveles por usuario, obtenemos los globales
export const obtenerNivelesGlobales = async (req: Request, res: Response) => {
  try {
    const niveles = await prisma.streamerLevel.findMany({
        orderBy: { puntosRequeridos: 'asc' }
    });
    
    res.json({ 
      success: true,
      niveles: niveles,
      esDefault: false
    });
  } catch (error: any) {
    res.status(500).json({ success: false, msg: 'Error al obtener niveles' });
  }
};

// Mantener compatibilidad si el frontend llama a esta ruta
export const obtenerNivelesStreamer = async (req: Request, res: Response) => {
    return obtenerNivelesGlobales(req, res);
};