import { Component } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

import { Housinglocation } from 'src/app/models/housinglocation';

import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {



  hoselocationdata :Housinglocation =
  {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: '',
    availableUnits: 99,
    wifi: true,
    laundry: false,
  }
  //now we will pass this data to the child component Housing Location through the input decarator

  houselocationdatalist :Housinglocation[]=[];

  filteredhoselocationdata :Housinglocation[]=[];

  //get the data from the service and then pass it to the child component

  constructor(private housingservice: HousingService){

    // this.houselocationdatalist = this.housingservice.getAllHousingLocations();
    // this.filteredhoselocationdata= this.houselocationdatalist;


    // Here service trying to get the data json-server and use the functions here


    /*
      console.log(this.housingservice.getData().subscribe((data)=>{
     console.log(data);
  }));

    */
    this.housingservice.getAllHousingLocations().then((data:Housinglocation[])=>{
      this.houselocationdatalist = data;
      this.filteredhoselocationdata= this.houselocationdatalist;
    })

  };

  filterResult(cityname:string):void
  {
  // alert(cityname);
 if (!cityname) {
    this.filteredhoselocationdata = this.houselocationdatalist;
    return;
  }

  this.filteredhoselocationdata=this.houselocationdatalist.filter(locationdata=> locationdata?.city.toLowerCase().includes(cityname.toLowerCase()));






  }

}
