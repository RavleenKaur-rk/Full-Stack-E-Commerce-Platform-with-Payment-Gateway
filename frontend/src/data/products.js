export const categories = [
  "Summer",
  "Winter",
  "Dresses",
  "Tops",
  "Jeans",
  "Outerwear",
  "Shoes",
  "Sandals",
  "Bags",
  "Jewellery",
];

const clothingSizes = ["XS", "S", "M", "L", "XL"];
const shoeSizes = ["UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8"];

const unsplash = (id) =>
  `https://images.unsplash.com/${id}?w=900&auto=format&fit=crop&q=85`;

const catalog = {

  // SUMMER

  Summer: [
    {
      name: "The Essential Linen Set",
      price: 1499,
      image: unsplash("photo-1539109136881-3be0616acf4b"),
      color: "Beige",
      fabric: "Linen Blend",
      fit: "Relaxed Fit"
    },
    {
      name: "The Cotton Co-ord",
      price: 1849,
      image: unsplash("photo-1483985988355-763728e1935b"),
      color: "Cream",
      fabric: "Cotton",
      fit: "Regular Fit"
    },
    {
      name: "The Casual Summer Top",
      price: 1199,
      image: unsplash("photo-1529139574466-a303027c1d8b"),
      color: "Red",
      fabric: "Cotton Blend",
      fit: "Relaxed Fit"
    },
    {
      name: "The Summer Maxi Dress",
      price: 2549,
      image: unsplash("photo-1539008835657-9e8e9680c956"),
      color: "Blue",
      fabric: "Lightweight Blend",
      fit: "Flowing Fit"
    }
  ],

  // WINTER

  Winter: [
    {
      name: "The Essential Knit Sweater",
      price: 2499,
      image: unsplash("photo-1434389677669-e08b4cac3105"),
      color: "Cream",
      fabric: "Wool Blend",
      fit: "Relaxed Fit"
    },
    {
      name: "The Classic Winter Coat",
      price: 3499,
      image: unsplash("photo-1539533018447-63fcce2678e3"),
      color: "Camel",
      fabric: "Wool Blend",
      fit: "Regular Fit"
    },
    {
      name: "The Winter Knit",
      price: 2899,
      image: unsplash("photo-1576566588028-4147f3842f27"),
      color: "Neutral",
      fabric: "Knitted Cotton",
      fit: "Relaxed Fit"
    },
    {
      name: "The Everyday Winter Jacket",
      price: 3999,
      image: unsplash("photo-1543076447-215ad9ba6923"),
      color: "Blue",
      fabric: "Cotton Blend",
      fit: "Regular Fit"
    }
  ],

  // DRESSES

  Dresses: [
    {
      name: "The Elegant Maxi Dress",
      price: 2999,
      image: unsplash("photo-1496747611176-843222e1e57c"),
      color: "Neutral",
      fabric: "Cotton Blend",
      fit: "Flowing Fit"
    },
    {
      name: "The Signature Evening Dress",
      price: 3999,
      image: unsplash("photo-1595777457583-95e059d581b8"),
      color: "Red",
      fabric: "Satin Blend",
      fit: "Regular Fit"
    },
    {
      name: "The Modern Midi Dress",
      price: 3299,
      image: unsplash("photo-1515372039744-b8f02a3ae446"),
      color: "Neutral",
      fabric: "Viscose Blend",
      fit: "Regular Fit"
    },
    {
      name: "The Classic Floral Dress",
      price: 2799,
      image: unsplash("photo-1566174053879-31528523f8ae"),
      color: "Multicolor",
      fabric: "Polyester Blend",
      fit: "Regular Fit"
    }
  ],

  // TOPS

  Tops: [
    {
      name: "The Classic Everyday Top",
      price: 999,
      image: unsplash("photo-1564257577-2d5dca17d92e"),
      color: "White",
      fabric: "Cotton",
      fit: "Regular Fit"
    },
    {
      name: "The Signature Blouse",
      price: 1599,
      image: unsplash("photo-1564557287817-3785e38ec1f5"),
      color: "Neutral",
      fabric: "Viscose",
      fit: "Relaxed Fit"
    },
    {
      name: "The Casual Cotton Tee",
      price: 899,
      image: unsplash("photo-1521572163474-6864f9cf17ab"),
      color: "White",
      fabric: "Cotton",
      fit: "Regular Fit"
    },
    {
      name: "The Modern Shirt",
      price: 1799,
      image: unsplash("photo-1598554747436-c9293d6a588f"),
      color: "White",
      fabric: "Cotton Blend",
      fit: "Relaxed Fit"
    }
  ],

  // JEANS

  Jeans: [
    {
      name: "The Essential Straight Jeans",
      price: 1999,
      image: unsplash("photo-1541099649105-f69ad21f3246"),
      color: "Blue",
      fabric: "Denim",
      fit: "Straight Fit"
    },
    {
      name: "The Modern Denim",
      price: 2299,
      image: unsplash("photo-1542272604-787c3835535d"),
      color: "Blue",
      fabric: "Cotton Denim",
      fit: "Regular Fit"
    },
    {
      name: "The High Rise Jeans",
      price: 2499,
      image: unsplash("photo-1584370848010-d7fe6bc767ec"),
      color: "Light Blue",
      fabric: "Denim",
      fit: "High Rise"
    },
    {
      name: "The Relaxed Denim",
      price: 2199,
      image: unsplash("photo-1604176354204-9268737828e4"),
      color: "Blue",
      fabric: "Cotton Denim",
      fit: "Relaxed Fit"
    }
  ],

  // OUTERWEAR

  Outerwear: [
    {
      name: "The Classic Trench",
      price: 3999,
      image: unsplash("photo-1548624149-f3c5eaf84a20"),
      color: "Beige",
      fabric: "Cotton Blend",
      fit: "Regular Fit"
    },
    {
      name: "The Signature Long Coat",
      price: 4599,
      image: unsplash("photo-1539533018447-63fcce2678e3"),
      color: "Camel",
      fabric: "Wool Blend",
      fit: "Relaxed Fit"
    },
    {
      name: "The Tailored Blazer",
      price: 3799,
      image: unsplash("photo-1591047139829-d91aecb6caea"),
      color: "Neutral",
      fabric: "Polyester Blend",
      fit: "Tailored Fit"
    },
    {
      name: "The Casual Jacket",
      price: 3299,
      image: unsplash("photo-1551028719-00167b16eac5"),
      color: "Black",
      fabric: "Leather Blend",
      fit: "Regular Fit"
    }
  ],

  // SHOES

  Shoes: [
    {
      name: "The Classic Sneakers",
      price: 2499,
      image: unsplash("photo-1549298916-b41d501d3772"),
      color: "Brown",
      fabric: "Synthetic Upper",
      fit: "Standard Fit"
    },
    {
      name: "The Everyday Sneakers",
      price: 2799,
      image: unsplash("photo-1608231387042-66d1773070a5"),
      color: "White",
      fabric: "Synthetic Upper",
      fit: "Standard Fit"
    },
    {
      name: "The Elegant Heels",
      price: 2999,
      image: unsplash("photo-1543163521-1bf539c55dd2"),
      color: "Neutral",
      fabric: "Synthetic Leather",
      fit: "Standard Fit"
    },
    {
      name: "The Signature Shoes",
      price: 3299,
      image: unsplash("photo-1542291026-7eec264c27ff"),
      color: "Red",
      fabric: "Synthetic Upper",
      fit: "Standard Fit"
    }
  ],

  // SANDALS

  Sandals: [
    {
      name: "The Essential Sandals",
      price: 1499,
      image: unsplash("photo-1562273138-f46be4ebdf33"),
      color: "Neutral",
      fabric: "Synthetic Leather",
      fit: "Standard Fit"
    },
    {
      name: "The Classic Summer Sandals",
      price: 1799,
      image: unsplash("photo-1603487742131-4160ec999306"),
      color: "Brown",
      fabric: "Synthetic Leather",
      fit: "Standard Fit"
    },
    {
      name: "The Signature Block Heels",
      price: 2299,
      image: unsplash("photo-1560343090-f0409e92791a"),
      color: "Neutral",
      fabric: "Synthetic Upper",
      fit: "Standard Fit"
    },
    {
      name: "The Modern Sandals",
      price: 1899,
      image: unsplash("photo-1604654894610-df63bc536371"),
      color: "Neutral",
      fabric: "Synthetic Upper",
      fit: "Standard Fit"
    }
  ],

  // BAGS

  Bags: [
    {
      name: "The Signature Handbag",
      price: 2299,
      image: unsplash("photo-1584917865442-de89df76afd3"),
      color: "Brown",
      fabric: "Synthetic Leather",
      fit: "One Size"
    },
    {
      name: "The Classic Shoulder Bag",
      price: 2799,
      image: unsplash("photo-1548036328-c9fa89d128fa"),
      color: "Brown",
      fabric: "Synthetic Leather",
      fit: "One Size"
    },
    {
      name: "The Everyday Tote",
      price: 2499,
      image: unsplash("photo-1553062407-98eeb64c6a62"),
      color: "Neutral",
      fabric: "Fabric Blend",
      fit: "One Size"
    },
    {
      name: "The Modern Handbag",
      price: 2999,
      image: unsplash("photo-1566150905458-1bf1fc113f0d"),
      color: "Neutral",
      fabric: "Synthetic Leather",
      fit: "One Size"
    }
  ],

  // JEWELLERY

  Jewellery: [
    {
      name: "The Gold Tone Necklace",
      price: 999,
      image: unsplash("photo-1599643477877-530eb83abc8e"),
      color: "Gold",
      fabric: "Gold Tone Alloy",
      fit: "One Size"
    },
    {
      name: "The Minimal Earrings",
      price: 799,
      image: unsplash("photo-1535632066927-ab7c9ab60908"),
      color: "Gold",
      fabric: "Metal Alloy",
      fit: "One Size"
    },
    {
      name: "The Elegant Bracelet",
      price: 1199,
      image: unsplash("photo-1611591437281-460bfbe1220a"),
      color: "Gold",
      fabric: "Metal Alloy",
      fit: "One Size"
    },
    {
      name: "The Statement Ring",
      price: 1499,
      image: unsplash("photo-1605100804763-247f67b3557e"),
      color: "Silver",
      fabric: "Metal Alloy",
      fit: "Standard Fit",
      sizes: ["6", "7", "8"]
    }
  ],

  // ACCESSORIES

  Accessories: [
    {
      name: "The Signature Scarf",
      price: 899,
      image: unsplash("photo-1601924994987-69e26d50dc26"),
      color: "Multicolor",
      fabric: "Fabric Blend",
      fit: "One Size"
    },
    {
      name: "The Classic Sunglasses",
      price: 1299,
      image: unsplash("photo-1511499767150-a48a237f0083"),
      color: "Black",
      fabric: "Acetate",
      fit: "One Size"
    },
    {
      name: "The Essential Belt",
      price: 999,
      image: unsplash("photo-1624222247344-550fb60583dc"),
      color: "Brown",
      fabric: "Synthetic Leather",
      fit: "Adjustable Fit",
      sizes: ["S", "M", "L"]
    },
    {
      name: "The Modern Sunglasses",
      price: 1599,
      image: unsplash("photo-1572635196237-14b3f281503f"),
      color: "Black",
      fabric: "Acetate",
      fit: "One Size"
    }
  ]
};

