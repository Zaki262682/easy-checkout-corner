
import { ImageCarousel } from "@/components/ImageCarousel";
import { ProductCard } from "@/components/ProductCard";
import { BottomNavigation } from "@/components/BottomNavigation";

// Temporary data - will be replaced with CMS data
const featuredProducts = [
  {
    id: "1",
    name: "Modern Desk Lamp",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "2",
    name: "Wireless Earbuds",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "3",
    name: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1544117519-778e916d3d31?w=800&auto=format&fit=crop&q=60",
  },
];

const carouselImages = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop&q=60",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60",
];

const Index = () => {
  return (
    <div className="pb-20">
      <header className="p-4 bg-white shadow-sm">
        <h1 className="text-2xl font-semibold text-center">TechStore</h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <ImageCarousel images={carouselImages} />
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Index;
