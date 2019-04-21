import express, { Application } from 'express';
import indexRoutes from './routes/indexRoutes';
import ProductosRoutes from './routes/ProductosRoutes';

class Server{
    public app: Application = express();
    constructor(){
        this.app.set('port', 4000);
        this.config();
        this.routes();
    }
    config() {
        this.app.listen(this.app.get('port'));
        this.app.use(express.json());
    }
    routes() {
        this.app.use(indexRoutes);
        this.app.use('/productos', ProductosRoutes);
    }
}
new Server();