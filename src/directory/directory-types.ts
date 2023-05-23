import { Church } from './church-types'

export type TitleOptions = 'Pastor' | 'Reverend' | 'Bishop'
type Point = {
  srid: {
    low: number
    high: number
  }
  x: number
  y: number
  z?: undefined
}

export interface Member {
  id: string
  auth_id: string
  firstName: string
  lastName: string
  nameWithTitle: string
  middleName: string
  email: string
  pictureUrl: string
  whatsappNumber: string
  phoneNumber: string
  fellowship: Church
  hasCampAttendance: boolean
  visitationArea: string
  imclChecked: boolean
  areaOfResidence: string
  howYouJoined: string
  hasBibleTranslations: boolean
  graduatedUnderstandingSchools: string[]
  attendedCampsWithOtherBishops: string[]
  hasAudioCollections: boolean
  attendedCampsWithProphet: boolean
  location: Point
  hasHolyGhostBaptism: boolean
  hasWaterBaptism: boolean
}
