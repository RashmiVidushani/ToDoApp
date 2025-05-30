import React, { useState } from "react";
import { View, FlatList, StyleSheet, Text, StatusBar, statusBarStyle } from "react-native";
import TaskInput from "./Components/TaskInput";
import TaskItem from "./Components/TaskItem";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const newTask = {
      id: Math.random().toString(),
      title,
      status: "due",
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  const toggleTaskStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: task.status === "due" ? "done" : "due" }
          : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <StatusBar
          animated={true}
          backgroundColor="#FF7043"
          barStyle={statusBarStyle}
        />
      <Text style={styles.header}>To-Do Application</Text>
      
      <TaskInput onAddTask={addTask} />
      <Text style={styles.subTitle}>Task List ({tasks.length})</Text>
      <View style={styles.tasksListContainer}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggleStatus={toggleTaskStatus}
            onDeleteTask={deleteTask}
          />
        )}
      />
      </View>  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#FFF8E1",
  },
  header: {
    color: "#FF7043",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  subTitle: {
    color: "#FF7043",
    fontSize: 16,
    margin: 10,
  },
  tasksListContainer:{
    marginBottom: 50,
    padding: 10,
    borderRadius: 10,
  }
});

export default App;
