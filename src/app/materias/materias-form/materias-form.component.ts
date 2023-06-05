import { Materias } from './../model/materias';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MateriasService } from '../services/materias.service';
import { ActivatedRoute } from '@angular/router';

import { __values } from 'tslib';

@Component({
  selector: 'app-materias-form',
  templateUrl: './materias-form.component.html',
  styleUrls: ['./materias-form.component.scss']
})
export class MateriasFormComponent {

  form: FormGroup;



  constructor(private formBuilder: NonNullableFormBuilder,
    private service: MateriasService,
    private route: ActivatedRoute
    ){
    this.form = this.formBuilder.group({
      id: [''],
      nome: [''],
      professor:[''],
      codigo:['']
    });

    //this.form.setValue({ nome: materias.nome,professor: materias.professor,codigo: materias.codigo});



   // nome: materia.nome,
    //  professor: materia.professor,
   //   codigo: materia.codigo


  }

  ngOnInit(){
    const materia: Materias = this.route.snapshot.data['materia'];
    console.log(materia);
    this.form.setValue({id: materia.id, nome: materia.nome,professor: materia.professor,codigo: materia.codigo});

  }





  onSubmit(){
    this.service.save(this.form.value).subscribe(result => console.log);
  }

  onCancel(){}

}
