import { prisma } from "../../config/db.js";

type CreateProductInput = {
  name: string;
  description?: string;
  price: number;
  stock: number;
  categoryId: string;
  images: string[];
};

export const createProduct = async (data: CreateProductInput) => {
  const product = await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      stock: data.stock,
      categoryId: data.categoryId,

      images: {
        create: data.images.map((url) => ({
          url,
        })),
      },
    },
    include: {
      images: true,
      category: true,
    },
  });

  return product;
};

export const getProducts = async () => {
  return prisma.product.findMany({
    include: {
      images: true,
      category: true,
    },
  });
};