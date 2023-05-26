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

export interface MemberWithoutBioData {
  __typename: 'Member'
  id: string
  // eslint-disable-next-line camelcase
  auth_id?: string
  firstName: string
  lastName: string
  fullName: string
  pictureUrl: string
  nameWithTitle: string
}

export interface Member extends MemberWithoutBioData {
  id: string
  auth_id: string
  firstName: string
  lastName: string
  middleName: string
  nameWithTitle: string
  currentTitle: TitleOptions
  email: string
  pictureUrl: string
  whatsappNumber: string
  phoneNumber: string
  fellowship: Church
  ministry: Church

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
