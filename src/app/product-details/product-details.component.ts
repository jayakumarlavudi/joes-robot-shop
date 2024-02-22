import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { SortListPipe } from '../sort-list.pipe';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
//Use this name to inject into parent component
 @Input() product! : IProduct;
 @Output() buy = new EventEmitter()

  getImageUrl(product:IProduct){
    return  '/assets/images/robot-parts/' + product.imageName;
    
    }
    
    buyButtonClicked(product:IProduct){
        this.buy.emit();
    }

}
