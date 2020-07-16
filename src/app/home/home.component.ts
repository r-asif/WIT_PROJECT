import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public nodes;
  options = {};

  constructor(public data: DataService) { 
    this.nodes = data.getTree();
  }

  ngOnInit(): void { }

}
