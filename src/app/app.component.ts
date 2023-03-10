import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environments';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    mapboxgl!.accessToken = environment.apiKey;
  }

}
