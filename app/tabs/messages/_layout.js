import { Stack } from "expo-router"

export default () => {
  return (
    <Stack screenOptions={{
      headerTintColor: '#6da9e4',
      headerStyle: { backgroundColor: '#394867' },
      headerTitleStyle: { fontWeight: 'bold' },
    }}>
      <Stack.Screen name="index" options={{ title: 'messages' }}/>
      <Stack.Screen name="[name]" options={{ title: 'message room' }}/>
    </Stack>
  )
}
