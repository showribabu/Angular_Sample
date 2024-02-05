import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { HousingLocationComponent } from './components/housing-location/housing-location.component';
const routes: Routes = [

  {path :'',component: HomeComponent,title:'Home Page'},

  {path :'details/:id', component : DetailsComponent,title:'Home Details'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
