import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import {Product} from "../types/product";
import {InCart} from "../types/inCart";

@Component({
  selector: 'app-button',
  template: '<button class="btn btn-success" (click)="addToCart($event)">Добавить в корзину</button>',
  styles: []
})
export class ButtonComponent implements OnInit {

  @Output() onClick = new EventEmitter<InCart>();
  @Input() product: any;

  constructor() { }

  ngOnInit(): void {}

  addToCart($event: Event) {
    $event.stopPropagation();
    let productInCart = new InCart();
    productInCart.product = this.product;
    this.onClick.emit(productInCart)
  }
}
