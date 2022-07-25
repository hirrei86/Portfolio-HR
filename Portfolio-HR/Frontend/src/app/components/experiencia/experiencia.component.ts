import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: any;

  constructor(private datosExperiencias: ExperienciaService, private experienciaservice: ExperienciaService, private router: Router) { }

  ngOnInit(): void {
    this.datosExperiencias.obtenerDatos().subscribe(data => {
      this.experiencias = data;
    })
  }
  public onEdit(id:number){
    this.router.navigate(['editar-experiencia',id])
  }
  

  log_console(id:number) {
    this.experienciaservice.eliminarExperiencia(id).subscribe(data => {
      });
      location.reload();
      }
}







