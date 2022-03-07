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

    textInput: {  //estilos del text input.
      borderColor: "black", 
      borderBottomWidth: 1, //que hhaya un borde abajo
      marginBottom: 10, //que el margin de abajo sea de 40
      height: 40,
      width: "70%", //es el largo de la barra bootom.
      fontSize: 14 
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
    }
  })