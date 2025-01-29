import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const TaskInput = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    if (title.trim()) {
      onAddTask(title);
      setTitle("");
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter Task Title"
        value={title}
        onChangeText={setTitle}
      />
      <Button color="#FF7043" title="Add Task" onPress={handleAddTask} disabled={!title.trim()} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: "#FFCA28",
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginRight: 8,
  }
});

export default TaskInput;
