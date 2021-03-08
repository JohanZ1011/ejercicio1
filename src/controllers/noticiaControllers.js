'use strict'

const noticia = require('../models/noticia')
////////////BUZOS///////////////////////
async function listAll (req = null){
    const listAll = await noticia().listAll(req)
    return listAll
}
    
async function agregar (req = null){
    const agregar = await noticia().agregar(req)
    return agregar
}
async function eliminar (req = null){
    const eliminar = await noticia().eliminar(req)
    return eliminar
}
async function modificar (req = null){
    const modificar = await noticia().modificar(req)
    return modificar
}
module.exports = {
    
    listAll,
    agregar,
    eliminar,
    modificar,
   
}