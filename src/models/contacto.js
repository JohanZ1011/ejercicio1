'use strict'

const contactos =  require('../database')

module.exports = function() {
////////////////////////BUZOS///////////////////
    async function listAll(req) {
        let query = `SELECT a.nombre, a.apellido, a.numero, c.id_contacto FROM contacto c 
        INNER JOIN administrador AS a ON a.id_contacto = c.id_contacto`;
        const data = await contactos.query(query)
        return data 
    }

    async function agregar(req,res) {
        await contactos.query('insert into contacto set ?',[req.body]);
    }

    async function eliminar(req,res) {
        const {id_contacto} = req.params;
        await contactos.query(`DELETE from contacto where id_contacto = ${id_contacto}`);
    }

    async function modificar(req,res) {
        const {id_contacto} = req.params;
        await contactos.query(` UPDATE contacto
        set ? 
        where id_contacto=?`,[req.body,id_contacto]);
    }
   return {
        listAll,
        agregar,
        eliminar,
        modificar,
   }
}