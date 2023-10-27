export const parsePhoneNumber = (phoneNumber: string) => {
  let rawNumber = phoneNumber
  if (rawNumber.includes('+2330')) {
    rawNumber = rawNumber.replace('+2330', '+233')
  }

  return rawNumber
    .replace(/\s/g, '')
    .replace('+', '')
    .replace('(', '')
    .replace(')', '')
    .replace('-', '')
}

export const repackDecimals = (decimal: string | number) => {
  if (decimal === 0 || decimal === '0.0' || !decimal) {
    return '0.0'
  }

  return parseFloat(decimal.toString())
}

export const getFirstLetterInEveryWord = (string: string) => {
  if (string === null || string === undefined || string === '') return ''

  const words = string.split(' ')
  let initials = ''
  words.forEach((word) => {
    initials += word.charAt(0) + '. '
  })
  return initials
}
