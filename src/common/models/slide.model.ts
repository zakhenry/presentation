import {
  Model,
  AbstractModel,
  Primary,
  StoredProperty,
  CreatedDate,
  UpdatedDate,
  MaxLength
} from '@ubiquits/core/common';

@Model({
  storageKey: 'slides',
})
export class Slide extends AbstractModel {

  @Primary()
  public slideId: number;

  @StoredProperty({length: '32'})
  @MaxLength(32)
  public title: string;

  @StoredProperty({type: 'text'})
  public content: string;

  @CreatedDate()
  public createdAt: Date;

  @UpdatedDate()
  public updatedAt: Date;
}




