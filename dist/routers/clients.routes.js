"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clients_controllers_1 = require("../controllers/clients.controllers");
const validateData_middleware_1 = __importDefault(require("../middlewares/validateData.middleware"));
const clients_schemas_1 = require("../schemas/clients.schemas");
const clients_middlewares_1 = require("../middlewares/clients.middlewares");
const validateToken_middleware_1 = __importDefault(require("../middlewares/validateToken.middleware"));
const clientsRoutes = (0, express_1.Router)();
clientsRoutes.post("", (0, validateData_middleware_1.default)(clients_schemas_1.createClientSchema), clients_middlewares_1.validateEmailExists, clients_middlewares_1.validatePhoneExists, clients_controllers_1.createClientController);
clientsRoutes.get("", validateToken_middleware_1.default, clients_controllers_1.listAllClientsController);
clientsRoutes.get("/:id", validateToken_middleware_1.default, clients_middlewares_1.validateClientExists, clients_middlewares_1.validateIfClientIsOwner, clients_controllers_1.listClientController);
clientsRoutes.delete("/:id", validateToken_middleware_1.default, clients_middlewares_1.validateClientExists, clients_middlewares_1.validateIfClientIsOwner, clients_controllers_1.removeClientController);
clientsRoutes.patch("/:id", validateToken_middleware_1.default, clients_middlewares_1.validateClientExists, clients_middlewares_1.validateIfClientIsOwner, (0, validateData_middleware_1.default)(clients_schemas_1.updateClientSchema), clients_middlewares_1.validateEmailExists, clients_middlewares_1.validatePhoneExists, clients_controllers_1.updateClientController);
exports.default = clientsRoutes;
