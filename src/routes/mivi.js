const expres = require('express');
const router = expres.Router();
const miviControllers = require('../controllers/miviControllers');

  router.get('/mivi',async(req,res)=>{
    const mivi = await miviControllers.listAll(req.body);
    res.render('mivi/mivi',{mivi});
  });


  router.get('/mivi',async(req,res)=>{
    const vision = await miviControllers.listA(req.body);
    res.render('mivi/mivi',{vision});
  });

router.post('/agregar',async(req,res)=>{
     await miviControllers.agregar(req);
     res.redirect('/mivi/mivi');
  });

  router.get('/eliminar/:id_mivi',async(req,res)=>{
    await miviControllers.eliminar(req);
    res.redirect('/mivi/mivi');
 }); 

 router.post('/modificar/:id_mivi',async(req,res)=>{
  await miviControllers.modificar(req);
   res.redirect('/mivi/mivi');
});
module.exports = router; 