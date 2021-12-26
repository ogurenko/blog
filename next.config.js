const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  webpack: (config, options) => {
    config.optimization = {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            ecma: 6,
            warnings: false,
            output: {
              comments: false,
            },
            compress: {
              drop_console: true, // remove console
            },
            ie8: false,
          },
        }),
        new CssMinimizerPlugin({
          parallel: true,
          minify: [
            CssMinimizerPlugin.cssnanoMinify,
            CssMinimizerPlugin.cleanCssMinify,
          ],
        }),
      ],
    };

    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom$": "react-dom/profiling",
      "scheduler/tracing": "scheduler/tracing-profiling",
    };

    return config;
  },
});
