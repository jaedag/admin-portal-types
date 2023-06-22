export type Network = 'MTN' | 'Vodafone' | 'AirtelTigo' | 'Airtel' | 'Tigo'
export type NetworkCode = 'mtn' | 'vod' | 'tgo'
export type streamAccountType =
  | 'aes_account'
  | 'ges_account'
  | 'hge_account'
  | 'fle_account'
  | 'manual'

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
