// seeders/seed.ts
import { PrismaClient } from '../generated/prisma/index.js'; // Ajusta la ruta si es necesario
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';

dotenv.config();

const connectionString = `${process.env.DATABASE_URL}`;

// --- AQUÍ ESTÁ EL CAMBIO ---
// Forzamos SSL: { rejectUnauthorized: false } para que funcione desde tu PC a Render
const pool = new pg.Pool({ 
    connectionString,
    ssl: { rejectUnauthorized: false } 
});
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// --- TUS DATOS ---
const tagsData = [
  { name: "MOBA" }, { name: "eSports" }, { name: "Competitivo" },
  { name: "Acción-Aventura" }, { name: "Mundo abierto" }, { name: "Rol-play" },
  { name: "FPS" }, { name: "Táctico" }, { name: "Héroes" },
  { name: "Battle Royale" }, { name: "Acción" }, { name: "Multijugador" },
  { name: "MMORPG" }, { name: "Rol" }, { name: "Fantástico" },
  { name: "Sandbox" }, { name: "Construcción" }, { name: "Supervivencia" },
  { name: "Horror" }, { name: "Estrategia" }
];

const main = async () => {
  console.log('🌱 Iniciando sembrado...');

  // Limpieza (try-catch por si alguna tabla no existe aún)
  try {
    // El orden es importante por las llaves foráneas
    await prisma.streamTag.deleteMany();
    await prisma.stream.deleteMany();
    await prisma.regalo.deleteMany();
    await prisma.user.deleteMany();
    await prisma.streamerLevel.deleteMany();
    await prisma.tag.deleteMany();
  } catch (e) {
    console.log('⚠️ Aviso: Limpieza parcial (tablas vacías o inexistentes).');
  }

  // A. Crear Tags
  console.log('🏷️ Creando Tags...');
  await prisma.tag.createMany({ 
    data: tagsData, 
    skipDuplicates: true 
  });

  // B. Crear Planetas
  console.log('🪐 Creando Niveles...');
  const nivelesData = [
    { nombre: 'Mercurio', puntosRequeridos: 10, image: 'https://res.cloudinary.com/djiitravd/image/upload/v1764551537/Mercury_scj98d.png' },
    { nombre: 'Venus', puntosRequeridos: 20, image: 'https://res.cloudinary.com/djiitravd/image/upload/v1764551537/Venus_h5cd6e.png' },
    { nombre: 'Tierra', puntosRequeridos: 50, image: 'https://res.cloudinary.com/djiitravd/image/upload/v1764551538/Earth_jgygvy.png' },
    { nombre: 'Marte', puntosRequeridos: 100, image: 'https://res.cloudinary.com/djiitravd/image/upload/v1764551537/Mars_x8l84n.png' },
  ];

  let nivelTierraId = "";
  for (const nivel of nivelesData) {
     const n = await prisma.streamerLevel.create({ data: nivel });
     if (n.nombre === 'Tierra') nivelTierraId = n.id;
  }

  // C. Crear Usuarios
  console.log('👤 Creando Usuarios...');
  const passwordHash = await bcrypt.hash("123456", 10);

  const streamer = await prisma.user.create({
    data: {
      email: "streamer@test.com",
      name: "StreamerPro",
      password: passwordHash,
      coins: 500,
      currentLevelId: nivelTierraId || null,
      streamingHours: 120.5
    }
  });

  await prisma.user.create({
    data: {
      email: "fan@test.com",
      name: "FanNumero1",
      password: passwordHash,
      coins: 1500,
      points: 300
    }
  });

  // D. Crear Regalos
  console.log('🎁 Creando Regalos...');
  await prisma.regalo.createMany({
    data: [
      { nombre: "GG Emote", costo: 10, puntos: 5, icono: "👾", streamerId: streamer.id },
      { nombre: "Corazón", costo: 50, puntos: 25, icono: "💖", streamerId: streamer.id },
      { nombre: "Diamante", costo: 100, puntos: 50, icono: "💎", streamerId: streamer.id }
    ]
  });

  console.log('✅ Seed completado exitosamente.');
}

main()
  .catch(e => {
    console.error('❌ Error fatal:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });