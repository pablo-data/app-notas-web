import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Tareas} from './../../interfaces/tareas';

import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-list-tasks-screen',
  templateUrl: './list-tasks-screen.component.html',
  styleUrls: ['./list-tasks-screen.component.scss']
})
export class ListTasksScreenComponent implements OnInit {

  public tareas : Tareas[] = [];
  public col = 3;

  constructor(private router: Router, private httpService: HttpService) {
  }


  ngOnInit(): void {
  this.getNotas();
  }

  getNotas(){
    this.httpService.get().subscribe((data) => {
      this.tareas = data;
      console.log(this.tareas);
    })
    
  }


  editarTask(tarea:Tareas){
    console.log(tarea.titulo);
    this.router.navigate(['/edit-task/', tarea.id]);
  }

  deleteTask(tarea: Tareas){
    //traigo la nota
    let index = this.tareas.findIndex(elemento => elemento.id == tarea.id);
    //cambio estado
    tarea.eliminado = true;

     this.httpService.post(tarea).subscribe((data) => {
       console.log(data);
     })
  }


}
