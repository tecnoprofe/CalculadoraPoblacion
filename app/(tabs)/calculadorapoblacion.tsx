
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert, ImageBackground, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function CalculadoraPoblacion(): JSX.Element {
    const [population, setPopulation] = useState('');
    const [marginError, setMarginError] = useState('');
    const [confidenceLevel, setConfidenceLevel] = useState('');
    const [sampleSize, setSampleSize] = useState<number | null>(null);

    const calculateSampleSize = () => {
        const N = parseFloat(population);
        const e = parseFloat(marginError) / 100;
        const z = parseFloat(confidenceLevel);

        if (isNaN(N) || isNaN(e) || isNaN(z)) {
            Alert.alert('Error', 'Por favor, ingresa valores válidos.');
            return;
        }

        const numerator = N * Math.pow(z, 2) * 0.25;
        const denominator = Math.pow(e, 2) * (N - 1) + Math.pow(z, 2) * 0.25;
        const size = numerator / denominator;

        setSampleSize(Math.ceil(size));
    };

    return (
        <ImageBackground
            source={{ uri: 'https://i.pinimg.com/736x/91/88/10/918810299e265a03e5d20ddb49afb8c8.jpg' }} // Reemplaza con la URL de tu imagen de fondo
            style={estilos.banner}
            imageStyle={estilos.imageBackground}
        >
            <View style={estilos.overlay}>
                <Text style={estilos.title}>Calculadora de Tamaño de Muestra Finita</Text>
                <Text style={estilos.subtitle}>Ingresa los datos para calcular el tamaño de la muestra</Text>

                <TextInput
                    style={estilos.input}
                    placeholder="Tamaño de la población (N)"
                    keyboardType="numeric"
                    value={population}
                    onChangeText={setPopulation}
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Margen de error (e.g., 5 para 5%)"
                    keyboardType="numeric"
                    value={marginError}
                    onChangeText={setMarginError}
                />
                <TextInput
                    style={estilos.input}
                    placeholder="Nivel de confianza (e.g., 1.96 para 95%)"
                    keyboardType="numeric"
                    value={confidenceLevel}
                    onChangeText={setConfidenceLevel}
                />

                <Button title="Calcular" onPress={calculateSampleSize} />

                {sampleSize !== null && (
                    <Text style={estilos.result}>Tamaño de la muestra: {sampleSize}</Text>
                )}
            </View>
        </ImageBackground>
    );
}

const estilos = StyleSheet.create({
    banner: {
        width: width,
        height: 400, // Ajusta la altura para acomodar la calculadora
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageBackground: {
        borderRadius: 10,
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '90%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
        marginTop: 10,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
        marginBottom: 10,
        width: '100%',
    },
    result: {
        fontSize: 18,
        color: '#fff',
        marginTop: 20,
        fontWeight: 'bold',
    },
});