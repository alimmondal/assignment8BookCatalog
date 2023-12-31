"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const router = express_1.default.Router();
router.post('/signup', 
//   validateRequest(UserValidation.create),
auth_controller_1.AuthController.signup);
router.post('/signin', 
//   validateRequest(UserValidation.create),
auth_controller_1.AuthController.signin);
exports.AuthRoutes = router;
