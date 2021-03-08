'use strict'

const gym = require('../models/gym')
////////////BUZOS///////////////////////
async function listAll (req = null){
    const listAll = await gym().listAll(req)
    return listAll
}
    
async function agregar (req = null){
    const agregar = await gym().agregar(req)
    return agregar
}
async function eliminar (req = null){
    const eliminar = await gym().eliminar(req)
    return eliminar
}
async function modificar (req = null){
    const modificar = await gym().modificar(req)
    return modificar
}
module.exports = {
    
    listAll,
    agregar,
    eliminar,
    modificar,  
}