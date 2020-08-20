import { Controller, Get, Param, Body, Post, Patch, Delete, Query } from '@nestjs/common';
import { CooffeeService } from 'src/cooffe-service/cooffe.service';

@Controller('coffees')
export class CoffeesController {
    constructor(
        private readonly coffeeService: CooffeeService,
    ) {}
    /**
     * Get all Coffees
     */
    @Get("")
    findAll(@Query() paginationQuery) {
        // const { limit, offset } = paginationQuery;
        return this.coffeeService.findAll();
    }

    /**
     *
     * @param id
     * Get Cooffee by id
     */
    @Get(":id")
    findOne(@Param('id') id: string ) {
        return this.coffeeService.findOne(id);
    }

    /**
     *
     * @param body
     * Create new Coffee
     */
    @Post()
    create(@Body() body) {
        return this.coffeeService.create(body);
    }

    /**
     *
     * @param id
     * @param body
     *  Patch it's use to update partial
     */
    @Patch(":id")
    update(@Param("id") id: string, @Body() body) {
        return this.coffeeService.update(id, body);
    }

    /**
     *
     * @param id
     * Delete coffee
     */
    @Delete(":id")
    remove(@Param("id") id: string) {
        return this.coffeeService.remove(id);
    }
}
