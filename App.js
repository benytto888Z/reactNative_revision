import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  function goalinputHandler(enteredText) {
    setNewGoal(enteredText);
  }
  function addGoalHandler() {
    //setCourseGoals([...courseGoals,newGoal])
    setCourseGoals((prevState) => [...prevState, {text:newGoal, id:Math.random().toString()}]);
  }

  function editGoal(goalId) {
    Alert.alert(goalId);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!!!"
          onChangeText={goalinputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={(itemData) => {
            
            return (
              <View style={styles.goalContainer} key={itemData.item.id}>
                <Text style={styles.textGoal}>{itemData.item.text}</Text>
                <View style={styles.actionBtns}>
                  <Feather
                    name="edit"
                    size={24}
                    color="black"
                    onPress={() => editGoal(itemData.item.key)}
                  />
                  <AntDesign name="delete" size={24} color="black" />
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    //flexDirection:'column',
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#CCEA8D",
  },
  inputContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#A6BC09",
    marginBottom: 24,
    paddingHorizontal: 20,
    borderWidth: 3,
    borderColor: "#005148",
    borderRadius: 9,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
    backgroundColor: "#fff",
    textAlign: "center",
    borderRadius: 8,
  },

  goalsContainer: {
    flex: 5,
  },
  goalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    marginBottom: 6,
    color: "white",
  },
  actionBtns: {
    flexDirection: "row",
  },
  textGoal: {
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#019587",
    borderRadius: 8,
    padding: 8,
    width: "80%",
  },
});
