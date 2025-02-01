import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const NotFoundScreen = () => {
  return (
    <>
    
    <Stack.Screen options={{title : 'Oops not Found'}} />

    <View style={styles.container}>
      <Link href='/(tabs)' style={styles.button}>Click to go home </Link>  
     </View>
    </>
  )
}

export default NotFoundScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems:'center',
    justifyContent: 'center'
  },
  button : {
    fontSize: 20,
    textDecorationLine: 'underline',
    color:'#fff'
  }
});