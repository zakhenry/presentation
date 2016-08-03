import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { RouterConfig } from '@angular/router';
import { PresenterComponent } from './presenter/presenter.component';
import { SlideComponent } from './slide/slide.component';

export const routes: RouterConfig = [
  { path: 'slide/:id', component: SlideComponent },
  { path: '',  redirectTo: 'slide/1', pathMatch: 'full' },
  { path: 'home', component: PresenterComponent, outlet: 'presenter' },
  { path: 'slide/:id', component: PresenterComponent, outlet: 'presenter' },
  { path: '**', component: PageNotFoundComponent }
];