"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateData_middleware_1 = __importDefault(require("../middlewares/validateData.middleware"));
const login_schemas_1 = __importDefault(require("../schemas/login.schemas"));
const login_controllers_1 = __importDefault(require("../controllers/login.controllers"));
const loginRoutes = (0, express_1.Router)();
loginRoutes.post("", (0, validateData_middleware_1.default)(login_schemas_1.default), login_controllers_1.default);
exports.default = loginRoutes;
