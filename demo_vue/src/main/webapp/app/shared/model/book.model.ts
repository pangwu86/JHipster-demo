export interface IBook {
  id?: number;
  name?: string;
  price?: number;
}

export class Book implements IBook {
  constructor(public id?: number, public name?: string, public price?: number) {}
}
