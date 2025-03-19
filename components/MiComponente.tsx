import {View, Text, StyleSheet} from 'react-native';

export default function MiComponente(): JSX.Element{
    return(
        <View style={estilos.container}>
            <Text style={estilos.text}> Hola Soy un componente propio</Text>
        </View>
    );
}
 const estilos = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:"#f0f0f0",
    },
    text:{
        fontSize:20,
        color:"black",
    }
});