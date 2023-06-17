import { useRouter, useSearchParams } from "expo-router"
import { Text, View, Button } from "react-native"

export default profile = () => {
  const router = useRouter()
  const { name, surname } = useSearchParams()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{`${name} ${surname}`}</Text>
      <Button title='Go back' onPress={() => router.back()}/>
    </View>
  )
}
