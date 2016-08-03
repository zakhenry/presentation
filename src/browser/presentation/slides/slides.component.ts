import { Component, OnInit } from '@angular/core';
import { Logger, Collection } from '@ubiquits/core/common';
import { ActivatedRoute, UrlPathWithParams, Router } from '@angular/router';
import { ControlsComponent, SlideTransitionEvent } from '../controls/controls.component';
import { Observable } from 'rxjs/Rx';
import { Slide } from '../../../common/models/slide.model';
import { SlideStore } from '../../../common/stores/slide.store';
import { SlideComponent } from './slide/slide.component';


@Component({
  selector: 'slides',
  template: require('./slides.component.html'),
  // styles: [require('./slide.component.css')]
  directives: [ControlsComponent, SlideComponent],
  providers: [SlideComponent],
})
export class SlidesComponent implements OnInit {

  protected logger: Logger;

  public slideCollection$: Observable<Collection<Slide>>;
  public slides$: Observable<Slide>;

  public slideCount$: Observable<number>;

  constructor(loggerBase: Logger,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private store: SlideStore) {
    this.logger = loggerBase.source('SlideComponent');

    this.slideCollection$ = Observable.fromPromise(store.findMany())
    this.slides$          = this.slideCollection$.flatMap(c => Observable.from(c));

    this.slideCount$ = this.slides$.count();
  }

  public ngOnInit() {
    this.logger.debug('initialized');

    this.activatedRoute.params.subscribe((params: any) => {
      this.logger.info('route param', params);
    });

    this.activatedRoute.url.subscribe((url: UrlPathWithParams[]) => {
      this.logger.info('route info', url);
    });

  }

  private eventIsHammer(event:any): event is HammerInput {
    return !!event.type;
  }

  public handleTransition(event: SlideTransitionEvent | HammerInput) {
    this.logger.info('Slide transition called by controls cmp', event);

    let currentId: number = +this.activatedRoute.snapshot.params['id'];

    if (this.eventIsHammer(event)){
      switch(event.type){
        case 'swipeleft':
          currentId++;
          break;
        case 'swiperight':
          currentId--;
          break;
      }
    } else {
      if (event.direction == 'back') {
        currentId--
      } else {
        currentId++
      }
    }

    this.router.navigate(['slides', currentId])
      .then((navRes: boolean) => {
        console.log('nav res', navRes);
      });

    console.log(currentId, this.activatedRoute.snapshot);

  }

}
