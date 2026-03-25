import { prisma } from "../../config/db.js";
export const createQuery = async (data: any) => {
  const addQuery: any = await prisma.query.create({
    data: {
      name: data.name,
      whatsappNumber: data.whatsappNumber,
      email: data.email,
      image: data.url,
      productName: data.productName,
      message: data.message,
      type: data.type,
    },
  });
  return addQuery;
};
export const getQuery = async (params: any) => {
  const { type, isRead } = params;
  const allowedTypes = ["gq", "pq"];
  if (type && !allowedTypes.includes(type as string)) {
    return "Invalid type.";
  }
  const queries = await prisma.query.findMany({
    where: {
      ...(type ? { type: type as string } : {}),
      ...(isRead !== undefined ? { checked: isRead === true } : {}),
    },
  });
  return queries;
};
