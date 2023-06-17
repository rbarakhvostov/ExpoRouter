import { Stack, useRouter } from "expo-router"
import { AntDesign } from '@expo/vector-icons'

export default () => {
 const router = useRouter()

  return (
    <Stack
      screenOptions={{
        headerTintColor: '#ffc8dd',
        headerStyle: { backgroundColor: '#000000' },
        headerTitleStyle: { fontWeight: 'bold' },
        headerRight: () => (
          <AntDesign
            name="infocirlceo"
            size={24} color="#ffffff"
            onPress={() => router.push('/modal')}
          />
        )
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
    </Stack>
  )
}
