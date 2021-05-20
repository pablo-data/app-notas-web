import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { Router } from '@angular/router';

import { Tareas } from './../../interfaces/tareas';

import { ActivatedRoute} from '@angular/router';

import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-edit-task-screen',
  templateUrl: './edit-task-screen.component.html',
  styleUrls: ['./edit-task-screen.component.scss']
})
export class EditTaskScreenComponent implements OnInit {

  estados = [
    {name: 'Abierto'},
    {name: 'En proceso'},
    {name: 'Cerrado'},
  ];

  tareas : Tareas[] = [];

  tarea: Tareas;
  id: number;

  formulario = new FormGroup({
    estado: new FormControl(this.estados[0]),
  });

  constructor(public form: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute,
              private httpService: HttpService) {

    this.formulario = this.form.group({
    titulo: ['', [Validators.required]],
    estado: ['', Validators.required],
    descripcion: ['', [Validators.required]]
  });
    this.id = 0;
    this.tarea = {id:this.id, titulo: '', estado: '', descripcion: '', eliminado: false};
   }

   

  async ngOnInit(): Promise<void> {
    this.activatedRoute.params.subscribe(parametros=>{
      this.id = parametros['id'];
    })

    //traigo elemento
    const data :any = await this.httpService.get().toPromise();
    this.tareas = data;

     // //busco en la lista de tareas el elemento que tenga igual id y si no lo encuentra se le asigna un valor por defecto
     this.tarea = this.tareas.find(elemento => elemento.id == this.id) || {id:this.id, titulo: '', estado: '', descripcion: '', eliminado: false};
 
     this.formulario = this.form.group({
         titulo: [this.tarea.titulo,[Validators.required]],
         estado: [this.tarea.estado, [Validators.required]],
         descripcion: [this.tarea.descripcion, [Validators.required]]
     });
    
  }

  validar(){
    //actualizo los cambios
    this.tarea = {
      id: this.tarea.id,
      titulo: this.formulario.value.titulo,
      estado: this.formulario.value.estado,
      descripcion : this.formulario.value.descripcion,
      eliminado : false
    } 

    this.httpService.post(this.tarea).subscribe((data) => {
      console.log(data);
    })

    //luego de validar, dirijo la pagina a lista de tareas
    this.router.navigate(['/list']);
  }

}
