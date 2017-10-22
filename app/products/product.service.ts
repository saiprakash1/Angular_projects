import {Injectable} from '@angular/core';
import {Product} from './product'
import {product_items} from './product-data';
import {findIndex} from 'lodash';
@Injectable()
export class ProductService{

private pitems=product_items;

getProductsFromData():Product[]{
return this.pitems;
}

addProduct(product:Product){
  this.pitems.push(product);
}


getProductsFromService(): Product[]{
  return [{
    id:1,
    name:"scissor",
    description:"sharp",
    price:5
  },{
    id:2,
    name:"scissor",
    description:"sharp",
    price:5
  },{
    id:3,
    name:"scissor",
    description:"sharp",
    price:5
  }];
}

updateProduct(product:Product){
  let index= findIndex(this.pitems,(p:Product)=>{ return p.id===product.id});
  this.pitems[index]=product;
}

deleteProduct(product:Product){
  this.pitems.splice(this.pitems.indexOf(product),1);
}

}
