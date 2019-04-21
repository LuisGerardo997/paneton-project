import { Router } from 'express';
import { productosController } from '../controllers/productosController';
class ProductosRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/', productosController.read);
        this.router.post('/', productosController.create);
        this.router.get('/:id', productosController.show);
    }
}
const productosRoutes = new ProductosRoutes();
export default productosRoutes.router;