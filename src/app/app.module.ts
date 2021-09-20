import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';
import { StudentTeacherController } from '../teacher/student.controller';
import { TeacherController } from '../teacher/teacher.controller';
import { StudentService } from '../student/student.service';

@Module({
  imports: [],
  controllers: [StudentController, StudentTeacherController, TeacherController],
  providers: [StudentService],
})
export class AppModule {}
