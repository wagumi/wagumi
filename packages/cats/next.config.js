const withTM = require("next-transpile-modules")(["@wagumi/contracts"]);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withTM({
  presets: [require("../../next.config")],
  eslint: {
    ignoreDuringBuilds: true,
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV,
  },
  // async rewrites() {
  //   return {
  //     beforeFiles: [
  //       {
  //         source: "/:slug(\\d{1,3})",
  //         destination:
  //           "https://media.githubusercontent.com/media/wagumi/wagumi/main/generated/:slug.png",
  //       },
  //     ],
  //   };
  // },
});
