import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';

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
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): FindStudentResponseDto {
    console.log('Student ID:', studentId);
    return this.studentService.getStudentById(studentId);
  }

  // Handle POST requests
  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    console.log('Body:', body);
    return this.studentService.createStudent(body);
  }

  // Handle PUT requests
  @Put('/:studentId')
  updateStudent(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return this.studentService.updateStudent(body, studentId);
  }
}
