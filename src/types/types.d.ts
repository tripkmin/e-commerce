export type ProductT = {
  id: number;
  name: string;
  manufacturer: string;
  description: string;
  orginalPrice: number;
  finalPrice: number;
  img: string[];
  thumbnail: string[];
};

export type CartT = {
  id: number;
  name: string;
  amount: number;
  finalPrice: number;
  thumbnail: string[];
};
