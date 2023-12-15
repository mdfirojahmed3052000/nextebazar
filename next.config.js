/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental:{
        appDir:true,
    },
    env:{
        DB_URL:"mongodb://0.0.0.0:27017/byenow",
        API_URL:"https://3000-mdfirojahmed-nextebazar-8bxa82ia0rr.ws-us106.gitpod.io/"
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
}

module.exports = nextConfig
