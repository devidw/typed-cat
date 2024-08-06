export interface RevenueCatEvent {
  api_version: string
  event: {
    aliases: string[]
    app_id: string
    app_user_id: string
    commission_percentage: number
    country_code: string
    currency: string
    entitlement_id?: string
    entitlement_ids: string[]
    environment: "PRODUCTION" | "SANDBOX"
    event_timestamp_ms: number
    expiration_at_ms?: number
    id: string
    is_family_share: boolean
    offer_code?: string
    original_app_user_id: string
    original_transaction_id: string
    period_type: "NORMAL" | "TRIAL" | "INTRO" | "PROMOTIONAL" | "PREPAID"
    presented_offering_id?: string
    price?: number
    price_in_purchased_currency?: number
    product_id: string
    purchased_at_ms: number
    store:
      | "APP_STORE"
      | "MAC_APP_STORE"
      | "PLAY_STORE"
      | "AMAZON"
      | "PROMOTIONAL"
      | "STRIPE"
    subscriber_attributes: {
      [key: string]: {
        updated_at_ms: number
        value: string
      }
    }
    takehome_percentage?: number
    tax_percentage?: number
    transaction_id: string
    type:
      | "TEST"
      | "INITIAL_PURCHASE"
      | "RENEWAL"
      | "CANCELLATION"
      | "UNCANCELLATION"
      | "NON_RENEWING_PURCHASE"
      | "SUBSCRIPTION_PAUSED"
      | "EXPIRATION"
      | "BILLING_ISSUE"
      | "PRODUCT_CHANGE"
      | "TRANSFER"
      | "SUBSCRIPTION_EXTENDED"
      | "TEMPORARY_ENTITLEMENT_GRANT"
    auto_resume_at_ms?: number
    cancel_reason?:
      | "UNSUBSCRIBE"
      | "BILLING_ERROR"
      | "DEVELOPER_INITIATED"
      | "PRICE_INCREASE"
      | "CUSTOMER_SUPPORT"
      | "UNKNOWN"
    expiration_reason?:
      | "UNSUBSCRIBE"
      | "BILLING_ERROR"
      | "DEVELOPER_INITIATED"
      | "PRICE_INCREASE"
      | "CUSTOMER_SUPPORT"
      | "UNKNOWN"
    new_product_id?: string
    renewal_number?: number
    transferred_from?: string[]
    transferred_to?: string[]
  }
}
