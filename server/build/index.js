"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.app.set('port', 4000);
        this.config();
    }
    config() {
        this.app.listen(this.app.get('port'));
    }
    routes() {
    }
}
const server = new Server();
