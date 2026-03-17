import { prisma } from "../../config/db";

export const createCategory = async (data: { name: string }) => {
  const slug = data.name.toLowerCase().replace(/\s+/g, "-")
  const category = await prisma.category.create({
    data: {
      name: data.name,
      slug
    },
  });

  return category;
};

export const getCategories = async () => {
  return prisma.category.findMany({
    orderBy: { createdAt: "desc" },
  });
};