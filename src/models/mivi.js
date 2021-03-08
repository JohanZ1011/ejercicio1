'use strict'

const mivis =  require('../database')
module.exports = function() {
////////////////////////BUZOS///////////////////
    async function listAll(req) {
        let query = `SELECT m.id_mivi, m.mision FROM mivi m WHERE mision LIKE "%mision%"`;
        const data = await mivis.query(query)
        return data 
    }

    async function listA(req) {
        let query = `SELECT k.id_mivi, k.vision FROM mivi k WHERE vision LIKE "%vision%"`;
        const data = await mivis.query(query)
        return data 
    }

    async function agregar(req,res) {
        await mivis.query('insert into mivi set ?',[req.body]);
    }

    async function eliminar(req,res) {
        const {id_mivi} = req.params;
        await mivis.query(`DELETE from mivi where id_mivi = ${id_mivi}`);
    }

    async function modificar(req,res) {
        const {id_mivi} = req.params;
        await mivis.query(` UPDATE mivi
        set ? 
        where id_mivi=?`,[req.body,id_mivi]);
    }
   return {
        listAll,
        listA,
        agregar,
        eliminar,
        modificar
   }
}