import React from "react";
import { TextInput, View, text } from "react-native";
import { styles } from "./styles";

const Input = ( { handelOnChangeText, value, placeholder, ...props} ) =>{ //Recibirá todas las propiedades del componente que lo enviará
    return(

    <View style={styles.container}>
        <TextInput
            placeholder={placeholder} //visuaqliza donde se debe escribir.
            autoCorrect={false} //Que no funcione el autocorrector
            autoFocus={true} //Sirve para que se enfoque al principio el input.
            style={styles.textInput} /*Llamo a los estilos del textinput*/
            onChangeText={(text)=>handelOnChangeText(text)} //Llamo a la función que adquiere el valor del imput.
            value={value}//Es el valor del Estado. TOMARÁ EL VALOR SETEADO EN LA FUNCIÓN handelOnchangeTextInput.
      />
    </View>  
    );
}

export default Input;