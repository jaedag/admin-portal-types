import { Church } from './church-types'
import { TimeGraph } from './neo4j-types'

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
  ministry: Church

  dob: TimeGraph
  gender: Gender
  maritalStatus: MaritalStatus
  occupation: Occupation

  visitationArea: string
  imclChecked: boolean
  areaOfResidence: string
  location: Point
}

type Gender = {
  gender: 'Male' | 'Female'
}

type MaritalStatus = {
  maritalStatus: 'Single' | 'Married'
}

type Occupation = {
  occupation: string
}
