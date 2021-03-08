'use strict'

const productos =  require('../database')

module.exports = function() {
////////////////////////BUZOS///////////////////
    async function listAll(req) {
        let query = `SELECT * FROM producto`;
        const data = await productos.query(query)
        return data 
    }

    async function agregar(req,res) {
        await productos.query('insert into producto set ?',[req.body]);
    }

    async function eliminar(req,res) {
        const {id_producto} = req.params;
        await productos.query(`DELETE from producto where id_producto = ${id_producto}`);
    }

    async function modificar(req,res) {
        const {id_producto} = req.params;
        await productos.query(` UPDATE producto
        set ? 
        where id_producto=?`,[req.body,id_producto]);
    }
   return {
        listAll,
        agregar,
        eliminar,
        modificar,
   }
}