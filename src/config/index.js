import dotEnvExtended from "dotenv-extended";
import fs from "fs";
import "regenerator-runtime/runtime.js";

let environmentFile;

const env = process.env.NODE_ENV || 'development';

// override the default values for these options in the dotenv-extended module
const envOptions = {
  errorOnMissing: env === "production",
  includeProcessEnv: true,
};

// Load appropriate env file for the environment
switch (env) {
  case "development":
    environmentFile = ".env.local";
    break;
  case "test":
    environmentFile = ".env.test";
    break;
  case "production":
    environmentFile = ".env.production";
    break;
  default:
    throw new Error("Invalid NODE_ENV. Ensure the NODE_ENV environment variable is set");
}

if (fs.existsSync(environmentFile)) {
  envOptions.path = environmentFile;
}

dotEnvExtended.load(envOptions);

const commonConfig = {
  appPort: process.env.PORT || 4000,
  dbName: process.env.DATABASE_NAME,
  connectionString: process.env.DATABASE_URI,
  dbUser: process.env.DATABASE_USER,
  dbPassword: process.env.DATABASE_PASSWORD,
  dbHost: process.env.DATABASE_HOST,
  dbPort: process.env.DATABASE_PORT,
};

export default {
  development: {
    ...commonConfig,
    logFormat: "dev",
    env: "dev",
    mongooseDebugMode: true,
  },
  test: {
    ...commonConfig,
    logFormat: "dev",
    env: "test",
    mongooseDebugMode: false,
  },
  production: {
    ...commonConfig,
    logFormat: "combined",
    env: "production",
    mongooseDebugMode: false,
  },
}[process.env.NODE_ENV || "development"];
