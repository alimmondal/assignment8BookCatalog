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
exports.AuthService = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const client_1 = require("@prisma/client");
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../../config"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const prisma = new client_1.PrismaClient();
const signup = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.user.create({
        data,
    });
    return result;
});
const signin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    // Input validation
    if (!email || !password) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Email and password are required');
    }
    const user = yield prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
    }
    // Compare plaintext passwords directly
    if (password !== user.password) {
        throw new ApiError_1.default(http_status_1.default.UNAUTHORIZED, 'Password is incorrect');
    }
    // Create access token
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({
        userId: user.id,
        role: user.role,
        // You can include additional user data in the token if needed
    }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    const response = {
        role: user.role,
        userId: user.id,
        accessToken,
        // Add other properties you want to include in the response
    };
    return response;
});
// Utility function to compare passwords
// async function comparePasswords(inputPassword: string, hashedPassword: string) {
// Implement password comparison logic here (e.g., using bcrypt)
// Return true if the passwords match, false otherwise
// }
exports.AuthService = {
    signup,
    signin,
};
