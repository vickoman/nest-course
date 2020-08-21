import { Controller, Get, Param, Body, Post, Patch, Delete, Query } from '@nestjs/common';
import { CoffeeService } from 'src/coffees/coffees.service';
import { CreateCoffeeDTO } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(
        private readonly coffeeService: CoffeeService,
    ) {}
    /**
     * Get all Coffees
     */
    @Get("")
    findAll(
        // @Query() paginationQuery
    ) {
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
    create(@Body() createCoffeeDTO: CreateCoffeeDTO) {
        return this.coffeeService.create(createCoffeeDTO);
    }

    /**
     *
     * @param id
     * @param body
     *  Patch it's use to update partial
     */
    @Patch(":id")
    update(@Param("id") id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeeService.update(id, updateCoffeeDto);
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
