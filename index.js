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
