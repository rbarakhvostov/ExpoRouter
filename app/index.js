import { Link } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Hello World</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
        <Link
          style={styles.link}
          href='/profile?name=Roman&surname=Barakhvostov'
        >
          open Roman's profile
        </Link>
        <Link
          style={styles.link}
          href={{
            pathname: '/profile',
            params: { name: 'Marina', surname: 'Lyukevich' }
          }}
        >
          open Marina's profile
        </Link>
        <Link
          style={styles.link}
          href='/Leonel'
          
        >
          open Leonel's profile (dynamic)
        </Link>
        <Link
          style={styles.link}
          href='/Andrés'
        >
          open Andrés' profile (dynamic)
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  link: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffc8dd',
  }
})
