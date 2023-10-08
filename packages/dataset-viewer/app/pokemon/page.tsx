import PokeList from '@/components/pkm/poke-list'
import { PageProps } from '@/lib/types'
import { createQueryString } from '@/lib/utils'

export default function Page({ searchParams }: PageProps) {
  const gen = Number(searchParams.gen ?? 0) || 1
  const showForms = Boolean(searchParams.forms)
  const queryStr = createQueryString(searchParams)

  return (
    <>
      <PokeList gen={gen} showForms={showForms} query={queryStr} />
    </>
  )
}
