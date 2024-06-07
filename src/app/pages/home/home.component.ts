import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/modules/Product/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recentProductList: Product[] = []
  constructor(private readonly _productService: ProductService) { }

  ngOnInit() {
    this._productService.listPaginatorProducts(0, 4).subscribe((res) => {
      console.log(res)
      this.recentProductList = res
    })
  } 

}
