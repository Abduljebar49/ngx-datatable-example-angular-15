import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientSideComponent } from './client-side.component';
import { IndexComponent } from './index.component';
import { ServerSideComponent } from './server-side.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    pathMatch: 'full',
  },
  // children: [
  { path: 'client-side', component: ClientSideComponent },
  {
    path: 'server-side',
    component: ServerSideComponent,
  },
  // ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
