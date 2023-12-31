const isDev = process.env.VERCEL !== '1'

const APP_DATA_URL = isDev ? 'http://localhost:4455/dist/data' : 'https://itsjavi.com/supereffective-sdk/data'
const APP_ASSETS_URL = isDev ? 'http://localhost:4455/assets' : 'https://itsjavi.com/supereffective-assets/assets'

console.log('VERCEL is: ', process.env.VERCEL)
console.log('VERCEL_ENV is: ', process.env.VERCEL_ENV)
console.log('NODE_ENV is: ', process.env.NODE_ENV)
console.log('APP_DATA_URL is: ', APP_DATA_URL)
console.log('APP_ASSETS_URL is: ', APP_ASSETS_URL)

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_DATA_URL,
    APP_ASSETS_URL,
    NEXT_PUBLIC_APP_DATA_URL: APP_DATA_URL,
    NEXT_PUBLIC_APP_ASSETS_URL: APP_ASSETS_URL,
  },
  //   async rewrites() {
  //     return [
  //       {
  //         source: '/static/data/:path*',
  //         destination: `${APP_DATA_URL}/:path*`,
  //       },
  //       {
  //         source: '/static/assets/:path*',
  //         destination: `${APP_ASSETS_URL}/:path*`,
  //       },
  //     ]
  //   },
}

module.exports = nextConfig
