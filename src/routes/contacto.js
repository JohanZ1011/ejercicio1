const expres = require('express');
const router = expres.Router();
const contactoControllers = require('../controllers/contactoControllers');

  router.get('/contacto',async(req,res)=>{
    const contacto = await contactoControllers.listAll(req.body);
    res.render('contacto/contacto',{contacto});
  });

router.post('/agregar',async(req,res)=>{
     await contactoControllers.agregar(req);
     res.redirect('/contacto/contacto');
  });

  router.get('/eliminar/:id_contacto',async(req,res)=>{
    await contactoControllers.eliminar(req);
    res.redirect('/contacto/contacto');
 }); 

 router.post('/modificar/:id_contacto',async(req,res)=>{
  await contactoControllers.modificar(req);
   res.redirect('/contacto/contacto');
});
module.exports = router; 