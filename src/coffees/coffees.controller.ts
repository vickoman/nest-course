import { Controller, Get, Param, Body, Post, Patch, Delete, Query } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    /**
     * Get all Coffees
     */
    @Get("")
    findAll(@Query() paginationQuery) {
        const { limit, offset } = paginationQuery;
        return `this action return all coffees Limit: ${limit} and Offset: ${offset}`;
    }

    /**
     *
     * @param id
     * Get Cooffee by id
     */
    @Get(":id")
    findOne(@Param('id') id: string ) {
        return `this action return #${id} coffee`;
    }

    /**
     *
     * @param body
     * Create new Coffee
     */
    @Post()
    create(@Body() body) {
        return body;
    }

    /**
     *
     * @param id
     * @param body
     *  Patch it's use to update partial
     */
    @Patch(":id")
    update(@Param("id") id: string, @Body() body) {
        return `this action updates #${id} coffee`;
    }

    /**
     *
     * @param id
     * Delete coffee
     */
    @Delete(":id")
    remove(@Param("id") id: string) {
        return `this actions remove #${id} coffee`;
    }
}
