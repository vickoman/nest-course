import { Controller, Get, Param, Body, Post, HttpCode, HttpStatus } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get("flavors")
    findAll() {
        return "this action return all coffees";
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
