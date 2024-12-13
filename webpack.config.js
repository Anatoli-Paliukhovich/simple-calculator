import path from "path";
import url from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fileEntryPath = path.resolve(__dirname, "src", "index.js");
const fileOutputPath = path.resolve(__dirname, "build");
const fileEntryHtmlPath = path.resolve(__dirname, "index.html");

const config = (env) => {
  const isDevelopment = env.mode === "development";
  return {
    mode: env.mode ?? "development",
    entry: path.resolve(fileEntryPath),
    output: {
      path: path.resolve(fileOutputPath),
      filename: "[name].js",
      clean: true,
    },
    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(fileEntryHtmlPath) }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    devtool: isDevelopment ? "inline-source-map" : false,
    devServer: {
      port: 3000,
      open: true,
    },
  };
};

export default config;
