'use strict'

const locals =  require('../database')

module.exports = function() {
////////////////////////BUZOS///////////////////
    async function listAll(req) {
        let query = `SELECT a.nombre, lo.numero FROM LOCAL lo 
        INNER JOIN administrador AS a ON a.id_local = lo.id_local`;
        const data = await locals.query(query)
        return data 
    }

    async function agregar(req,res) {
        await locals.query('insert into local set ?',[req.body]);
    }

    async function eliminar(req,res) {
        const {id_local} = req.params;
        await locals.query(`DELETE from local where id_local = ${id_local}`);
    }

    async function modificar(req,res) {
        const {id_local} = req.params;
        await locals.query(` UPDATE local
        set ? 
        where id_local=?`,[req.body,id_local]);
    }
   return {
        listAll,
        agregar,
        eliminar,
        modificar,
   }
}