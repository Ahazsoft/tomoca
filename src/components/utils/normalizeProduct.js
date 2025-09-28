// src/utils/normalizeProduct.js

const normalizeProduct = (product) => {
  return {
    ...product,
    description: product.description || "No description available.",
    tags: product.tags || ["default"],
    category: product.category || { name: product.parent || "General" },
    sku: product.sku || "SKU-0000",
    reviews: product.reviews || [],
    imageURLs: product.imageURLs?.map((imgObj) => ({
      img: imgObj.img || imgObj.url || product.img,
      color: imgObj.color || { name: "default", clrCode: "#000" }
    })) || [{ img: product.img, color: { name: "default", clrCode: "#000" } }],
  };
};

export default normalizeProduct; // ✅ default export
