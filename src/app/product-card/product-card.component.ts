import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {InCart} from "../types/inCart";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  public productId?: number;
  @Input() product: any;
  @Output() onClick = new EventEmitter<InCart>();

  constructor(private route: ActivatedRoute) {
    this.productId = this.route.snapshot.params['id'];
    this.product = this.route.snapshot.queryParams;
  }

  ngOnInit(): void {
  }
}
