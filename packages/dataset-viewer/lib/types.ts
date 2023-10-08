import { ReactNode } from 'react'

export const searchParamKeys = ['gen', 'forms'] as const
export type AppSearchParamKeys = typeof searchParamKeys

export type PageProps<P extends Array<string> = [], S extends AppSearchParamKeys = AppSearchParamKeys> = {
  params: {
    [key in P[number]]: string
  }
  searchParams: {
    [key in S[number]]: string | undefined
  }
}

export type LayoutProps<K extends Array<string> = []> = {
  children: ReactNode
} & {
  [key in K[number]]: ReactNode
}
