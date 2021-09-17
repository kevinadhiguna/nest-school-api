import { Controller, Get } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  // Handle GET requests
  @Get()
  getTeachers() {
    return "All Teachers";
  }

  @Get('/:teacherId') // <- Append to URL, therefore it will be : '/teachers/:teacherId'
  getTeacherById() {
    return "Get a Teacher by ID";
  }
}
