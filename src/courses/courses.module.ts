import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CoursesService } from './courses.service';

@Module({})
export class CoursesModule {
    imports: [TypeOrm]
    controllers: [CoursesController]
    providers: [CoursesService]
}
