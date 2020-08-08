const express = require('express')
const app = express()
const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

//un middelware es un callback que se va a ejecutar 
//siempre no importa la url que se solicite
app.use(express.static(__dirname + '/public'));

//expres hbs engine
hbs.registerPartials(__dirname + '/views/parciales/');
app.set('view engine', 'hbs');



app.get('/', function(req, res) {
    //res.send('Hello World')

    res.render('home', {
        nombre: 'jose Luis marTinEz'
    });
});

app.get('/about', function(req, res) {
    res.render('about');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})