interface BancoInterFace{
 id:number
  nombre:string,
   direccion:string
   telefono:string
}

interface Cliente{
  id:number,
  nombre: string,
  direccion: string
  telefono: string

  getInfoBanco();
  setInfoBanco(id:number,nombre:string, direccion:string,telefono:string):void;
}


interface ClienteBanco{
  idBanco:number,
  idCliente:number

  //getInfoBanco();
  //setInfoBanco(id:number,nombre:string, direccion:string,telefono:string):void;
}



class Banco implements BancoInterFace{
   id=1;
   nombre="Banco Banquero";
   direccion="Direccion Conocida";
   telefono="(888) 888 888"

// id=this.id;
// nombre=this.nombre;
// direccion=this.direccion;
// telefono=this.telefono;

  /*public*/ getInfoBanco =()=>{
    let data ={ 
      id:this.id,
     nombre:this.nombre,
     direccion:this.direccion,
     telefono:this.telefono
    }
    return data;
  }

  setInfoBanco =(id:number,nombre:string, direccion:string,telefono:string):void=>{
    console.log(`Informacion Actualizada del Banco.....Id Banco: ${id} Nombre Banco : ${nombre} Direccion Banco ${direccion} Telefono: ${telefono} `);
  }
 }


console.log("***** Informacion Guardada del Banco *****");
let banco = new Banco();//2,"Banco","Banco","banco");
const datosBanco = banco.getInfoBanco();
console.log(datosBanco.direccion);
console.log("***** Actualizacion Informacion del Banco *****")
let updateBanco: Banco = new Banco();
updateBanco.setInfoBanco(2,"Banco 2", "Direccion 2","(999) 9999 999");



class Cliente implements Cliente{
  id=1;
  nombre="cesar Tobias";
  direccion="Direccion Desonocida";
  telefono="(9999) 999 999"
}


class ClienteBanco implements ClienteBanco{
idBanco=1;
idCliente=1;

    constructor(
        public nombreCliente:string,
        public pin:number,
        public saldo:number)
        {

        }

        public getSaldo =()=>{
          let data ={saldo:this.saldo}
        }

        
        public Abono =()=>{
          let data ={saldo:this.saldo}
        }

        
        public Retiro =()=>{
          let data ={saldo:this.saldo}
        }
        public GetPin=()=>{
            console.log(this.pin)
        }

        public Changepin=(pin:number):number=>{
          return 2; 
        }
}


let cliente = new ClienteBanco("Cesar",1234,1000);

const saldo = cliente.getSaldo();

//console.log(saldo);
console.log("Nombre del Cliente: " + cliente.nombreCliente + ". PIN: " + cliente.pin + ". Saldo: " + cliente.saldo);

