import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import {BikesComponent} from './bikes/bikes.component';
import {CarsComponent} from './cars/cars.component';
import {HeaderComponent} from './header/header.component';
import {HomeBannerComponent} from './header/home-banner/home-banner.component';
import {MainNavComponent} from './header/main-nav/main-nav.component';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from './login/login.component';
import {NewsComponent} from './news/news.component';
import { HttpService } from './services/http.service';
import {loaderComponent} from './loader.component';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    BikesComponent,
    CarsComponent,
    HeaderComponent,
    HomeBannerComponent,
    MainNavComponent,
    HomepageComponent,
    LoginComponent,
    NewsComponent,
    loaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
