import { prisma } from "../../config/db.js";

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
export const deteleCategory = async (id: string) => {
  return await prisma.category.delete({
    where: { id },
  });
};
// export const updateCategory = async (data:any) => {
//   const slug = data.name.toLowerCase().replace(/\s+/g, "-")
//   return await prisma.category.update({
//     where: { data.id},
//     data:{
//       name:data.name,
//       slug:slug
//     }
//   });
// };