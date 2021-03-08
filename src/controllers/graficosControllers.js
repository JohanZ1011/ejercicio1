'use strict'

const graficos = require('../models/graficos')
////////////BUZOS///////////////////////
async function listAll (req = null){
    const listAll = await graficos().listAll(req)
    return listAll
}
    
async function agregar (req = null){
    const agregar = await graficos().agregar(req)
    return agregar
}
async function eliminar (req = null){
    const eliminar = await graficos().eliminar(req)
    return eliminar
}
async function modificar (req = null){
    const modificar = await graficos().modificar(req)
    return modificar
}
module.exports = {
    
    listAll,
    agregar,
    eliminar,
    modificar,
   
}