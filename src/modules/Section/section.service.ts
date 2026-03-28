import { prisma } from "../../config/db.js";
export const createSection = async (data: any) => {
  const slug = data.name.toLowerCase().replace(/\s+/g, "-");
  const section: any = await prisma.section.create({
    data: {
      name: data.name,
      slug: slug,
      priority: data.priority,
      products: {
        connect: data.productIds.map((id: any) => ({ id })),
      },
    },
    include: {
      products: true,
    },
  });
  return section;
};
export const getSection = async () => {
  const sectionList = await prisma.section.findMany({
    include: {
      products: {
        include: {
          images: true,
        },
      },
    },
  });
  return sectionList;
};
export const updateSection = async (payload:any)=>{
  const slug = payload.name.toLowerCase().replace(/\s+/g, "-");
  return await prisma.section.update({
    where:{
      id:payload.id
    },
    data:{
      name:payload.name,
      slug:slug,
      priority:payload.priority,
      products:{
        set:[],
        connect: payload.productIds.map((id: string) => ({ id }))
      }
    }
  })
}
