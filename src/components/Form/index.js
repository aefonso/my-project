import React, {useState} from "react";
import {View, TextInput, Text, Button} from 'react-native';
import ResultImc from "./ResultImc";

export default function Form(){

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState("preencha o peso e altura")
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")

  return(
    <View>
      <View>

        <Text>Altura</Text>
        <TextInput
        placeholder="ex. 1.75"
        KeyboardType="numeric"
        />

        <Text>Peso</Text>
        <TextInput
        placeholder="ex. 80.475"
        KeyboardType="numeric"
        />
        <Button title="Calcular IMC"/>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc}/>
    </View>
  );
}