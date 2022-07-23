import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/model/estudios.model';
import { EducacionService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudios: any;

  constructor(private datosEstudios: EducacionService) { }

  ngOnInit(): void {
    this.datosEstudios.obtenerDatos().subscribe(data => {
      this.estudios = data;
    })
  }
}
