import { SlideStore } from '../../common/stores/slide.store';
import { Logger, Seeder } from '@ubiquits/core/common';
import { AbstractSeeder } from '@ubiquits/core/server';
import { Injectable } from '@angular/core';
import { Slide } from '../../common/models/slide.model';
import { SlideMockStore } from '../../common/stores/slide.mock.store';
import { SlideDatabaseStore } from '../stores/slide.db.store';
import { NotFoundException } from '@ubiquits/core/common';

@Injectable()
@Seeder()
export class DemoSeeder extends AbstractSeeder {

  protected logger: Logger;

  constructor(loggerBase: Logger, protected slideStore: SlideStore, protected slideMockStore: SlideMockStore) {
    super(loggerBase);
  }

  public seed(): Promise<void> {
    this.logger.info('Seeding database');
    return this.slideStore.initialized()
      .then(() => this.slideStore.findOne(process.env.DEMO_ID))
      .then((instance: Slide) => {

        this.logger.debug('Demo model already seeded');
      })
      .catch((e) => {

        if (!(e instanceof NotFoundException)) {
          throw e;
        }
        
        this.logger.debug('Creating demo models');

        return this.slideMockStore.findOne()
          .then((mockModel: Slide) => {

            let mockModels = [mockModel];

            return this.slideMockStore.findOne(1)
              .then((slide: Slide) => {
                mockModels.push(slide);
                return (this.slideStore as SlideDatabaseStore).getRepository()
                  .then((repo: any) => repo.persistMany(...mockModels));
              });

          });
        
      }).then(() => {
        this.logger.info('Seeding Completed');
      });
  }

}