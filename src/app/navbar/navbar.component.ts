import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss', '../../themes/black-theme.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  pages: String[] =
  [
    'Accueil',
    'Actualités',
    'Association',
    'Nous rejoindre',
    'Gallerie',
    'Contact',
    'Espace membre'
  ];

  ngOnInit() {
  }

}
