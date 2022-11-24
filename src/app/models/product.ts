import {Brand} from "./brand";

export interface Product{
  id?:string;
  name?:string;
  price?:string;
  description?:string;
  brand:Brand;
}
