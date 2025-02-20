import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css'
})
export class InvoiceComponent {

}
