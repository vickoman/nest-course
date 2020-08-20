import { Injectable } from '@nestjs/common';
import { Coffee } from 'src/coffees/entities/coffee.entity';

@Injectable()
export class CooffeeService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: "Shipwreck Roast",
            brand: "Buddy Brew",
            flavors: ["chocolate", "vanilla"],
        },
    ];

    findAll() {
        return this.coffees;
    }

    findOne(id: string) {
        return this.coffees.find(item => item.id === +id)
    }

    update(id: string, updateCoffeeDTO: any) {
        const existing = this.findOne(id);
        if (existing) {
            // Update the existing entity
        }
    }

    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex(item =>  item.id === +id)
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }

    create(coffee:any) {
        this.coffees.push(coffee);
        return coffee;
    }


}
