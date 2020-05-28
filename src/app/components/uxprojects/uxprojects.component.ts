import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-uxprojects',
  templateUrl: './uxprojects.component.html',
  styleUrls: ['./uxprojects.component.scss']
})
export class UxprojectsComponent implements OnInit {

  public proyectos: Array<any>;

  constructor() {

    this.proyectos =  [

      new Proyecto ("Where to play", "../../assets/images/w2p.svg", "Mobile app “Where 2 play?” designed to find near and safe sport courts for people who lack time to make excercise."),
      new Proyecto ("Energi Codensa", "../../assets/images/enel.svg", "Optimizing the manual process of requirement, installation and use of a renewable energy system in a house."),
      new Proyecto ("Alzgamer", "../../assets/images/alz.svg", "Alzgamer in a interactive space designed to prevent Alzheimer.")

    ];

  }

  ngOnInit(): void {





  }



}
