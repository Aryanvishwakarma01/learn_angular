import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { TruncatePipe } from '../truncate-pipe';
import { FileSizePipe } from '../file-size-pipe';
import { Logger } from '../logger';
import { ProductService } from '../product-service';
@Component({
  selector: 'app-product',
  imports: [CommonModule, TruncatePipe, FileSizePipe],
  template: `
    <h2>Built-in Pipes Demo</h2>

    <p><b>Original Name:</b> {{ productName }}</p>
    <p><b>UpperCase:</b> {{ productName | uppercase }}</p>
    <p><b>LowerCase:</b> {{ productName | lowercase }}</p>
    <p><b>TitleCase:</b> {{ productName | titlecase }}</p>

    <hr>

    <p><b>Price:</b> {{ price }}</p>
    <p><b>Currency:</b> {{ price | currency:'INR' }}</p>

    <hr>

    <p><b>Discount:</b> {{ discount }}</p>
    <p><b>Percent:</b> {{ discount | percent }}</p>

    <hr>

    <p><b>Launch Date:</b> {{ launchDate }}</p>
    <p><b>Formatted Date:</b> {{ launchDate | date:'fullDate' }}</p>

    <hr>

    <p><b>Rating:</b> {{ rating }}</p>
    <p><b>Decimal:</b> {{ rating | number:'1.1-2' }}</p>

    <hr>

    <p><b>Product JSON:</b></p>
    <pre>{{ product | json }}</pre>

    <h2>DatePipe in Standalone Component</h2>

    <p>Original: {{ today }}</p>

    <p>Short: {{ today | date:'short' }}</p>
    <p>Medium: {{ today | date:'medium' }}</p>
    <p>Full Date: {{ today | date:'fullDate' }}</p>
    <p>Custom: {{ today | date:'yyyy-MM-dd HH:mm:ss' }}</p>

    <p>Created On: {{apiDate | date:'dd MMM yyyy, hh:mm a'}}</p>

    <p> {{today | date:'medium':'Asia/Kolkata'}}

     <h2>Currency Pipe Examples</h2>

    <p>Default: {{ price | currency }}</p>

    <p>USD: {{ price | currency:'USD' }}</p>

    <p>Indian Rupee: {{ price | currency:'INR':'symbol' }}</p>

    <p>Euro Code: {{ price | currency:'EUR':'code' }}</p>

    <p>No decimals: {{ price | currency:'INR':'symbol':'1.0-0' }}</p>

     <h2>Number Pipe Examples</h2>

    <p>Default: {{ amount | number }}</p>

    <p>No decimals: {{ amount | number:'1.0-0' }}</p>

    <p>Two decimals: {{ amount | number:'1.2-2' }}</p>

    <p>Min 3 integers: {{ amount | number:'4.1-2' }}</p>

    <p>{{description | truncate:15:'***'}}</p>

    <hr> 

    <p>{{fileSize | fileSize}}</p>

    <button (click)="save()">Save</button>

    <h2>Products</h2>
    <ul>
    <li *ngFor="let p of products">{{p}}</li>
    </ul>
    <hr>
    <h1>{{count}} </h1>
    <button (click)="updateCounter()">Increase</button>
  `,
  styleUrl: './product.css',
})
export class Product {
 productName = 'wireless mouse';
  count=0
  updateCounter(){
    this.count = this.count+1
  }
  // price = 2499;

  discount = 0.15;

  rating = 4.256;

  launchDate = new Date();

  product = {
    id: 101,
    name: 'Keyboard',
    stock: 40
  };

    today = new Date();

    apiDate = '2026-02-01T14:22:10.000Z'

      price = 12345.678;
        amount = 5678.91234;

  description = "bdsfsfsfsfsfsfsfaasfdasfddfffsfdsfs"

  fileSize = 4324354

  private logger= inject(Logger)

  save(){
    this.logger.log('Saved')
  }

  products: string[];
  constructor(private productService: ProductService){
    this.products = this.productService.getProducts();

  }
}
