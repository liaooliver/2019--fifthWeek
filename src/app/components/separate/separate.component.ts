import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-separate',
  templateUrl: './separate.component.html',
  styleUrls: ['./separate.component.scss']
})
export class SeparateComponent implements OnInit {

  @Input() separate:string;

  constructor() { }

  ngOnInit() {
  }

}
