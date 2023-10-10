import { css } from '@/stylesystem/css'

export default {
  box: css({
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    pointerEvents: 'none',
    overflow: 'hidden',
    // border: '2px solid #36D6D5',
    // backgroundColor: 'boxBg',
    border: '2px solid',
    borderColor: 'cBoxBorder',
    backgroundColor: 'cBgBoxBody',
    borderRadius: '1.5rem',
    contentVisibility: 'auto',
    userSelect: 'none',
    boxShadow: 'lg',
  }),
  boxHeader: css({
    display: 'flex',
    gap: 1,
    padding: '1rem',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // background: 'primary',
    backgroundColor: 'cPrimary',
    color: 'cText',
  }),
  boxTitle: css({
    fontSize: '1rem',
    fontWeight: 500,
    color: 'cPrimary',
    backgroundColor: 'cBg',
    padding: '0.4rem 1rem',
    borderRadius: '2rem',
    maxWidth: '18ch',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    flex: 1,
  }),
  boxBody: css({
    borderRadius: '0 0 2rem 2rem',
    color: 'text',
    display: 'grid',
    _intersecting: {
      gridTemplateColumns: 'repeat(6,minmax(48px,1fr))',
      gridTemplateRows: 'repeat(5,minmax(48px,1fr))',
      ':where([data-view-mode="unfied"]) &': {
        gridTemplateColumns: 'repeat(auto-fill,minmax(96px,1fr))',
        gridTemplateRows: 'none',
        // gridTemplateRows: 'repeat(5,minmax(48px,1fr))',
        // gridTemplateColumns: `repeat(auto-fill, minmax(360px, 1fr))`,
      },
    },
    pointerEvents: 'none',
    gap: '0rem',
    padding: '0.8rem',
  }),
  boxBodyPlaceholder: css({
    borderRadius: '0 0 2rem 2rem',
    color: 'text',
    display: 'grid',
    gridTemplateColumns: 'repeat(6, minmax(48px, 1fr))',
    gridTemplateRows: 'repeat(5, minmax(48px, 1fr))',
    pointerEvents: 'none',
    gap: 0,
    padding: '1rem',
    // aspectRatio: '3/2.5',
  }),
  boxBodyPlaceholderText: css({
    position: 'absolute',
    width: '100%',
    top: '50%',
    textAlign: 'center',
    transform: 'translate3d(-2rem,0%)',
    color: '#17A7AB',
    fontSize: '1.5rem',
    fontWeight: 500,
  }),
}
