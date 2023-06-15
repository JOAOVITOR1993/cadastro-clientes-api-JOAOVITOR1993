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
exports.validateIfClientIsOwnerContact = exports.validateContactExists = exports.validatePhoneExistsContact = exports.validateEmailExistsContact = void 0;
const data_source_1 = __importDefault(require("../data-source"));
const contacts_entity_1 = __importDefault(require("../entities/contacts.entity"));
const erros_1 = require("../erros");
const validateEmailExistsContact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.default.getRepository(contacts_entity_1.default);
    const contactId = Number(req.params.id);
    const findEmail = yield contactRepository.findOne({
        where: {
            email: req.body.email
        },
        withDeleted: true
    });
    if (findEmail && req.body.email && contactId !== findEmail.id) {
        throw new erros_1.AppError("Email already exists", 409);
    }
    next();
});
exports.validateEmailExistsContact = validateEmailExistsContact;
const validatePhoneExistsContact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.default.getRepository(contacts_entity_1.default);
    const contactId = Number(req.params.id);
    const findPhone = yield contactRepository.findOne({
        where: {
            phone: req.body.phone
        },
        withDeleted: true
    });
    if (findPhone && req.body.phone && contactId !== findPhone.id) {
        throw new erros_1.AppError("Phone already exists", 409);
    }
    next();
});
exports.validatePhoneExistsContact = validatePhoneExistsContact;
const validateContactExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = Number(req.params.id);
    const contactRepository = data_source_1.default.getRepository(contacts_entity_1.default);
    const findContact = yield contactRepository.findOne({
        where: {
            id: contactId
        }
    });
    if (!findContact) {
        throw new erros_1.AppError("Contact not found", 404);
    }
    next();
});
exports.validateContactExists = validateContactExists;
const validateIfClientIsOwnerContact = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const contactId = Number(req.params.id);
    const clientUserId = Number(res.locals.userId);
    const contactRepository = data_source_1.default.getRepository(contacts_entity_1.default);
    const findContact = yield contactRepository.findOne({
        where: {
            id: contactId
        },
        relations: {
            client: true
        }
    });
    const clientOwnerContactId = Object(findContact === null || findContact === void 0 ? void 0 : findContact.client).id;
    if (clientUserId !== clientOwnerContactId) {
        throw new erros_1.AppError("You are only authorized to delete, update or read your contact", 403);
    }
    next();
});
exports.validateIfClientIsOwnerContact = validateIfClientIsOwnerContact;
