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
    async signIn({ user }) {
      if (user) {
        // 여기서 user 객체는 user.user 내부에 있음
        const userDetails = user.user;
    
        // 데이터베이스에 사용자 정보 저장
        const result = await db.query(
          `INSERT INTO users (githubId, name, email, image) VALUES (?, ?, ?, ?)
           ON DUPLICATE KEY UPDATE name=?, email=?, image=?`,
          [
            userDetails.id, // GitHub ID
            userDetails.name, // GitHub 이름
            userDetails.email, // 이메일 
            userDetails.image, // 이미지
            userDetails.name,
            userDetails.email,
            userDetails.image
          ]
        );
      }
    
      // 에러가 없다면 true를 반환하여 로그인 프로세스를 계속 진행
      return true;
    },
        // ... 다른 콜백들
  },

};
export default NextAuth(authOptions);