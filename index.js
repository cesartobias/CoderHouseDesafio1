var Banco = /** @class */ (function () {
    function Banco() {
        var _this = this;
        this.id = 1;
        this.nombre = "Banco Banquero";
        this.direccion = "Direccion Conocida";
        this.telefono = "(888) 888 888";
        // id=this.id;
        // nombre=this.nombre;
        // direccion=this.direccion;
        // telefono=this.telefono;
        /*public*/ this.getInfoBanco = function () {
            var data = {
                id: _this.id,
                nombre: _this.nombre,
                direccion: _this.direccion,
                telefono: _this.telefono
            };
            return data;
        };
        this.setInfoBanco = function (id, nombre, direccion, telefono) {
            console.log("Informacion Actualizada del Banco.....Id Banco: " + id + " Nombre Banco : " + nombre + " Direccion Banco " + direccion + " Telefono: " + telefono + " ");
        };
    }
    return Banco;
}());
console.log("***** Informacion Guardada del Banco *****");
var banco = new Banco(); //2,"Banco","Banco","banco");
var datosBanco = banco.getInfoBanco();
console.log(datosBanco.direccion);
console.log("***** Actualizacion Informacion del Banco *****");
var updateBanco = new Banco();
updateBanco.setInfoBanco(2, "Banco 2", "Direccion 2", "(999) 9999 999");
var Cliente = /** @class */ (function () {
    function Cliente() {
        this.id = 1;
        this.nombre = "cesar Tobias";
        this.direccion = "Direccion Desonocida";
        this.telefono = "(9999) 999 999";
    }
    return Cliente;
}());
var ClienteBanco = /** @class */ (function () {
    function ClienteBanco(nombreCliente, pin, saldo) {
        var _this = this;
        this.nombreCliente = nombreCliente;
        this.pin = pin;
        this.saldo = saldo;
        this.idBanco = 1;
        this.idCliente = 1;
        this.getSaldo = function () {
            var data = { saldo: _this.saldo };
        };
        this.Abono = function () {
            var data = { saldo: _this.saldo };
        };
        this.Retiro = function () {
            var data = { saldo: _this.saldo };
        };
        this.GetPin = function () {
            console.log(_this.pin);
        };
        this.Changepin = function (pin) {
            return 2;
        };
    }
    return ClienteBanco;
}());
var cliente = new ClienteBanco("Cesar", 1234, 1000);
var saldo = cliente.getSaldo();
//console.log(saldo);
console.log("Nombre del Cliente: " + cliente.nombreCliente + ". PIN: " + cliente.pin + ". Saldo: " + cliente.saldo);
