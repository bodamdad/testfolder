import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import pool from "/lib/db";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret : process.env.GITHUB_SECRETJUN,
  
  database: {
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    pool,
  },
  
};
export default NextAuth(authOptions);