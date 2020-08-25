import { Resolver, Query, Args } from "@nestjs/graphql";
import { CoffeeService } from "./coffees.service";

@Resolver("Coffee")
export class CoffeeResolver {
    constructor(
        private readonly coffeeService: CoffeeService
    ) {}

    @Query("getCoffees")
    async getCoffees(
        @Args("skip") skip: number,
        @Args("take") take: number,
    ) {
        return this.coffeeService.findAll({limit: take, offset: skip});
    }

}