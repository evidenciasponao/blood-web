import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  openProduct(product: Product) {
    this.selectedProduct = product;
  }

  closeProduct() {
    this.selectedProduct = null;
  }

}