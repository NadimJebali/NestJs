import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './Models/task';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  fetchAll(): Task[]{
    return this.taskService.fetchAll();
  }

  @Get(':id')
  fetchATask(@Param('id') id: number): Task | string{
    return this.taskService.fetchATask(Number(id));
  }

  @Post()
  createTask(@Body() task: Task): string{
    return this.taskService.createTask(task);
  }

  @Put(':id')
  updateTask(@Param('id') id: number, @Body() Task: Task): string{
    return this.taskService.updateTask(Number(id),Task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number): string{
    return this.taskService.deleteTask(Number(id));
  }

}
