import { Component, OnInit } from '@angular/core';
import { Logger } from '@ubiquits/core/common';
import { ActivatedRoute, UrlPathWithParams } from '@angular/router';

@Component({
  selector: 'slide',
  template: require('./slide.component.html'),
  // styles: [require('./slide.component.css')]
})
export class SlideComponent implements OnInit {

  protected logger: Logger;

  constructor(loggerBase: Logger, private route: ActivatedRoute) {
    this.logger = loggerBase.source('SlideComponent')
  }

  public ngOnInit() {
    this.logger.debug('initialized');

    this.route.params.subscribe((params:any) => {
      this.logger.info('route param', params);
    });

    this.route.url.subscribe((url:UrlPathWithParams[]) => {
      this.logger.info('route info', url);
    });

  }

}
