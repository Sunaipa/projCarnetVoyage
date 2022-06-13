import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormAddNotePage } from './form-add-note.page';

const routes: Routes = [
  {
    path: '',
    component: FormAddNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormAddNotePageRoutingModule {}
