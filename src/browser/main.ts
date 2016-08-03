import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { ConsoleLogger, Logger } from '@ubiquits/core/common';

import { UserStore } from '../common/stores/user.store';
import { UserHttpStore } from './stores/user.http.store';
import { UserMockStore } from '../common/stores/user.mock.store';
import { PresentationComponent } from './presentation/presentation.component';
import { ROUTER_DIRECTIVES, provideRouter } from '@angular/router';
import { routes } from './routes';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(PresentationComponent, [
  UserMockStore,
  {provide: Logger, useClass: ConsoleLogger},
  {provide: UserStore, useClass: UserHttpStore},
  HTTP_PROVIDERS,
  ROUTER_DIRECTIVES,
  provideRouter(routes),
  { provide: LocationStrategy, useClass: HashLocationStrategy },
]);
