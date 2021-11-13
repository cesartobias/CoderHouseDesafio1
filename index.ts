class ClienteBanco{

    constructor(
        public nombreCliente:string,
        public pin:number,
        public saldo:number)
        {

        }

        public getSaldo =()=>{
          let data ={saldo:this.saldo}
        }

        public GetPin=()=>{
            console.log(this.pin)
        }
}


let cliente = new ClienteBanco("Cesar",1234,1000);

const saldo = cliente.getSaldo();

//console.log(saldo);
console.log("Nombre del Cliente: " + cliente.nombreCliente + ". PIN: " + cliente.pin + ". Saldo: " + cliente.saldo);

