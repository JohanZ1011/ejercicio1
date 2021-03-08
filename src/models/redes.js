'use strict'

const redess =  require('../database')

module.exports = function() {
////////////////////////BUZOS///////////////////
    async function listAll(req) {
        let query = `SELECT a.nombre, re.redes, re.vence FROM administrador a 
        INNER JOIN redes AS re ON a.id_redes = re.id_redes`;
        const data = await redess.query(query)
        return data 
    }

    async function agregar(req,res) {
        await redess.query('insert into redes set ?',[req.body]);
    }
//otra tabla o columna con usuarios
    async function eliminar(req,res) {
        const {id_redes} = req.params;
        await redess.query(`DELETE from redes where id_redes = ${id_redes}`);
    }

    async function modificar(req,res) {
        const {id_redes} = req.params;
        await redess.query(` UPDATE redes
        set ? 
        where id_redes=?`,[req.body,id_redes]);
    }
   return {
        listAll,
        agregar,
        eliminar,
        modificar,
   }
}