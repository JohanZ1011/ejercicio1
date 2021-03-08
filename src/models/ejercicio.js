'use strict'

const ejercicios =  require('../database')

module.exports = function() {
////////////////////////BUZOS///////////////////
    async function listAll(req) {
        let query = `SELECT * FROM ejercicio`;
        const data = await ejercicios.query(query)
        return data 
    }

    async function agregar(req,res) {
        await ejercicios.query('insert into ejercicio set ?',[req.body]);
    }

    async function eliminar(req,res) {
        const {id_ejercicio} = req.params;
        await ejercicios.query(`DELETE from ejercicio where id_ejercicio = ${id_ejercicio}`);
    }

    async function modificar(req,res) {
        const {id_ejercicio} = req.params;
        await ejercicios.query(` UPDATE ejercicio
        set ? 
        where id_ejercicio=?`,[req.body,id_ejercicio]);
    }
   return {
        listAll,
        agregar,
        eliminar,
        modificar,
   }
}