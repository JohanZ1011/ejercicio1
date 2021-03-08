'use strict'

const administradors =  require('../database')

module.exports = function() {
////////////////////////BUZOS///////////////////
    async function listAll(req) {
        let query = `SELECT a.id_administrador, a.nombre, a.apellido, r.tipo, re.redes FROM administrador a 
        INNER JOIN roles AS r ON a.id_rol = r.id_rol
        INNER JOIN redes AS re ON a.id_redes = re.id_redes`;
        const data = await administradors.query(query)
        return data 
    }

    async function agregar(req,res) {
        await administradors.query('insert into administrador set ?',[req.body]);
    }

    async function eliminar(req,res) {
        const {id_administrador} = req.params;
        await administradors.query(`DELETE from administrador where id_administrador = ${id_administrador}`);
    }

    async function modificar(req,res) {
        const {id_administrador} = req.params;
        await administradors.query(` UPDATE administrador
        set ? 
        where id_administrador=?`,[req.body,id_administrador]);
    }
   return {
        listAll,
        agregar,
        eliminar,
        modificar,
   }
}