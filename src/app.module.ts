import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosService } from './todos/todos.service';
import { TodosController } from './todos/todos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {DBconfig} from './orm.config'
import { Todo } from './entities/todo.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Todo]),
    TypeOrmModule.forRoot(DBconfig),
    AuthModule
  ],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService],
})
export class AppModule {}
