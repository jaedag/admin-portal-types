import { Member } from './directory-types'

export type ChurchLevel =
  | 'Fellowship'
  | 'Bacenta'
  | 'Constituency'
  | 'Council'
  | 'Stream'
  | 'Campus'
  | 'Campus'
  | 'Oversight'
  | 'Denomination'
  | 'Sonta'
  | 'Hub'
  | 'Ministry'
  | 'Federalministry'

export interface Church {
  id: string
  __typename: ChurchLevel
  name: string
  leader: Member
  vacationStatus: 'Active' | 'Vacation' | 'Online'
  levelName: ChurchLevel
}

export interface Stream extends Church {
  arrivalEndTime: string
  arrivalsPrefix: string
  bankAccount:
    | 'aes_account'
    | 'ges_account'
    | 'hge_account'
    | 'fle_account'
    | 'manual'
  mobilisationEndTime: string
  mobilisationStartTime: string
  arrivalStartTime: string
}
