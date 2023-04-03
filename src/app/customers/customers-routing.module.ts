import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ListCustomersComponent } from './list-customers/list-customers.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';

const routes: Routes = [
  { path: '', component: ListCustomersComponent },
  { path: 'add', component: AddCustomerComponent },
  { path: 'edit/:id', component: EditCustomerComponent },
  { path: 'delete/:id', component: DeleteCustomerComponent },
  { path: 'search', component: SearchCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
