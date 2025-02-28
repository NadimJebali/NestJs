import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './Models/task';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('task-management')
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  fetchAll(): Task[]{
    return this.taskService.fetchAll();
  }

  @Get('/get/:id')
  fetchATask(@Param('id') id: string): Task | string{
    return this.taskService.fetchATask(+id);
  }

  @Post('/create')
  createTask(@Body() task: Task): string{
    return this.taskService.createTask(task);
  }

  @Patch('/update/:id')
  updateTask(@Param('id') id: string, @Body() task: Task): string{
    return this.taskService.updateTask(+id,task);
  }

  @Delete('/delete/:id')
  deleteTask(@Param('id') id: string): string{
    return this.taskService.deleteTask(+id);
  }

}
