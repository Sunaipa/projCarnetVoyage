import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAddNotePageRoutingModule } from './form-add-note-routing.module';

import { FormAddNotePage } from './form-add-note.page';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormAddNotePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [FormAddNotePage]
})
export class FormAddNotePageModule {}
