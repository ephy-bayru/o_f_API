import { ProductModel } from "../components/products/v1/data/schema/products.schema";


  const products = [
    {
      name: "Product 1",
      description: "This is the first product",
      category: "Category 1",
      subcategory: "Subcategory 1",
      price: 10.99,
      salePrice: 9.99,
      stock: 100,
      sku: "PRD1",
      images: ["https://example.com/image1.jpg"],
      isFeatured: true,
      isPublished: true,
      rating: 4.5,
      totalReviews: 10,
      tags: ["Tag 1", "Tag 2"],
      brand: "Brand 1",
    },
    {
      name: "Product 2",
      description: "This is the second product",
      category: "Category 1",
      subcategory: "Subcategory 2",
      price: 20.99,
      salePrice: 18.99,
      stock: 50,
      sku: "PRD2",
      images: ["https://example.com/image2.jpg"],
      isFeatured: false,
      isPublished: true,
      rating: 3.5,
      totalReviews: 5,
      tags: ["Tag 1", "Tag 3"],
      brand: "Brand 2",
    },
  ];

  async function seedDatabase() {
    try {
    // Drop the existing collections
    await ProductModel.deleteMany({});

    // Seed the data
    await ProductModel.insertMany(products);
  
      console.log('Database seeded successfully');
    } catch (error) {
      console.error('Error seeding the database:', error);
    }
  }

export default seedDatabase;

