import type { CodegenConfig } from "@graphql-codegen/cli";
import { addTypenameSelectionDocumentTransform } from "@graphql-codegen/client-preset";
import dotenv from "dotenv";

dotenv.config();
const GRAPHQL_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL + "/graphql/v1";
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

const config: CodegenConfig = {
  schema: [
    {
      [GRAPHQL_SUPABASE_URL]: {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
      },
    },
  ], // Using the local endpoint, update if needed
  documents: "src/**/*.tsx",
  overwrite: true,
  ignoreNoDocuments: true,
  generates: {
    "src/gql/": {
      preset: "client",
      documentTransforms: [addTypenameSelectionDocumentTransform],
      plugins: [],
      config: {
        scalars: {
          UUID: "string",
          Date: "string",
          Time: "string",
          Datetime: "string",
          JSON: "string",
          BigInt: "string",
          BigFloat: "string",
          Opaque: "any",
        },
      },
    },
  },
};

export default config;
