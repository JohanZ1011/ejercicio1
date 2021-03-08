'use strict'

const noticias =  require('../database')

module.exports = function() {
    async function listAll(req) {
        let query = `SELECT * FROM noticia`;
        const data = await noticias.query(query)
        return data 
    }

    async function agregar(req,res) {
        await noticias.query('insert into noticia set ?',[req.body]);
    }

    async function eliminar(req,res) {
        const {id_noticia} = req.params;
        await noticias.query(`DELETE from noticia where id_noticia = ${id_noticia}`);
    }

    async function modificar(req,res) {
        const {id_noticia} = req.params;
        await noticias.query(` UPDATE noticia
        set ? 
        where id_noticia=?`,[req.body,id_noticia]);
    }
   return {
        listAll,
        agregar,
        eliminar,
        modificar,
   }
}