import { ChurchLevel } from './church-types'

export const setPriorityLevel = (churchType: ChurchLevel) => {
  let priority = 0
  switch (churchType) {
    case 'Denomination':
      priority = 1
      break
    case 'Oversight':
      priority = 2
      break
    case 'Campus':
      priority = 3
      break
    case 'Stream':
    case 'CreativeArts':
      priority = 4
      break
    case 'Council':
    case 'Ministry':
      priority = 5
      break
    case 'HubCouncil':
    case 'Constituency':
      priority = 6
      break
    case 'Hub':
    case 'Bacenta':
      priority = 7
      break
    case 'Fellowship':
      priority = 8
      break
    default:
      priority = 0
  }

  return priority
}
