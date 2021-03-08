const expres = require('express');
const router = expres.Router();
const redesControllers = require('../controllers/redesControllers');

  router.get('/redes',async(req,res)=>{
    const redes = await redesControllers.listAll(req.body);
    res.render('redes/redes',{redes});
  });

router.post('/agregar',async(req,res)=>{
     await redesControllers.agregar(req);
     res.redirect('/redes/redes');
  });

  router.get('/eliminar/:id_redes',async(req,res)=>{
    await redesControllers.eliminar(req);
    res.redirect('/redes/redes');
 }); 

 router.post('/modificar/:id_redes',async(req,res)=>{
  await redesControllers.modificar(req);
   res.redirect('/redes/redes');
});
module.exports = router; 