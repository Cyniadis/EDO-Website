import { Component, OnInit } from '@angular/core';
import { HomeContainer, HomeContainerAlignement, HomeContainerColor } from './home-container';
import { HOME_CONTAINERS } from './home-containers-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../../themes/black-theme.scss', '../../themes/btn-theme.scss']
})
export class HomeComponent implements OnInit {

  HomeContainerAlignement = HomeContainerAlignement;
  HomeContainerColor = HomeContainerColor;
  homeContainersList : HomeContainer[];

  constructor() { }

  ngOnInit() {
    this.homeContainersList = HOME_CONTAINERS;
    console.log(this.homeContainersList);
  }

}
