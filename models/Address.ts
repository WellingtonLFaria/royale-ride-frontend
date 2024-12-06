export default class Address {
    public street: string;
    public number: string;
    public neighborhood: string;
    public city: string;
    public state: string;
    public postalCode: string;

    constructor(street: string, number: string, neighborhood: string, city: string, state: string, postalCode: string) {
        this.street = street;
        this.number = number;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
    }
}