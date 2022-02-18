import { Address } from './address';

export class Customer {
  [key: string]: any;
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  address: Address = new Address();
  active: boolean = false;

  constructor(fakeCustomer?: Customer) {
    if (fakeCustomer) {
      this.id = fakeCustomer.id;
      this.firstName = fakeCustomer.firstName;
      this.lastName = fakeCustomer.lastName;
      this.email = fakeCustomer.email;
      this.address = new Address(fakeCustomer.address);
      this.active = fakeCustomer.active;
    } else {
      this.address = new Address();
    }
  }

  get address_zip(): number {
    return this.address.zip;
  }

  get address_country(): string {
    return this.address.country;
  }

  get address_city(): string {
    return this.address.city;
  }

  get address_street(): string {
    return this.address.street;
  }
}
