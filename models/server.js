const express = require('express');
const cors = require('cors');


class Server {

    constructor(){
      this.app = express();
      this.port = process.env.PORT;
      this.usuariosPath = '/api/usuarios';

      // Middlewares
      this.middlewares();
     

      /// rutas 
      this.routes();
    }

    routes(){
       this.app.use(this.usuariosPath, require('../routes/user.js'))
    }

    middlewares(){
        // conexion segurar cors
        this.app.use(cors());
        // Lectura y parceo del codigo 
        this.app.use(express.json());
        
        // Directorio publico
        this.app.use(express.static('public'));
    }

    listen(){ 
        this.app.listen( this.port, 
            ()=>{ console.log(`Servidor trabajando en http://localhost:${this.port}`)})
    }

}



module.exports = Server;