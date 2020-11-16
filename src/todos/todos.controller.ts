import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from '../entities/todo.entity';

@Controller('todos')
export class TodosController {

    //constructor(private todosService:TodosService){}

    // @Get()
    // getAllTodos(): Todo[]{
    //     return this.todosService.getAllTodos()
    // }

    // @Post()
    // createTodo(@Body('todo_text') todo_text:string,@Body('complete') complete:boolean): Todo{
    //     return this.todosService.createTodo(todo_text,complete)
    // }

    constructor(private todoService: TodosService) {}
  
    @Get()
    findAll() {
        return this.todoService.findAll();
    }

    @Post()
    create(@Body() body) {
        return this.todoService.create(body)
    }
    
    @Put(':id')
    update(@Param('id') id, @Body('todo_text') todo_text,@Body('isActive') isActive) {
        return this.todoService.update(id,todo_text,isActive)
    }

    @Delete(':id')
    remove(@Param('id') id) {
        return this.todoService.remove(id)
    }
}
