import { Component, OnInit, Input } from '@angular/core';
import { Logger } from '@ubiquits/core/common';
import { ActivatedRoute } from '@angular/router';
import { Slide } from '../../../../common/models/slide.model';

@Component({
  selector: 'slide',
  template: require('./slide.component.html'),
  // styles: [require('./slide.component.css')]
})
export class SlideComponent implements OnInit {

  protected logger: Logger;

  @Input('data') public slide: Slide;

  constructor(loggerBase: Logger, private route: ActivatedRoute) {
    this.logger = loggerBase.source('SlideComponent')
  }

  public ngOnInit() {
    this.logger.debug('initialized');
  }

}
