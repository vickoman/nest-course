import { Controller, Get, Param, Body, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get("")
    findAll() {
        return "this action return all coffees";
    }

    @Get(":id")
    findOne(@Param('id') id: string ) {
        return `this action return #${id} coffee`;
    }

    @Post()
    create(@Body() body) {
        return body;
    }
}
