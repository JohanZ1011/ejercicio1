const expres = require('express');
const router = expres.Router();
const graficosControllers = require('../controllers/graficosControllers');

  router.get('/graficos',async(req,res)=>{
    const graficos = await graficosControllers.listAll(req.body);
    res.render('graficos/graficos',{graficos});
  });

router.post('/agregar',async(req,res)=>{
     await graficosControllers.agregar(req);
     res.redirect('/graficos/graficos');
  });

  router.get('/eliminar/:id_graficos',async(req,res)=>{
    await graficosControllers.eliminar(req);
    res.redirect('/graficos/graficos');
 }); 

 router.post('/modificar/:id_graficos',async(req,res)=>{
  await graficosControllers.modificar(req);
   res.redirect('/graficos/graficos');
});

module.exports = router; 