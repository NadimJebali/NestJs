import { Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './Models/task';

@Injectable()
export class TaskService {

 private tasks: Task[] = [
     {id : 1, title : "task1", is_finished : false},
     {id : 2, title : "task2", is_finished : true},
     {id : 3, title : "task3", is_finished : false}
   ];

   fetchAll(): Task[]{
    return this.tasks;
   }

   fetchATask(id: number): Task{
    let index = this.tasks.findIndex(t => t.id === id);
    if(index<1){
      throw new NotFoundException("task doesn't exist");
    }
    return this.tasks[index];
  }
 
   createTask(task: Task): string{
     this.tasks.push(task);
     return `task ${task.id} has been created`;
   }

   updateTask(id: number, task: Task): string{
    /*
    const data = this.tasks.map(task =>{
      task.id === id ? { ... task, ...this.updateTask}:task;
    })
    return data;
    */
    let index = this.tasks.findIndex(t => t.id === id);
    if (index !== -1){
      this.tasks[index] = task;
    }else if(index <1){
      return "task doesn't exist";
    }
    return `task ${id} has been updated`;
  }

  deleteTask(id: number): string{
    /*
    const data = this.tasks.map((task) => this.task.id !== id)
    return data
    */
    let index = this.tasks.findIndex(t => t.id === id);
    if (index !== -1){
      this.tasks.splice(index,1);
    }else if(index <1){
      return "task doesn't exist"
    }
    return `task ${id} has been deleted`;
  }
}
