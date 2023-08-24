/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  async rewrites() {
    return [
      {
        source: '/graphql',
        destination: `${process.env.GRAPHQL_URL}/graphql`,
      },
    ];
  },
  reactStrictMode: true,
};
