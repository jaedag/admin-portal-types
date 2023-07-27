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
