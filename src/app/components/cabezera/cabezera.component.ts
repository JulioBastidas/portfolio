import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, NavigationEnd, Event as NavigationEvent } from "@angular/router";

@Component({
  selector: 'app-cabezera',
  templateUrl: './cabezera.component.html',
  styleUrls: ['./cabezera.component.scss']
})
export class CabezeraComponent implements OnInit, DoCheck {

  public url1: string = "";

  constructor(private router: Router) {

    this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if (event instanceof NavigationEnd) {

            var checkBox = (<HTMLInputElement>document.getElementById("menuIcon")).checked = false;
            var menu = document.getElementById("menu");
            var bh = document.getElementsByTagName("header")[0];
            var idi = document.getElementById("idioma");
            var ico = Array.from(document.getElementsByClassName('sel') as HTMLCollectionOf<HTMLElement>)
            var idioms = Array.from(document.getElementsByClassName('idi') as HTMLCollectionOf<HTMLElement>)

            if (this.router.url == "/home" || this.router.url == "/") {

              menu.style.display = "none";
              document.body.style.overflow = "";
              bh.style.backgroundColor = "";
              idi.style.visibility = "";

              ico.forEach((element) => {

                element.className = "bar sel";

              });

              idioms.forEach((element) => {

                element.style.color = "white";

              });


            } else {

              menu.style.display = "none";
              document.body.style.overflow = "";
              bh.style.backgroundColor = "white";
              idi.style.visibility = "";

              ico.forEach((element) => {

                element.className = "bar3 sel";

              });

              idioms.forEach((element) => {

                element.style.color = "#999999";

              });



            }



            checkBox = false;



          }
        });

  }


  ngOnInit(): void {

    this.url1 = this.router.url;

  }


  ngDoCheck(): void {

    this.url1 = this.router.url;



  }

  //----------------- abrir menu

  public abrir() {

    var checkBox = (<HTMLInputElement>document.getElementById("menuIcon")).checked;
    var menu = document.getElementById("menu");
    var bh = document.getElementsByTagName("header")[0];
    var idi = document.getElementById("idioma");
    var ico = Array.from(document.getElementsByClassName('sel') as HTMLCollectionOf<HTMLElement>)

    if (this.url1 == "/home" || this.url1 == "/") {



      if (checkBox == true) {
        menu.style.display = "flex";
        document.body.style.overflow = "hidden";
        bh.style.backgroundColor = "white";
        idi.style.visibility = "hidden";

        ico.forEach((element) => {

          if (element.className === "bar sel") {
            element.className = "bar2 sel";
          } else {
            element.className = "bar sel";
          }


        });



      } else {
        menu.style.display = "none";
        document.body.style.overflow = "";
        bh.style.backgroundColor = "";
        idi.style.visibility = "";


        ico.forEach((element) => {

          if (element.className === "bar2 sel") {
            element.className = "bar sel";
          } else {
            element.className = "bar2 sel";
          }


        });



      }



    } else {


      if (checkBox == true) {
        menu.style.display = "flex";
        document.body.style.overflow = "hidden";
        bh.style.backgroundColor = "white";
        idi.style.visibility = "hidden";

        ico.forEach((element) => {

          if (element.className === "bar2 sel") {
            element.className = "bar3 sel";
          } else {
            element.className = "bar2 sel";
          }


        });


      } else {

        menu.style.display = "none";
        document.body.style.overflow = "";
        bh.style.backgroundColor = "white";
        idi.style.visibility = "";


        ico.forEach((element) => {

          if (element.className === "bar3 sel") {
            element.className = "bar2 sel";
          } else {
            element.className = "bar3 sel";
          }


        });



      }



    }

  }


}
