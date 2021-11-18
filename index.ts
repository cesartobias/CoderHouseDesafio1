interface BancoInterFace{
 idBanco:number,
  nombreBanco:string,
   dirBanco:string,
   telBanco:string
}

interface ClienteInterface{
  idCliente:number,
  nombreCliente: string,
  dirCliente: string,
  telCliente: string,
  NIP:number
}


interface ClienteBancoInterface extends ClienteInterface, BancoInterFace{
  saldo:number,
  fechaTransaccion:string
  }



class Banco implements BancoInterFace{
   idBanco=1;
   nombreBanco="Banco del Norte";
   dirBanco="Av Constitucion # 1230 Col. El Paseo";
   telBanco="(888) 888 888"

  /*public*/ getInfoBanco =()=>{
    let data ={ 
      id:this.idBanco,
     nombre:this.nombreBanco,
     direccion:this.dirBanco,
     telefono:this.telBanco
    }
    return data;
  }

  setInfoBanco =(id:number,nombre:string, direccion:string,telefono:string):void=>{
    console.log(`Informacion Actualizada del Banco.....Id Banco: ${id} Nombre Banco : ${nombre} Direccion Banco ${direccion} Telefono: ${telefono} `);
  }  
 }


 class Cliente implements ClienteInterface{
  idCliente=1;
  nombreCliente="Cesar Tobias";
  dirCliente="Av Paseo del Valle # 120 Col. Popocatepetl";
  telCliente="(999) 9999 9999";
  NIP:1234;
 /*public*/ getInfocustomer =()=>{
   let data ={ 
     id:this.idCliente,
    nombre:this.nombreCliente,
    direccion:this.dirCliente,
    telefono:this.telCliente,
    NIP:this.NIP
   }
   return data;
 }

 updateNIP=(NIP:number):void=>{
  console.log(`Su NIP se ha cambiado de manera correcta a ${NIP}` );
    }
}

var saldoCta: ClienteBancoInterface = {
  idBanco:1,
  nombreBanco:"Banco del Norte",
  dirBanco:"Av Constitucion # 1230 Col. El Paseo",
  telBanco:"(888) 888 888",
  idCliente:1,
  nombreCliente:"Cesar Tobias",
  dirCliente:"Av Paseo del Valle # 120 Col. Popocatepetl",
  telCliente:"(999) 9999 9999",
  saldo:200,
  fechaTransaccion:"12/12/2021",
  NIP:1234
}

console.log(saldoCta.nombreCliente)

//console.log("***** Informacion Guardada del Banco *****");


let banco = new Banco();
const datosBanco = banco.getInfoBanco();
let cliente = new Cliente();
console.log("Nombre del Banco: " + datosBanco.nombre);
console.log("Direccion: " + datosBanco.direccion);
console.log("Telefono: " + datosBanco.telefono);
console.log("Bienvenido " + saldoCta.nombreCliente);
console.log("Su saldo al dia de hoy $" + saldoCta.saldo);
console.log("Fecha ultima transaccion " + saldoCta.fechaTransaccion);
console.log("*******************************************");
console.log("Para activar su tarjeta es necesario cambiar el NIP");
cliente.updateNIP(9876);

console.log("******** DEBUG ****************");
console.log("***** Actualizacion Informacion del Banco *****")


let updateBanco: Banco = new Banco();
updateBanco.setInfoBanco(2,"Banco 2", "Direccion 2","(999) 9999 999");



// class Cliente implements Cliente{
//   id=1;
//   nombre="cesar Tobias";
//   direccion="Direccion Desonocida";
//   telefono="(9999) 999 999"
// }


// class ClienteBanco implements ClienteBanco{
// idBanco=1;
// idCliente=1;

//     constructor(
//         public nombreCliente:string,
//         public pin:number,
//         public saldo:number)
//         {

//         }

//         public getSaldo =()=>{
//           let data ={saldo:this.saldo}
//         }

        
//         public Abono =()=>{
//           let data ={saldo:this.saldo}
//         }

        
//         public Retiro =()=>{
//           let data ={saldo:this.saldo}
//         }
//         public GetPin=()=>{
//             console.log(this.pin)
//         }

//         public Changepin=(pin:number):number=>{
//           return 2; 
//         }
// }


// let cliente = new ClienteBanco("Cesar",1234,1000);

// const saldo = cliente.getSaldo();

// //console.log(saldo);
// console.log("Nombre del Cliente: " + cliente.nombreCliente + ". PIN: " + cliente.pin + ". Saldo: " + cliente.saldo);

