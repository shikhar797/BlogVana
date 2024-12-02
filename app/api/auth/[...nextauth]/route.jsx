import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import { connectToDB } from '@utils/database';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_CLIENT_ID,  // Your Facebook App ID
    //   clientSecret: process.env.FACEBOOK_CLIENT_SECRET,  // Your Facebook App Secret
    // }),
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          let baseUsername = profile.name.replace(" ", "").toLowerCase();
          let uniqueUsername = baseUsername;
          let counter = 1;
        
          // Ensure the username is unique
          while (await User.findOne({ username: uniqueUsername })) {
            uniqueUsername = `${baseUsername}${counter}`;
            counter += 1;
          }
        
          // Create the user with a unique username
          await User.create({
            email: profile.email,
            username: uniqueUsername,
            image: profile.picture,
          });
        }
        

        return true
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false
      }
    },
  }
})

export { handler as GET, handler as POST }