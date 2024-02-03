import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { TodoCounter } from "./TodoCounter";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";
import { TodoItems } from "./TodoItems";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>

      <TodoCount tipo={1} total={50} />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        <TodoItems />
        <TodoItems />
        <TodoItems />
        <TodoItems />
        <TodoItems />
      </TodoList>
        Hacer un componente Boton
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

function TodoCount(props) {
  return (
    <h1>
      {props.tipo}--{props.total}
    </h1>
  );
}
