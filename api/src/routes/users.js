const {Router} = require('express');
const router = Router();
const {User} = require('../db');

router.post('/', async (req, res) => {
    const {name, lastName, email, role, active} = req.body;
    try{

    const newUser = await User.create({
        name, lastName, email, role, active
    })
    res.status(200).json(newUser)
    }catch(error){
       console.log({name, lastName, email, role, active})
       console.log(error)
        res.status(400).json({
            Tipo: 'Ha ocurrido un error',
            error: error
        });
    }
})

router.get('/', async (req , res) => {
    try{
       
        const allUsers = await User.findAll();
        res.status(200).json(allUsers)
    }catch(error){
        res.status(400).json({
            Tipo: 'Ha ocurrido un error',
            error: error
        });
    }
})

module.exports = router;
