import express, {Application} from 'express';

class Server{
    public app: Application = express();
    constructor(){
        this.app.set('port', 4000);
        this.config();
    }
    config(){
        this.app.listen(this.app.get('port'));
    }
    routes(){

    }
}
new Server();