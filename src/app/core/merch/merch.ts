import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-merch',
  imports: [CommonModule],
  templateUrl: './merch.html',
  styleUrl: './merch.css'
})
export class Merch {

  products = [

    {
      name: 'Blood Black Edition',
      price: '$120.000 COP',
      image: 'images/negro.png',
      size: 'S • M • L • XL',
      description: 'Premium black hoodie featuring the official Blood logo.'
    },

    {
      name: 'Blood Death Edition',
      price: '$130.000 COP',
      image: 'images/death.png',
      size: 'S • M • L • XL',
      description: 'Exclusive design inspired by the band visual identity.'
    },

    {
      name: 'Blood Legacy',
      price: '$130.000 COP',
      image: 'images/legacy.png',
      size: 'S • M • L • XL',
      description: 'Premium collector edition hoodie.'
    },

    {
      name: 'Blood White Edition',
      price: '$130.000 COP',
      image: 'images/blanco.png',
      size: 'S • M • L • XL',
      description: 'Premium collector edition hoodie.'
    },

    {
      name: 'Blood Red Logo',
      price: '$120.000 COP',
      image: 'images/rojo.png',
      size: 'S • M • L • XL',
      description: 'Limited edition hoodie with red logo artwork.'
    }
    ,

    {
      name: 'Gorra Blood Legacy',
      price: '$120.000 COP',
      image: 'images/gorra.png',
      size: 'Unica',
      description: 'Limited edition hoodie with red logo artwork.'
    }

  ];

  selectedProduct: any = null;

  openProduct(product: any) {
    this.selectedProduct = product;
  }

  closeProduct() {
    this.selectedProduct = null;
  }

}