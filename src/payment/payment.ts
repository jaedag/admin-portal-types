export type Network = 'MTN' | 'Vodafone' | 'AirtelTigo' | 'Airtel' | 'Tigo'
export type NetworkCode = 'mtn' | 'vod' | 'tgo'
export type streamAccountType =
  | 'manual'
  | 'aes_account'
  | 'kwabenya_account'
  | 'adenta_account'
  | 'fle_account'
  | 'oa_kumasi'
  | 'kwabenya_morning_account'
  | 'oa_ghnorth'
  | 'oa_ghsouth'
  | 'oa_gheast'
  | 'oa_ghwest'
  | 'oa_tarkwa'

export const getMobileCode = (network: Network): NetworkCode => {
  switch (network) {
    case 'MTN':
      return 'mtn'
    case 'Vodafone':
      return 'vod'
    case 'AirtelTigo':
      return 'tgo'
    case 'Airtel':
      return 'tgo'
    case 'Tigo':
      return 'tgo'
    default:
      break
  }

  return 'mtn'
}

export interface PayStackRequestBody {
  method: string
  baseURL: 'https://api.paystack.co/'
  url: string
  headers: {
    'content-type': 'application/json'
    Authorization: string
  }
  data?: unknown
}

export interface DebitDataBody extends PayStackRequestBody {
  data: {
    amount: number
    email: string
    currency: 'GHS'
    subaccount: string | undefined
    mobile_money: {
      phone: string
      provider: NetworkCode
    }
    metadata: {
      custom_fields: [
        {
          church_name: string
          church_level: string
          depositor_firstname: string
          depositor_lastname: string
        }
      ]
    }
  }
}

export interface SendPaymentOTP extends PayStackRequestBody {
  data: { reference: string; otp: string }
}
