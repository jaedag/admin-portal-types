import { Network, TimeGraph } from '..'
import { Member } from './directory-types'

export type ServiceRecord = {
  __typename: 'ServiceRecord' | 'RehearsalRecord'
  id: string
  createdAt: string
  created_by: Member
  attendance: number
  cash: number
  income: number
  onlineGiving?: number
  numberOfTithers: number
  foreignCurrency: string
  week: number
  familyPicture: string
  treasurers: Member[]
  noServiceReason: string
  serviceDate: {
    date: string
  }

  // Offering
  treasurerSelfie: string
  bankingProof: boolean
  bankingSlip: string
  transactionStatus: 'pending' | 'success' | 'failed' | 'send OTP'
  bankingSlipUploader: Member
  offeringBankedBy: Member
  bankingConfirmer: Member
}

export type AggregateServiceRecord = {
  id: string
  week: string
  attendance: number
  income: number
}

export interface BussingRecord {
  id: string
  week: number
  createdAt: string
  mobilisationPicture: string
  created_by: Member
  serviceDate: TimeGraph

  bussingPictures?: string[]
  attendance: number
  leaderDeclaration: number
  personalContribution: number
  numberOfBusses: number
  numberOfSprinters: number
  numberOfUrvans: number
  numberOfCars: number

  bussingCost: number
  bussingTopUp: number
  counted_by: [Member]

  comments: string
  arrivalTime: Date
  transactionId: number
  arrival_confirmed_by: Member

  mobileNetwork: Network
  momoNumber: string
  momoName: string
  vehicleRecords: VehicleRecord[]
}

export type AggregateBussingRecords = {
  id: string
  week: number
  attendance: number
  leaderDeclaration: number
  personalContribution: number
  numberOfSprinters: number
  numberOfUrvans: number
  numberOfCars: number
  bussingCost: number
  bussingTopUp: number
}

export type VehicleRecord = {
  id: string
  created_by: Member
  createdAt: string

  leaderDeclaration: number
  attendance: number
  personalContribution: number
  vehicle: 'Sprinter' | 'Urvan' | 'Car'

  momoNumber: string
  momoName: string
  mobileNetwork: Network
  vehicleTopUp: number
  vehicleCost: number
  picture: string

  counted_by: Member

  outbound: boolean
  comments: string
  arrivalTime: string
  transactionReference?: string
  transactionStatus?: string
}
