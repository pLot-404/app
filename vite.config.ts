import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  const commonConfig = {
    root: './index.html',
    resolve: {
      extensions: ['.js', '.ts', '.json'],
    },
    spa: true,
    server: {
      
    },
  }; // common
  let modeConfig;

  if (command == "serve") {
    modeConfig = {
      base: '/',
      mode: 'development',
    }; //dev
  } else {
    modeConfig = {
      base: '/app/',
      mode: 'production',
    }; //prod
  }

  const config = { ...commonConfig, ...modeConfig };
  return config;
});
