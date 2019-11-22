import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '@app/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'main-panel', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
      // { enableTracing: true }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
