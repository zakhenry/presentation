import { Component, OnInit } from '@angular/core';
import { Logger, Collection } from '@ubiquits/core/common';
import { ActivatedRoute, UrlPathWithParams } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { SlideStore } from '../../../common/stores/slide.store';
import { Slide } from '../../../../lib/common/models/slide.model';
import { SlideComponent } from '../slides/slide/slide.component';

@Component({
  selector: 'presenter',
  template: require('./presenter.component.html'),
  // styles: [require('./presenter.component.css')]
  directives: [SlideComponent],
})
export class PresenterComponent implements OnInit {

  protected logger: Logger;
  public slideCollection$: Observable<Collection<Slide>>;

  constructor(loggerBase: Logger, private route: ActivatedRoute, protected store: SlideStore) {
    this.logger           = loggerBase.source('PresenterComponent');
    this.slideCollection$ = Observable.fromPromise(store.findMany());
  }

  public ngOnInit() {
    this.logger.debug('initialized');

    this.route.url.subscribe((url: UrlPathWithParams[]) => {
      this.logger.info('route info', url);
    });

  }

}
