import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/model/estudios.model';
import { EducacionService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  educacion: educacion = new educacion("","","","");
  
  constructor(public educacionService: EducacionService) { }
  
  ngOnInit(): void {
    this.educacionService.getEducacion().subscribe(data => {this.educacion = data})
    
}
}
