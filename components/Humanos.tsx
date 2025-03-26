import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { supabase } from '../supabase';

export default function Humanos() {
  const [humanos, setHumanos] = useState<any[]>([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    obtenerTareas();
  }, []);

  const obtenerTareas = async () => {
    const { data, error } = await supabase.from('clientes').select('*');
    if (error) {
      console.error('Error al obtener tareas:', error);
    } else {
        setHumanos(data || []);
    }
    setCargando(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Humanos</Text>
      {cargando ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <FlatList
          data={humanos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.texto}>{item.nombre}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 40 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  item: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  texto: { fontSize: 18 },
});
