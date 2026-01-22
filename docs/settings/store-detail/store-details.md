---
id: store-details
title: Get All Stores
sidebar_label: Get All Stores
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL : `https://open.revenuemonster.my/v3/stores`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/stores`

:::note

- To query for ALL stores under a merchant.

- To implement a pagination cursor, you may use query string: ~/?cursor= < cursor >\_

:::

### Request Parameters:

:::note
No request parameter is required for this endpoint.
:::

### Response Parameters

| Parameter | Type     | Description                                                                                               | Example                      |
| --------- | -------- | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `items`   | Object[] | Array of store object                                                                                     | (Refer to explanation below) |
| `code`    | String   | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |
| `meta`    | Object   | Database object                                                                                           | (Refer to explanation below) |

<br/>
<strong>Array of store object (items):</strong>

| Parameter      | Type               | Description                                                 | Example                                   |
| -------------- | ------------------ | ----------------------------------------------------------- | ----------------------------------------- |
| `id`           | String             | Store ID                                                    | "6170506694335521334"                     |
| `name`         | String             | Store Name                                                  | "REVENUE MONSTER"                         |
| `addressLine1` | String             | Store Address 1                                             | "B-5-30, 5th Floor, Block Bougainvillea," |
| `addressLine2` | String             | Store Address 2                                             | "PJU 6A, Lebuhraya SPRINT, 10 Boulevard," |
| `postCode`     | String             | Postcode of store                                           | "47400"                                   |
| `city`         | String             | City of store                                               | "Petaling Jaya"                           |
| `state`        | String             | State of store                                              | "Selangor"                                |
| `country`      | String             | Country of store                                            | "Malaysia"                                |
| `countryCode`  | String             | Country code of store contact number                        | "60"                                      |
| `phoneNumber`  | String             | Phone number of store                                       | "377334080"                               |
| `geoLocation`  | Object of [Float]  | Geo Location (latitude and longitude) of store              | {"Lat": 3.1349857, "Lng": 101.6136659 }   |
| `status`       | String             | Current status of store                                     | "ACTIVE"                                  |
| `isDefault`    | String             | Default store of merchant (first store created upon signup) | true                                      |
| `createdAt`    | DateTime           | Creation date time of store                                 | "2018-02-12T08:53:13Z"                    |
| `updatedAt`    | DateTime           | Last update date time of store                              | "2018-02-12T08:53:13Z"                    |

<br/>
<strong>Database object (meta):</strong>

| Parameter | Type | Description                     | Example |
| --------- | ---- | ------------------------------- | ------- |
| `count`   | Uint | Current page record             | 1       |
| `total`   | Uint | Total record in database        | 1       |
| `cursor`  | Uint | Optional, if pagination exists. | 1       |

> Example Response

```json
{
  "items": [
    {
      "id": "1662168764176583360",
      "name": "Test Store",
      "addressLine1": "20, JALAN JASA 38, TAMAN MUTIARA RINI",
      "addressLine2": "",
      "postCode": "81230",
      "city": "BALING",
      "state": "KEDAH",
      "country": "MALAYSIA",
      "countryCode": "60",
      "phoneNumber": "12354645547",
      "geoLocation": {
        "latitude": 0,
        "longitude": 0
      },
      "status": "ACTIVE",
      "createdAt": "2018-05-16T08:05:02Z",
      "updatedAt": "2018-05-16T08:05:02Z"
    },
    {
      "id": "526742853846521323",
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
      "createdAt": "2018-05-27T10:12:25Z",
      "updatedAt": "2018-05-27T10:12:25Z"
    },
    {
      "id": "6883264812332703106",
      "name": "XXX",
      "addressLine1": "",
      "addressLine2": "",
      "postCode": "",
      "city": "",
      "state": "",
      "country": "",
      "countryCode": "",
      "phoneNumber": "",
      "geoLocation": {
        "latitude": 0,
        "longitude": 0
      },
      "status": "ACTIVE",
      "createdAt": "2018-05-14T09:26:23Z",
      "updatedAt": "2018-05-14T09:26:23Z"
    }
  ],
  "code": "SUCCESS",
  "meta": {
    "count": 3,
    "total": 3
  }
}
```
