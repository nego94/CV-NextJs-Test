/** @type {import('next').NextConfig} */
const nextConfig = {
  // Izinkan gambar lokal tanpa perlu optimasi — ganti dengan gambar asli di public/images/
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
