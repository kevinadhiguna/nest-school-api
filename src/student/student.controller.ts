import { Controller, Get, Post, Put, Param } from '@nestjs/common';

@Controller('students') // <- Tell NestJS that the class below is a controller.
export class StudentController {
  // Handle GET requests
  @Get()
  getStudents() {
    return "All students!";
  }

  @Get('/:studentId') // <- Append to URL, therefore it will be : '/students/:studentId'
  getStudentById(
    @Param() params: { studentId: string }
  ) {
    return "Get a student by ID";
  }

  // Handle POST requests
  @Post() 
  createStudent() {
    return "Create a Student";
  }

  // Handle PUT requests
  @Put('/:studentId') 
  updateStudent() {
    return "Update a Student by ID";
  }
}
