import { Component } from '@angular/core';
import {NoteService} from '../services/note.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private originalNoteList = [];
  private sortedNoteList = [];

  constructor(private noteService: NoteService,
              private router: Router) {

    noteService.getData().then((data: any) => {
      this.originalNoteList = JSON.parse(data.value) || [];
      this.sortedNoteList = JSON.parse(JSON.stringify(this.originalNoteList));
    });

  }

  detailNote() {
    this.router.navigateByUrl('/detail-note/');
  }

  onChangeSelect(event: any) {

    // eslint-disable-next-line eqeqeq
    this.sortedNoteList = this.originalNoteList.filter((item) => item.note == event.detail.value);
  }

  onChangeDebut(event: any) {

    this.sortedNoteList = this.originalNoteList.filter((item) => item.date >= event.detail.value);
  }

  onChangeFin(event: any) {

    this.sortedNoteList = this.originalNoteList.filter((item) => item.date <= event.detail.value);
  }
}
