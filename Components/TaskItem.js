import React from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const TaskItem = ({ task, onToggleStatus, onDeleteTask }) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={[styles.taskTitle, task.status === "done" && styles.completed]}>
        {task.title}
      </Text>
      <Switch
        value={task.status === "done"}
        onValueChange={() => onToggleStatus(task.id)}
        thumbColor={task.status === "done" ? "green" : "#f4f3f4"}
        trackColor={{ false: "#f5a49d", true: "#a2e8b4" }}
      />
      <TouchableOpacity onPress={() => onDeleteTask(task.id)}>
        <Icon name="delete" color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#cccccc",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#cccccc",
    shadowColor: "#000",
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    elevation: 1,
  },
  taskTitle: {
    flex: 1,
    fontSize: 16,
  },
  completed: {
    color: "green",
  },
});

export default TaskItem;
