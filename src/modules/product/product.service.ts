import cloudinary from "../../config/cloudinary.js";
import { prisma } from "../../config/db.js";

type CreateProductInput = {
  name: string;
  description?: string;
  stock: string;
  categoryId: string;
};
export const createProduct = async (
  data: CreateProductInput,
  photos: Express.Multer.File[] | any,
) => {
  const uploadedImages = await Promise.all(
    photos.map(async (image: any) => {
      const b64 = Buffer.from(image.buffer).toString("base64");
      const dataURI = `data:${image.mimetype};base64,${b64}`;

      const result = await cloudinary.uploader.upload(dataURI, {
        resource_type: "auto",
      });

      return result;
    }),
  );
  const product: any = await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      stock: parseInt(data.stock),
      categoryId: data.categoryId,
      images: {
        create: uploadedImages.map((image) => ({
          url: image.secure_url,
          imageId: image.public_id,
          productId: product.id,
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
  return await prisma.product.findMany({
    include: {
      images: true,
      category: true,
    },
  });
};
export const getCategoryProducts = async (slug: any) => {
  return await prisma.product.findMany({
    where: {
      category: {
        slug: slug,
      },
    },
    include: {
      images: true,
      category: true,
    },
  });
};
export const getProductDetail = async (id: any) => {
  return await prisma.product.findUnique({
    where: { id: id },
    include: {
      images: true,
      category: true,
    },
  });
};
