import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var fondo = document.getElementById("frontend");

    fondo.addEventListener('mousemove', function(e) {
      var x = (e.pageX + this.offsetLeft) / 100;
      var y = (e.pageY + this.offsetTop) / 50;
      (e.target as HTMLInputElement).style.backgroundPosition = x + 'px ' + y + 'px';
    })


  }





}
