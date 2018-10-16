"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DAO = /** @class */ (function () {
    function DAO() {
        this.nameTable = "tabelaPessoa";
    }
    DAO.prototype.Inserir = function (object) {
        console.log(object + " inserido");
        return true;
    };
    DAO.prototype.Atualizar = function (object) {
        return false;
    };
    DAO.prototype.Remover = function (id) {
        return Object();
    };
    DAO.prototype.Selecionar = function (id) {
        return Object();
    };
    DAO.prototype.SelecionarTodos = function () {
        return [Object()];
    };
    return DAO;
}());
exports.DAO = DAO;
//# sourceMappingURL=DAO.js.map