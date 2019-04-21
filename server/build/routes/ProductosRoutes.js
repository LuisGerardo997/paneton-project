"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productosController_1 = require("../controllers/productosController");
class ProductosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', productosController_1.productosController.read);
        this.router.post('/', productosController_1.productosController.create);
        this.router.get('/:id', productosController_1.productosController.show);
    }
}
const productosRoutes = new ProductosRoutes();
exports.default = productosRoutes.router;
