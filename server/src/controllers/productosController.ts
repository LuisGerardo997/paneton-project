import { Request, Response } from 'express';
import Pool_pg from '../database';

class ProductosController {
    constructor() { };
    public async read(req: Request, res: Response) {
        const productos = await Pool_pg.query('select * from productos', (err, re) => {
            if (err) {
                throw err;
            }
            res.json(re.rows);
        });
    }
    public async create(req: Request, res: Response) {
        await res.json(req.body);
    }
    public async show(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        await Pool_pg.query('select * from productos where producto_id = $1', [id], (err, re) => {
            if (err) {
                throw err;
            }
            res.json(re.rows);
        })
    }
}

export const productosController = new ProductosController();