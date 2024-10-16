import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from 'expo-router'

const Register = () => {
    const navigaion =useNavigation()

    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')

  return (
    <View style={styles.container}>

    <Text style={{fontSize:30,fontWeight:'600'}}>Register</Text>
    <View style={{marginTop:10}}/>

    <TextInput
   onChangeText={(val)=>setUserName(val)}
   value={userName}
   placeholder='User name'

   style={{borderRadius:10,borderWidth:2,borderColor:'gray',width:350,height:40,
    fontSize:15,
    paddingHorizontal:10
   }}

    />
    <View style={{marginTop:10}}/>

    <TextInput
   onChangeText={(val)=>setEmail(val)}
   value={email}
   placeholder='email'

   style={{borderRadius:10,borderWidth:2,borderColor:'gray',width:350,height:40,
    fontSize:15,
    paddingHorizontal:10
   }}

    />
    <View style={{marginTop:10}}/>
     <TextInput
   onChangeText={(val)=>setPassword(val)}
   value={password}
   placeholder='password'
   style={{borderRadius:10,borderWidth:2,borderColor:'gray',width:350,height:40,
    fontSize:15,
    paddingHorizontal:10
   }}

    />
    <View style={{marginTop:10}}/>

    <TouchableOpacity
    onPress={()=>{}}
    style={{backgroundColor:'green',width:350,height:56,justifyContent:'center',alignItems:'center',borderRadius:30}}
    >
        <Text
        style={{fontSize:20,
        fontWeight:'600',
        color:'#fff'
        }}
        >Register</Text>
    </TouchableOpacity>

    <View style={{marginTop:5}}/>
    <TouchableOpacity onPress={()=>navigaion.navigate('index')}>
    <Text>Go to Login</Text>

    </TouchableOpacity>

    
      
    </View>
  )
}

export default Register

const styles = StyleSheet.create({

    container:{
        flex:1,
        padding:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    heading:{
        fontSize:25,
        fontWeight:600,
        // color:'rgba(255,255,255,1)'
    }

})