const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');

//Leer el archivo notas.json
let notas: any = [];

const json_notas = fs.readFileSync('notas.json', 'utf-8');
if(json_notas){
  notas = JSON.parse(json_notas);
} else {
  notas = [];
}


app.use(bodyParser.json());
app.use(cors());


//METODO GET
app.get('/', async (req:any, res:any) => {
    await res.send(notas);
});

//METODO POST
app.post('/', (req: any, res: any) => {

    //busco si existe la nota en el array Notas  
    let index = notas.findIndex((elemento: any) => elemento.id == req.body.id);
    if(index === -1){
      //Si no existe agrego al array
      notas.push(req.body);
    }else {
      //Si existe actualizo la nota
      notas[index] = req.body;
    }
    console.log(notas);

    const json_notas = JSON.stringify(notas);
    fs.writeFileSync('notas.json', json_notas, 'utf-8');

     res.send('recibido');
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});