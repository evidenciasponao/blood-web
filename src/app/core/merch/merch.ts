import { Component, OnInit, PLATFORM_ID, Inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-merch',
  imports: [CommonModule],
  templateUrl: './merch.html',
  styleUrl: './merch.css'
})
export class Merch implements OnInit {
  products: Product[] = [];
  loading = true;
  error = false;
  selectedProduct: Product | null = null;

  constructor(
    private productService: ProductService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('isPlatformBrowser:', isPlatformBrowser(this.platformId));
    console.log('apiUrl que se usará:', 'https://bloodfl-api-bvbfecd6d0etfzbq.eastus-01.azurewebsites.net/api/products');

    if (isPlatformBrowser(this.platformId)) {
      this.productService.getAll().subscribe({
        next: (data) => {
          console.log('Productos recibidos:', data);
          this.products = data;
          this.loading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Error completo:', err);
          console.error('Status:', err.status);
          console.error('Message:', err.message);
          this.error = true;
          this.loading = false;
          this.cdr.detectChanges();
        }
      });
    } else {
      console.log('NO es browser, SSR mode');
      this.loading = false;
    }
  }

  openProduct(product: Product) {
    this.selectedProduct = product;
  }

  closeProduct() {
    this.selectedProduct = null;
  }
}