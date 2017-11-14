import { ILatLng } from './latLng.interface';
import { LngLatBounds } from 'mapbox-gl';

export class Location implements ILatLng {
  public latitude: number;
  public longitude: number;
  public address: string;
  public viewBounds: LngLatBounds;
}
