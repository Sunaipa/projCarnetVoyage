import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

//INTERFACE
export interface NoteInterface {
  id?: number;
  date: Date;
  note: string;
  titre: string;
  texte: string;
  lat;
  long;
  photo?: Array<object>;
}
//MODEL
export class NoteModel implements NoteInterface {
  id: number;
  date: Date;
  note: string;
  titre: string;
  texte: string;
  lat;
  long;
  photo: Array<object>;


  constructor(data: NoteInterface = null){
    if(data){
      this.id = data.id;
      this.date = data.date;
      this.note = data.note;
      this.titre = data.titre;
      this.texte = data.texte;
      this.lat = data.lat;
      this.long = data.long;
      this.photo = data.photo;
    }
    if(! this.id){
      this.id = new Date().getTime();
    }
  }
}

const STORAGE_KEY = 'Notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  public noteList: NoteModel[] = [];

  constructor() {
    Storage.get({key: STORAGE_KEY}).then(
      (data: any) => {
        this.noteList = JSON.parse(data.value) || [];
      }
    );
  }

  public getData(){
    return Storage.get({key: STORAGE_KEY});
  }

  addNewNote(note){
    this.noteList.push(
      new NoteModel(note)
    );

    Storage.set({
      key: STORAGE_KEY,
      value: JSON.stringify(this.noteList)
    });
  }

  getNote(id): NoteModel{
    // eslint-disable-next-line eqeqeq
    const note = this.noteList.filter((item) => item.id == id);

    if( note.length === 0) {
      return new NoteModel();
    } else {
      return  note[0];
    }
  }
}
