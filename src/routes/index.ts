import { Router } from 'express';
import healthRoutes from '../components/health/v1/health.routes';

const router = Router();

router.use('/health', healthRoutes);

export default router;
