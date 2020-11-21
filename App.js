/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState }from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Switch,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const testProps =(id)=> {
  return {testID: id, accessibilityLabel: id};
}

const App: () => React$Node = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [value, onChangeText] = useState('');
  const [flow, setFlow] = useState('');
  const [congrats, onChangeCongrats] = useState('');


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{alignItems:'center'}}
          style={styles.container}
          >
         <TouchableOpacity
          style={styles.btn}
         onPress={()=>setFlow(flow+" Button pressed")}
         {...testProps('firstBtn')}
         >
           <Text style={{color:'#0098CC'}}>
             Button To be tested
           </Text>
         </TouchableOpacity>
         <Switch
         {...testProps('firstSwitch')}
         style={styles.switch}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={()=>{
          toggleSwitch()
          setFlow(flow+"\n Toggle switched")}}
        value={isEnabled}
      />
       <TextInput
        {...testProps('firstTxtInput')}
      style={styles.txtInput}
      onChangeText={text => {
        
        onChangeText(text)
        setFlow(flow+"\n Text Input value changed")
      }}
      value={value}
    />
    <Text 
      {...testProps('firstTxt')}
      style={styles.txt}>
        firstTxt
    </Text>
      <TouchableOpacity 
       {...testProps('flow')}
       onPress={()=>setFlow(flow+"\n Text found")}
      >
      <Text  
    >
        {flow}
      </Text>
      </TouchableOpacity>
      <TextInput
        {...testProps('congrats')}
      style={styles.txtInput}
      onChangeText={text => {
        
        onChangeCongrats(text)
      }}
      value={congrats}
    />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    height:'100%',
   
  },
  btn:{
   marginTop:'20%' 
  },
  switch:{
    marginTop:'5%' 
   },
   txtInput:{
     marginTop:'5%',
     height: 40,
    borderColor: 'gray',
    borderWidth: 0.5
   },
   txt:{
     marginTop:'5%'
   },

});

export default App;
