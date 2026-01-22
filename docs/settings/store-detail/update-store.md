---
id: update-store
title: Update Store
sidebar_label: Update Store
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "gray", fontWeight: "bold" }}>PATCH</span><br/>
URL : `https://open.revenuemonster.my/v3/store/1662168764176583360`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/store/1662168764176583360`

:::note
To update a specific store under the merchant. Specify `store_id` in your query.
:::

### Request Parameters

:::note

- The URL is consists of `[base_URL]`/v3/store/`[store_id]`

- Pass in `Store ID` in your query

:::

| Parameter              | Type              | Required | Description                                    | Example                                            |
| ---------------------- | ----------------- | -------- | ---------------------------------------------- | -------------------------------------------------- |
| `merchantSettlementId` | String            | No       | Linkage with payment settlement account        |                                                    |
| `name`                 | String            | Yes      | Store Name                                     | "REVENUE MONSTER"                                  |
| `addressLine1`         | String            | Yes      | Store Address 1                                | "B-5-30, 5th Floor, Block Bougainvillea,"          |
| `addressLine2`         | String            | No       | Store Address 2                                | "PJU 6A, Lebuhraya SPRINT, 10 Boulevard,"          |
| `postCode`             | String            | Yes      | Postcode of store                              | "47400"                                            |
| `city`                 | String            | Yes      | City of store                                  | "Petaling Jaya"                                    |
| `state`                | String            | Yes      | State of store                                 | "Selangor"                                         |
| `country`              | String            | Yes      | Country of store                               | "Malaysia"                                         |
| `countryCode`          | String            | Yes      | Country code of store contact number           | "60"                                               |
| `phoneNumber`          | String            | Yes      | Phone number of store                          | "377334080"                                        |
| `geoLocation`          | Object of [Float] | No       | Geo Location (latitude and longitude) of store | {"latitude": 3.1349857, "longitude": 101.6136659 } |

> Example Request

```json
curl --location --request PATCH "https://sb-open.revenuemonster.my/v3/store/1662168764176583360" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiKiJdLCJleHAiOjE1MjE2MjkyNTYsImlhdCI6MTUyMTYyMjA1NywiaXNzIjoiaHR0cHM6Ly9zYi1vYXV0aC5yZXZlbnVlbW9uc3Rlci5teSIsImp0aSI6IkVod0tFRTlCZFhSb1FXTmpaWE56Vkc5clpXNFF5cmYza3EzTDY4QnoiLCJuYmYiOjE1MjE2MjIwNTcsInN1YiI6IkVoUUtDRTFsY21Ob1lXNTBFSlhWemQzd3JhcVRPUklRQ2dSVmMyVnlFSXlKcUl6dnlNUFZjUSJ9.dJknY9MZHLNrKx1p7gZxS0_oA3uXLWplDU1r1dpwxIbmdB6yw4tQBTXKlWArDfKLlBDn6v22_gT5Px7sdCMj7e5M9eRoJoMnoPnslgYpmJJ5kjqAbKU7dUxKb1OzFLrvmtSK9r-FRLVtMFHioWYpwgSvSPBgZ6lAYkUyDzH7aKadFYtQcBuJR0hlq2CXtP0mzbHOeu2q6giONf3E5-XqS8lLRtuHPAbJ7_YFwo0Oe2zc6h05IOocmx_NvBVPfDBnuygTU063h70Q987MYeGDV_Os4N6N_I4b-GoHprEPtmntB1RJPrFrY28hvvoUfDHXHZVXT1GlrsozrkWV4EjbTw" \
  --header "X-Signature: sha256 Uf8oEHcq3l5ZkPc/y9eUsRjoKkx0dLUQz5PEFntWUZcR4A0DYdtQ9+VTx5Rq4e4XsRVp+4KZb4cwpDfzPABCZA==" \
  --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
  --header "X-Timestamp: 1527407052" \
  --data "{
	\"addressLine1\": \"gugusan melur\",
    \"city\": \"petaling jaya\",
    \"country\": \"malaysia.\",
    \"name\": \"yussuf\",
    \"countryCode\": \"60\",
    \"phoneNumber\": \"176473298\",
    \"postCode\": \"47810\",
    \"state\": \"selangor\"
}"
```

### Response Parameters

| Parameter | Type     | Description                                                                                               | Example                      |
| --------- | -------- | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object[] | Array of store object                                                                                     | (Refer to explanation below) |
| `code`    | String   | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br/>
<strong>Array of store object (item):</strong>

| Parameter              | Type              | Description                                                 | Example                                            |
| ---------------------- | ----------------- | ----------------------------------------------------------- | -------------------------------------------------- |
| `id`                   | String            | Store ID                                                    | "6170506694335521334"                              |
| `merchantSettlementId` | String            | Linkage with payment settlement account                     |                                                    |
| `name`                 | String            | Store Name                                                  | "REVENUE MONSTER"                                  |
| `addressLine1`         | String            | Store Address 1                                             | "B-5-30, 5th Floor, Block Bougainvillea,"          |
| `addressLine2`         | String            | Store Address 2                                             | "PJU 6A, Lebuhraya SPRINT, 10 Boulevard,"          |
| `postCode`             | String            | Postcode of store                                           | "47400"                                            |
| `city`                 | String            | City of store                                               | "Petaling Jaya"                                    |
| `state`                | String            | State of store                                              | "Selangor"                                         |
| `country`              | String            | Country of store                                            | "Malaysia"                                         |
| `countryCode`          | String            | Country code of store contact number                        | "60"                                               |
| `phoneNumber`          | String            | Phone number of store                                       | "377334080"                                        |
| `geoLocation`          | Object of [Float] | Geo Location (latitude and longitude) of store              | {"latitude": 3.1349857, "longitude": 101.6136659 } |
| `status`               | String            | Current status of store                                     | "ACTIVE"                                           |
| `isDefault`            | String            | Default store of merchant (first store created upon signup) | true                                               |
| `createdAt`            | DateTime          | Creation date time of store                                 | "2018-02-12T08:53:13Z"                             |
| `updatedAt`            | DateTime          | Last update date time of store                              | "2018-02-12T08:53:13Z"                             |

> Example Response

```json
{
  "item": {
    "id": "1662168764176583360",
    "name": "yussuf",
    "addressLine1": "GUGUSAN MELUR",
    "addressLine2": "",
    "postCode": "47810",
    "city": "PETALING JAYA",
    "state": "SELANGOR",
    "country": "MALAYSIA.",
    "countryCode": "60",
    "phoneNumber": "176473298",
    "geoLocation": {
      "latitude": 0,
      "longitude": 0
    },
    "status": "ACTIVE",
    "createdAt": "2018-05-27T17:24:06.501633Z",
    "updatedAt": "2018-05-27T17:24:06.501634Z"
  },
  "code": "SUCCESS"
}
```
