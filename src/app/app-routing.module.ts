import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'form-add-note',
    loadChildren: () => import('./pages/form-add-note/form-add-note.module').then( m => m.FormAddNotePageModule)
  },
  {
    path: 'detail-note',
    loadChildren: () => import('./pages/detail-note/detail-note.module').then( m => m.DetailNotePageModule)
  },
  {
    path: 'detail-note/:id',
    loadChildren: () => import('./pages/detail-note/detail-note.module').then( m => m.DetailNotePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
