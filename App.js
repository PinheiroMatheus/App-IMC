import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native";

export default function App(){

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18){
      alert('Você está abaixo do peso!' + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9){
      alert('Peso ideal! ' + imc.toFixed(2))
    } else if (imc >= 24.9 && imc < 34.9){
      alert('Levemente acima do peso! ' + imc.toFixed(2))
    } 
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}> Calcule seu IMC </Text>

      <TextInput
      style={styles.input}
      value={peso}
      onChangeText={ (peso) => setPeso(peso) }
      placeholder="Peso (Kg)"
      keyboardType="numeric"
      />

      <TextInput
      style={styles.input}
      value={altura}
      onChangeText={ (altura) => setAltura(altura) }
      placeholder="Altura (Cm)"
      keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  title:{
    textAlign: 'center',
    marginVertical: 100,
    fontSize: 30,
    fontWeight: "bold"
  },
  input:{
    backgroundColor: 'lightgray',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: 'black',
    fontSize: 23,
    fontWeight: "bold"
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41Aef4',
    padding: 10,
    borderRadius: 10
  },
  buttonText:{
    color: 'white',
    fontSize: 25,
    fontWeight: "bold"
  }
});