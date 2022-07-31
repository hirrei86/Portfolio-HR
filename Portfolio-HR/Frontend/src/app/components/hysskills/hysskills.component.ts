import { Component, OnInit } from '@angular/core';
import { HysskillsService } from 'src/app/service/hysskills.service';

@Component({
  selector: 'app-hysskills',
  templateUrl: './hysskills.component.html',
  styleUrls: ['./hysskills.component.css']
})
export class HysskillsComponent implements OnInit {
  dataHyS:any
  constructor(private datosHyS:HysskillsService) { }

  ngOnInit(): void {
    this.datosHyS.obtenerDatosHyS().subscribe(data=>{
     
      this.dataHyS=data;
    })
  }

}
