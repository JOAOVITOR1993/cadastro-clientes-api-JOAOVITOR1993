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
const data_source_1 = __importDefault(require("../../data-source"));
const contacts_entity_1 = __importDefault(require("../../entities/contacts.entity"));
const contacts_schemas_1 = require("../../schemas/contacts.schemas");
const createContactService = (contactData, clientUserId) => __awaiter(void 0, void 0, void 0, function* () {
    const contactRepository = data_source_1.default.getRepository(contacts_entity_1.default);
    const contact = contactRepository.create(Object.assign(Object.assign({}, contactData), { client: clientUserId }));
    yield contactRepository.save(contact);
    const newContact = contacts_schemas_1.returnContactSchema.parse(contact);
    return newContact;
});
exports.default = createContactService;
