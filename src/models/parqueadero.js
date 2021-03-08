'use strict'

const parqueaderos =  require('../database')

module.exports = function() {
////////////////////////BUZOS///////////////////
    async function listAll(req) {
        let query = `SELECT * FROM parqueadero`;
        const data = await parqueaderos.query(query)
        return data 
    }

    async function agregar(req,res) {
        await parqueaderos.query('insert into parqueadero set ?',[req.body]);
    }

    async function eliminar(req,res) {
        const {id_parqueadero} = req.params;
        await parqueaderos.query(`DELETE from parqueadero where id_parqueadero = ${id_parqueadero}`);
    }

    async function modificar(req,res) {
        const {id_parqueadero} = req.params;
        await parqueaderos.query(` UPDATE parqueadero
        set ? 
        where id_parqueadero=?`,[req.body,id_parqueadero]);
    }
   return {
        listAll,
        agregar,
        eliminar,
        modificar,
   }
}