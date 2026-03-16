import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export class R2Service {
  private client: S3Client;
  private bucketName: string;

  constructor(env: { IMAGES: R2Bucket, ACCOUNT_ID?: string, ACCESS_KEY_ID?: string, SECRET_ACCESS_KEY?: string }) {
    // Note: In Cloudflare Workers, we can use the R2 binding directly for many things,
    // but the user specifically asked for @aws-sdk/client-s3 logic.
    // However, Workers R2 binding is usually preferred for performance.
    // I will implement a wrapper that uses the binding if possible, or S3 client if configured.
    
    this.client = new S3Client({
      region: "auto",
      endpoint: `https://${env.ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: env.ACCESS_KEY_ID || "",
        secretAccessKey: env.SECRET_ACCESS_KEY || "",
      },
    });
    this.bucketName = "kordexlabs-images";
  }

  // Upload using the R2 Binding (Standard Worker way)
  async uploadBinding(r2: R2Bucket, key: string, data: ArrayBuffer, contentType: string) {
    await r2.put(key, data, {
      httpMetadata: { contentType },
    });
    return key; // Return the key/path
  }

  // Upload using S3 SDK (as requested)
  async uploadS3(key: string, data: Buffer | Uint8Array, contentType: string) {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: key,
      Body: data,
      ContentType: contentType,
    });
    await this.client.send(command);
    return key;
  }
}
