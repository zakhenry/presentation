import { Component, OnInit } from '@angular/core';
import '../public/css/styles.css';
import { Logger } from '@ubiquits/core/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'presentation',
  template: require('./presentation.component.html'),
  // styles: [require('./presentation.component.css')],
  directives: [RouterOutlet],
})
export class PresentationComponent implements OnInit {

  protected logger:Logger;

  constructor(loggerBase:Logger) {
    this.logger = loggerBase.source('PresentationComponent')
  }

  public ngOnInit(){
    this.logger.debug('initialized');
  }


}
