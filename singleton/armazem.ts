import Address from "@/models/Address";
import CompanyModel from "@/models/Company";
import UserModel from "@/models/User";
import VehicleModel, {Transmission, Direction, Fuel} from "@/models/Vehicle";

export default class MemoryDB {
    private static instance: MemoryDB;
    public companies: CompanyModel[] = [
        new CompanyModel("Mock", "12345678901234", "mock@gmail.com", "123456789", "123", new Address("Rua 1", "123", "Bairro 1", "Cidade 1", "Estado 1", "12345678")),
        new CompanyModel("Example", "98765432109876", "example@gmail.com", "987654321", "321", new Address("Rua 2", "456", "Bairro 2", "Cidade 2", "Estado 2", "87654321"))
    ];
    public users: UserModel[] = [
        new UserModel("John Doe", "12345678901", "john.doe@example.com", "123456789", "password123", new Address("Rua 3", "789", "Bairro 3", "Cidade 3", "Estado 3", "12345679"))
    ];
    public vehicles: VehicleModel[] = [
        new VehicleModel("Toyota", "Corolla", "2020", "Branco", "150", true, Transmission.AUTOMATIC, Direction.ELECTRICAL, Fuel.GASOLINE, "20000", "ABC1234", "4", "5", "Toyota", this.companies[0], ["https://example.com/image1.jpg", "https://example.com/image2.jpg", "https://example.com/image3.jpg", "https://example.com/image4.jpg"]),
        new VehicleModel("Honda", "Civic", "2019", "Preto", "140", true, Transmission.MANUAL, Direction.HYDRAULIC, Fuel.FLEX, "30000", "DEF5678", "4", "5", "Honda", this.companies[0], ["https://example.com/image2.jpg"]),
        new VehicleModel("Ford", "Focus", "2018", "Azul", "130", true, Transmission.SEMI_AUTOMATIC, Direction.MECHANICAL, Fuel.DIESEL, "40000", "GHI9012", "4", "5", "Ford", this.companies[1], ["https://example.com/image3.jpg"]),
        new VehicleModel("Chevrolet", "Cruze", "2021", "Vermelho", "160", true, Transmission.AUTOMATIC, Direction.ELECTROHYDRAULIC, Fuel.ETHANOL, "10000", "JKL3456", "4", "5", "Chevrolet", this.companies[1], ["https://example.com/image4.jpg"])
    ];
    public loggedCompany: CompanyModel | null = null;
    public loggedUser: UserModel | null = null;

    private constructor() { }
    public static getInstance(): MemoryDB {
        if (!MemoryDB.instance) {
            MemoryDB.instance = new MemoryDB();
        }
        return MemoryDB.instance;
    }
}