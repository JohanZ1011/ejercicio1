'use strict'

const producto = require('../models/producto')
////////////BUZOS///////////////////////
async function listAll (req = null){
    const listAll = await producto().listAll(req)
    return listAll
}
    
async function agregar (req = null){
    const agregar = await producto().agregar(req)
    return agregar
}
async function eliminar (req = null){
    const eliminar = await producto().eliminar(req)
    return eliminar
}
async function modificar (req = null){
    const modificar = await producto().modificar(req)
    return modificar
}
module.exports = {
    
    listAll,
    agregar,
    eliminar,
    modificar,
   
}