'use strict'

const ejercicio = require('../models/ejercicio')
////////////BUZOS///////////////////////
async function listAll (req = null){
    const listAll = await ejercicio().listAll(req)
    return listAll
}
    
async function agregar (req = null){
    const agregar = await ejercicio().agregar(req)
    return agregar
}
async function eliminar (req = null){
    const eliminar = await ejercicio().eliminar(req)
    return eliminar
}
async function modificar (req = null){
    const modificar = await ejercicio().modificar(req)
    return modificar
}
module.exports = {
    
    listAll,
    agregar,
    eliminar,
    modificar,
   
}