import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias:any;
  
constructor(private datosExperiencias: ExperienciaService) { }

  ngOnInit(): void {
    this.datosExperiencias.obtenerDatos().subscribe(data=>{
      console.log(data);
      this.experiencias=data;
    })
}
}

  
    



