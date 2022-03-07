import React, { useState } from 'react';
import { styles } from './Styles'; //Importo solo la variable. RECORDÁ QUE NO SE TRATA DE UN COMPONENTE, SOLO ES LA OCNSTNATE.
import { //IMPORTANTEEEEEEEEE: todos los modulos que usemos deben ser importados...
  Text,
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';



const App = () => {
  const [text, setText] = useState("");//se setea inicialmente como un string vacío.
  const [list, setList] = useState([]);//se setea inicialmente como un array vacío.

  const handelOnChangeTextInput = (textoIntroducido) =>{ //Función que toma el valor del input y lo setea...
    setText(textoIntroducido);
  }
  const addItem = () =>{ //FUNCION QUE AGREGA LOS INPUTS A LA LISTA.
    setList([...list, {id: list.length +1, value: text}]); //indico que a la list se agregarán 2 valores, el id(será el número basado en la cantidad de items) y el valor, string.
    setText("");//Finalmente vacío el input para que se pueda volver a escribir en el campo.
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
      
         {list.length > 0 && //Indico que para renderizarse la list debe tener + de 1 elemento.
           list.map(item =>( //Renderizo todo lo que hay en la lista.
            <View style={styles.containerList}>
             <Text key={item.id /*key: necesaria para que react lo identifique*/} style={styles.textList}>{item.value}</Text>
             </View>
           ))
         }
      
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
