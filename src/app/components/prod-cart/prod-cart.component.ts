import { Component, OnInit } from '@angular/core';
import {IProduct} from './IProduct';

@Component({
  selector: 'app-prod-cart',
  templateUrl: './prod-cart.component.html',
  styleUrls: ['./prod-cart.component.css']
})
export class ProdCartComponent implements OnInit {

  public displayedColumns: string[] = ['sno', 'image', 'name' , 'price' , 'qty' , 'total'];

  public products:IProduct[] = [
    {
      sno : 'AA0022',
      name : 'Mi Watch',
      image : 'https://images-na.ssl-images-amazon.com/images/I/61OUIIXnPqL._AC_SX569_.jpg',
      price : 1950,
      qty : 3
    },
    {
      sno : 'AA0023',
      name : 'Mi Watch',
      image : 'https://images-na.ssl-images-amazon.com/images/I/61OUIIXnPqL._AC_SX569_.jpg',
      price : 1950,
      qty : 3
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public clickIncrQty(productId){
    this.products = this.products.map(product => {
      if(product.sno === productId){
        return {
          ...product,
          qty : product.qty + 1
        }
      }
      return product
    })
  }

  public clickDecrQty(productId){
    this.products = this.products.map(product => {
      if(product.sno === productId){
        return {
          ...product,
          qty : product.qty - 1 > 0 ? product.qty - 1 : 1
        }
      }
      return product
    })
  }

}
