"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const category_controller_1 = require("./category.controller");
const category_validations_1 = require("./category.validations");
const router = express_1.default.Router();
router.get('/', category_controller_1.CategoryController.getAllFromDB);
router.get('/:id', category_controller_1.CategoryController.getByIdFromDB);
router.post('/create-category', (0, validateRequest_1.default)(category_validations_1.CategoryValidation.create), 
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
category_controller_1.CategoryController.insertIntoDB);
router.patch('/:id', 
//   validateRequest(CategoryValidation.update),
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
category_controller_1.CategoryController.updateOneInDB);
router.delete('/:id', 
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
category_controller_1.CategoryController.deleteByIdFromDB);
exports.categoryRoutes = router;
