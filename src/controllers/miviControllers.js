'use strict'

const mivi = require('../models/mivi')

async function listAll (req = null){
    const listAll = await mivi().listAll(req)
    return listAll
}
 
async function listA (req = null){
    const listA = await mivi().listA(req)
    return listA
}

async function agregar (req = null){
    const agregar = await mivi().agregar(req)
    return agregar
}
async function eliminar (req = null){
    const eliminar = await mivi().eliminar(req)
    return eliminar
}
async function modificar (req = null){
    const modificar = await mivi().modificar(req)
    return modificar
}
module.exports = {
    
    listAll,
    listA,
    agregar,
    eliminar,
    modificar
   
}