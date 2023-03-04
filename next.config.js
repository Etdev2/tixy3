/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],

    })
    return config
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['acdhwdunlmjletxnddzq.supabase.co','tailwindui.com'],
  },
}
