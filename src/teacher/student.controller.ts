import { Controller, Get, Put } from '@nestjs/common';

@Controller('/teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents() {
    return "Get Students that belong to a Teacher";
  }

  // Handle PUT requests
  @Put('/:studentId')
  updateStudentTeacher() {
    return "Update Student Teacher";
  }
}
