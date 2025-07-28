import React from "react";
import { notFound } from "next/navigation";
import DetailsWrapper from "@/components/dashboard/DetailsWrapper";

const productData: { [key: string]: { id: string; name: string; price: string; stock: number; category: string; description: string; sku: string; lastUpdated: string } } = {
  "456": { id: "456", name: "Smart Phone", price: "$50.00", stock: 100, category: "Electronics", description: "High-quality electronic device.", sku: "SP-456", lastUpdated: "2025-07-28" },
  "457": { id: "457", name: "Leather Wallet", price: "$50.00", stock: 50, category: "Accessories", description: "Stylish accessory for daily use.", sku: "LW-457", lastUpdated: "2025-07-27" },
  "458": { id: "458", name: "Wireless Headphones", price: "$89.99", stock: 75, category: "Electronics", description: "Advanced technology product.", sku: "WH-458", lastUpdated: "2025-07-26" },
  "459": { id: "459", name: "Smart Watch", price: "$199.99", stock: 30, category: "Electronics", description: "Feature-rich wearable device.", sku: "SW-459", lastUpdated: "2025-07-25" },
};

export default async function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = productData[id];

  if (!product) {
    notFound();
  }

  return (
    <DetailsWrapper>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-purple-700">
            Product Details
          </h1>
          <div className="flex gap-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Edit Product
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
              Delete Product
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-blue-50 to-purple-100 rounded-lg p-6 shadow">
          <h2 className="text-lg sm:text-xl font-bold text-purple-700 mb-4">
            {product.name}
          </h2>
          <p className="text-gray-700 mb-2">
            <strong>Price:</strong> {product.price}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Stock:</strong> {product.stock}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>SKU:</strong> {product.sku}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Last Updated:</strong> {product.lastUpdated}
          </p>
          <p className="text-gray-700">
            <strong>Description:</strong> {product.description}
          </p>
        </div>
      </div>
    </DetailsWrapper>
  );
}