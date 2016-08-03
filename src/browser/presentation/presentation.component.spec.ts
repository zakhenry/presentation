import { inject, addProviders } from '@angular/core/testing';
import { UserStore } from '../../common/stores/user.store';
import { UserMockStore } from '../../common/stores/user.mock.store';
import { ConsoleLogger, Logger } from '@ubiquits/core/common';
import { PresentationComponent } from './presentation.component';

describe('App', () => {

  beforeEach(() => {
    addProviders([
      PresentationComponent,
      UserMockStore,
      {provide: UserStore, useClass: UserMockStore},
      {provide: Logger, useClass: ConsoleLogger},
    ]);
  });

  it('should work', inject([PresentationComponent], (app: PresentationComponent) => {
    // Add real test here
    expect(2).toBe(2);
  }));

  xit('should skip', () => {
    expect(true).toBe(false);
  });
});
