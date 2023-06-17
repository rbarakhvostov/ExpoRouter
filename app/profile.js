import { useRouter, useSearchParams } from "expo-router"
import { Text, View, Button } from "react-native"
import { Stack } from "expo-router"

export default profile = () => {
  const router = useRouter()
  const { name, surname } = useSearchParams()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Stack.Screen
        options={{
          headerTintColor: '#000000',
          headerStyle: { backgroundColor: '#ffc8dd' },
          headerTitleStyle: { fontWeight: 'bold' },
          title: `${name} ${surname}`
        }}
      />
      <Text>{`${name} ${surname}`}</Text>
      <Button title='Go back' onPress={() => router.back()}/>
    </View>
  )
}
