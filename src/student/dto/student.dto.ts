export class FindStudentResponseDto {
  id: string;
  studentName: string;
  teacherId: string;
}

export class StudentResponseDto {
  id: string;
  studentName: string;
  teacherId: string;
}

export class CreateStudentDto {
  studentName: string;
  teacherId: string;
}

export class UpdateStudentDto {
  studentName: string;
  teacherId: string;
}
