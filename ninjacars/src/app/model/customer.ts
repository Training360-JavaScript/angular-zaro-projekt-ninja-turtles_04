import { Address } from './address';

export class Customer {
  [key: string]: any;
  id: number = 0;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  address: Address = new Address();
  active: boolean = false;

  constructor(customer?: Customer) {
    if (customer) {
      this.id = customer.id;
      this.firstName = customer.firstName;
      this.lastName = customer.lastName;
      this.email = customer.email;
      this.address = new Address(customer.address);
      this.active = customer.active;
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
