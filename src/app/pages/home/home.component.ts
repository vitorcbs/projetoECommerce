import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CategoriesService } from 'src/app/modules/Categories/services/categories.service';
import { ProductService } from 'src/app/modules/Product/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  recentProductList: Product[] = []
  constructor(private readonly _productService: ProductService, private readonly _category: CategoriesService) { }

  ngOnInit() {
    this._productService.listPaginatorProductsByCategory(0, 3, 1).subscribe((res) => {
      console.log(res)
      this.recentProductList = res
    })
  } 

}
