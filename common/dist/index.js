"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogUpdation = exports.blogCreation = exports.signinInput = exports.signupInput = void 0;
const zod_1 = __importDefault(require("zod"));
// Signup validation
exports.signupInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6),
    name: zod_1.default.string().optional()
});
//SignIn validation
exports.signinInput = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string()
});
//BlogCreation input validation
exports.blogCreation = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string()
});
//BlogUpdation input validatio
exports.blogUpdation = zod_1.default.object({
    title: zod_1.default.string(),
    content: zod_1.default.string(),
    id: zod_1.default.string()
});
