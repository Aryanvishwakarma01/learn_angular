import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  task='';
  taskList:{id:number, task:string}[]= []

  addTask(){
    this.taskList.push({id:this.taskList.length+1, task: this.task})
    // console.log(this.taskList);
    this.task = '';
    
  }

  deleteTask(taskId:number){
    this.taskList = this.taskList.filter((item)=> item.id!-taskId)
  }
}
