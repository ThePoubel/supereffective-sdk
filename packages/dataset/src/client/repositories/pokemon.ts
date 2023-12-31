import { type CompactPokemon, type Pokemon, type PokemonIndex, pokemonIndexSchema, pokemonSchema } from '../../schemas'
import { type SearchEngine, type SearchEngineIndex, createSearchIndex } from '../search'
import createSearchEngine from '../search/createSearchEngine'
import { createReadOnlyRepository } from './core/createReadOnlyRepository'
import type { Repository, RepositoryDataProvider } from './core/types'

// ----  Search hydrator ----

async function pokemonSearchIndexHydrator<K extends CompactPokemon | Pokemon>(
  entities: K[],
  searchIndex: SearchEngineIndex<K>,
): Promise<void> {
  await searchIndex.index(entities, [
    [
      'num',
      (pk) => {
        const dexNum = (pk.dexNum >= 5000 ? 0 : pk.dexNum).toString()

        return [dexNum, dexNum.padStart(3, '0'), dexNum.padStart(4, '0')]
      },
    ],
    ['name', (pk) => [pk.id, pk.name, pk.name.replace(/ /g, '').replace(/\s/g, '')]],
    ['type', (pk) => [pk.type1, pk.type2].filter(Boolean) as string[]],
    ['base', (pk) => pk.baseSpecies || pk.id],
    ['color', (pk) => pk.color || null],
    ['id', (pk) => pk.id || null],
    ['storable', (pk) => (pk.storableIn.length > 0 ? pk.storableIn : null)],
    [
      'obtainable',
      (pk) => {
        if ('obtainableIn' in pk) {
          return pk.obtainableIn.length > 0 ? pk.obtainableIn : null
        }

        return null
      },
    ],
  ])
}

// ----  Pokemon ----

export function createPokemonRepository(dataProvider: RepositoryDataProvider): Repository<Pokemon> {
  return createReadOnlyRepository<Pokemon>({
    id: 'pokemon',
    resourcePath: 'pokemon.min.json',
    schema: pokemonSchema,
    dataProvider: dataProvider,
  })
}

export function createPokemonIndexRepository(dataProvider: RepositoryDataProvider): Repository<PokemonIndex> {
  return createReadOnlyRepository<PokemonIndex>({
    id: 'pokemon-index',
    resourcePath: 'pokemon-index.min.json',
    schema: pokemonIndexSchema,
    dataProvider: dataProvider,
  })
}

export function createPokemonSearchEngine(repository: Repository<Pokemon>): SearchEngine<Pokemon> {
  return createSearchEngine<Pokemon>(repository, createSearchIndex(), pokemonSearchIndexHydrator)
}
