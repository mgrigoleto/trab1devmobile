import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Filme from './src/filmes/filmes';

export default function App() {

  let [filmes, setFilmes] = useState([]);

  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(function(){
    fetch(baseURL)
    .then(data => data.json())
    .then(objeto => {
      setFilmes(objeto.data)
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nossos filmes</Text>
      {filmes.length > 0 ? filmes.map(filme => <Filme movie={filme.attributes}/> ) : <Text>Carregando...</Text>}
      
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    color:'white',
    fontWeight:'bold',
    fontSize:'30px',
    paddingTop:'15px'
  }
});
