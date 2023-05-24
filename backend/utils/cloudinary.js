const CLOUDINARY_URL = "cloudinary://API_KEY:API_SECRET@CLOUD_NAME";

// Require the cloudinary library
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Use Cloudinary
cloudinary.config({
  cloud_name: "dzs6xguqs",
  api_key: "839936158994921",
  api_secret: "GfsHYhrbrVAhgaTOTJTZxYsRHuw",
});

// Log the configuration
console.log(cloudinary.config());

const image = path.join(__dirname, "..", "/public/images/1684906395126ad1.png");

// Example usage
cloudinary.uploader.upload(image, (error, result) => {
  if (error) {
    console.error(error);
  } else {
    console.log(result);
  }
});
