import { Injectable } from '@angular/core';
import { Housinglocation } from '../models/housinglocation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }

  //trying to fetch the below data from the server...

  /*
  houselocationdatalist :Housinglocation[]=[
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '../assets/Home-1.png',
      availableUnits: 4,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: '../assets/Home-2.png',
      availableUnits: 0,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'WarmBedsHousingSupport',
      city: 'Juneau',
      state: 'AK',
      photo: '../assets/Home-3.png',
      availableUnits: 1,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '../assets/Home-1.png',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: '../assets/Home-3.png',
      availableUnits: 1,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: '../assets/Home-2.png',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: '../assets/Home-2.png',
      availableUnits: 5,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: '../assets/Home-3.png',
      availableUnits: 2,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: '../assets/Home-1.png',
      availableUnits: 10,
      wifi: false,
      laundry: false
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: '../assets/Home-2.png',
      availableUnits: 6,
      wifi: true,
      laundry: true
    }
  ];


  getAllHousingLocations():Housinglocation[]{
    return this.houselocationdatalist;
  }

  getHousingLocationById(id:number):Housinglocation|undefined{
    return this.houselocationdatalist.find(houselocation=>houselocation.id == id);
  }

  */

  //data existed in the json-server  at the  local file db.json at localhost:3000/locations...

  url= 'http://localhost:3000/locations';

  async getAllHousingLocations():Promise<Housinglocation[]>{
    const data= await fetch(this.url);
    return  await data.json() ?? [];

  }

  async getHousingLocationById(id:number):Promise<Housinglocation|undefined>{

    const data1= await fetch(this.url+'/'+id);  // '${this.url}/${id}
    return await data1.json() ?? {};
  }


  async onSubmit(id:number,fnames:string,lname:string,email:string){

    //pass the data to the  json-server
    console.log(`Data Submitted : \n FisrtName:${fnames}\n LastName:${lname}\n Email:${email}`);

    // const data ={id,fname,lname,email};
    const res= await this.http.post('http://localhost:3000/requested',{id,fnames,lname,email}).subscribe(response=>
    {
      console.log('Data submited on the Db.json');
    });
  }

  // get the locations data..
  // getData():Observable<any>{

  //   return  this.http.get(this.url);
  // }

}

