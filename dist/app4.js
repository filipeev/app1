"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DAO_1 = require("./DAO");
var concessionaria_1 = __importDefault(require("./concessionaria"));
var pessoa_1 = __importDefault(require("./pessoa"));
var concessionaria = new concessionaria_1.default("rua aimore 109", []);
var pessoa = new pessoa_1.default("Filipe", "camaro", Object());
var daoC = new DAO_1.DAO();
var daoP = new DAO_1.DAO();
daoC.Inserir(concessionaria);
daoP.Inserir(pessoa);
//# sourceMappingURL=app4.js.map