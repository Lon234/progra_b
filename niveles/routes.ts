import { Router, Request, Response } from 'express';
// CORRECCIÓN: Importamos solo las funciones que existen en el nuevo controlador
import { 
  obtenerNivelesGlobales,
  obtenerNivelesStreamer 
} from './controlador_nivel';

const router = Router();

// Middleware de verificación de token (Puedes importarlo o dejarlo aquí si te sirve para debug)
const verificarToken = (req: Request, res: Response, next: Function) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'Token no proporcionado' });
  }
  // Aquí podrías validar el token real si lo necesitas
  next();
};

// --- RUTAS ACTUALIZADAS ---

// 1. Obtener niveles (Ya no son "propios", son los globales/planetas)
// Mantenemos la ruta '/obtener-niveles' para que el frontend no falle al cargar
router.get('/obtener-niveles', verificarToken, obtenerNivelesGlobales);

// 2. Obtener niveles públicos de un streamer (Redirige a globales también)
router.get('/niveles/:streamerId', obtenerNivelesStreamer);

// 3. (OPCIONAL) La ruta de configuración ya no se usa porque los niveles son fijos (Planetas)
// router.post('/configurar-niveles', verificarToken, ...); 

// Ruta de prueba
router.get('/test', (req: Request, res: Response) => {
  res.json({ status: 'Rutas de niveles funcionando' });
});

export default router;