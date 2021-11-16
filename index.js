var Banco = /** @class */ (function () {
    function Banco() {
        var _this = this;
        this.idBanco = 1;
        this.nombreBanco = "Banco del Norte";
        this.dirBanco = "Av Constitucion # 1230 Col. El Paseo";
        this.telBanco = "(888) 888 888";
        /*public*/ this.getInfoBanco = function () {
            var data = {
                id: _this.idBanco,
                nombre: _this.nombreBanco,
                direccion: _this.dirBanco,
                telefono: _this.telBanco
            };
            return data;
        };
        this.setInfoBanco = function (id, nombre, direccion, telefono) {
            console.log("Informacion Actualizada del Banco.....Id Banco: " + id + " Nombre Banco : " + nombre + " Direccion Banco " + direccion + " Telefono: " + telefono + " ");
        };
    }
    return Banco;
}());
var Cliente = /** @class */ (function () {
    function Cliente() {
        var _this = this;
        this.idCliente = 1;
        this.nombreCliente = "Cesar Tobias";
        this.dirCliente = "Av Paseo del Valle # 120 Col. Popocatepetl";
        this.telCliente = "(999) 9999 9999";
        /*public*/ this.getInfocustomer = function () {
            var data = {
                id: _this.idCliente,
                nombre: _this.nombreCliente,
                direccion: _this.dirCliente,
                telefono: _this.telCliente
            };
            return data;
        };
    }
    return Cliente;
}());
var saldoCta = {
    idBanco: 1,
    nombreBanco: "Banco del Norte",
    dirBanco: "Av Constitucion # 1230 Col. El Paseo",
    telBanco: "(888) 888 888",
    idCliente: 1,
    nombreCliente: "Cesar Tobias",
    dirCliente: "Av Paseo del Valle # 120 Col. Popocatepetl",
    telCliente: "(999) 9999 9999",
    saldo: 200,
    fechaTransaccion: "12/12/2021"
};
console.log(saldoCta.nombreCliente);
// class ClienteBanco implements ClienteBancoInterface{
//   saldo=20;
//   getSaldo=()=>{
//   }
// }
//console.log("***** Informacion Guardada del Banco *****");
var banco = new Banco();
var datosBanco = banco.getInfoBanco();
console.log("Nombre del Banco: " + datosBanco.nombre);
console.log("Direccion: " + datosBanco.direccion);
console.log("Telefono: " + datosBanco.telefono);
console.log("Bienvenido " + saldoCta.nombreCliente);
console.log("Su saldo al dia de hoy " + saldoCta.saldo);
console.log("Fecha ultima transaccion " + saldoCta.fechaTransaccion);
console.log("*******************************************");
console.log("***** Actualizacion Informacion del Banco *****");
var updateBanco = new Banco();
updateBanco.setInfoBanco(2, "Banco 2", "Direccion 2", "(999) 9999 999");
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
