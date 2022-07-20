/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  presets: [require("../../next.config")],
  async rewrites() {
    return [
      {
        source: "/:slug(\\d{1,})",
        destination: "/:slug.png",
      },
    ];
  },
};
