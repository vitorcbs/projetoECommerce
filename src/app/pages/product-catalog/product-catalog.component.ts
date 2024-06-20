import { Component, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/modules/Product/services/product.service';
import { ProductCatalogToolbarComponent } from './product-catalog-toolbar/product-catalog-toolbar.component';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {

  @ViewChild(ProductCatalogToolbarComponent, { static: false }) toolbar: ProductCatalogToolbarComponent;
  products: Product[] = []
  unfilteredProducts: Product[] = []
  
  totalRecords = 0;
  pageSize = 8;

  p = 1

  constructor(private readonly productService: ProductService) {
  }
  ngOnInit(): void {
    this.getProducts()
  }

  filterProducts(searchValue: string) {
    this.products = this.products.filter(product =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  getProducts(){
    this.productService.getAllProducts().subscribe((res) => {
      this.products = res
      this.unfilteredProducts = res
    })
  }

  clearFilter() {
    this.products = this.unfilteredProducts
  }

}
