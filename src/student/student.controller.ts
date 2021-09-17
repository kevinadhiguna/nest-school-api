import { Controller, Get } from '@nestjs/common';

@Controller('students') // <- Tell NestJS that the class below is a controller.
export class StudentController {
  @Get()
  getStudents() {
    return "Hello from GET students!";
  }
}
