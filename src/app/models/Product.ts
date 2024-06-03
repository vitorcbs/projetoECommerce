import { Category } from "./Category";

export class Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    category: Category;
    creationAt: string;
    updatedAt: string;
  
    constructor(
      id: number,
      title: string,
      price: number,
      description: string,
      images: string[],
      category: Category,
      creationAt: string,
      updatedAt: string
    ) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.description = description;
      this.images = images;
      this.category = category;
      this.creationAt = creationAt;
      this.updatedAt = updatedAt;
    }
}
