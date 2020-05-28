import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CabezeraComponent } from './components/cabezera/cabezera.component';
import { MessageService } from './services/message.service';
import { PieComponent } from './components/pie/pie.component';
import { HomeComponent } from './components/home/home.component';
import { UxprojectsComponent } from './components/uxprojects/uxprojects.component';
import { FrontendprojectsComponent } from './components/frontendprojects/frontendprojects.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { HuellasComponent } from './components/huellas/huellas.component';
import { TuBancoIdealComponent } from './components/tu-banco-ideal/tu-banco-ideal.component';
import { QuienEstaDetrasDeLaPantallaComponent } from './components/quien-esta-detras-de-la-pantalla/quien-esta-detras-de-la-pantalla.component';
import { DiganCheeseComponent } from './components/digan-cheese/digan-cheese.component';
import { AlzgamerComponent } from './components/alzgamer/alzgamer.component';
import { CodensaComponent } from './components/codensa/codensa.component';
import { WhereToPlayComponent } from './components/where-to-play/where-to-play.component';


@NgModule({
  declarations: [
    AppComponent,
    CabezeraComponent,
    PieComponent,
    HomeComponent,
    UxprojectsComponent,
    FrontendprojectsComponent,
    AboutComponent,
    ContactComponent,
    ErrorComponent,
    HuellasComponent,
    TuBancoIdealComponent,
    QuienEstaDetrasDeLaPantallaComponent,
    DiganCheeseComponent,
    AlzgamerComponent,
    CodensaComponent,
    WhereToPlayComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [appRoutingProviders, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
