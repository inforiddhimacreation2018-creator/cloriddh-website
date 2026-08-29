export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  images: string[];
  colors: string[];
  sizes: string[];
};

export const products: Product[] = [
  {
    id: "coord-1",
    name: "Elegant Co-ord Set",
    category: "Co-ord Set",
    price: 1299,
    images: ["/images/coord1.jpg.jpg"],
    colors: ["Terracotta"],
    sizes: ["S", "M", "L", "XL"],
  },

  {
    id: "kurti-1",
    name: "Premium Women's Kurti",
    category: "Kurti",
    price: 999,
    images: ["/images/coord2.jpg.jpg"],
    colors: ["Cream"],
    sizes: ["S", "M", "L", "XL"],
  },

  {
    id: "suit-1",
    name: "Elegant Suit Set",
    category: "Suit Set",
    price: 1499,
    images: ["/images/coord3.jpg.jpg"],
    colors: ["Pink"],
    sizes: ["S", "M", "L", "XL"],
  },

  {
    id: "new-1",
    name: "New Arrival",
    category: "New Arrival",
    price: 1799,
    images: ["/images/coord4.jpg.jpg"],
    colors: ["Blue"],
    sizes: ["S", "M", "L", "XL"],
  },
];