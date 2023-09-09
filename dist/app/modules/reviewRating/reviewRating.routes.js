"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRatingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const reviewRating_controller_1 = require("./reviewRating.controller");
const reviewRating_validations_1 = require("./reviewRating.validations");
const router = express_1.default.Router();
router.get('/', reviewRating_controller_1.ReviewRatingController.getAllFromDB);
router.get('/:id', reviewRating_controller_1.ReviewRatingController.getByIdFromDB);
router.post('/', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(reviewRating_validations_1.StudentValidation.create), reviewRating_controller_1.ReviewRatingController.insertIntoDB);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), (0, validateRequest_1.default)(reviewRating_validations_1.StudentValidation.update), reviewRating_controller_1.ReviewRatingController.updateIntoDB);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.SUPER_ADMIN, user_1.ENUM_USER_ROLE.ADMIN), reviewRating_controller_1.ReviewRatingController.deleteFromDB);
exports.ReviewRatingRoutes = router;
