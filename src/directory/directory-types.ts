import { Church } from './church-types'
import { TimeGraph } from './neo4j-types'

export type TitleOptions = 'Pastor' | 'Reverend' | 'Bishop'
export type GenderOptions = 'Male' | 'Female'
export type MaritalStatusOptions = 'Single' | 'Married'

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
  __typename: 'Member'
  id: string
  auth_id: string
  firstName: string
  middleName: string
  lastName: string
  fullName: string
  nameWithTitle: string
  currentTitle: TitleOptions
  email: string
  pictureUrl: string
  whatsappNumber: string
  phoneNumber: string
  fellowship: Church
  basonta: Church

  dob: TimeGraph
  title: Title
  gender: Gender
  maritalStatus: MaritalStatus
  occupation: Occupation

  visitationArea: string
  imclChecked: boolean
  areaOfResidence: string
  location: Point
}

type Gender = {
  gender: GenderOptions
}

type MaritalStatus = {
  status: MaritalStatusOptions
}

type Occupation = {
  occupation: string
}

type Title = {
  name: TitleOptions
}
