import {View, Text, StyleSheet,FlatList, Image} from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Perros(): JSX.Element{
    const [perros,setPerros] = useState<string[]>([]);

    useEffect(()=>{
        axios.get('https://dog.ceo/api/breed/pug/images')
        .then(response=> setPerros(response.data.message))
        .catch(error=> console.error("Error",error));        
    });

    return(
        <View style={estilos.container}>
            <Text style={estilos.text}>Listado de Animales</Text>
            <FlatList  
                data={perros}                
                renderItem={({item})=>(
                    <Image source={{uri:item}} style={estilos.imagen}/>                    
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
    },
    imagen:{
        width:120,
        height:120,
        marginBottom:10
    }
});