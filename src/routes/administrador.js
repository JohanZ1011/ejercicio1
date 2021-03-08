const expres = require('express');
const router = expres.Router();
const administradorControllers = require('../controllers/administradorControllers');

  router.get('/administrador',async(req,res)=>{
    const administrador = await administradorControllers.listAll(req.body);
    res.render('administrador/administrador',{administrador});
  });

router.post('/agregar',async(req,res)=>{
     await administradorControllers.agregar(req);
     res.redirect('/administrador/administrador');
  });

  router.get('/eliminar/:id_administrador',async(req,res)=>{
    await administradorControllers.eliminar(req);
    res.redirect('/administrador/administrador');
 }); 

 router.post('/modificar/:id_administrador',async(req,res)=>{
  await administradorControllers.modificar(req);
   res.redirect('/administrador/administrador');
});
module.exports = router; 