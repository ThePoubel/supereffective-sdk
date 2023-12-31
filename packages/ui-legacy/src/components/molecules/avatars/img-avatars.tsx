import {
  GameIconImgFile,
  type GameIconImgFileProps,
  ItemImgFile,
  type ItemImgFileProps,
  MarkImgFile,
  type MarkImgFileProps,
  PokeImgFile,
  type PokeImgFileProps,
  RibbonImgFile,
  type RibbonImgFileProps,
} from '@/components/molecules'

import { AssetAvatar, type AssetAvatarPropsOf } from './AssetAvatar'

export function PokeAvatar(props: AssetAvatarPropsOf<PokeImgFileProps>): JSX.Element {
  return <AssetAvatar component={PokeImgFile} {...props} />
}

export function EmptyPokeAvatar(props: AssetAvatarPropsOf<PokeImgFileProps>): JSX.Element {
  return <AssetAvatar component={PokeImgFile} {...props} />
}

export function GameIconAvatar(props: AssetAvatarPropsOf<GameIconImgFileProps>): JSX.Element {
  return <AssetAvatar component={GameIconImgFile} {...props} />
}

export function ItemAvatar(props: AssetAvatarPropsOf<ItemImgFileProps>): JSX.Element {
  return <AssetAvatar component={ItemImgFile} {...props} />
}

export function MarkAvatar(props: AssetAvatarPropsOf<MarkImgFileProps>): JSX.Element {
  return <AssetAvatar component={MarkImgFile} {...props} />
}

export function RibbonAvatar(props: AssetAvatarPropsOf<RibbonImgFileProps>): JSX.Element {
  return <AssetAvatar component={RibbonImgFile} {...props} />
}
