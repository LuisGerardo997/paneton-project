"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const ProductosRoutes_1 = __importDefault(require("./routes/ProductosRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.app.set('port', 4000);
        this.config();
        this.routes();
    }
    config() {
        this.app.listen(this.app.get('port'));
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/productos', ProductosRoutes_1.default);
    }
}
new Server();
