import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  name : string;
  category : string;
  image = {
    src : "",
    description : ""
  };
  description : string;

  constructor() { }

  ngOnInit() {
  }

}
