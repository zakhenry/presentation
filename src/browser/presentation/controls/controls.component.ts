import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Logger } from '@ubiquits/core/common';
import { ActivatedRoute, UrlPathWithParams } from '@angular/router';

export interface SlideTransitionEvent {
  direction: 'back' | 'forward';
}

@Component({
  selector: 'controls',
  template: require('./controls.component.html'),
  // styles: [require('./controls.component.css')]
})
export class ControlsComponent implements OnInit {

  protected logger: Logger;

  @Output() public transition: EventEmitter<SlideTransitionEvent> = new EventEmitter<SlideTransitionEvent>();

  constructor(loggerBase: Logger, private route: ActivatedRoute) {
    this.logger = loggerBase.source('ControlsComponent')
  }

  public ngOnInit() {
    this.logger.debug('initialized');

    this.route.params.subscribe((params: any) => {
      this.logger.info('route param', params);
    });

    this.route.url.subscribe((url: UrlPathWithParams[]) => {
      this.logger.info('route info', url);
    });

  }

  public back(e: MouseEvent): void {
    this.logger.debug(e);
    this.transition.emit({direction: 'back'});
  }

  public forward(e: MouseEvent): void {
    this.logger.debug(e);
    this.transition.emit({direction: 'forward'});
  }

}
