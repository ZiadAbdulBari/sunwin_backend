import cloudinary from "../../config/cloudinary.js";
import { prisma } from "../../config/db.js";
import { uploadFile,deleteFile } from "../../config/s3.js";
type CreateProductInput = {
  name: string;
  description?: string;
  stock: string;
  categoryId: string;
  shortName: string;
  keyFeature: string;
  specification: string;
  application: string;
  relatedProductIds: string;
};
export const createProduct = async (
  data: CreateProductInput,
  photos: Express.Multer.File[] | any,
) => {
  // const uploadedImages = await Promise.all(
  //   photos.map(async (image: any) => {
  //     const b64 = Buffer.from(image.buffer).toString("base64");
  //     const dataURI = `data:${image.mimetype};base64,${b64}`;

  //     const result = await cloudinary.uploader.upload(dataURI, {
  //       resource_type: "auto",
  //     });

  //     return result;
  //   }),
  // );
  const uploadedImages = await Promise.all(
    photos.map(async (image: any) => {
      return await uploadFile(image, "products");
    }),
  );
  const slug = data.name.toLowerCase().replace(/\s+/g, "-");
  const product: any = await prisma.product.create({
    data: {
      name: data.name,
      shortName: data.shortName,
      slug: slug,
      stock: parseInt(data.stock),
      description: data.description,
      keyFeature: data.keyFeature,
      specification: data.specification,
      categoryId: data.categoryId,
      application: data.application,
      images: {
        create: uploadedImages.map((image) => ({
          url: image.url,
          imageId: image.imageId,
        })),
      },
      relatedProducts: {
        create: (JSON.parse(data.relatedProductIds) ?? []).map(
          (childId: string, index: number) => ({
            childId,
          }),
        ),
      },
    },
    include: {
      images: true,
      category: true,
      relatedProducts: {
        include: {
          child: true,
        },
      },
    },
  });
  return product;
};
export const deleteProduct = async (id: string) => {
  const product = await prisma.product.findUnique({
    where: { id },
    include: { images: true },
  });

  if (!product) throw new Error("Product not found");

  await Promise.all(
    product.images.map((image) => deleteFile(image.imageId))
  );

  return await prisma.product.delete({
    where: { id },
  });
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
  const [products, categories] = await Promise.all([
    prisma.product.findMany({
    where: {
      category: {
        slug: slug,
      },
    },
    include: {
      images: true,
      category: true,
    },
  }),
  prisma.category.findMany(),
  ])
  return { products, categories };
};
export const getProductDetail = async (id: any) => {
  return await prisma.product.findUnique({
    where: { id: id },
    include: {
      images: true,
      category: true,
      relatedProducts: {
        include: {
          child: {
            include: {
              images: true,
            },
          },
        },
      },
    },
  });
};
