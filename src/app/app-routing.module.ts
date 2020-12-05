import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TicketOfficeComponent } from './ticket-office/ticket-office.component';

const routes: Routes = [
  {
    path: 'ticket-office',
    component: TicketOfficeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: 'ticket-office'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
