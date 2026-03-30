
import { uploadFile } from "../../config/s3.js";
import { prisma } from "../../config/db.js";

export const createBrand = async (data: any, photo: any) => {
  const uploadedImage = await uploadFile(photo, "brands");
  
  await prisma.brandInfo.create({
    data: {
      name: data.name,
      logo: uploadedImage.url,
      logoId:uploadedImage.imageId,
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
