import { Stack } from "expo-router"
import { AntDesign } from '@expo/vector-icons'
import { Alert } from "react-native"

export default () => (
  <Stack
    screenOptions={{
      headerTintColor: '#ffc8dd',
      headerStyle: { backgroundColor: '#000000' },
      headerTitleStyle: { fontWeight: 'bold' },
      headerRight: () => (
        <AntDesign
          name="infocirlceo"
          size={24} color="#ffffff"
          onPress={() => Alert.alert('info')}
        />
      )
    }}
  >
    <Stack.Screen name="index" options={{ title: 'Home' }} />
  </Stack>
)
