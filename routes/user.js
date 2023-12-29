const { Router } = require('express'); 
const { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } = require('../controllers/usuariosController');

const router = Router();

router.get('/', usuariosGet );

router.post('/', usuariosPost);

// parametros de secmento 
router.put('/:id', usuariosPut);

router.patch('/:id', usuariosDelete);

router.delete('/:id', usuariosPatch);

module.exports = router;



