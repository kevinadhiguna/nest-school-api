import { Controller, Get, Param, Put } from '@nestjs/common';

import {
  FindStudentResponseDto,
  StudentResponseDto,
} from '../student/dto/student.dto';

@Controller('/teachers/:teacherId/students')
export class StudentTeacherController {
  @Get()
  getStudents(@Param('teacherId') teacherId: string): FindStudentResponseDto[] {
    return `Get Students that belong to a Teacher with ID ${teacherId}`;
  }

  // Handle PUT requests
  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): StudentResponseDto {
    return `Update a Student with ID of ${studentId} to a Teacher with ID of ${teacherId}`;
  }
}
