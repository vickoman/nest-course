import { Controller, Get, Param, Body, Post, HttpCode, HttpStatus, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(@Res() response) {
        response.status(200).send("this actions returns all coffees");
    }

    @Get(":id")
    findOne(@Param('id') id: string ) {
        return `this action return #${id} coffee`;
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body) {
        return body;
    }
}
