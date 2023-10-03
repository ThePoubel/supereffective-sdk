import { type SafeParseReturnType, z } from 'zod'
import { type Game, gameSchema } from '../schemas'

import recordList from '../../data/games.json'

const listSchema = z.array(gameSchema)

const validateSchema = () => {
  const errors: string[] = []
  const parsed: SafeParseReturnType<typeof recordList, Game[]> = listSchema.safeParse(recordList)
  const errorMsg = parsed.success ? '' : String(parsed.error)
  if (!parsed.success) {
    errors.push(errorMsg)
  }

  return errors
}

const validateForeignKeys = () => {
  const errors: string[] = []

  return errors
}

const validate = () => {
  const errors: string[] = []

  errors.push(...validateSchema())
  errors.push(...validateForeignKeys())

  return errors
}

console.log('')
console.log('Validating games...')

const errors = validate()

if (errors.length > 0) {
  console.log('')
  console.log('Errors:')
  errors.every((err, i) => {
    console.error(err)
    if (i === 20) {
      console.log('')
      console.log(`  ... and other ${errors.length - i} errors`)
    }

    return i < 20
  })
  console.log('')
  console.log(`❌ Validation failed with ${errors.length} errors`)
  console.log('')
  process.exit(1)
} else {
  console.log('')
  console.log('✅ Validation passed')
  console.log('')
}
