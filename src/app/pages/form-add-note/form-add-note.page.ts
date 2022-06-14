import { Component, OnInit } from '@angular/core';
import {NoteService} from '../../services/note.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { Geolocation} from '@capacitor/geolocation';
import {Camera, CameraResultType, CameraSource, ImageOptions} from '@capacitor/camera';


@Component({
  selector: 'app-form-add-note',
  templateUrl: './form-add-note.page.html',
  styleUrls: ['./form-add-note.page.scss'],
})
export class FormAddNotePage implements OnInit {

  public geo;
  public noteForm: FormGroup;
  public numPhoto = 0;

  public listPhoto;
  private id: string;

  constructor(private router: Router,
              private noteService: NoteService) {

    this.listPhoto = [];

    this.noteForm = new FormGroup<any>({
      date: new FormControl(null, {validators: [
          Validators.required
        ]}),
      note: new FormControl(null, {validators: [
          Validators.required
        ]}),
      titre: new FormControl(null, {validators: [
          Validators.required
        ]}),
      texte: new FormControl(null, {validators: [
          Validators.required
        ]})
    });
  }

  async ngOnInit() {
    await this.getLocation();
    this.noteForm = new FormGroup<any>({
      date: new FormControl(null, {validators: [
          Validators.required
        ]}),
      note: new FormControl(null, {validators: [
          Validators.required
        ]}),
      titre: new FormControl(null, {validators: [
          Validators.required
        ]}),
      texte: new FormControl(null, {validators: [
          Validators.required
        ]})
    });
  }

  onAddNote() {

    if(this.noteForm.status === 'VALID' ){
      this.noteForm.value.photo = this.listPhoto || null;
      this.noteForm.value.lat = this.geo.coords.latitude;
      this.noteForm.value.long = this.geo.coords.longitude;
      this.noteService.addNewNote(this.noteForm.value);
      this.router.navigateByUrl('/tabs');
    }
  }


  async getLocation(){
    this.geo = await Geolocation.getCurrentPosition();
  }

  async takePicture() {

    const options: ImageOptions = {
      quality: 75,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt,
    };

    const photo = await Camera.getPhoto(options);
    this.listPhoto.push(photo);
  }

  suppPhotoToForm(photo) {
    for (const item of this.listPhoto){
      if (item.base64String === photo.base64String){
       const index = this.listPhoto.indexOf(item);
       this.listPhoto.splice(index, 1);
      }
    }
    console.log(this.listPhoto);
  }
}
