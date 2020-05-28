import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../../models/proyecto';

@Component({
  selector: 'app-frontendprojects',
  templateUrl: './frontendprojects.component.html',
  styleUrls: ['./frontendprojects.component.scss']
})
export class FrontendprojectsComponent implements OnInit {

  public proyectos: Proyecto[];

  constructor() {



    this.proyectos =  [

      new Proyecto ("Digan Cheese!", "../../assets/images/cheese.svg", "Web site for a local company 'Digan Cheese!'."),
      new Proyecto ("Tu banco ideal", "../../assets/images/banco.svg", "Visual design for a mobile app “your ideal bank” designed for Windows Phone."),
      new Proyecto ("Detras de la pantalla", "../../assets/images/quien.svg", "Audiovisual interactive Project."),
      new Proyecto ("Huellas", "../../assets/images/huellas.svg", "Mobile runner video game based on the actual environment problems around the world.")

    ];

  }


  ngOnInit(): void {



  }

}
