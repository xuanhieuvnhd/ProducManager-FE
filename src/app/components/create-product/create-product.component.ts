// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {BrandService} from "../../services/brand.service";
// @ts-ignore
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import {FormControl, FormGroup} from "@angular/forms";
import {Brand} from "../../models/brand";

// @ts-ignore
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  constructor(private productService: ProductService,
              private brandService: BrandService,
              private httpClient: HttpClient) { }

  form = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    brandId: new FormControl(''),
  })
  obj: any;
  listBrand: Brand[] = [];

  ngOnInit(): void {
    this.brandService.findAll().subscribe((data: Brand[])=> {
      console.log(data)
      this.listBrand = data;
    })
  }
  add() {
    console.log(this.form.value);
    this.obj = {
      name: this.form.value.name,
      price: this.form.value.price,
      description : this.form.value.description,
      brand: {
        id: this.form.value.brandId
      }
    }

    this.productService.save(this.obj).subscribe(()=>{
      alert('Tạo sản phẩm thành công');
      this.form.reset();
      // @ts-ignore
    }, error => {
      alert('Không tạo được sản phẩm');
    })
  }
}
