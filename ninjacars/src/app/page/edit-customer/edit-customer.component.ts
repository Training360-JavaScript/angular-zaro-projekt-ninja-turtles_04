import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss'],
})
export class EditCustomerComponent implements OnInit {
  customer!: Customer;
  edit: boolean = true;
  endString = 'customers';

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private objectService: CustomerService,
    private toastr: ToastrService
  ) {
    this.ar.params
      .pipe(switchMap((params) => this.objectService.getOne(params['id'])))
      .subscribe((currentObject) => {
        if (
          currentObject === null ||
          currentObject === undefined ||
          currentObject.id < 1
        ) {
          this.edit = false;
          this.customer = new Customer();
        } else {
          this.customer = currentObject;
        }
      });
  }

  ngOnInit(): void {}

  onSend(customer: Customer) {
    const crudObservable: Observable<any> = this.edit
      ? this.objectService.update(customer)
      : this.objectService.create(customer);
    crudObservable.subscribe((result) => {
      this.toastr.success('Saving successful', '', {
        timeOut: 1800,
        positionClass: 'toast-top-right',
      });
      this.router.navigate([this.endString]);
    });
  }
}
