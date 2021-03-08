const expres = require('express');
const router = expres.Router();
const gymControllers = require('../controllers/gymControllers');

  router.get('/gym',async(req,res)=>{
    const gym = await gymControllers.listAll(req.body);
    res.render('gym/gym',{gym});
  });

router.post('/agregar',async(req,res)=>{
     await gymControllers.agregar(req);
     res.redirect('/gym/gym');
  });

  router.get('/eliminar/:id_gym',async(req,res)=>{
    await gymControllers.eliminar(req);
    res.redirect('/gym/gym');
 }); 

 router.post('/modificar/:id_gym',async(req,res)=>{
  await gymControllers.modificar(req);
   res.redirect('/gym/gym');
});
module.exports = router; 