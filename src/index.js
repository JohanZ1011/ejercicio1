const express= require('express');
const morgan = require('morgan');
const exphbs= require('express-handlebars');
const path= require('path');

const app=express();

app.set('port' ,process.env.PORT||8000);

app.set('views',path.join(__dirname,'views'));
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutsDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));

app.set('view engine','.hbs');
//peticiones
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//variables globales
app.use((req,res,next)=>{
    next();
});
//rutas
app.use(require('./routes'));
app.set(require('./routes/authentication'));
app.use('/links',require('./routes/links'));
app.use('/ejercicio',require('./routes/ejercicio'));
app.use('/contacto',require('./routes/contacto'));
app.use('/mivi',require('./routes/mivi'));
app.use('/redes',require('./routes/redes'));
app.use('/graficos',require('./routes/graficos'));
app.use('/administrador',require('./routes/administrador'));
app.use('/gym',require('./routes/gym'));
app.use('/noticia',require('./routes/noticia'));
app.use('/parqueadero',require('./routes/parqueadero'));
app.use('/producto',require('./routes/producto'));
app.use('/local',require('./routes/local'));

//public
app.use(express.static(path.join(__dirname,'public')));

//inicia server
app.listen(app.get('port'),()=>{
   console.log('server opn port',app.get('port'));
});