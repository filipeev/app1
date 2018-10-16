"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PessoaDAO = /** @class */ (function () {
    function PessoaDAO() {
        this.nameTable = "tabelaPessoa";
    }
    PessoaDAO.prototype.Inserir = function (object) {
        return true;
    };
    PessoaDAO.prototype.Atualizar = function (object) {
        return false;
    };
    PessoaDAO.prototype.Remover = function (id) {
        return "";
    };
    PessoaDAO.prototype.Selecionar = function (id) {
        return "";
    };
    PessoaDAO.prototype.SelecionarTodos = function () {
        return [];
    };
    return PessoaDAO;
}());
//# sourceMappingURL=PessoaDAO.js.map