export class ErrorWithCause extends Error {
  cause: string
  constructor(message: string, cause = '') {
    super(message)
    this.cause = cause
  }
}

export class ErrorWithCode extends Error {
  code: string | number
  constructor(message: string, code: string | number) {
    super(message)
    this.code = code
  }
}

const ERROR_CAUSES = {
  LIVINGDEX: {
    INVALID_MARKDOWN: {
      cause: 'LIVINGDEX_INVALID_MARKDOWN',
    },
    INVALID_FORMAT: {
      cause: 'LIVINGDEX_INVALID_FORMAT',
    },
    INVALID_PROP_TYPE: {
      cause: 'LIVINGDEX_INVALID_PROP_TYPE',
    },
    INVALID_PROP_VALUE: {
      cause: 'LIVINGDEX_INVALID_PROP_VALUE',
    },
    NO_BOXES_DETECTED: {
      cause: 'LIVINGDEX_NO_BOXES_DETECTED',
    },
    BOXES_LIMIT_EXCEEDED: {
      cause: 'LIVINGDEX_BOXES_LIMIT_EXCEEDED',
    },
    BOX_ITEM_LIMIT_EXCEEDED: {
      cause: 'LIVINGDEX_BOX_ITEM_LIMIT_EXCEEDED',
    },
  },
}

export default ERROR_CAUSES
