import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
});
