import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import ModuleVehicle from "@/api/vehicle";
import Vehicle from "@/models/Vehicle";

export default function HomeUser() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await ModuleVehicle.get();
        console.log('Resposta da API:', response);
        setVehicles(response);
      } catch (error) {
        console.error("Erro ao buscar veículos:", error);
        if (error.response) {
          console.error("Resposta do servidor:", error.response.data);
        }
      }
    };

    fetchVehicles();
  }, []);

  const renderVehicle = ({ item }: { item: Vehicle }) => (
    <View style={styles.vehicleContainer}>
      <Text style={styles.vehicleText}>Modelo: {item.model}</Text>
      <Text style={styles.vehicleText}>Fabricante: {item.manufacter.name}</Text>
      <Text style={styles.vehicleText}>Ano: {item.fabrication_year}</Text>
      <Text style={styles.vehicleText}>Preço por dia: {item.day_price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veículos Disponíveis para Locação</Text>
      {vehicles.length === 0 ? (
        <Text style={styles.noVehiclesText}>Não há veículos disponíveis no momento.</Text>
      ) : (
        <FlatList
          data={vehicles}
          renderItem={renderVehicle}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",  // Centralizar o texto
  },
  vehicleContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  vehicleText: {
    fontSize: 16,
  },
  noVehiclesText: {
    fontSize: 18,
    color: "#888",
    textAlign: "center",
    marginTop: 20,
  },
});