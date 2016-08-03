import { SlideStore } from './slide.store';
import { Slide } from '../models/slide.model';
import { identifier, MockStore } from '@ubiquits/core/common';
import { Injector, Injectable } from '@angular/core';

@Injectable()
export class SlideMockStore extends MockStore<Slide> implements SlideStore {

  private lastId:number = 0;

  constructor(injector:Injector) {
    super(Slide, injector);
  }
  
  protected getMock(id?:identifier):Slide {
    this.lastId ++;
    return new this.modelStatic({
      slideId: this.lastId,
      title: this.chance().sentence(),
      content: this.chance().paragraph()
    });
  }

  

}