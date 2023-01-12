/* eslint-disable @typescript-eslint/ban-ts-comment */
import jwtDecode from 'jwt-decode'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { signIn } from 'services/AuthService'

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      // @ts-ignore
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        const result = await signIn(email, password)

        if (result.error) {
          throw new Error('Invalid email or password')
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const accessTokenDecoded: any = jwtDecode(result.access_token)
        const user: {
          id: string
          name: string
          email: string
          access_token: string
        } = {
          id: accessTokenDecoded.oid,
          name: accessTokenDecoded.name,
          email: email,
          access_token: result.access_token
        }

        return user
      }
    })
  ],
  callbacks: {
    async jwt(data) {
      // console.log('JWT', data)
      if (data.user) {
        data.token.account = data.user
      }
      // console.log('JWT', data.token)
      return data.token
    },
    async session({ session, token }) {
      // @ts-ignore
      const { access_token } = token.account
      // @ts-ignore
      const { user } = session

      return {
        ...session,
        user: { ...user, access_token }
      }
    }
  },
  pages: {
    signIn: '/auth/signin'
  }
}

export default NextAuth(authOptions)
