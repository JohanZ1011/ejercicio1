'use strict'

const administrador = require('../models/administrador')
////////////BUZOS///////////////////////
async function listAll (req = null){
    const listAll = await administrador().listAll(req)
    return listAll
}
    
async function agregar (req = null){
    const agregar = await administrador().agregar(req)
    return agregar
}
async function eliminar (req = null){
    const eliminar = await administrador().eliminar(req)
    return eliminar
}
async function modificar (req = null){
    const modificar = await administrador().modificar(req)
    return modificar
}
module.exports = {
    
    listAll,
    agregar,
    eliminar,
    modificar,
   
}