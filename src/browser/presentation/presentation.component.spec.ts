import { inject, addProviders } from '@angular/core/testing';
import { SlideStore } from '../../common/stores/slide.store';
import { SlideMockStore } from '../../common/stores/slide.mock.store';
import { ConsoleLogger, Logger } from '@ubiquits/core/common';
import { PresentationComponent } from './presentation.component';

describe('App', () => {

  beforeEach(() => {
    addProviders([
      PresentationComponent,
      SlideMockStore,
      {provide: SlideStore, useClass: SlideMockStore},
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
