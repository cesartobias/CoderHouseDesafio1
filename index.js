var ClienteBanco = /** @class */ (function () {
    function ClienteBanco(nombreCliente, pin, saldo) {
        var _this = this;
        this.nombreCliente = nombreCliente;
        this.pin = pin;
        this.saldo = saldo;
        this.getSaldo = function () {
            var data = { saldo: _this.saldo };
        };
        this.GetPin = function () {
            console.log(_this.pin);
        };
    }
    return ClienteBanco;
}());
var cliente = new ClienteBanco("Cesar", 1234, 1000);
var saldo = cliente.getSaldo();
//console.log(saldo);
console.log("Nombre del Cliente: " + cliente.nombreCliente + ". PIN: " + cliente.pin + ". Saldo: " + cliente.saldo);
