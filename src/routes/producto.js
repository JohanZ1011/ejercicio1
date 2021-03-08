const expres = require('express');
const router = expres.Router();
const productoControllers = require('../controllers/productoControllers');

  router.get('/producto',async(req,res)=>{
    const producto = await productoControllers.listAll(req.body);
    res.render('producto/producto',{producto});
  });

router.post('/agregar',async(req,res)=>{
     await productoControllers.agregar(req);
     res.redirect('/producto/producto');
  });

  router.get('/eliminar/:id_producto',async(req,res)=>{
    await productoControllers.eliminar(req);
    res.redirect('/producto/producto');
 }); 

 router.post('/modificar/:id_producto',async(req,res)=>{
  await productoControllers.modificar(req);
   res.redirect('/producto/producto');
});
module.exports = router; 