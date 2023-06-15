"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listClientController = exports.updateClientController = exports.removeClientController = exports.listAllClientsController = exports.createClientController = void 0;
const createClient_service_1 = __importDefault(require("../services/clients/createClient.service"));
const listAllClients_service_1 = __importDefault(require("../services/clients/listAllClients.service"));
const removeClient_service_1 = __importDefault(require("../services/clients/removeClient.service"));
const updateClient_service_1 = __importDefault(require("../services/clients/updateClient.service"));
const listClient_service_1 = __importDefault(require("../services/clients/listClient.service"));
const createClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const clientData = req.body;
    const newClient = yield (0, createClient_service_1.default)(clientData);
    return res.status(201).json(newClient);
});
exports.createClientController = createClientController;
const listAllClientsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allClients = yield (0, listAllClients_service_1.default)();
    return res.status(200).json(allClients);
});
exports.listAllClientsController = listAllClientsController;
const listClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idClient = Number(req.params.id);
    const listClient = yield (0, listClient_service_1.default)(idClient);
    return res.status(200).json(listClient);
});
exports.listClientController = listClientController;
const removeClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idClient = Number(req.params.id);
    yield (0, removeClient_service_1.default)(idClient);
    return res.status(204).send();
});
exports.removeClientController = removeClientController;
const updateClientController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idClient = Number(req.params.id);
    const clientData = req.body;
    const updatedClient = yield (0, updateClient_service_1.default)(idClient, clientData);
    return res.status(200).json(updatedClient);
});
exports.updateClientController = updateClientController;
