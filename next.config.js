/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental:{
        appDir:true,
    },
    env:{
        DB_URL:"mongodb://0.0.0.0:27017/byenow",
        API_URL:"http://localhost:3000/"
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
}

module.exports = nextConfig
