const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Este endpoint retorna todos os users.
router.get('/', userController.findAll);

// Este endpoint busca um usuário pelo id.
router.get('/:id', userController.findById);

// Este endpoint busca um usuário pelo id e email.
// URL a ser utilizada para o exemplo http://localhost:3000/user/search/1?email=aqui-o-email
router.get('/search/:id', userController.searchByEmail);

// Este endpoint cria um usuário no banco.
router.post('/', userController.create);

// Este endpoint altera um usuário no banco.
router.put('/:id', userController.update);

// Este endpoint remove um usuário no banco.
router.delete('/:id', userController.exclude);

module.exports = router;