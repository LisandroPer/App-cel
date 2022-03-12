import React from "react";
import { View, Button, Text, Modal } from "react-native";
import { styles } from "./styles";
const CustomModal = ( {description, selectedItem, buttonText, onHandleDeleteItem, visible} ) =>{
    return(
        <Modal 
          animationType='slide'
          transparent={true}
          visible={visible}
          onRequestClose={()=>{
        
          }}
        >
            <View style={styles.modalContainerContent}> 
                  <View style={styles.modalContent}>
                      <Text>{description}</Text>
                      <Text style={styles.modalContentText}>{selectedItem.value}</Text>
                  </View>
                  <View style={styles.modalButton}>
                      <Button 
                        title={buttonText}
                        color="red"
                        onPress={()=>onHandleDeleteItem(selectedItem.id)}
                      />
                  </View>
            </View>
        </Modal>
    )
}

export default CustomModal;