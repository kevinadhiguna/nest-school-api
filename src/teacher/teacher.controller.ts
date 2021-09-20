import { Controller, Get, Param } from '@nestjs/common';

import { FindTeacherResponseDto } from '../teacher/dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  // Handle GET requests
  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return this.teacherService.getTeachers();
  }

  @Get('/:teacherId') // <- Append to URL, therefore it will be : '/teachers/:teacherId'
  getTeacherById(
    @Param('teacherId') teacherId: string,
  ): FindTeacherResponseDto {
    return this.teacherService.getTeacherById(teacherId);
  }
}
