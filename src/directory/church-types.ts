import { streamAccountType } from '..'
import { Member } from './directory-types'
import { TimeGraph } from './neo4j-types'
import { BussingRecord, ServiceRecord } from './service-types'

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
  | 'ChurchInsights'
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
  name: string
  __typename: ChurchLevel
  levelName: ChurchLevel
  leader: Member
  admin?: Member
  hubs?: Church[]
  lowerChurch?: Church[]
  memberCount: number
  services: ServiceRecord[]
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

export interface ChurchInsights extends Church {
  __typename: 'ChurchInsights'
  denominations: Denomination[]
}

export interface Denomination extends Church {
  __typename: 'Denomination'
  churchInsights: ChurchInsights
  oversights?: Oversight[]
}

export interface Oversight extends Church {
  __typename: 'Oversight'
  denomination: Denomination
  campuses?: Campus[]
}
export interface Campus extends Church {
  __typename: 'Campus'
  oversight: Oversight
  streams?: Stream[]
  creativeArts?: CreativeArts[]
}

export interface Stream extends Church {
  id: string
  name: string
  __typename: 'Stream'
  bankAccount: streamAccountType
  campus: Campus
  vacationStatus: VacationStatusOptions
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

export interface Council extends Church {
  __typename: 'Council'
  stream: Stream
  hubCouncils?: HubCouncil[]
  constituencies?: Constituency[]
  hubCouncilsFromMinistry?: HubCouncil[]
}

export interface Constituency extends Church {
  __typename: 'Constituency'
  council: Council
  bacentas: Bacenta[]
}

export interface Bacenta extends Church {
  __typename: 'Bacenta'
  constituency: Constituency
  vacationStatus: VacationStatusOptions
  arrivalsCodeOfTheDay: string
  momoNumber?: string
  outbound?: boolean
  sprinterTopUp?: number
  urvanTopUp?: number
  bussing?: BussingRecord[]
  bussingThisWeek?: BussingRecord
}

export interface Fellowship extends Church {
  __typename: ChurchLevel
  bacenta: Bacenta
  bankingCode: number
  vacationStatus: VacationStatusOptions
  meetingDay: {
    day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday'
  }
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
  ministry: Ministry
  hubs: Hub[]
}

export interface Hub extends Church {
  __typename: 'Hub'
  location: {
    latitude: number
    longitude: number
  }
  activeHubFellowshipCount: number
  vacationHubFellowshipCount: number
  vacationStatus: VacationStatusOptions
  meetingDay: {
    day: 'Wednesday' | 'Friday' | 'Saturday'
  }
  hubCouncil: HubCouncil
  creativeArts: Campus
  hubFellowships?: HubFellowship[]
}

export interface HubFellowship extends Fellowship {
  __typename: ChurchLevel
  hub: Hub
}
