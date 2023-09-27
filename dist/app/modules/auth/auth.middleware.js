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
exports.AuthUtils = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
/**
 * Compare a plain text password with a hashed password.
 * @param {string} plainPassword - The plain text password to compare.
 * @param {string} hashedPassword - The hashed password to compare against.
 * @returns {Promise<boolean>} - Returns true if the passwords match, false otherwise.
 */
function comparePasswords(plainPassword, hashedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const passwordMatch = yield bcrypt_1.default.compare(plainPassword, hashedPassword);
            return passwordMatch;
        }
        catch (error) {
            throw new Error('Password comparison failed');
        }
    });
}
exports.AuthUtils = {
    comparePasswords,
};
