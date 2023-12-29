const { response, request } = require('express');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre, apellido} = req.query; 

    res.status(403).json({'ok':true,'msg':'controllador', q, nombre, apellido });
}


const usuariosPost = (req = request, res = response) => {

    const { nombre, edad } = req.body;

    res.status(403).json({'ok':true,'msg':'controllador', nombre, edad});
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id


    res.status(403).json({'ok':true,'msg':'controllador', id});
}

const usuariosPatch = (req, res = response) => {
    const id = req.params.id

    res.status(403).json({'ok':true,'msg':'controllador'});
}

const usuariosDelete = (req, res = response) => {
 

    const id = req.params.id

    res.status(403).json({'ok':true,'msg':'controllador'});
}


module.exports = {
    usuariosGet, 
    usuariosPost, 
    usuariosPut, 
    usuariosPatch, 
    usuariosDelete
}