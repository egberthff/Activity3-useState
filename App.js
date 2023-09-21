import React, { useState } from 'react';
import { View, Button, StyleSheet,Text } from 'react-native';
import AddSubtractApp from './otherSrc/counter.jsx';
import  TogglePicturesApp from './otherSrc/flashlight.jsx';



export default function App() {
  const [showButtons, setShowButtons] = useState();
  const [component, setComponent] = useState(null);
   
  const ButtonFlashlight = () => {
    setShowButtons(false);
    setComponent('flashlight');
    
   }
     
   const ButtonCounter = () => {
    setShowButtons(false);
    setComponent('counter');
    
   }

   const ShowButtons = () => {
    setComponent(null);
  };
    
 return (
    <View style={styles.container}>
    {component === 'flashlight' && <TogglePicturesApp showButtons={ShowButtons}/>}
    {component === 'counter' && <AddSubtractApp showButtons={ShowButtons}/>}
     {!component && (
      <>
        <View style={styles.buttonContaier}> 
          <Button title="Flashlight" onPress={ButtonFlashlight} />
        </View>
        <View style={styles.buttonContaier}>  
          <Button title="Counter" onPress={ButtonCounter}/>
        </View>
      </>
    )}
  </View>
 );
 };
   
   const styles = StyleSheet.create({
     container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
       flexDirection: 'row',
       width: 300,
       height: 700,
       backgroundColor: 'red',
      },

      buttonContaier:{
        
        margin: 50,
        width: 150,
        height: 15,
        marginBottom: 700

      }
      
    });

     