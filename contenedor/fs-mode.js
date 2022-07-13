const fs = require('fs/promises');



class CFile {

    constructor(_name){

        this.name=_name;

        this.values=[];

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


}

module.exports = CFile