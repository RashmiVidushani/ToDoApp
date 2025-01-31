import React from "react";
import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

const TaskItem = ({ task, onToggleStatus, onDeleteTask }) => {
  return (
    <View style={styles.taskContainer}>
      <View style={styles.TaskItemContainer}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Text style={[styles.statusDesc, task.status === "done" && styles.completed || styles.due]}>Status : {task.status}</Text>
      </View>
      <Switch
        value={task.status === "done"}
        onValueChange={() => onToggleStatus(task.id)}
        thumbColor={task.status === "done" ? "green" : "#f4f3f4"}
        trackColor={{ false: "#f5a49d", true: "#a2e8b4" }}
      />
      <TouchableOpacity onPress={() => onDeleteTask(task.id)}>
        <Icon name="delete" color="#FF7043" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    textTransform: "capitalize",
    flex: 1,
    fontSize: 16,
  },
  completed: {
    color: "green",
  },
  statusDesc: {
    fontSize: 12,
    color: "#666",
    textTransform: "capitalize",
  },
  due: {
    color: "red",
  },
  TaskItemContainer: {
    margin: 5,
    flex: 1,
  },
});

export default TaskItem;
