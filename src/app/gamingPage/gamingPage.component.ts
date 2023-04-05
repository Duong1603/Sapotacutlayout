import { Component, OnInit } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gamingPage',
  templateUrl: './gamingPage.component.html',
  styleUrls: ['./gamingPage.component.css'],
})
export class GamingPageComponent implements OnInit {
  filmIcon = faFilm;

  constructor() {}

  ngOnInit() {}
}
