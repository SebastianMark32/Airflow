import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Packinglist } from '../../models/PackingList';
import { TripService } from '../../services/trip.service';
import { Trip } from '../../models/Trip';
import { FlightReserveService } from '../../services/flight-reserve.service';
import { Flight } from '../../models/Flight';

@Component({
  selector: 'app-packing',
  templateUrl: './packing.component.html',
  styleUrls: ['./packing.component.scss']
})
export class PackingComponent {
  toDisplay = false;
  packingForm: FormGroup
  thisTrip!: Trip;
  thisFlight!:Flight
  isDisplayed=false;

  constructor( private tripService:TripService, private flightSerive:FlightReserveService){}

  ngOnInit(){
    this.packingForm=this.createFormGroup();
  }

  toggleData() {
    this.toDisplay = !this.toDisplay;
  }


  createFormGroup():FormGroup{
    return new FormGroup({
      tripname: new FormControl("", [Validators.required, Validators.minLength(1)]),
      destination: new FormControl("", [Validators.required, Validators.minLength(1)]),
    });
  }

  toDate(thing:any):Date{
    const dt = new Date(thing);
    return dt;
  }

  submit(formData:Pick<Packinglist,"tripname"|"destination">):void{
    this.tripService.fetchAll().subscribe(posts =>{
      for(const x of posts){
        if(x.tripname == formData.tripname){
          this.thisTrip=x;
        }
      }
      this.flightSerive.fetchAll().subscribe(posts=>{
        for(const y of posts){
          if(y.tripid==this.thisTrip.id){
            this.thisFlight=y;
          }
        }
        this.isDisplayed=true;
      })
      
    });


    this.packingForm.reset();
  }

  typesOfShoes: string[] = ['Boarding pass', 'Wallet', 'Drivers License','Cellphone','Laptop', 'Optional: Passport'];

}
