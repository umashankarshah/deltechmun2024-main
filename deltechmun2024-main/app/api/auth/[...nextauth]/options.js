import GoogleProvider from "next-auth/providers/google";
import adminDetails from "@/app/lib/Society Details/adminDetails"

let userRole = "user";
export const options = {
  providers: [
    GoogleProvider({
      profile(profile) {
        const isAdmin = adminDetails.some(
          (email) => email === profile.email
        );
        return {
          ...profile,
          id: profile.sub,
          role: isAdmin ? "admin" : "user",
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_Secret,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};