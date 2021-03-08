'use strict'

const contacto = require('../models/contacto')
////////////BUZOS///////////////////////
async function listAll (req = null){
    const listAll = await contacto().listAll(req)
    return listAll
}
    
async function agregar (req = null){
    const agregar = await contacto().agregar(req)
    return agregar
}
async function eliminar (req = null){
    const eliminar = await contacto().eliminar(req)
    return eliminar
}
async function modificar (req = null){
    const modificar = await contacto().modificar(req)
    return modificar
}
module.exports = {
    
    listAll,
    agregar,
    eliminar,
    modificar,
   
}