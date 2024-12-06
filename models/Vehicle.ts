import CompanyModel from "./Company";

export enum Transmission {
    MANUAL = "Manual",
    AUTOMATIC = "Automático",
    SEMI_AUTOMATIC = "Semi-automático"
}

export enum Direction {
    MECHANICAL = "Mecânica",
    HYDRAULIC = "Hidráulica",
    ELECTRICAL = "Elétrica",
    ELECTROHYDRAULIC = "Eletro-hidráulica"
}

export enum Fuel {
    GASOLINE = "Gasolina",
    ETHANOL = "Etanol",
    FLEX = "Flex",
    DIESEL = "Diesel",
    CNG = "GNV",
    ELETRIC = "Elétrico"
}

export default class VehicleModel {
    public brand: string;
    public model: string;
    public year: string;
    public color: string;
    public price: string;
    public available: boolean;
    public transmission: Transmission;
    public direction: Direction;
    public fuel: Fuel;
    public kilometers: string;
    public plate: string;
    public doors: string;
    public passengers: string;
    public manufacter: string;
    public company: CompanyModel;
    public images: string[];

    constructor(brand: string, model: string, year: string, color: string, price: string, available: boolean, transmission: Transmission, direction: Direction, fuel: Fuel, kilometers: string, plate: string, doors: string, passengers: string, manufacter: string, company: CompanyModel, images: string[]) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.available = available;
        this.transmission = transmission;
        this.direction = direction;
        this.fuel = fuel;
        this.kilometers = kilometers;
        this.plate = plate;
        this.doors = doors;
        this.passengers = passengers;
        this.manufacter = manufacter;
        this.company = company;
        this.images = images;
    }
}