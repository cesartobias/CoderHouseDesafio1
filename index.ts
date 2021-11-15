interface Banco{
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
}


interface ClienteBanco{
  idBanco:number,
  idCliente:number
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

