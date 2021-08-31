import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-one',
  templateUrl: './hello-world-one.component.html',
  styleUrls: ['./hello-world-one.component.scss']
})
export class HelloWorldOneComponent implements OnInit {
  @Input() state = "";
  @Input() configuration = "";
  constructor() { }

  ngOnInit(): void {
  }

}
