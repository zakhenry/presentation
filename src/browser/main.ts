import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ConsoleLogger, Logger } from '@ubiquits/core/common';

import { PresentationComponent } from './presentation/presentation.component';
import { ROUTER_DIRECTIVES, provideRouter } from '@angular/router';
import { routes } from './routes';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ControlsComponent } from './presentation/controls/controls.component';
import { SlideHttpStore } from './stores/slide.http.store';
import { SlideStore } from '../common/stores/slide.store';


if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(PresentationComponent, [
  ControlsComponent,
  {provide: Logger, useClass: ConsoleLogger},
  {provide: SlideStore, useClass: SlideHttpStore},
  HTTP_PROVIDERS,
  ROUTER_DIRECTIVES,
  provideRouter(routes),
  { provide: LocationStrategy, useClass: HashLocationStrategy },
]);
