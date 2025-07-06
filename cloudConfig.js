const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Load env variables
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

// Set up multer storage for cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'wanderlust-listings', // Cloudinary folder name
    allowed_formats: ['jpeg', 'png', 'jpg']
  }
});
console.log("Cloudinary ENV values:");
console.log("Cloud Name:", process.env.CLOUD_NAME);
console.log("API Key:", process.env.CLOUD_API_KEY);
console.log("API Secret:", process.env.CLOUD_API_SECRET ? "✓ Loaded" : "❌ Missing");

module.exports = {
  cloudinary,
  storage
};
