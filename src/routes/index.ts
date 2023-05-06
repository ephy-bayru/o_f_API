import { Router } from 'express';
import healthRoutes from '../components/health/v1/health.routes';
import productsRoutes from '../components/products/v1/web/products.routes';

const router = Router();

router.use('/health', healthRoutes);
router.use('/v1/products', productsRoutes);

export default router;
