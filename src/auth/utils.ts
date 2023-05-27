import { ChurchLevel, Role } from '..'

export const permitLeader = (churchLevel: ChurchLevel) => {
  let permittedFor: Role[] = []

  switch (churchLevel.toLowerCase()) {
    case 'fellowship':
      permittedFor = [
        'leaderOversight',
        'leaderGatheringService',
        'leaderStream',
        'leaderCouncil',
        'leaderConstituency',
        'leaderBacenta',
        'leaderFellowship',
      ]
      break
    case 'bacenta':
      permittedFor = [
        'leaderOversight',
        'leaderGatheringService',
        'leaderStream',
        'leaderCouncil',
        'leaderConstituency',
        'leaderBacenta',
      ]
      break
    case 'sonta':
      permittedFor = [
        'leaderGatheringService',
        'leaderStream',
        'leaderSonta',
        'leaderHub',
        'leaderMinistry',
        'leaderFederalministry',
      ]
      break
    case 'hub':
      permittedFor = [
        'leaderGatheringService',
        'leaderStream',
        'leaderHub',
        'leaderMinistry',
        'leaderFederalministry',
      ]
      break
    case 'ministry':
      permittedFor = [
        'leaderGatheringService',
        'leaderStream',
        'leaderMinistry',
        'leaderFederalministry',
      ]
      break
    case 'federalministry':
      permittedFor = ['leaderGatheringService', 'leaderFederalministry']
      break
    case 'constituency':
      permittedFor = [
        'leaderOversight',
        'leaderGatheringService',
        'leaderStream',
        'leaderCouncil',
        'leaderConstituency',
      ]
      break
    case 'council':
      permittedFor = [
        'leaderOversight',
        'leaderGatheringService',
        'leaderStream',
        'leaderCouncil',
      ]
      break
    case 'stream':
      permittedFor = [
        'leaderOversight',
        'leaderGatheringService',
        'leaderStream',
      ]
      break
    case 'gatheringservice':
      permittedFor = ['leaderOversight', 'leaderGatheringService']
      break
    case 'oversight':
      permittedFor = ['leaderOversight']
      break
    default:
      permittedFor = []
      break
  }

  return permittedFor
}

export const permitAdmin = (churchLevel: ChurchLevel) => {
  let permittedFor: Role[] = []
  switch (churchLevel) {
    case 'Fellowship':
    case 'Bacenta':
    case 'Sonta':
    case 'Hub':
    case 'Constituency':
      permittedFor = [
        'adminOversight',
        'adminGatheringService',
        'adminStream',
        'adminCouncil',
        'adminConstituency',
      ]
      break
    case 'Ministry':
      permittedFor = [
        'adminGatheringService',
        'adminStream',
        'adminMinistry',
        'adminFederalministry',
      ]
      break
    case 'Federalministry':
      permittedFor = [
        'adminGatheringService',
        'adminStream',
        'adminFederalministry',
      ]
      break

    case 'Council':
      permittedFor = [
        'adminOversight',
        'adminGatheringService',
        'adminStream',
        'adminCouncil',
      ]
      break
    case 'Stream':
      permittedFor = ['adminOversight', 'adminGatheringService', 'adminStream']
      break
    case 'GatheringService':
      permittedFor = ['adminOversight', 'adminGatheringService']
      break
    case 'Oversight':
      permittedFor = ['adminOversight']
      break
    default:
      permittedFor = []
      break
  }

  return permittedFor
}

export const permitLeaderAdmin = (churchLevel: ChurchLevel): Role[] => {
  return [...permitLeader(churchLevel), ...permitAdmin(churchLevel)]
}

export const permitMe = (churchLevel: ChurchLevel): Role[] => {
  return [
    ...permitLeaderAdmin(churchLevel),
    ...permitArrivals(churchLevel),
    ...permitArrivalsHelpers(churchLevel),
    ...permitTellerStream(),
  ]
}

export const permitArrivals = (churchLevel: ChurchLevel): Role[] => {
  let permittedFor: Role[] = []

  switch (churchLevel) {
    case 'Fellowship':
    case 'Bacenta':
      permittedFor = [
        'arrivalsAdminGatheringService',
        'arrivalsAdminStream',
        'arrivalsAdminCouncil',
        'arrivalsAdminConstituency',
      ]
      break
    case 'Constituency':
      permittedFor = [
        'arrivalsAdminGatheringService',
        'arrivalsAdminStream',
        'arrivalsAdminCouncil',
        'arrivalsAdminConstituency',
      ]
      break
    case 'Council':
      permittedFor = [
        'arrivalsAdminGatheringService',
        'arrivalsAdminStream',
        'arrivalsAdminCouncil',
      ]
      break
    case 'Stream':
      permittedFor = ['arrivalsAdminGatheringService', 'arrivalsAdminStream']
      break
    case 'GatheringService':
      permittedFor = ['arrivalsAdminGatheringService']
      break
    default:
      permittedFor = []
      break
  }

  if (churchLevel === 'Stream') {
    return [...permitAdmin(churchLevel), ...permittedFor]
  } else {
    return permittedFor
  }
}

export const permitArrivalsCounter = (): Role[] => {
  return ['arrivalsCounterStream']
}

export const permitArrivalsHelpers = (churchLevel: ChurchLevel): Role[] => {
  if (churchLevel === 'Stream') {
    return ['arrivalsCounterStream', 'arrivalsConfirmerStream']
  } else {
    return []
  }
}
export const permitLeaderAdminArrivals = (churchLevel: ChurchLevel): Role[] => {
  return [...permitLeaderAdmin(churchLevel), ...permitArrivals(churchLevel)]
}

export const permitAdminArrivals = (churchLevel: ChurchLevel): Role[] => {
  return [...permitAdmin(churchLevel), ...permitArrivals(churchLevel)]
}

export const permitTellerStream = (): Role[] => {
  return ['tellerStream']
}
