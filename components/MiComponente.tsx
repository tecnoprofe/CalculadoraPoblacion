import {View, Text, StyleSheet,FlatList} from 'react-native';

export default function MiComponente(): JSX.Element{
    const animales = [
        {id:1, nombre:"Perro"},
        {id:2, nombre:"Gato"},
        {id:3, nombre:"Loro"},
        {id:4, nombre:"Tucan"},
        {id:5, nombre:"Mono"},
        {id:6, nombre:"Leon"},
        {id:7, nombre:"Cabra"},
    ];

    return(
        <View style={estilos.container}>
            <Text style={estilos.text}>Listado de Animales</Text>
            <FlatList  
                data={animales}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                    <Text style={estilos.item}>{item.nombre}</Text>
                )}
            />
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
    },
    item:{
        fontSize:19,
        padding:4,
        margin:10,
        borderBottomWidth:2,
        borderRightWidth:2,
        borderBottomColor:"#898930",
        borderRightColor:"#898930",        
    }
});