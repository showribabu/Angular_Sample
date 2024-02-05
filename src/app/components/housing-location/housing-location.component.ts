import { Component,Input } from '@angular/core';
import { Housinglocation } from 'src/app/models/housinglocation';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-housing-location',
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {

@Input() filteredhoselocationdata ! :Housinglocation[];

// constructor(private housingservice: HousingService){
//   this.houselocationdatalist = this.housingservice.getAllHousingLocations();
// };



}
