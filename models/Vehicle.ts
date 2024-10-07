import { Transmission } from "@/enum/transmission";
import { Fuel } from "@/enum/fuel";
import { Direction } from "@/enum/direction";

class Manufacter {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Type {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}

export default class Vehicle {
    public manufacter: Manufacter;
    public model: string;
    public fabrication_year: number;
    public kilometers: number;
    public day_price: number;
    public plate: string;
    public description: string;
    public version: string;
    public transmission: Transmission;
    public doors: number;
    public fuel: Fuel;
    public direction: Direction;
    public type: Type;
    public standard_optional_items: string;

    constructor(
        manufacter: Manufacter,
        model: string,
        fabrication_year: number,
        kilometers: number,
        day_price: number,
        plate: string,
        description: string,
        version: string,
        transmission: Transmission,
        doors: number,
        fuel: Fuel,
        direction: Direction,
        type: Type,
        standard_optional_items: string
    ) {
        this.manufacter = manufacter;
        this.model = model;
        this.fabrication_year = fabrication_year;
        this.kilometers = kilometers;
        this.day_price = day_price;
        this.plate = plate;
        this.description = description;
        this.version = version;
        this.transmission = transmission;
        this.doors = doors;
        this.fuel = fuel;
        this.direction = direction;
        this.type = type;
        this.standard_optional_items = standard_optional_items;
    }
}