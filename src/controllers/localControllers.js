'use strict'

const local = require('../models/local')
////////////BUZOS///////////////////////
async function listAll (req = null){
    const listAll = await local().listAll(req)
    return listAll
}
    
async function agregar (req = null){
    const agregar = await local().agregar(req)
    return agregar
}
async function eliminar (req = null){
    const eliminar = await local().eliminar(req)
    return eliminar
}
async function modificar (req = null){
    const modificar = await local().modificar(req)
    return modificar
}
module.exports = {
    
    listAll,
    agregar,
    eliminar,
    modificar,
   
}