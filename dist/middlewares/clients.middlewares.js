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
exports.validateIfClientIsOwner = exports.validateClientExists = exports.validatePhoneExists = exports.validateEmailExists = void 0;
const data_source_1 = __importDefault(require("../data-source"));
const clients_entity_1 = __importDefault(require("../entities/clients.entity"));
const erros_1 = require("../erros");
const validateEmailExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepository = data_source_1.default.getRepository(clients_entity_1.default);
    const clientUserId = Number(res.locals.userId);
    const findEmail = yield clientRepository.findOne({
        where: {
            email: req.body.email
        },
        withDeleted: true
    });
    if (findEmail && req.body.email && clientUserId !== findEmail.id) {
        throw new erros_1.AppError("Email already exists", 409);
    }
    next();
});
exports.validateEmailExists = validateEmailExists;
const validatePhoneExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const clientRepository = data_source_1.default.getRepository(clients_entity_1.default);
    const clientUserId = Number(res.locals.userId);
    const findPhone = yield clientRepository.findOne({
        where: {
            phone: req.body.phone
        },
        withDeleted: true
    });
    if (findPhone && req.body.phone && clientUserId !== findPhone.id) {
        throw new erros_1.AppError("Phone already exists", 409);
    }
    next();
});
exports.validatePhoneExists = validatePhoneExists;
const validateClientExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const clientId = Number(req.params.id);
    const clientRepository = data_source_1.default.getRepository(clients_entity_1.default);
    const findClient = yield clientRepository.findOne({
        where: {
            id: clientId
        }
    });
    if (!findClient) {
        throw new erros_1.AppError("Client not found", 404);
    }
    next();
});
exports.validateClientExists = validateClientExists;
const validateIfClientIsOwner = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const clientId = Number(req.params.id);
    const clientUserId = Number(res.locals.userId);
    if (clientId !== clientUserId) {
        throw new erros_1.AppError("You are not allowed to delete, update or read another customer", 403);
    }
    next();
});
exports.validateIfClientIsOwner = validateIfClientIsOwner;
