import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { TypeOrmModule } from "@nestjs/typeorm"
  ;

@Module({
  imports: [CoursesModule, TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "docker",
    database: "postgres",
    autoLoadEntities: true,
    syncronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
