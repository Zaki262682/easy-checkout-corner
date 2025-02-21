
import { BottomNavigation } from "@/components/BottomNavigation";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Temporary data - would come from CMS/Supabase in production
const categories = [
  "All",
  "Electronics",
  "Home & Living",
  "Fashion",
  "Accessories",
];

const products = [
  {
    id: "1",
    name: "Modern Desk Lamp",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=60",
    category: "Home & Living",
  },
  {
    id: "2",
    name: "Wireless Earbuds",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&auto=format&fit=crop&q=60",
    category: "Electronics",
  },
  {
    id: "3",
    name: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1544117519-778e916d3d31?w=800&auto=format&fit=crop&q=60",
    category: "Electronics",
  },
  {
    id: "4",
    name: "Leather Wallet",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=60",
    category: "Accessories",
  },
  {
    id: "5",
    name: "Cotton T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=60",
    category: "Fashion",
  },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pb-20">
      <header className="p-4 bg-white shadow-sm sticky top-0 z-10">
        <h1 className="text-2xl font-semibold text-center">Categories</h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="overflow-x-auto pb-4 mb-6 -mx-4 px-4">
          <div className="flex gap-2 w-max">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Categories;
