'use strict'

const gyms =  require('../database')

module.exports = function() {
////////////////////////BUZOS///////////////////
    async function listAll(req) {
        let query = `SELECT * FROM gym`;
        const data = await gyms.query(query)
        return data 
    }

    async function agregar(req,res) {
        await gyms.query('insert into gym set ?',[req.body]);
    }

    async function eliminar(req,res) {
        const {id_gym} = req.params;
        await gyms.query(`DELETE from gym where id_gym = ${id_gym}`);
    }

    async function modificar(req,res) {
        const {id_gym} = req.params;
        await gyms.query(` UPDATE gym
        set ? 
        where id_gym=?`,[req.body,id_gym]);
    }
   return {
        listAll,
        agregar,
        eliminar,
        modificar,
   }
}