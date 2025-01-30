export interface ProductTypes {
  _id: string;
  id: string;
  name: string;
  imagePath: string;
  price: number;
  description: string;
  discountPercentage: number;
  isFeaturedProduct: boolean;
  quantity?: number;
  stockLevel: number;
  category: string;
}
