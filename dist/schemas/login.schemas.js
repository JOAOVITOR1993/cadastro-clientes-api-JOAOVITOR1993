"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().max(100).email(),
    password: zod_1.z.string().max(120)
});
exports.default = loginSchema;
