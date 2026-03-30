import {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";

const spacesClient = new S3Client({
  endpoint: process.env.ENDPOINT,
  region: process.env.REGION,
  credentials: {
    accessKeyId: process.env.ACCESS_KEY as string,
    secretAccessKey: process.env.SECRET_KEY as string,
  },
});
export const uploadFile = async (
  file: Express.Multer.File,
  folder: string = "uploads",
) => {
  const fileName = `${folder}/${Date.now()}-${file.originalname}`;

  await spacesClient.send(
    new PutObjectCommand({
      Bucket: process.env.BUCKET as string,
      Key: fileName,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read",
    }),
  );

  return {
    url: `${process.env.ENDPOINT}/${process.env.BUCKET}/${fileName}`,
    imageId: fileName,
  };
};

// delete file
export const deleteFile = async (imageId: string) => {
  await spacesClient.send(
    new DeleteObjectCommand({
      Bucket: process.env.BUCKET as string,
      Key: imageId,
    }),
  );
};

export default spacesClient;
