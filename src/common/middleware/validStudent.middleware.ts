import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

import { students } from '../../student/db';

@Injectable()
export class ValidStudentMiddleware implements NestMiddleware {
    // Middleware needs the 'use' method
    use(req: Request, res: Response, next: NextFunction) {
        console.log("Valid Student middleware was called!");
        const studentId = req.params.studentId;
        // Check if a student exists using 'some' method (it will return boolean, hence we know the existence is tru or false)
        const studentExists = students.some(student => {
            return student.id === studentId;
        });
        if (!studentExists) {
            throw new HttpException("The Student not found!", 400);
        }
        // Pass to Controller (Middleware -> Controller)
        next();
    }
}
