import { Component } from '@angular/core';
// import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './invoice.html',
  styleUrls: ['./invoice.css'] 
})
export class InvoiceComponent {

  invoice = {
    company: "Chiefex Technologies Pvt Ltd", 
    customer: "Aditya Kauthkar",
    date: "22-03-2026",
    items: [
      { name: "Website Design", qty: 1, price: 5000 },
      { name: "Hosting", qty: 1, price: 2000 }
    ]
  };

  getTotal() {
    return this.invoice.items.reduce(
      (sum, item) => sum + item.qty * item.price,
      0
    );
  }

  downloadPDF() {
    const element = document.getElementById('invoice');
    if (element) {
      import('html2pdf.js').then((html2pdf: any) => {
        html2pdf.default().from(element).save();
      });
    }
  }
}