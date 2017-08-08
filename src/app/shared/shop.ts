export class Shop {
  private _cover: string;
  private _description: string;
  private _id: string;
  private _isActive: boolean;
  private _link: string;
  private _tags: Array<string>;
  private _title: string;

  constructor(shop: any) {
    this._cover = shop.cover;
    this._description = shop.description;
    this._id = shop.id;
    this._isActive = shop.isActive;
    this._link = shop.link;
    this._tags = shop.tags;
    this._title = shop.title;
  }

  get cover() {
    return this._cover;
  }

  get description() {
    return this._description;
  }

  get id() {
    return this._id;
  }

  get isActive() {
    return this._isActive;
  }

  get link() {
    return this._link;
  }

  get tags() {
    return this._tags
  }

  get title() {
    return this.title;
  }
}
