import { Controller, Get, Param } from '@nestjs/common';

import { FindTeacherResponseDto } from '../teacher/dto/teacher.dto';

@Controller('teachers')
export class TeacherController {
  // Handle GET requests
  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return 'All Teachers';
  }

  @Get('/:teacherId') // <- Append to URL, therefore it will be : '/teachers/:teacherId'
  getTeacherById(
    @Param('teacherId') teacherId: string,
  ): FindTeacherResponseDto {
    return `Get a Teacher with ID of ${teacherId}`;
  }
}
