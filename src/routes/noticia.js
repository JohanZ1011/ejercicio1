const expres = require('express');
const router = expres.Router();
const noticiaControllers = require('../controllers/noticiaControllers');

  router.get('/noticia',async(req,res)=>{
    const noticia = await noticiaControllers.listAll(req.body);
    res.render('noticia/noticia',{noticia});
  });

router.post('/agregar',async(req,res)=>{
     await noticiaControllers.agregar(req);
     res.redirect('/noticia/noticia');
  });

  router.get('/eliminar/:id_noticia',async(req,res)=>{
    await noticiaControllers.eliminar(req);
    res.redirect('/noticia/noticia');
 }); 

 router.post('/modificar/:id_noticia',async(req,res)=>{
  await noticiaControllers.modificar(req);
   res.redirect('/noticia/noticia');
});
module.exports = router; 