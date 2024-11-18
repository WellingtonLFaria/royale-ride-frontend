export class Origin {
    public country: string;
    public continent: number;

    constructor(country: string, continent: number) {
        this.country = country;
        this.continent = continent;
    }
}

export class Manufacter {
    public name: string;
    public origin: Origin;

    constructor(name: string, origin: Origin) {
        this.name = name;
        this.origin = origin;
    }
}

export class Type {
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
    public company: number | null;
    public day_price: number;
    public plate: string;
    public description: string;
    public version: string;
    public transmission: number;
    public doors: number;
    public fuel: number;
    public direction: number;
    public type_of: Type;
    public standard_optional_items: string;

    constructor(
        manufacter: Manufacter,
        model: string,
        fabrication_year: number,
        kilometers: number,
        company: number | null,
        day_price: number,
        plate: string,
        description: string,
        version: string,
        transmission: number,
        doors: number,
        fuel: number,
        direction: number,
        type_of: Type,
        standard_optional_items: string
    ) {
        this.manufacter = manufacter;
        this.model = model;
        this.fabrication_year = fabrication_year;
        this.kilometers = kilometers;
        this.company = company;
        this.day_price = day_price;
        this.plate = plate;
        this.description = description;
        this.version = version;
        this.transmission = transmission;
        this.doors = doors;
        this.fuel = fuel;
        this.direction = direction;
        this.type_of = type_of;
        this.standard_optional_items = standard_optional_items;
    }
}