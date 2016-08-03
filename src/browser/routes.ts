import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { RouterConfig } from '@angular/router';
import { PresenterComponent } from './presentation/presenter/presenter.component';
import { SlidesComponent } from './presentation/slides/slides.component';

export const routes: RouterConfig = [
  { path: 'slides/:id', component: SlidesComponent },
  { path: '',  redirectTo: 'slides/1', pathMatch: 'full' },
  { path: 'home', component: PresenterComponent, outlet: 'presenter' },
  { path: 'slides/:id', component: PresenterComponent, outlet: 'presenter' },
  { path: '**', component: PageNotFoundComponent }
];