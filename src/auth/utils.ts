import { ChurchLevel, Role } from '..'

export const isAuthorised = (permittedRoles: Role[], userRoles: Role[]) => {
  if (permittedRoles?.includes('all')) {
    return true
  }

  return permittedRoles?.some((r) => userRoles.includes(r))
}

export const permitLeader = (churchLevel: ChurchLevel) => {
  let permittedFor: Role[] = []

  switch (churchLevel.toLowerCase()) {
    case 'fellowship':
      permittedFor = [
        'leaderOversight',
        'leaderCampus',
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
        'leaderCampus',
        'leaderStream',
        'leaderCouncil',
        'leaderConstituency',
        'leaderBacenta',
      ]
      break
    case 'sonta':
      permittedFor = [
        'leaderCampus',
        'leaderStream',
        'leaderSonta',
        'leaderHub',
        'leaderMinistry',
        'leaderFederalministry',
      ]
      break
    case 'hub':
      permittedFor = [
        'leaderCampus',
        'leaderStream',
        'leaderHub',
        'leaderMinistry',
        'leaderFederalministry',
      ]
      break
    case 'ministry':
      permittedFor = [
        'leaderCampus',
        'leaderStream',
        'leaderMinistry',
        'leaderFederalministry',
      ]
      break
    case 'federalministry':
      permittedFor = ['leaderCampus', 'leaderFederalministry']
      break
    case 'constituency':
      permittedFor = [
        'leaderOversight',
        'leaderCampus',
        'leaderStream',
        'leaderCouncil',
        'leaderConstituency',
      ]
      break
    case 'council':
      permittedFor = [
        'leaderOversight',
        'leaderCampus',
        'leaderStream',
        'leaderCouncil',
      ]
      break
    case 'stream':
      permittedFor = ['leaderOversight', 'leaderCampus', 'leaderStream']
      break
    case 'campus':
      permittedFor = ['leaderOversight', 'leaderCampus']
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
        'adminCampus',
        'adminStream',
        'adminCouncil',
        'adminConstituency',
      ]
      break
    case 'Ministry':
      permittedFor = [
        'adminCampus',
        'adminStream',
        'adminMinistry',
        'adminFederalministry',
      ]
      break
    case 'Federalministry':
      permittedFor = ['adminCampus', 'adminStream', 'adminFederalministry']
      break

    case 'Council':
      permittedFor = [
        'adminOversight',
        'adminCampus',
        'adminStream',
        'adminCouncil',
      ]
      break
    case 'Stream':
      permittedFor = ['adminOversight', 'adminCampus', 'adminStream']
      break
    case 'Campus':
      permittedFor = ['adminOversight', 'adminCampus']
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
        'arrivalsAdminCampus',
        'arrivalsAdminStream',
        'arrivalsAdminCouncil',
        'arrivalsAdminConstituency',
      ]
      break
    case 'Constituency':
      permittedFor = [
        'arrivalsAdminCampus',
        'arrivalsAdminStream',
        'arrivalsAdminCouncil',
        'arrivalsAdminConstituency',
      ]
      break
    case 'Council':
      permittedFor = [
        'arrivalsAdminCampus',
        'arrivalsAdminStream',
        'arrivalsAdminCouncil',
      ]
      break
    case 'Stream':
      permittedFor = ['arrivalsAdminCampus', 'arrivalsAdminStream']
      break
    case 'Campus':
      permittedFor = ['arrivalsAdminCampus']
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
