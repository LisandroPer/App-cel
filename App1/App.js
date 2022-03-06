import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';


const App = () => {
  return (
    <View>
      <Text>Holas mundo</Text>
      <Button 
         title='Hacer click' //ACA va el nombre del btn.
         onPress={()=> alert("Hola")} //El onpress es como el onClick
      />
 
    </View>
  );
};



export default App;
