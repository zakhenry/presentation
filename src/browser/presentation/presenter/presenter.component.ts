import { Component, OnInit } from '@angular/core';
import { Logger } from '@ubiquits/core/common';
import { ActivatedRoute, UrlPathWithParams } from '@angular/router';

@Component({
  selector: 'presenter',
  template: require('./presenter.component.html'),
  // styles: [require('./presenter.component.css')]
})
export class PresenterComponent implements OnInit {

  protected logger: Logger;

  constructor(loggerBase: Logger, private route:ActivatedRoute) {
    this.logger = loggerBase.source('PresenterComponent')
  }

  public ngOnInit() {
    this.logger.debug('initialized');

    this.route.url.subscribe((url:UrlPathWithParams[]) => {
      this.logger.info('route info', url);
    });

  }

}
