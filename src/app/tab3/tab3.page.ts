import { Component } from '@angular/core';
import {ViewDidEnter} from '@ionic/angular';
import { Map, tileLayer, circle } from 'leaflet';
import {NoteService} from "../services/note.service";
import { Geolocation} from '@capacitor/geolocation';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements ViewDidEnter {

  public map: Map;

  constructor(private noteService: NoteService,) {}

  ionViewDidEnter(){
    this.leafLetInit();
  }

  private async leafLetInit() {
    const geo = await Geolocation.getCurrentPosition();

    this.map = new Map('mapView');
    this.map.setView([geo.coords.latitude, geo.coords.longitude], 5);

    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);


    for (let note of this.noteService.noteList){
      console.log(note.lat)
      if (note.lat){
        circle([note.lat, note.long], {
          color: 'red',
          radius: 15,
        }).addTo(this.map);
      }
    }

  }
}
