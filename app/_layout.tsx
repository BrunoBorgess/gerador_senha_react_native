import { View, Text, StyleSheet, Image} from 'react-native'
import Slider from '@react-native-community/slider'

export default function App(){
  return(
    <View style = {styles.container}>
      <Image
          source={require('@/src/assets/logo.png')}
          style={styles.logo}
      />

      <Text style={styles.container}>20 caracteres</Text>     

      <View style={styles.container}>
        <Slider
         style={{ height: 50}}
         minimumValue={6}
         maximumValue={20}
        />

      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"F3F3F3",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom: 60
  }
})