const expres = require('express');
const router = expres.Router();
const parqueaderoControllers = require('../controllers/parqueaderoControllers');

  router.get('/parqueadero',async(req,res)=>{
    const parqueadero = await parqueaderoControllers.listAll(req.body);
    res.render('parqueadero/parqueadero',{parqueadero});
  });

router.post('/agregar',async(req,res)=>{
     await parqueaderoControllers.agregar(req);
     res.redirect('/parqueadero/parqueadero');
  });

  router.get('/eliminar/:id_parqueadero',async(req,res)=>{
    await parqueaderoControllers.eliminar(req);
    res.redirect('/parqueadero/parqueadero');
 }); 

 router.post('/modificar/:id_parqueadero',async(req,res)=>{
  await parqueaderoControllers.modificar(req);
   res.redirect('/parqueadero/parqueadero');
});
module.exports = router; 