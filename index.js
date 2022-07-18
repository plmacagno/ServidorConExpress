const fs = require('fs');
const CFile = require('./contenedor/fs-mode');
const express = require("express");

const app = express();

const instanceFile = new CFile("productos.txt");


   

app.get('/productos',async (req, res)=>{
   return res.json(await instanceFile.getAll())
})

app.get('/productoRandom', async (req, res)=>{
 //   res.send({mensaje:" Bienvenidos a la ruta del producto accedido en forma random"});
    return res.json(await instanceFile.findAzar())

     
        
})
const PORT = 8080;
const server = app.listen(PORT, () => {
console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
 
server.on("error", error => console.log('Error: ${error'));

