import { AbstractStore } from '@ubiquits/core/common';
import { Slide } from '../models/slide.model';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export abstract class SlideStore extends AbstractStore<Slide> {

  constructor(injector: Injector) {
    super(Slide, injector);
  }

}
