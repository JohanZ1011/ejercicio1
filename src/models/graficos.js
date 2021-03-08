'use strict'

const graficoss =  require('../database')

module.exports = function() {
////////////////////////BUZOS///////////////////
    async function listAll(req) {
        let query = `SELECT * FROM graficos`;
        const data = await graficoss.query(query)
        return data 
    }

    async function agregar(req,res) {
        await graficoss.query('insert into graficos set ?',[req.body]);
    }

    async function eliminar(req,res) {
        const {id_graficos} = req.params;
        await graficoss.query(`DELETE from graficos where id_graficos = ${id_graficos}`);
    }

    async function modificar(req,res) {
        const {id_graficos} = req.params;
        await graficoss.query(` UPDATE graficos
        set ? 
        where id_graficos=?`,[req.body,id_graficos]);
    }
   return {
        listAll,
        agregar,
        eliminar,
        modificar,
   }
}