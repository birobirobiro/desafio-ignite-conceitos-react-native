import React, { useState } from 'react';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {

    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    const newData = [...tasks, data]

    setTasks(newData)
  }

  function handleMarkTaskAsDone(id: number) {
    const newTasks = [...tasks]

    const taskFound = newTasks.find(task => task.id === id)

    if(!taskFound) return;

    taskFound.done = !taskFound.done;

    setTasks(newTasks)
  }

  function handleRemoveTask(id: number) {

    const filteredTasks = tasks.filter(task => task.id !== id)

    setTasks(filteredTasks)
  }

  return (
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </>
  )
}