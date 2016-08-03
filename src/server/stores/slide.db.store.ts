import { SlideStore } from '../../common/stores/slide.store';
import { Logger } from '@ubiquits/core/common';
import { DatabaseStore, Database } from '@ubiquits/core/server';
import { Injectable, Injector } from '@angular/core';
import { Slide } from '../../common/models/slide.model';
import { SlideMockStore } from '../../common/stores/slide.mock.store';

@Injectable()
export class SlideDatabaseStore extends DatabaseStore<Slide> implements SlideStore {

  constructor(injector: Injector, database: Database, loggerBase: Logger, slideMockStore: SlideMockStore) {
    super(Slide, injector, database, loggerBase);
  }

}