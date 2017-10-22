"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_service_1 = require("./product.service");
var lodash_1 = require("lodash");
var ProductComponent = (function () {
    function ProductComponent(_productservice) {
        this._productservice = _productservice;
        this.productForm = false;
        this.editProductForm = false;
        this.newProduct = {};
        this.editedProduct = {};
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductComponent.prototype.getProducts = function () {
        this.products = this._productservice.getProductsFromData();
    };
    ProductComponent.prototype.showEditProductForm = function (product) {
        if (!product) {
            this.productForm = false;
            return;
        }
        this.editProductForm = true;
        this.editedProduct = lodash_1.clone(product);
    };
    ProductComponent.prototype.showAddProductForm = function () {
        if (this.products.length) {
            this.newProduct = {};
        }
        this.productForm = true;
        this.isNewForm = true;
    };
    ProductComponent.prototype.saveProduct = function (products) {
        if (this.isNewForm) {
            this._productservice.addProduct(products);
        }
        this.productForm = false;
    };
    ProductComponent.prototype.updateProduct = function () {
        this._productservice.updateProduct(this.editedProduct);
        this.editProductForm = false;
        this.editedProduct = {};
    };
    ProductComponent.prototype.removeProduct = function (product) {
        this._productservice.deleteProduct(this.product);
    };
    ProductComponent.prototype.cancelEdits = function () {
        this.editedProduct = {};
        this.editProductForm = false;
    };
    ProductComponent.prototype.cancelNewProduct = function () {
        this.newProduct = {};
        this.productForm = false;
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'product.template.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map