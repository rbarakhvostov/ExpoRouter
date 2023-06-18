import { Tabs } from "expo-router"
import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons'

export default () => (
  <Tabs
    screenOptions={{
      headerTintColor: '#00dfa2',
      headerStyle: { backgroundColor: '#9575de' },
      headerTitleStyle: { fontWeight: 'bold' },
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#9575de'
    }}
  >
    <Tabs.Screen
      name='feed'
      options={{
        tabBarIcon: ({ color }) => <FontAwesome name="feed" size={24} color={color} />
      }}
    />
    <Tabs.Screen
      name='messages'
      options={{
        tabBarIcon: ({ color }) => <Entypo name="message" size={24} color={color} />
      }}
    />
    <Tabs.Screen
      name='search'
      options={{
        tabBarIcon: ({ color }) => <AntDesign name="search1" size={24} color={color} />
      }}
    />
  </Tabs>
)
