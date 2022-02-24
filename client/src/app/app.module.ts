import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { MainbodyComponent } from './mainbody/mainbody.component';
import { TechstackComponent } from './content/techstack/techstack.component';
import { TechComponent } from './content/techstack/tech/tech.component';
import { GraphicalComponent } from './content/graphical/graphical.component';
import { BoredApiInterfaceComponent } from './bored-api-interface/bored-api-interface.component';
import { BackendDemoComponent } from './backend-demo/backend-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MainbodyComponent,
    TechstackComponent,
    TechComponent,
    GraphicalComponent,
    BoredApiInterfaceComponent,
    BackendDemoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
