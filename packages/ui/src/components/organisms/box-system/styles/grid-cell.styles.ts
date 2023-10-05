import { css } from '@/css'

export default {
  cell: css({
    position: 'relative',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    pointerEvents: 'auto',
    userSelect: 'none',
    WebkitTouchCallout: 'none !important',
    WebkitTapHighlightColor: 'transparent !important',
    // touchAction: 'none',
    minWidth: '48px',
    minHeight: '48px',
    ':where([data-view-mode="unfied"]) &': {
      maxWidth: '96px',
      maxHeight: '96px',
    },
    // aspectRatio: 1,
    // padding: 2,
    // backgroundColor: 'gray.300',
    // shadow: 'md',
    // borderRadius: 'md',
    // aspectRatio: 1,
    borderRadius: 'full',
    cursor: 'pointer',
    color: 'text',
    textAlign: 'center',
    fontSize: 'xs',
    transition: 'all 0.2s ease-in-out',
    gap: 1,
    padding: '0.25rem',
    '&:before, &:after': {
      position: 'absolute',
      display: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: 'inset 0 0 0 1px',
      background: 'rgba(0,0,0,0.5)',
      zIndex: 1,
      right: '0.5ch',
      opacity: 0,
      width: '1rem',
      height: '1rem',
      borderRadius: 'full',
      textAlign: 'center',
      // transform: 'translate3dX(0)',
      transition: 'all 0.5s ease-in-out',
      transitionDelay: '0.25s',
      fontSize: 'sm',
      color: 'yellow.300',
    },

    ':where([data-show-indicators="true"]) &': {
      '&:before, &:after': {
        display: 'flex',
      },
    },
    '&:before': {
      content: '"✨"',
      boxShadowColor: 'yellow.300',
      top: '0.5rem',
      color: 'yellow.300',
    },
    '&:after': {
      content: '"✓"',
      top: 'auto',
      bottom: '0.5rem',
      color: 'green.400',
      boxShadowColor: 'green.300',
    },
    _dark: {
      color: '#f0f0f0',
    },
    _pressed_self: {
      transform: 'scale(0.9, 0.9)',
      // padding: 1,
      background: 'yellow.300',
      '&:not([data-longpressed]):after': {
        // transform: 'scale(1.5, 1.5, 1)',
        // animation: 'pulse 0.5s ease-in-out infinite',
      },
    },
    _longpressed_self: {
      transform: 'scale(0.8, 0.8)',
      background: 'yellow.500',
      '&:before': {
        // transform: 'scale(1.5, 1.5, 1)',
        // animation: 'pulse 0.5s ease-in-out infinite',
      },
    },
    _pressed_end_self: {
      // background: 'yellow.200',
      '&:before, &:after': {
        animation: 'pulse 0.4s linear infinite',
      },
      // transform: 'scale3d(0.9, 0.9, 1)',
      // '&:after': {
      //   animation: 'ping 0.5s ease-in-out 3, pulse 1s ease-in-out 1',
      // },
    },
    '&[data-state-caught="false"]': {
      // opacity: 0.75,
      // filter: 'grayscale(50%)',
      // outline: '2px dashed rgba(127,127,127,0.35)',
      outlineOffset: '-1px',
      '&:after': {
        opacity: 0,
        visibility: 'hidden',
      },
      '& img': {
        filter: 'grayscale(50%) contrast(0) brightness(1.5)',
        opacity: 0.5,
        _dark: {
          filter: 'grayscale(50%) contrast(0) brightness(0.5)',
        },
      },
      // '&:hover img': {
      //   filter: 'none',
      //   mixBlendMode: 'normal',
      // },
    },
    ':where([data-show-uncaught="true"]) &': {
      '&[data-state-caught="false"]': {
        '& img': {
          filter: 'none !important',
          opacity: 1,
        },
      },
    },
    '&[data-state-shiny="false"]': {
      // borderBottom: '2px solid',
      // borderColor: 'yellow.300',
      '&:before': {
        opacity: 0,
        visibility: 'hidden',
      },
    },
    '&[data-state-shiny="true"]': {
      // borderBottom: '2px solid',
      // borderColor: 'yellow.300',
      '&:before': {
        opacity: 1,
        visibility: 'visible',
        // transform: 'translateY(-50%)',
        // animation: 'ping 0.5s ease-in-out 3, pulse 1s ease-in-out 1',
      },
    },
    '&[data-state-caught="true"]': {
      // borderTop: '2px solid',
      // borderColor: 'green.300',
      '&:after': {
        opacity: 1,
        visibility: 'visible',
        // animation: 'ping 0.5s ease-in-out 3, pulse 1s ease-in-out 1',
      },
    },
  }),
  placeholder: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'full',
    width: 'full',
    color: 'text',
    backgroundColor: 'bgBoxBody',
    fontSize: 'xs',
  }),
  sprite: css({
    // pointerEvents: 'none',
    width: '100%',
    height: '100%',
    flex: 1,
    aspectRatio: 1,
    ':where([data-state-caught="true"]) &': {
      background: 'radial-gradient(circle,hsla(0,0%,33%,.25) 0%,hsla(0,0%,33%,0) 65%) no-repeat center center',
    },
    _dark: {
      ':where([data-state-caught="true"]) &': {
        background: 'radial-gradient(circle,hsla(0,0%,55%,.25) 0%,hsla(0,0%,55%,0) 65%) no-repeat center center',
      },
    },
    WebkitTapHighlightColor: 'transparent !important',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      objectPosition: 'center',
      // borderRadius: 'full',
    },
    // aspectRatio: 1,
  }),
  infoTypes: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'full',
    gap: 1,
    // pointerEvents: 'none',
  }),
  infoText: css({
    display: 'block',
    width: 'full',
    height: '2ch',
    lineHeight: '2ch',
    textAlign: 'center',
    color: 'text',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    userSelect: 'none',
  }),
  maleIcon: css({
    color: 'blue.600',
    fontWeight: 900,
    fontSize: '2ch',
  }),
  femaleIcon: css({
    color: 'pink.600',
    fontWeight: 900,
    fontSize: '2ch',
  }),
}
