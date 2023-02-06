export interface CraftInterface {
  name: string;
  material: string;
  price: number;
  description: string;
  photo?: string;
  _id?: string;
}

export interface CraftSalesUpdateInterface {
  name: string;
  material: string;
  price: number;
  description: string;
  photo?: string;
  _id: string;
}