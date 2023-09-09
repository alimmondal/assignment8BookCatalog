"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const order_controller_1 = require("./order.controller");
const router = express_1.default.Router();
router.get('/', 
// auth(ENUM_USER_ROLE.CUSTOMER),
// auth(ENUM_USER_ROLE.ADMIN),
order_controller_1.OrderController.getAllFromDB);
router.get('/:id', 
// auth(ENUM_USER_ROLE.CUSTOMER),
// auth(ENUM_USER_ROLE.ADMIN),
order_controller_1.OrderController.getByIdFromDB);
router.post('/create-order', 
// validateRequest(OrderValidation.create),
// auth(ENUM_USER_ROLE.CUSTOMER),
order_controller_1.OrderController.insertIntoDB);
// router.delete(
//   '/:id',
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//   OrderController.deleteByIdFromDB
// );
exports.OrderRoutes = router;
