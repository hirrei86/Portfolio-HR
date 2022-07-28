import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AplogoComponent } from './components/aplogo/aplogo.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysskillsComponent } from './components/hysskills/hysskills.component';
import { ProyectoComponent } from './components/proyectos/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarExperienciaComponent } from './components/editar-experiencia/editar-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditarAcercaDeComponent } from './components/editar-acerca-de/editar-acerca-de.component';
import { EditarPortadaComponent } from './components/editar-portada/editar-portada.component';
import { NewEstudiosComponent } from './components/estudios/new-estudios.component';
import { EditarEstudiosComponent } from './components/editar-estudios/editar-estudios.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';
import { EditarProyectoComponent } from './components/editar-proyecto/editar-proyecto.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AplogoComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EstudiosComponent,
    HysskillsComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    EditarExperienciaComponent,
    NewExperienciaComponent,
    EditarAcercaDeComponent,
    EditarPortadaComponent,
    NewEstudiosComponent,
    EditarEstudiosComponent,
    NewProyectoComponent,
    EditarProyectoComponent,
    
    ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
