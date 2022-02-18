export class Address {
  [key: string]: any;
  id: number = 0;
  zip: number = 0;
  city: string = '';
  country: string = '';
  street: string = '';
  notes: string = '';

  constructor(fakeAddress?: Address) {
    if (fakeAddress) {
      this.id = fakeAddress.id;
      this.zip = fakeAddress.zip;
      this.city = fakeAddress.city;
      this.country = fakeAddress.country;
      this.street = fakeAddress.street;
      this.notes = fakeAddress.notes;
    }
  }

  get full(): string {
    return [this.zip, this.country, this.city, this.street, this.notes].join(
      ', '
    );
  }

  toString(): string {
    return this.full;
  }
}
