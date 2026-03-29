import cloudinary from "../../config/cloudinary.js";
import { prisma } from "../../config/db.js";

export const createBrand = async (data: any, photo: any) => {
  const uploadedImage = await cloudinary.uploader.upload(
    `data:${photo.mimetype};base64,${Buffer.from(photo.buffer).toString("base64")}`,
    { resource_type: "auto" },
  );
  await prisma.brandInfo.create({
    data: {
      name: data.name,
      logo: uploadedImage.url,
      mobile: data.mobile,
      email: data.email,
      address: data.address,
      zip: data.zip,
      country: data.country,
      map: data.map,
      website: data.website,
      facebook: data.facebook,
      linkedin: data.linkedin,
      whatsapp: data.whatsapp,
      about: data.about,
    },
  });
};
export const getBrandInfo = async ()=>{
    const info = await prisma.brandInfo.findMany();
    return info;
}
