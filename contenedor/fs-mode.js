const fs = require('fs/promises');



class CFile {

    constructor(_name){

        this.name=_name;

        this.values=[];

    }
    async sync(){
        try {
            await fs.writeFile(this.name,JSON.stringify(this.values, null, 2));
        } catch (error) {
            console.log(error.message);
        }
    }

    generateId(){
        if (this.values.length===0){
            return 0
        }else{
            const allID = this.values.map((item)=>item.id);
            return (Math.max(...allID) + 1);
        }
    }

    async save(obj){
        try {
            obj.id = this.generateId();
            this.values.push(obj);
            return obj.id;
        } catch (error) {
            console.log(error.message);
        }
    }



    async open(){

        try {

            const valuesFiles = await fs.readFile(this.name,'utf-8');

            this.values = JSON.parse(valuesFiles);

        } catch (error) {

            this.values = [];

            await fs.promises.writeFile(this.name,JSON.stringify([]));

        }

    }

    async getAll(){
        try {
            return this.values;
        } catch (error) {
            console.log(error.message);
        }
    }



    async  getById(id) {
        try{
            const products= JSON.parse(id);   
            const quienId = products;
            const buscarId = this.values.filter((products) => products.id == quienId);
            console.log(`el ID buscado es: ${quienId}`);
            buscarId !== null ? console.log(buscarId)  : console.log("id inexistente");
            return buscarId;
        
        } catch (error) {
        console.log(error.message);
    }
    
    }   



    async deleteById(id){
    try{             

        const newProd = this.values.filter((products) => products.id !== id);
        console.log(`el ID borrado es: ${id}`);
        console.log(newProd);
        fs.writeFile('productos.txt', JSON.stringify(newProd, null, 2), (err) => {
            if (err) throw err;
            return newProd;
            });
        
        } catch (error) {
        console.log(error.message);
        }

    };

    async deleteAll(){
        try{ 
            await fs.writeFile(this.name,JSON.stringify([]));
                            
            } catch (error) {
                console.log(error.message);
            }
        } 

}  

module.exports = CFile