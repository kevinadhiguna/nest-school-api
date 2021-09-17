import { Controller, Get } from '@nestjs/common';

@Controller('students') // <- Tell NestJS that the class below is a controller.
class StudentController {
  @Get()
  getStudents() {
    return "Hello from GET students!";
  }
}
