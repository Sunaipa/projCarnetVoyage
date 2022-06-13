import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NoteService} from '../../services/note.service';
import {ViewWillEnter} from '@ionic/angular';

@Component({
  selector: 'app-detail-note',
  templateUrl: './detail-note.page.html',
  styleUrls: ['./detail-note.page.scss'],
})
export class DetailNotePage implements OnInit, ViewWillEnter {

  public note;
  private id: string;


  constructor(private noteService: NoteService,
              private currentRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('ici2');
    this.currentRoute.paramMap.subscribe(
      (data) => {
        this.id = data.get('id');
        this.note = this.noteService.getNote(this.id);
        console.log(this.note);
      }
    );
  }

  ionViewWillEnter(){}


}
