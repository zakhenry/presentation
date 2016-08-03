import { SlideStore } from './slide.store';
import { Slide } from '../models/slide.model';
import { identifier, MockStore } from '@ubiquits/core/common';
import { Injector, Injectable } from '@angular/core';

let lastId:number = 0;

@Injectable()
export class SlideMockStore extends MockStore<Slide> implements SlideStore {

  constructor(injector:Injector) {
    super(Slide, injector);
  }
  
  protected getMock(id?:identifier):Slide {
    lastId ++;

    return new this.modelStatic({
      slideId: lastId,
      title: this.chance().sentence(),
      content: this.chance().paragraph()
    });
  }

  

}