import { Injectable } from '@angular/core';

// import { Location } from '../core/location.class';

import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';

@Injectable()
export class MapService {
  public map: Map;
  public baseMaps: any;

  public constructor() {

    (mapboxgl as any).accessToken = 'pk.eyJ1IjoidGFuem1haW5pYSIsImEiOiJjaXQ1MWZwejIwMDJmMm5sajUzNHBuN2R0In0.qFsUY6jXdWdv9H1jBdNhPQ';

    this.baseMaps = [
      {name: 'Street', id: 'street'},
      {name: 'Bright', id: 'bright'},
      {name: 'Light', id: 'light'},
      {name: 'Satellite', id: 'satellite'}
    ];
  }

}
