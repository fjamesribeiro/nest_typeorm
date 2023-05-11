import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

    @Get()
    findAll(){
        return "Buscandoooooooooooooooooo";
    }

    @Get(":id")
    findOne(@Param() params){
        return `Curso ${params.id}`;
    }

    @Post()
    create(@Body("nome") body){
        return body;
    }

}
