"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facultyRelationalFieldsMapper = exports.facultyRelationalFields = exports.facultySearchableFields = exports.facultyFilterableFields = void 0;
exports.facultyFilterableFields = [
    'searchTerm',
    'facultyId',
    'email',
    'contactNo',
    'gender',
    'bloodGroup',
    'gender',
    'designation',
    'academicFacultyId',
    'academicDepartmentId'
];
exports.facultySearchableFields = [
    'firstName',
    'lastName',
    'middleName',
    'email',
    'contactNo',
    'facultyId',
    'designation'
];
exports.facultyRelationalFields = ['academicFacultyId', 'academicDepartmentId'];
exports.facultyRelationalFieldsMapper = {
    academicFacultyId: 'academicFaculty',
    academicDepartmentId: 'academicDepartment'
};
