import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';



import { HomepageComponent } from './homepage/homepage.component';
import { CarsComponent } from './cars/cars.component';
import { BikesComponent } from './bikes/bikes.component';
import { NewsComponent } from './news/news.component';


const appRoutes: Routes = [
  {path:'home' , component: HomepageComponent},
  {path:'news' , component: NewsComponent},
  {path:'cars' , component: CarsComponent, children:[
    {path:'details/:name', component: NewsComponent}
  ]},
  {path:'bikes' , component: BikesComponent},
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'**', redirectTo: '/home', pathMatch:'full'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}