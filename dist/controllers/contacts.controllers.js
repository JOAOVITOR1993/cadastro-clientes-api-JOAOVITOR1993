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
exports.updateContactController = exports.removeContactController = exports.listContactController = exports.createContactController = void 0;
const createContact_service_1 = __importDefault(require("../services/contacts/createContact.service"));
const listContact_service_1 = __importDefault(require("../services/contacts/listContact.service"));
const removeContact_service_1 = __importDefault(require("../services/contacts/removeContact.service"));
const updateContact_service_1 = __importDefault(require("../services/contacts/updateContact.service"));
const createContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactData = req.body;
    const clientUserId = Number(res.locals.userId);
    const newContact = yield (0, createContact_service_1.default)(contactData, clientUserId);
    return res.status(201).json(newContact);
});
exports.createContactController = createContactController;
const listContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = Number(req.params.id);
    const listContact = yield (0, listContact_service_1.default)(contactId);
    return res.status(200).json(listContact);
});
exports.listContactController = listContactController;
const removeContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = Number(req.params.id);
    yield (0, removeContact_service_1.default)(contactId);
    return res.status(204).send();
});
exports.removeContactController = removeContactController;
const updateContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = Number(req.params.id);
    const contactData = req.body;
    const updatedContact = yield (0, updateContact_service_1.default)(contactId, contactData);
    return res.status(200).json(updatedContact);
});
exports.updateContactController = updateContactController;
