require('dotenv').config();
const { Router } = require('express');

// Importar todos los routers;
const usersRouter = require('./users')


const router = Router();
// Configurar los routers
router.use('/users', usersRouter);

module.exports = router;
