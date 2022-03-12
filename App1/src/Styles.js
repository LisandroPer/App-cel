//DE ACA SE IMPORTARÁN LOS ESTILOS.
import { StyleSheet } from "react-native"; //NOS PERMITE MODULARIZAR LOS ESTILOS. ES MUY UNOPIBRATEB

export const styles = StyleSheet.create({ //ESTILOS: Creo esta constante con la función create
    container: {  
        flex: 1, //Indica que ocupará todo el espacio disponible. 
    },
    
    containerInput: {//estilos del contenedor
        padding:25,
        justifyContent: 'space-between', //Se acomodaran en los espacios quie tengan.
        flexDirection: "row",
        alignItems:"center",
    },

    
    
    containerList: {
        backgroundColor: "blue",
        padding: 25,
        margin: 22,
        borderRadius: 10
    },

    textList: {
        fontSize: 18,
        color: "white", 
    },

   
  })