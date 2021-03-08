'use strict'

const redes = require('../models/redes')
////////////BUZOS///////////////////////
async function listAll (req = null){
    const listAll = await redes().listAll(req)
    return listAll
}
    
async function agregar (req = null){
    const agregar = await redes().agregar(req)
    return agregar
}
async function eliminar (req = null){
    const eliminar = await redes().eliminar(req)
    return eliminar
}
async function modificar (req = null){
    const modificar = await redes().modificar(req)
    return modificar
}
module.exports = {
    
    listAll,
    agregar,
    eliminar,
    modificar,
   
}