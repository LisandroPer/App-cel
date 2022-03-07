import React, { useState } from 'react';
import { styles } from './Styles'; //Importo solo la variable. RECORDÁ QUE NO SE TRATA DE UN COMPONENTE, SOLO ES LA OCNSTNATE.
import { //IMPORTANTEEEEEEEEE: todos los modulos que usemos deben ser importados...
  Text,//cuadro de texto
  View,//son como los divs
  Button,//botones
  TextInput,//van los inputs
  FlatList,//para renderizar las lsitas
  TouchableOpacity, //para poder clikear los elementos de la lsita. 
  Modal
} from 'react-native';



const App = () => {
  const [text, setText] = useState("");//se setea inicialmente como un string vacío.
  const [list, setList] = useState([]);//se setea inicialmente como un array vacío.
  const [modalVisible, setModalVisible] = useState(false);//Para cambiar visibilidad del modal
  const [selectedItem, setSelectedItem] = useState({});//comenzará siendo un objeto vacío.

  const handelOnChangeTextInput = (textoIntroducido) =>{ //Función que toma el valor del input y lo setea...
    setText(textoIntroducido);
  }
  const addItem = () =>{ //FUNCION QUE AGREGA LOS INPUTS A LA LISTA.
    if(text != ""){  //señalo que el texto debe no estar vació para argegarlo.
    setList([...list, {id: list.length +1, value: text}]); //indico que a la list se agregarán 2 valores, el id(será el número basado en la cantidad de items) y el valor, string.
    setText("");//Finalmente vacío el input para que se pueda volver a escribir en el campo.
    }
  }

  const handelDeleteItem = (id) =>{ //FUNCIÓN PARA ELIMINAR UN ELEMENTO ESPECÍFICO DE LA LSITA.
    const newList = list.filter(itemList => itemList.id !== id); //Filtrará todos los items que no sean el seleccionado
    setSelectedItem({});//indico que ya no tengo ningún elemento seleccionado.
    setList(newList); //SETEARÁ LA NUEVA LISTA SIN EL ITEM FILTRADO.
    setModalVisible(!modalVisible);//Indico que el modal debe mostrarse.
  }

  const onHandleModal = (id) =>{ //El modal está oculto, aparecerá como un cuadro para eliminar el objeto seleccionado.
    setSelectedItem(list.find(itemList => itemList.id === id));
    setModalVisible(!modalVisible);// cambio visibilidad del modal
  }

  return (
    <View style={styles.container /*LLAMO A LA CONST STYLE Y DE AHÍ SELECCIONO EL CONTAINER YA QUE SE TRATA DE LOS ESTILOS DEL CONSTAINER*/}> 
     <View style={styles.containerInput /*LLAMO A LOS ESTILOS DEL CONTAINER INPUTS*/}>
      <TextInput
            placeholder='Lista de contactos' //visuaqliza donde se debe escribir.
            placeholderTextColor="blue" //será el color del placeholder
            autoComplete='off' //Para que no se autocomplete lo que escribo
            autoCorrect={false} //Que no funcione el autocorrector
            autoFocus={true} //Sirve para que se enfoque al principio el input.
            style={styles.textInput} /*Llamo a los estilos del textinput*/
            onChangeText={handelOnChangeTextInput} //Llamo a la función que adquiere el valor del imput.
            value={text}//Es el valor del Estado. TOMARÁ EL VALOR SETEADO EN LA FUNCIÓN handelOnchangeTextInput.
      />
      <Button 
         title='Add' //ACA va el nombre del btn.
         onPress={()=> addItem()} //El onpress es como el onClick
      />
    </View>  
      {/*list.length > 0 && //Indico que para renderizarse la list debe tener + de 1 elemento.
           list.map(item =>( //Renderizo todo lo que hay en la lista.
            <View style={styles.containerList}>
             <Text key={item.id key: necesaria para que react lo identifique} style={styles.textList}>{item.value}</Text>
             </View>
           ))

       ----------------EL FLATLIST DE ABAJO ES COMO ESTE CÓDIGO PERO PERMITE MÁS FUNCIONES, COMO EL SCROLL--------
       */}
       
      <View style={styles.containerList}>
        <FlatList
          data={list /*carga en data el array list que contiene la información*/}
          renderItem={ ({ item }) =>( //Accede a los items de DATA, en este caso, los items de la list
             <TouchableOpacity onPress={()=> onHandleModal(item.id)}> 
                <Text style={styles.textList}>{item.value}</Text>
             </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <Modal 
        animationType='slide'
        transparent={false}
        visible={modalVisible}
        onRequestClose={()=>{
       
        }}
      >
        <View style={styles.modalTitle}>
          <Text>Descripción</Text>  
        </View>  
        <View style={styles.modalContent}>
          <Text>Do you want to delete this item?</Text>
          <Text style={styles.modalContentText}>{selectedItem.value}</Text>
        </View>
        <View style={styles.modalButton}>
          <Button 
             title='Sí'
             color="red"
             onPress={()=> handelDeleteItem(selectedItem.id)}
          />
        </View>
      </Modal>

      <View>
        <Button 
          title='borrar'
          onPress={()=> setList([])}
        />
      </View>
 
    </View>
  );
};



export default App;
