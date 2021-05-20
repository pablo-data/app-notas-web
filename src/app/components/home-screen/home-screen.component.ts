import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import { Tareas } from './../../interfaces/tareas';

import { Router } from '@angular/router';

import { HttpService } from './../../services/http.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit {

  estados = [
    {name: 'Abierto'},
    {name: 'En proceso'},
    {name: 'Cerrado'},
  ];

  tareas : Tareas[] = [];
  tarea: Tareas;
  idUltimo = 0;


  formulario = new FormGroup({
    estado: new FormControl(this.estados[0]),
  });

  constructor(public form: FormBuilder, private router: Router, private httpService : HttpService) {
    this.formulario = this.form.group({
        titulo: ['', [Validators.required]],
        estado: ['', Validators.required],
        descripcion: ['', [Validators.required]]
    });

    this.tarea = {id:0, titulo: '', estado: '', descripcion: '',
    eliminado: false};
   }

   ngOnInit(): void {
    this.getNotas();
  }

   getNotas(){
      this.httpService.get().subscribe((data) => {
        this.tareas = data;
      })
    }

  validar(){
    //obtengo el ultimo id ingresado
     this.idUltimo = this.tareas.length;
    //guardar tarea en array
    this.tarea = {
      id: this.idUltimo,
      titulo: this.formulario.value.titulo,
      estado: this.formulario.value.estado,
      descripcion : this.formulario.value.descripcion,
      eliminado : false
    } 

    console.log(this.tarea);
    //realizo metodo post
    this.httpService.post(this.tarea).subscribe(data => {
      console.log(data);
    });

    //luego de validar, dirijo la pagina a lista de tareas
    this.router.navigate(['/list']);
  }

}
