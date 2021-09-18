import { Controller, Get, Param } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  // Handle GET requests
  @Get()
  getTeachers() {
    return 'All Teachers';
  }

  @Get('/:teacherId') // <- Append to URL, therefore it will be : '/teachers/:teacherId'
  getTeacherById(@Param('teacherId') teacherId: string) {
    return `Get a Teacher with ID of ${teacherId}`;
  }
}
