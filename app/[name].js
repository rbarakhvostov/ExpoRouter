import { useRouter, useSearchParams } from "expo-router"
import { Text, View, Button } from "react-native"

export default id = () => {
  const router = useRouter()
  const { name } = useSearchParams()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{`name: ${name}`}</Text>
      <Button title='Go back' onPress={() => router.back()}/>
    </View>
  )
}