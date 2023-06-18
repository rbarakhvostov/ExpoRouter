import { Link } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

export default function Page() {
  return (
    <View style={styles.container}>
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
      <Link
        style={[styles.link, styles.link_tabs]}
        href='/tabs'
      >
        open Page with Tabs
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  link: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffc8dd',
  },
  link_tabs: {
    color: '#9575de',
  }
})
