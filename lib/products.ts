export type ProductColor = {
  name: string
  images: string[]
}

export type Product = {
  id: string
  name: string
  category: string
  price: number
  description: string
  sizes: string[]
  colors: ProductColor[]
}

export const products: Product[] = [
  {
    id: "CLCS-001",
    name: "CLCS-001",
    category: "Co-ord Sets",
    price: 1099,
    description: "Premium CLORIDDH co-ord set.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "offwhite",
        images: [
          "/Product images/CLCS-001/front.jpg",
          "/Product images/CLCS-001/side.jpg",
          "/Product images/CLCS-001/back.jpg",
          "/Product images/CLCS-001/detail.jpg",
        ],
      },
    ],
  },

  {
    id: "CLCS-002",
    name: "CLCS-002",
    category: "Co-ord Sets",
    price: 999,
    description: "Premium CLORIDDH co-ord set available in two colours.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "Mustard",
        images: [
          "/Product images/CLCS-002/mustard/front.jpg",
          "/Product images/CLCS-002/mustard/side.jpg",
          "/Product images/CLCS-002/mustard/back.jpg",
          "/Product images/CLCS-002/mustard/detail.jpg",
        ],
      },
      {
        name: "Pink",
        images: [
          "/Product images/CLCS-002/pink/front.jpg",
          "/Product images/CLCS-002/pink/side.jpg",
          "/Product images/CLCS-002/pink/back.jpg",
          "/Product images/CLCS-002/pink/detail.jpg",
        ],
      },
    ],
  },

  {
    id: "CLCS-003",
    name: "CLCS-003",
    category: "Co-ord Sets",
    price: 799,
    description: "Premium CLORIDDH co-ord set.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "blue & purple",
        images: [
          "/Product images/CLCS-003/front.jpg",
          "/Product images/CLCS-003/side.jpg",
          "/Product images/CLCS-003/back.jpg",
          "/Product images/CLCS-003/detail.jpg",
        ],
      },
    ],
  },

  {
    id: "CLCS-008",
    name: "CLCS-008",
    category: "Co-ord Sets",
    price: 799,
    description: "Premium CLORIDDH co-ord set.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "offwhite base with slate grey",
        images: [
          "/Product images/CLCS-008/front.jpg",
          "/Product images/CLCS-008/side.jpg",
          "/Product images/CLCS-008/back.jpg",
          "/Product images/CLCS-008/detail.jpg",
        ],
      },
    ],
  },

  {
    id: "CLD-006",
    name: "CLD-006",
    category: "dress",
    price: 799,
    description: "Premium CLORIDDH bottom wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "candy pink",
        images: [
          "/Product images/CLD-006/front.jpg",
          "/Product images/CLD-006/side.jpg",
          "/Product images/CLD-006/back.jpg",
          "/Product images/CLD-006/detail.jpg",
        ],
      },
    ],
  },

  {
    id: "CLD-007",
    name: "CLD-007",
    category: "dress",
    price: 799,
    description: "Premium CLORIDDH bottom wear.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "magenta pink",
        images: [
          "/Product images/CLD-007/front.jpg",
          "/Product images/CLD-007/side.jpg",
          "/Product images/CLD-007/back.jpg",
          "/Product images/CLD-007/detail.jpg",
        ],
      },
    ],
  },

  {
    id: "CLKS-004",
    name: "CLKS-004",
    category: "Kurtis",
    price: 899,
    description: "Premium CLORIDDH kurti.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "rust",
        images: [
          "/Product images/CLKS-004/front.jpg",
          "/Product images/CLKS-004/side.jpg",
          "/Product images/CLKS-004/back.jpg",
          "/Product images/CLKS-004/detail.jpg",
        ],
      },
    ],
  },

  {
    id: "CLKS-005",
    name: "CLKS-005",
    category: "Kurtis",
    price: 899,
    description: "Premium CLORIDDH kurti.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      {
        name: "coral pink",
        images: [
          "/Product images/CLKS-005/front.jpg",
          "/Product images/CLKS-005/side.jpg",
          "/Product images/CLKS-005/back.jpg",
          "/Product images/CLKS-005/detail.jpg",
        ],
      },
    ],
  },
]