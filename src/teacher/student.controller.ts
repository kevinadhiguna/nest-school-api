import { Controller, Get, Param, Put } from '@nestjs/common';

@Controller('/teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents(@Param('teacherId') teacherId: string) {
    return `Get Students that belong to a Teacher with ID ${teacherId}`;
  }

  // Handle PUT requests
  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ) {
    return `Update a Student with ID of ${studentId} to a Teacher with ID of ${teacherId}`;
  }
}
