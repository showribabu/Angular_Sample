import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { Housinglocation } from 'src/app/models/housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route :ActivatedRoute,private housingService:HousingService){}

  housingLocationId:number=-1;
  housingLocation :Housinglocation|undefined;

ngOnInit(): void {
    this.route.paramMap.subscribe((pdata)=>{
      this.housingLocationId=Number(pdata.get('id'));
      console.log(this.housingLocationId);

      //here th service will change the method ,it uses the json-server

      // this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId);

      this.housingService.getHousingLocationById(this.housingLocationId).then(housedata => {
        this.housingLocation= housedata;
        console.log(this.housingLocation);
        
      })
    })
}

applyForm = new FormGroup({
  fname: new FormControl(''),
  lname: new FormControl(''),
  email:new FormControl(''),
});

onSubmit():void{
  this.housingService.onSubmit(this.housingLocationId??-1,this.applyForm.value.fname??'',this.applyForm.value.lname??'',this.applyForm.value.email??'');
}

//   null ?? ''  ---> here if is is null ,then it will be empty string..
//  object ?.data  ---> it allows to access the properties from the object without knowing the object data existed or not
//  ! is used for the  Assertion of the input , it cant be null/undefined;

}
