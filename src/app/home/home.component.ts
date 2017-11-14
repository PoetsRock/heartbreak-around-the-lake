import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';

import { MapService } from '../core/services/map.service';
// import { lineData } from ''

import { AppState } from '../app.service';
import { LineData } from '../core/data/line-data.data';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public map: Map;
  public localState = {
    value: ''
  };
  private lineData: mapboxgl.Layer = LineData;

  public constructor(
    public appState: AppState,
    public mapService: MapService
  ) { }

  public ngOnInit() {
    console.log('hello `Home` component');
    this.map = new Map({
      container: 'map',
      style: 'mapbox://styles/tanzmainia/cj9x5csi76ear2so7d0e19hix',
      // zoom: 5,
      // center: [-78.880453, 42.897852]
    });
    this.mapService.map = this.map;
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('load', () => {
      this.map.addLayer(this.lineData);
    });
  }

  public submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

}
