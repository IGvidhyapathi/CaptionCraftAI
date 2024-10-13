export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://CCAI_owner:SJH3Bks6zEbr@ep-flat-math-a56knmup.us-east-2.aws.neon.tech/CCAI?sslmode=require",
    connectionString:
      "postgresql://CCAI_owner:SJH3Bks6zEbr@ep-flat-math-a56knmup.us-east-2.aws.neon.tech/CCAI?sslmode=require",
  },
};
