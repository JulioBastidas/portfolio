// Improtar modulos de router de angular

import{ ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componentes a los cuales quiero hacerles una pagina exclusiva

import { HomeComponent } from './components/home/home.component';
import { FrontendprojectsComponent } from './components/frontendprojects/frontendprojects.component';
import { UxprojectsComponent } from './components/uxprojects/uxprojects.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from "./components/contact/contact.component";
import { AlzgamerComponent } from "./components/alzgamer/alzgamer.component";
import { CodensaComponent } from "./components/codensa/codensa.component";
import { DiganCheeseComponent } from "./components/digan-cheese/digan-cheese.component";
import { HuellasComponent } from "./components/huellas/huellas.component";
import { QuienEstaDetrasDeLaPantallaComponent } from "./components/quien-esta-detras-de-la-pantalla/quien-esta-detras-de-la-pantalla.component";
import { TuBancoIdealComponent } from "./components/tu-banco-ideal/tu-banco-ideal.component";
import { WhereToPlayComponent } from "./components/where-to-play/where-to-play.component";
import { ErrorComponent } from "./components/error/error.component";

// Array de rutas

const appRoutes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
  {path: 'frontend-projects', component: FrontendprojectsComponent, data: {animation: 'AboutPage'} },
  {path: 'ux-projects', component: UxprojectsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'ux-projects/Alzgamer', component: AlzgamerComponent},
  {path: 'ux-projects/Where to play', component: WhereToPlayComponent},
  {path: 'ux-projects/Energi Codensa', component: CodensaComponent},
  {path: 'frontend-projects/Digan Cheese!', component: DiganCheeseComponent},
  {path: 'frontend-projects/Tu banco ideal', component: TuBancoIdealComponent},
  {path: 'frontend-projects/Detras de la pantalla', component: QuienEstaDetrasDeLaPantallaComponent},
  {path: 'frontend-projects/Huellas', component: HuellasComponent},
  {path: '**', component: ErrorComponent}

];

// Exportar el modulo de rutas

export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,{
      scrollPositionRestoration: 'enabled', // Add options right here
    });
