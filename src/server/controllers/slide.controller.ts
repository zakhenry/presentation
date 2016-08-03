import { Injectable } from '@angular/core';
import { ResourceController } from '@ubiquits/core/server';
import { Logger, Controller } from '@ubiquits/core/common';
import { Slide } from '../../common/models/slide.model';
import { SlideStore } from '../../common/stores/slide.store';

@Injectable()
@Controller({
  routeBase: 'slides',
})
export class SlideController extends ResourceController<Slide> {

  constructor(logger: Logger, slideStore: SlideStore) {
    super(logger, slideStore);

    logger.info(`route base is ${this.getMetadata().routeBase}`);

  }

}
