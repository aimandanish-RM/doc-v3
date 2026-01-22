---
id: get-store-by-id
title: Get Store By ID
sidebar_label: Get Store By ID
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL : `https://open.revenuemonster.my/v3/store/10946114768247530`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/store/10946114768247530`

:::note
Use `Store ID` to check a particular store details.
:::

### Request Parameters:

:::note

- The URL is consists of `[base_URL]`/v3/store/`[store_id]`

- Pass in `Store ID` in your query

:::

### Response Parameters

| Parameter | Type     | Description                                                                                               | Example                      |
| --------- | -------- | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object[] | Array of store object                                                                                     | (Refer to explanation below) |
| `code`    | String   | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br/>
<strong>Array of store object (item):</strong>

| Parameter              | Type              | Description                                    | Example                                                      |
| ---------------------- | ----------------- | ---------------------------------------------- | ------------------------------------------------------------ |
| `id`                   | String            | Store ID                                       | "6170506694335521334"                                        |
| `merchantSettlementId` | String            | Linkage with payment settlement account        |                                                              |
| `name`                 | String            | Store Name                                     | "REVENUE MONSTER"                                            |
| `imageUrl`             | String            | Image of your Store                            | "https://storage.googleapis.com/rm-prod-asset/img/store.png" |
| `addressLine1`         | String            | Store Address 1                                | "B-5-30, 5th Floor, Block Bougainvillea,"                    |
| `addressLine2`         | String            | Store Address 2                                | "PJU 6A, Lebuhraya SPRINT, 10 Boulevard,"                    |
| `postCode`             | String            | Postcode of store                              | "55100"                                                      |
| `city`                 | String            | City of store                                  | "Petaling Jaya"                                              |
| `state`                | String            | State of store                                 | "Selangor"                                                   |
| `country`              | String            | Country of store                               | "Malaysia"                                                   |
| `countryCode`          | String            | Country code of store contact number           | "60"                                                         |
| `phoneNumber`          | String            | Phone number of store                          | "377334080"                                                  |
| `geoLocation`          | Object of [Float] | Geo Location (latitude and longitude) of store | {"Lat": 3.1349857, "Lng": 101.6136659 }                      |
| `status`               | String            | Current status of store                        | "ACTIVE"                                                     |
| `createdAt`            | DateTime          | Creation date time of store                    | "2018-02-12T08:53:13Z"                                       |
| `updatedAt`            | DateTime          | Last update date time of store                 | "2018-02-12T08:53:13Z"                                       |

> Example Response

```json
{
  "item": {
    "id": "1553067214325776225",
    "name": "Starbucks",
    "imageUrl": "https://storage.googleapis.com/rm-prod-asset/img/store.png",
    "addressLine1": "Berjaya Times Square,  Imbi",
    "addressLine2": "",
    "postCode": "55100",
    "city": "Kuala Lumpur",
    "state": "W.P. Kuala Lumpur",
    "country": "Malaysia",
    "countryCode": "60",
    "phoneNumber": "1234567890",
    "geoLocation": {
      "latitude": 3.1421984,
      "longitude": 101.71055120000005
    },
    "status": "ACTIVE",
    "createdAt": "2019-03-20T07:33:34Z",
    "updatedAt": "2019-03-20T07:33:34Z"
  },
  "code": "SUCCESS"
}
```
