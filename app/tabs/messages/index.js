import { View, Text, StyleSheet } from "react-native"
import { Link } from "expo-router"

export default Messages = () => (
  <View style={styles.container}>
    <Link href="tabs/messages/Roman" style={styles.text}>messages with Roman</Link>
    <Link href="tabs/messages/Marina" style={styles.text}>messages with Marina</Link>
    <Link href="tabs/messages/Leonel" style={styles.text}>messages with Leonel</Link>
    <Link href="tabs/messages/Andrés" style={styles.text}>messages with Andrés</Link>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc8dd'
  },
  text: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff'
  }
})
