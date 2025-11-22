/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "yourdomain.com", // <-- your website domain
      "res.cloudinary.com", // <-- if you use Cloudinary
      "images.unsplash.com", // <-- for Unsplash images
      "cdn-icons-png.flaticon.com", // <-- example external source
      "images.pexels.com",
      "th.bing.com",
      "tse3.mm.bing.net",
      "aaradhyahealthcare.co.in",
      " plus.unsplash.com",
    ],
  },
};

export default nextConfig;
