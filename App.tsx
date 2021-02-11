import React, { PureComponent } from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import { View } from "react-native";
import Header from "./app/globals/components/Header/Header";

// IMPORT COMPONENTS
import Home from "./app/components/Home/Home";
import NotesList from "./app/components/NotesList/NotesList";
import NewNote from "./app/components/NewNote/NewNote";
import LinearGradient from "react-native-linear-gradient";
import Note from "./app/components/Note/Note";

const Stack = createStackNavigator();

const AuthStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
          options={{
              headerShown: false
          }}/>
        <Stack.Screen name="NotesList" component={NotesList}
          options={{
              headerShown: false
          }}/>
        <Stack.Screen name="NewNote" component={NewNote}
          options={{
              headerShown: false
          }}/>
        <Stack.Screen name="Note" component={Note}
        options={{
            headerShown: false
        }}/>
    </Stack.Navigator>
);

class App extends PureComponent<any, any> {

  constructor(props: any) {

    super(props);

  }

  render() {

    return (
      <View style={{width: "100%", height: "100%"}}>
        <Header />
        <View style={{flex: 1}}>
          <NavigationContainer>
            <AuthStack/>
          </NavigationContainer>
        </View>
      </View>
    )
  }

}

export default App;