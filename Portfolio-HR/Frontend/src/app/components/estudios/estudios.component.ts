import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducacionService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios: any;

  constructor(private datosEstudios: EducacionService,private educacionservice: EducacionService, private router: Router) { }

  ngOnInit(): void {
    this.datosEstudios.obtenerDatos().subscribe(data => {
      this.estudios = data;
    })
  }

  public onEdit(id:number){
    this.router.navigate(['editar-educacion',id])
  }
  

  eliminar_educacion(id:number) {
    this.educacionservice.eliminarEducacion(id).subscribe(data => {
      });
      location.reload();
      }
}
