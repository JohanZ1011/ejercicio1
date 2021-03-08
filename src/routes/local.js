const expres = require('express');
const router = expres.Router();
const localControllers = require('../controllers/localControllers');

  router.get('/local',async(req,res)=>{
    const local = await localControllers.listAll(req.body);
    res.render('local/local',{local});
  });

router.post('/agregar',async(req,res)=>{
     await localControllers.agregar(req);
     res.redirect('/local/local');
  });

  router.get('/eliminar/:id_local',async(req,res)=>{
    await localControllers.eliminar(req);
    res.redirect('/local/local');
 }); 

 router.post('/modificar/:id_local',async(req,res)=>{
  await localControllers.modificar(req);
   res.redirect('/local/local');
});
module.exports = router; 