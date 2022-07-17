const fs = require('fs/promises');
const CFile = require('./contenedor/fs-mode');
const express = require("express");

const app = express();

const instanceFile = new CFile('productos.txt');


   

app.get('/productos',async (req, res)=>{
   return res.json(await instanceFile.getAll())
})

app.get('/productoRandom', (req, res)=>{
 //   res.send({mensaje:" Bienvenidos a la ruta del producto accedido en forma random"});
    let array=[];
    array = fs.readFile('./productos/productos.txt','utf-8');
    const aleatorio = array[Math.floor(Math.random() * array.length)];
    return aleatorio;
    
    
        
})
const PORT = 8080;
const server = app.listen(PORT, () => {
console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
 
server.on("error", error => console.log('Error: ${error'));

