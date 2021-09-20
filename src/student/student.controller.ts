import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

import {
  FindStudentResponseDto,
  CreateStudentDto,
  UpdateStudentDto,
  StudentResponseDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students') // <- Tell NestJS that the class below is a controller.
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // Handle GET requests
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return this.studentService.getStudents();
  }

  @Get('/:studentId') // <- Append to URL, therefore it will be : '/students/:studentId'
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentResponseDto {
    console.log('Student ID:', studentId);
    return `Get a Student with ID of ${studentId}`;
  }

  // Handle POST requests
  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    console.log('Body:', body);
    // Convert a JSON object to a string
    return `Create a Student with the following data ${JSON.stringify(body)}`;
  }

  // Handle PUT requests
  @Put('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return `Update a Student with ID of ${studentId} with data of ${JSON.stringify(
      body,
    )}`;
  }
}
