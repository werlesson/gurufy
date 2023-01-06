import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      authorize(credentials) {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        // perform you login logic
        // find out user from db
        if (email !== 'john@gmail.com' || password !== '1234') {
          throw new Error('Invalid email or password')
        }

        return { id: 1, name: 'John Doe', email: 'john@gmail.com' }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin'
  }
}

export default NextAuth(authOptions)