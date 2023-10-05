import errors, { ErrorWithCause } from './errors'
import format_v4 from './formats/v4.json'
import type { LivingDexDocSpecConfig, LivingDexDocSpecVersion, LivingDexDocSpecs } from './types'

const livingdexFormats: LivingDexDocSpecs = new Map()
livingdexFormats.set('v4', format_v4 as LivingDexDocSpecConfig)

export function getLivingDexFormat(format: LivingDexDocSpecVersion): LivingDexDocSpecConfig {
  const formatConfig = livingdexFormats.get(format)
  if (!formatConfig) {
    throw new ErrorWithCause(`Incompatible Living Dex format: ${format}`, errors.LIVINGDEX.INVALID_FORMAT.cause)
  }

  return formatConfig
}
