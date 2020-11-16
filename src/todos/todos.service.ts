import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from '../entities/todo.entity';
//import { Todo } from './interfaces/todo.interface';
//import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodosService {

    // private readonly todos: Todo[] = [];

    // getAllTodos() : Todo[]{
    //     return this.todos;
    // }

    // createTodo(todo_text : string,complete : boolean):Todo{
    //     let id  = uuidv4();
    //     const todo:Todo = {
    //         id,
    //         todo_text,
    //         complete
    //     }
        
    //     this.todos.push(todo)

    //     return todo
        
    // }

    // constructor(
    //     @InjectRepository(Todo)
    //     private readonly todoRepository: Repository<Todo>
    // ) {}

    constructor(@InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>) {
    }
    
    findAll() : Promise<Todo[]>{
        return this.todoRepository.find();
    }

    create(todo: Todo) : Promise<Todo>{
        return this.todoRepository.save(todo);
    }

    update(id: number, todo_text: string, isActive: boolean) {
        return this.todoRepository.update(id, { todo_text: todo_text,isActive: isActive});
    }

    remove(id: number) {
        return this.todoRepository.delete(id);
    }

}
