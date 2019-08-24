import { Component, OnInit, ElementRef } from '@angular/core';
import { CallHTTPService } from '../../services/call-http.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public rooms = [];

  constructor(
    private _call:CallHTTPService,
    private _ele: ElementRef
  ) { 
    let divEle = this._ele.nativeElement.querySelector('#content');
    console.dir(divEle);
  }

  ngOnInit() {
    this._call.getAll().subscribe((res:any) => {
      this.rooms = [...res.items]
      console.log(this.rooms)
    });
  }

  down(local){
    window.location.hash = '';
    window.location.hash = local;
  }

}
