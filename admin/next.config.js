/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['idvimagebucket131209-prod.s3.us-east-1.amazonaws.com'],
    loader: 'imgix',
    path: ''
  },
}
