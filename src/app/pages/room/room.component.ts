import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CallHTTPService } from '../../services/call-http.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  constructor(
    fb: FormBuilder,
    private _router: ActivatedRoute,
    private _call: CallHTTPService
  ) { 
    this.form = fb.group({
      date: [{ begin: "", end: "" }],
      number: "1"
    });
  }
  
  public min = this.minDate();
  public max = this.maxDate();
  public form: FormGroup
  public imageUrl: string[] = []
  public checkInAndOut:any = {};
  public amenities:any = {};
  public descriptionShort:any = {};
  public description:string;
  public name:string; 
  public date:string[] = []
  public price: number[] = []
  public duration:number;
  public totalPrice:number = 0;
  public visitor:number;
  public normalDayPrice:number = 0;
  public holidayPrice:number = 0;
  public normalDay:number = 0;
  public holiday:number = 0;
  public showOrder:boolean = false;

  ngOnInit() {
    this._router.params.subscribe(res => {
      let id = res.id
      this._call.getSingle(id).subscribe(res => {
        console.log(res)
        this.description = res['room'][0]['description']
        this.checkInAndOut = res['room'][0]['checkInAndOut']
        this.descriptionShort = res['room'][0]['descriptionShort']
        this.imageUrl = res['room'][0]['imageUrl']
        this.price.push(res['room'][0]['normalDayPrice'])
        this.price.push(res['room'][0]['holidayPrice'])
        this.name = res['room'][0]['name']
      })
    })
  }
  
  rangeChange(event){
    this.date = [];
    this.date.push(this.convertFormat(event['value']['begin']))
    this.date.push(this.convertFormat(event['value']['end']))
    this.stayDuration();
  }

  stayDuration(){
    let start = new Date(this.date[0]).getTime();
    let end = new Date(this.date[1]).getTime();
    this.duration = ((end - start) / 1000 / 60 / 60 / 24) +1;

    this.calcFee();
  }

  calcFee(){

    let start = new Date(this.date[0]).getDay();
    let length = this.duration;
    let day = start;

    for(let i=0; i < length; i++){

      switch (day) {
        case 0:
          this.holidayPrice = this.holidayPrice + this.price[1];
          this.holiday = this.holiday + 1;
          break;
        case 6:
          this.holidayPrice = this.holidayPrice + this.price[1];
          this.holiday = this.holiday + 1;
          break;
        case 5:
          this.holidayPrice = this.holidayPrice + this.price[1];
          this.holiday = this.holiday + 1;
          break;
        default:
          this.normalDayPrice = this.normalDayPrice + this.price[0];
          this.normalDay = this.normalDay + 1;
          break;
      }
      this.totalPrice = this.normalDayPrice + this.holidayPrice;
      day = day + 1;
      if(day >= 7) day = 0;
    }


  }


  minDate(){
    let today = new Date();
    return today
  }

  maxDate() {
    let today = new Date();
    let future = today.setDate(today.getDate()+90)
    return new Date(future)
  }

  onSubmit(form){

    this.showOrder = true;
    this.visitor = form['value']['number']
    let response = {
      name: "",
      tel: "000000000",
      date: this.date
    }
  }

  convertFormat(value){
    let date = new Date(value)
    let yy = date.getFullYear()
    let mm = date.getMonth() + 1;
    let dd = date.getDate();
    return `${yy}-${mm}-${dd}`;
  }

  addZero(value){
    return value < 10 ? `0${value}` : value;
  }

}
