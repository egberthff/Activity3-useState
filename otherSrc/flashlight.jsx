import React, { useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import App from '/App.js';


const TogglePicturesApp = ({ showButtons }) => {
  const [showOnFlash, setshowOnFlash] = useState();
  const [component, setComponent] = useState(null);

  const toggleImage = () => {
    setshowOnFlash(!showOnFlash);

  };

  const MainMenu = () =>{
    setComponent('main');
    onPress=({showButtons})
     
    
  }
  return (
    <View style={styles.container}>
         {component === 'main' && <App/>}
         {!component && (
            <View>
            <View>
                <View style = {styles.buttonContaier}>
       <View style = {{marginLeft: -100, width: 150}}> 
          <Button title="Flashlight" disabled = 'true' />
        </View>
        <View style = {{marginLeft: 100, width: 150}}>  
          <Button title="Counter" disabled = 'true' />
        </View>
        </View>
        <View>
      <Image 
        source={
            showOnFlash
            ? { uri: 'https://w7.pngwing.com/pngs/45/835/png-transparent-yellow-angle-font-flashlight-s-angle-flashlight-cliparts-line.png'}
            : { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWOJMVVJ41cZubDgUdKihcVgY0PDEQJPdeaQ&usqp=CAU'}
        }
        style={styles.image}
      />
      </View>
      
      <Button 
      title={showOnFlash ? "ON" : "OFF"}
      color={showOnFlash ? "green" : "gray"}
       onPress={toggleImage} />
      
      </View>
      <View style = {{marginBottom: -100}}>
      <Button title="Back" onPress={MainMenu} />
      </View>
      </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
   
  },
  buttonContaier:{
        
   // margin: 10,
    width: 150,
    height: 15,
    marginTop: -333,
   flex:1,
   flexDirection: 'row',
   

  }
});

export default TogglePicturesApp;