// COLLECTIONS

const collections = [
  "Everyday Edit",
  "Evening Edit",
  "Modern Classics",
  "Seasonal Edit"
];

// SIZE SELECTION

function getSizes(category) {
  if (category === "Shoes" || category === "Sandals") {
    return shoeSizes;
  }

  if (
    category === "Bags" ||
    category === "Jewellery" ||
    category === "Accessories"
  ) {
    return ["One Size"];
  }

  return clothingSizes;
}

// CARE INSTRUCTIONS

function getCare(category) {
  if (category === "Shoes" || category === "Sandals") {
    return [
      "Wipe clean with a soft cloth",
      "Avoid prolonged exposure to water",
      "Store in a cool and dry place"
    ];
  }

  if (category === "Jewellery") {
    return [
      "Avoid direct contact with perfume",
      "Keep away from moisture",
      "Clean using a soft cloth"
    ];
  }

  if (category === "Bags" || category === "Accessories") {
    return [
      "Clean gently with a soft cloth",
      "Avoid excessive moisture",
      "Store carefully when not in use"
    ];
  }

  return [
    "Follow the garment care label",
    "Avoid bleach",
    "Dry in shade"
  ];
}

// FINAL PRODUCT DATA

export const products = categories.flatMap(category =>
  catalog[category].map((item, index) => ({
    ...item,

    id: `${category.toLowerCase()}-${index + 1}`,

    category,

    brand: "VELORA",

    images: item.images || [item.image],

    sizes: item.sizes || getSizes(category),

    isNew: index === 0 || index === 2,

    collection: collections[index],

    description:
      `${item.name} from VELORA. ` +
      `Designed for modern elegance and effortless style. ` +
      `A versatile addition to your curated wardrobe.`,

    details: [
      `Colour: ${item.color}`,
      `Material: ${item.fabric}`,
      `Fit: ${item.fit}`,
      `Category: ${category}`
    ],

    care: getCare(category),

    delivery: "Shipping calculated at checkout."
  }))
);

export default products;