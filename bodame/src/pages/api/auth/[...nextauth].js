import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import db from '/lib/db';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret : process.env.GITHUB_SECRETJUN,

  callbacks: {
    async signIn(user, account, profile) {
      const isAllowedToSignIn = true;
      if (isAllowedToSignIn) {
        try {
          // 사용자 데이터베이스에 저장 또는 업데이트하는 로직
          const result = await db.query(
            `INSERT INTO users (githubId, name, email, image) VALUES (?, ?, ?, ?)
             ON DUPLICATE KEY UPDATE name=?, email=?, image=?`,
            [account.providerAccountId, user.name, user.email, user.image, user.name, user.email, user.image]
          );
          // INSERT 또는 UPDATE 성공 시
          if (result) {
            return true; // 로그인 허용
          }
        } catch (error) {
          // 오류 처리
          console.error('Error saving user to database', error);
          return false; // 로그인 거부
        }
      } else {
        // 사용자 로그인 거부
        return false;
      }
    },
    // ... 다른 콜백들
  },

};
export default NextAuth(authOptions);