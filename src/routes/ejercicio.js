const expres = require('express');
const router = expres.Router();
const ejercioControllers = require('../controllers/ejercioControllers');

  router.get('/ejercicio',async(req,res)=>{
    const ejercicio = await ejercioControllers.listAll(req.body);
    res.render('ejercicio/ejercicio',{ejercicio});
  });

router.post('/agregar',async(req,res)=>{
     await ejercioControllers.agregar(req);
     res.redirect('/ejercicio/ejercicio');
  });

  router.get('/eliminar/:id_ejercicio',async(req,res)=>{
    await ejercioControllers.eliminar(req);
    res.redirect('/ejercicio/ejercicio');
 }); 

 router.post('/modificar/:id_ejercicio',async(req,res)=>{
  await ejercioControllers.modificar(req);
   res.redirect('/ejercicio/ejercicio');
});
module.exports = router; 