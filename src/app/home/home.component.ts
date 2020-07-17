import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

enum ComponentSelector {
  XML = 1,
  About= 2
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  public nodes;
  currentLink = this.componentSelector.XML;
  options = {};

  constructor(public data: DataService) { 
    this.nodes = data.getTree();
  }

  get componentSelector() { return ComponentSelector; }

  async setLink(linkId) {
		this.currentLink = linkId;
	}

  ngOnInit(): void { }

}
