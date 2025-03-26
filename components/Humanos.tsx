    import { useEffect, useState } from 'react';
    import { View, Text, FlatList, StyleSheet, ActivityIndicator,TouchableOpacity } from 'react-native';
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

    const eliminarTarea = async (id: string) => {
        const { error } = await supabase.from('clientes').delete().eq('id', id);
        if (error) {
        console.error("Error al eliminar tarea:", error);
        } else {
        // Actualiza la lista localmente
        setHumanos(humanos.filter(humanos => humanos.id !== id));
        }
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
                    <TouchableOpacity onPress={() => eliminarTarea(item.id)}>
                        <Text style={styles.botonEliminar}>🗑️</Text>
                    </TouchableOpacity>
                </View>
            )}
            />
        )}
        </View>
    );
    }

    const styles = StyleSheet.create({
    container: { padding: 20, marginTop: 10 },
    titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    item: {
        backgroundColor: '#f2f2f2',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    texto: { fontSize: 18 },
    botonEliminar: {
        color: 'red',
        fontSize: 20,
        marginLeft: 10,
    },
    });
