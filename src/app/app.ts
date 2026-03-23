import { Component } from '@angular/core';
import { InvoiceComponent } from './invoice/invoice';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InvoiceComponent], // ✅ IMPORTANT
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}