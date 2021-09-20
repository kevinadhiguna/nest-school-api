import { Injectable } from '@nestjs/common';
import { FindTeacherResponseDto } from 'src/teacher/dto/teacher.dto';
import { v4 as uuid } from 'uuid';

import { students } from './db';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';

@Injectable()
export class StudentService {
  private students = students;

  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }

  getStudentById(studentId: string): FindStudentResponseDto {
    return this.students.find((student) => {
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

  updateStudent(payload: UpdateStudentDto, studentId: string) {
    let updatedStudent: StudentResponseDto;

    // Create a new array which will be saved in db.ts
    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          id: studentId,
          ...payload,
        };
      } else {
        return student;
      }
    });
    // Define that students actually refers to the updatedStudentList
    this.students = updatedStudentList;

    return updatedStudent;
  }

  getStudentsByTeacherId(teacherId: string): FindStudentResponseDto[] {
    return this.students.filter((student) => {
      return student.teacherId;
    });
  }

  updateStudentTeacher(teacherId: string, studentId: string) {
    let updatedStudent: StudentResponseDto;

    let updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          ...student,
          teacherId: teacherId,
        };
        return updatedStudent;
      } else {
        return student;
      }
    });
    this.students = updatedStudentList;

    return updatedStudent;
  }
}
