import { Member } from './directory-types'

export type ChurchLevel =
  | 'Fellowship'
  | 'Bacenta'
  | 'Constituency'
  | 'Council'
  | 'Stream'
  | 'GatheringService'
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
  levelName: ChurchLevel
}

export interface Stream extends Church {
  arrivalEndTime: string
  arrivalsPrefix: string
  accountName:
    | 'aes_account'
    | 'ges_account'
    | 'hge_account'
    | 'fle_account'
    | 'manual'
  mobilisationEndTime: string
  mobilisationStartTime: string
  arrivalStartTime: string
}
