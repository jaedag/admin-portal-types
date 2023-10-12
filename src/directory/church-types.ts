import { Member } from './directory-types'
import { TimeGraph } from './neo4j-types'

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
  | 'HubFellowship'
  | 'Hub'
  | 'HubCouncil'
  | 'Ministry'
  | 'CreativeArts'

export type VacationStatusOptions = 'Vacation' | 'Active'

export type HistoryLog = {
  __typename: 'HistoryLog'
  id: string
  timeStamp: string
  historyRecord: string
  createdAt: TimeGraph
  loggedBy: Member
}

export interface Church {
  id: string
  __typename: ChurchLevel
  levelName: ChurchLevel
  leader: Member
  admin?: Member
  hubs?: Church[]
  lowerChurch?: Church[]
  memberCount: number
  history: HistoryLog[]
}

export interface HigherChurch extends Church {
  vacationStatus?: VacationStatusOptions
  admin: Member
  fellowshipCount: number
  bacentaCount: number
  constituencyCount: number
  councilCount: number
  streamCount: number
  memberCount: number
  hubCount: number
  ministryCount: number
  target: number
}

export interface Denomination extends Church {
  __typename: 'Denomination'
  oversight: Oversight
}

export interface Oversight extends Church {
  __typename: 'Oversight'
  streams: Stream
}
export interface Campus extends Church {
  __typename: 'Campus'
  streams?: Stream[]
  oversight: Oversight
  creativeArts?: CreativeArts[]
}

export interface Stream extends Church {
  id: string
  name: string
  __typename: 'Stream'
  bankAccount: string
  campus: Campus
  meetingDay: {
    day: 'Friday' | 'Saturday' | 'Sunday'
    dayNumber: number
  }
  mobilisationStartTime: string
  mobilisationEndTime: string
  arrivalStartTime: string
  arrivalEndTime: string
  arrivalsPayers: Member[]
  arrivalsCounters: Member[]
  ministries?: Ministry[]
  councils?: Council[]
}

export interface Constituency extends Church {
  __typename: 'Constituency'
  stream: Stream
  council: Council
}

export interface Council extends Church {
  __typename: 'Council'
  stream: Stream
  hubCouncils?: HubCouncil[]
  constituencies?: Constituency[]
  hubCouncilsFromMinistry?: HubCouncil[]
}

export interface CreativeArts extends Church {
  __typename: 'CreativeArts'
  campus: Campus
  ministries?: Ministry[]
}

export interface Ministry extends HigherChurch {
  id: string
  __typename: 'Ministry'
  name: string
  creativeArts: CreativeArts
  councils: Council[]
  hubCouncils?: HubCouncil[]
}

export interface HubCouncil extends Church {
  __typename: 'HubCouncil'
  hub: Hub
  ministry: Ministry
}

export interface Hub extends Church {
  __typename: 'Hub'
  location: {
    latitude: number
    longitude: number
  }
  hubFellowships?: HubFellowship[]
  activeHubFellowshipCount: number
  vacationHubFellowshipCount: number
  hubCouncil: HubCouncil
  creativeArts: Campus
  vacationStatus: VacationStatusOptions
  meetingDay: {
    day: 'Wednesday' | 'Friday' | 'Saturday'
  }
}

export interface HubFellowship extends Church {
  __typename: 'HubFellowship'
  hub: Hub
}
