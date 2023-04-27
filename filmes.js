import { Button, Image, Text, View } from "react-native";
import styles from './style.js';

export default function Filme(props){
    const urlBase = "https://api.otaviolube.com"
    const urlAPI = props.movie.poster.data.attributes.url
    const urlIMG = urlBase + urlAPI
    return(
        <View style={styles.bloco}>
            <Text style={styles.title}>{props.movie.titulo} </Text>
            <Text style={styles.subtitle}>{props.movie.subtitulo} </Text>

            <View style={styles.blocoIMG}>
                <Image style={styles.img} source={{uri: urlIMG}}/>
            </View>            
            
            <Text style={styles.sinopse}>Sinopse: {'\n'}{props.movie.sinopse}</Text>
            <Button style={styles.btn} color="black" title="comprar"/>
        </View>
    )
}