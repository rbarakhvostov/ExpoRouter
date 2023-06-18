import { useSearchParams } from "expo-router"
import { View, Text, StyleSheet } from "react-native"

export default MessageRoom = () => {
  const { name } = useSearchParams()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>message room with { name }</Text>
    </View>
  )
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc8dd'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff'
  }
})
