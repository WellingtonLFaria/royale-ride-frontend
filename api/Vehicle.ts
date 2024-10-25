import { Vehicle } from "@/models";
import { API_URL } from "./constants";

const endpoint = "api/v1/vehicles";

export function postVehicle(vehicle: Vehicle): Promise<Response> {
    const vehiclePayload = {
        manufacter: vehicle.manufacter,
        model: vehicle.model,
        fabrication_year: vehicle.fabrication_year,
        kilometers: vehicle.kilometers,
        day_price: vehicle.day_price,
        plate: vehicle.plate,
        description: vehicle.description,
        version: vehicle.version,
        transmission: vehicle.transmission,
        doors: vehicle.doors,
        fuel: vehicle.fuel,
        direction: vehicle.direction,
        type_of: {
            name: vehicle.type_of.name
        },
        standard_optional_items: vehicle.standard_optional_items
    };

    return fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(vehiclePayload)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    });
}

export function getVehicles(): Promise<Response> {
    return fetch(`${API_URL}${endpoint}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}