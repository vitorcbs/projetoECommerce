import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-catalog-toolbar',
  templateUrl: './product-catalog-toolbar.component.html',
  styleUrls: ['./product-catalog-toolbar.component.scss']
})
export class ProductCatalogToolbarComponent{

  @Output() search = new EventEmitter<string>();
  @Output() clearFilter = new EventEmitter<void>();

  onSearch(searchValue: string) {
    this.search.emit(searchValue);
  }

  onClearFilter() {
    this.clearFilter.emit();
  }
  constructor() { }


}
