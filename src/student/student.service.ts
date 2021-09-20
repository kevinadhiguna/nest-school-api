import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { students } from './db';
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto } from './dto/student.dto';

@Injectable()
export class StudentService {
  private students = students;

  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }

  getStudentById(studentId: string): FindStudentResponseDto {
    return this.students.find(student => {
      return student.id === studentId;
    });
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    let newStudent = {
      id: uuid(),
      ...payload,
    };
    // Add 'newStudent' to database (using push method to add it to an object)
    this.students.push(newStudent);
    return newStudent;
  }
}
