import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductService} from './product.service';
import {clone} from 'lodash';

@Component({
    moduleId: module.id,
    templateUrl: 'product.template.html'
})

export class ProductComponent implements OnInit {
products:Product[];
productForm:boolean=false;
editProductForm=false;
isNewForm:boolean;
newProduct:any={};
editedProduct:any={};
constructor(private _productservice:ProductService){

}
  ngOnInit(){
  this.getProducts();
  }

getProducts(){
this.products = this._productservice.getProductsFromData();
}

showEditProductForm(product:Product){
  if(!product){
    this.productForm=false;
    return;
  }
this.editProductForm=true;
this.editedProduct=clone(product);

}

showAddProductForm(){
  if(this.products.length){
    this.newProduct={};
  }
  this.productForm=true;
  this.isNewForm=true;
}
saveProduct(products:Product){
  if(this.isNewForm){
this._productservice.addProduct(products);
  }
  this.productForm=false;
}
updateProduct(){
  this._productservice.updateProduct(this.editedProduct);
  this.editProductForm=false;
  this.editedProduct={};
}
removeProduct(product:Product){
  this._productservice.deleteProduct(this.product);
}

cancelEdits(){
  this.editedProduct={};
  this.editProductForm=false;
}

cancelNewProduct(){
  this.newProduct={};
  this.productForm=false;
}


}
