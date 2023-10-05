'use client'

import { BASE_IMAGE_URL } from '@/lib/dataset-client'
import { PokeImgFile } from '@supeffective/ui'

export const PokeImg = ({ assetId }: { assetId: string }) => {
  return <PokeImgFile assetId={assetId} baseUrl={BASE_IMAGE_URL} variant="home2d-icon" />
}

export const PokeImg3d = ({ assetId }: { assetId: string }) => {
  return <PokeImgFile assetId={assetId} baseUrl={BASE_IMAGE_URL} variant="home3d-icon" />
}