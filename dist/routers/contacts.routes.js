"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contacts_schemas_1 = require("../schemas/contacts.schemas");
const validateData_middleware_1 = __importDefault(require("../middlewares/validateData.middleware"));
const contacts_middlewares_1 = require("../middlewares/contacts.middlewares");
const contacts_controllers_1 = require("../controllers/contacts.controllers");
const validateToken_middleware_1 = __importDefault(require("../middlewares/validateToken.middleware"));
const contactsRoutes = (0, express_1.Router)();
contactsRoutes.post("", validateToken_middleware_1.default, (0, validateData_middleware_1.default)(contacts_schemas_1.createContactSchema), contacts_middlewares_1.validateEmailExistsContact, contacts_middlewares_1.validatePhoneExistsContact, contacts_controllers_1.createContactController);
contactsRoutes.get("/:id", validateToken_middleware_1.default, contacts_middlewares_1.validateContactExists, contacts_middlewares_1.validateIfClientIsOwnerContact, contacts_controllers_1.listContactController);
contactsRoutes.delete("/:id", validateToken_middleware_1.default, contacts_middlewares_1.validateContactExists, contacts_middlewares_1.validateIfClientIsOwnerContact, contacts_controllers_1.removeContactController);
contactsRoutes.patch("/:id", validateToken_middleware_1.default, contacts_middlewares_1.validateContactExists, contacts_middlewares_1.validateIfClientIsOwnerContact, (0, validateData_middleware_1.default)(contacts_schemas_1.updateContactSchema), contacts_middlewares_1.validateEmailExistsContact, contacts_middlewares_1.validatePhoneExistsContact, contacts_controllers_1.updateContactController);
exports.default = contactsRoutes;
