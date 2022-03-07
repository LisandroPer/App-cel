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
    },

    modalContainerContent: {
        width: "80%",
        height: "40%",
        backgroundColor: "white",
        borderRadius: 4,
        elevation: 5, //eleva la card
        justifyContent: "center",
        marginLeft: 40, //LO CORRO DESDE LA IZQUIERDA.
        marginTop: 150,
        shadowOffset: {width: 1, height: 1},
        shadowColor: "black",
        shadowOpacity: 0.2,

    },

    modalTitle:{
        fontSize:14,
        color:"red",
        marginBottom: 10,
        padding: 25
    },

    modalContent:{
        padding: 25,
    },

    modalButton:{
       marginTop: 10,
       marginBottom: 10,
       padding: 50
    },
    
    modalContentText:{
        fontSize: 18,
        color: "red",
        fontWeight:"bold",
        marginVertical: 15
    }
  })