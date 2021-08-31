import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-two',
  templateUrl: './hello-world-two.component.html',
  styleUrls: ['./hello-world-two.component.scss']
})
export class HelloWorldTwoComponent implements OnInit {
  @Input() state = "";
  @Input() configuration = "";
  constructor() { }

  ngOnInit(): void {
  }

}
