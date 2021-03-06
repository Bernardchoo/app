import gql from 'graphql-tag'

import { ProfileFields, ProfileFieldsDetailed, PartyFields } from './fragments'

export const NETWORK_ID_QUERY = gql`
  query getNetworkId {
    networkId: networkId @disableAuth
  }
`

export const CHECK_IF_USERNAME_IS_AVAILABLE_QUERY = gql`
  query isUsernameAvailable($username: String!) {
    available: isUsernameAvailable(username: $username)
  }
`

export const IS_WHITELISTED = gql`
  query isWhitelisted($address: String!) {
    isWhitelisted: isWhitelisted(address: $address)
  }
`

export const LEGAL_AGREEMENTS_QUERY = gql`
  query getLegalAgreements {
    legal: legalAgreements {
      id
      type
    }
  }
`

export const USER_PROFILE_QUERY = gql`
  ${ProfileFields}

  query getUserProfile($address: String, $username: String) {
    profile: userProfile(address: $address, username: $username) {
      ...ProfileFields
    }
  }
`

export const USER_PROFILE_DETAILED_QUERY = gql`
  ${ProfileFieldsDetailed}

  query getUserProfile($address: String, $username: String) {
    profile: userProfile(address: $address, username: $username) {
      ...ProfileFieldsDetailed
    }
  }
`

export const PARTY_QUERY = gql`
  ${PartyFields}

  query getParty($address: String!) {
    party(address: $address) {
      ...PartyFields
    }
  }
`

export const PARTY_ADMIN_VIEW_QUERY = gql`
  ${PartyFields}

  query getPartyAdminView($address: String!) {
    partyAdminView(address: $address) {
      ...PartyFields
    }
  }
`

export const ALL_PARTIES_QUERY = gql`
  ${PartyFields}

  query getParties {
    parties: allParties {
      ...PartyFields
    }
  }
`

export const REVERSE_RECORD_QUERY = gql`
  query getReverseRecord($address: String) {
    getReverseRecord(address: $address) @client {
      name
      address
    }
  }
`

export const TOKEN_QUERY = gql`
  query getToken($tokenAddress: String!) {
    token: getToken(tokenAddress: $tokenAddress) @client
  }
`

export const TOKEN_ALLOWANCE_QUERY = gql`
  query getTokenAllowance(
    $userAddress: String!
    $tokenAddress: String!
    $partyAddress: String!
  ) {
    tokenAllowance: getTokenAllowance(
      userAddress: $userAddress
      tokenAddress: $tokenAddress
      partyAddress: $partyAddress
    ) @client
  }
`
export const TOKEN_DECIMALS_QUERY = gql`
  query getTokenDecimals($tokenAddress: String!) {
    token: getTokenDecimals(tokenAddress: $tokenAddress) @client
  }
`

export const TOKEN_SYMBOL_QUERY = gql`
  query getTokenBySymbol($symbol: String!) {
    token: getTokenBySymbol(symbol: $symbol) @client
  }
`

export const POAP_USERS_SUBGRAPH_QUERY = gql`
  query event($eventId: String!) {
    event: event(id: $eventId) {
      id
      tokens {
        id
        owner {
          id
        }
      }
    }
  }
`
