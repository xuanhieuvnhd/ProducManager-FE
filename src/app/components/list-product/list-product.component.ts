// @ts-ignore
import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product";
import {ProductService} from "../../services/product.service";
// @ts-ignore
import {HttpClient} from "@angular/common/http";

// @ts-ignore
@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  list: any;

  constructor(private httpClient: HttpClient,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getAll().subscribe((result: any) => {
      this.list = result;
      console.log(result);
    }, (error: any) => {
      console.log(error)
    });
  }
  sortByPrice(){
    this.productService.sortByPrice().subscribe((result: any) => {
      this.list = result;
      console.log(result);
    }, (error: any) => {
      console.log(error)
    })
  }
  sortByPriceDesc(){
    this.productService.sortByPriceDesc().subscribe((result: any) => {
      this.list = result;
      console.log(result);
    }, (error: any) => {
      console.log(error)
    })
  }
}
