export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export type ResponseProductList = {
  data: Array<Product>;
};

export type CartProduct = Product & {
  quantity: number;
};
