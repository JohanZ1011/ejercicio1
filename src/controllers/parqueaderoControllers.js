'use strict'

const parqueadero = require('../models/parqueadero')
////////////BUZOS///////////////////////
async function listAll (req = null){
    const listAll = await parqueadero().listAll(req)
    return listAll
}
    
async function agregar (req = null){
    const agregar = await parqueadero().agregar(req)
    return agregar
}
async function eliminar (req = null){
    const eliminar = await parqueadero().eliminar(req)
    return eliminar
}
async function modificar (req = null){
    const modificar = await parqueadero().modificar(req)
    return modificar
}
module.exports = {
    
    listAll,
    agregar,
    eliminar,
    modificar,  
}