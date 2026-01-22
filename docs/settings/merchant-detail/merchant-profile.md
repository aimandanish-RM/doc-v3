---
id: merchant-profile
title: Get Merchant Profile
sidebar_label: Get Merchant Profile
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL :`https://open.revenuemonster.my/v3/merchant`<br/>
Sandbox URL :`https://sb-open.revenuemonster.my/v3/merchant`

:::note
To query for merchant details.
:::

### Request Parameters:

:::note
No request parameter is required for this endpoint.
:::

### Response Parameters

| Parameter | Type   | Description                                                                                   | Example                    |
| --------- | ------ | --------------------------------------------------------------------------------------------- | -------------------------- |
| `item`    | Object | Object of item details.                                                                       | (Refer explanantion below) |
| `code`    | String | Status returned from Revenue Monster server, whether successfully called our endpoint or not. | "SUCCESS"                  |

<br/>

<strong>Item Object (item):</strong>

| Parameter            | Type     | Description                             | Example                                                        |
| -------------------- | -------- | --------------------------------------- | -------------------------------------------------------------- |
| `id`                 | String   | Store ID                                | "6170506694335521334"                                          |
| `companyName`        | String   | Company name of merchant                | "REVENUE MONSTER"                                              |
| `companyType`        | String   | Type of company incorporation           | "SOLE PROPRIETOR"                                              |
| `companyLogoUrl`     | String   | Public URL to show merchant's logo      | "https://storage.googleapis.com/rm-dev-asset/img/merchant.png" |
| `registrationNumber` | String   | Registration number of merchant         | “12344”                                                        |
| `businessCategory`   | String   | Business category of merchant           | "SOFTWARE AND IT"                                              |
| `establishedAt`      | DateTime | Established date time of merchant       | "2018-03-26T04:50:57Z"                                         |
| `countryCode`        | String   | Country code of merchant contact number | "60"                                                           |
| `phoneNumber`        | String   | Phone number of merchant                | "377334080"                                                    |
| `addressLine1`       | String   | Address 1 of merchant                   | "20, JALAN JASA 38, TAMAN MUTIARA RINI"                        |
| `addressLine2`       | String   | Address 2 of merchant                   | ""                                                             |
| `postcode`           | String   | Postcode of merchant                    | “81300”                                                        |
| `city`               | String   | City of merchant                        | "Selangor"                                                     |
| `state`              | String   | State of merchant                       | "Selangor"                                                     |
| `country`            | String   | Country of merchant                     | "Malaysia"                                                     |
| `invoiceAddress`     | Object   | Object of Invoice Address               | (Refer below)                                                  |
| `isActive`           | Boolean  | Merchant active or deactivated status   | true                                                           |
| `status`             | String   | Current status of merchant              | “REVIEWING”                                                    |
| `isMasterMerchant`   | Bool     | Master Merchant flag                    | true                                                           |
| `masterMerchantId`   | String   | Master Merchant ID, if any              | "2301663653361832803"                                          |
| `isPartner`          | Bool     | Partner Merchant flag                   | true                                                           |
| `partnerId`          | String   | Partner Merchant ID, if any             | "2301663653361832803"                                          |
| `gstNo`              | String   | GST No, if any                          | ""                                                             |
| `createdAt`          | DateTime | Creation date time of merchant          | "2018-02-12T08:53:13Z"                                         |
| `updatedAt`          | DateTime | Last update date time of merchant       | "2018-02-12T08:53:13Z"                                         |

<br/>

<strong>Invoice Address Object:</strong>

| Parameter      | Type   | Description           | Example                                 |
| -------------- | ------ | --------------------- | --------------------------------------- |
| `addressLine1` | String | Address 1 of merchant | "20, JALAN JASA 38, TAMAN MUTIARA RINI" |
| `addressLine2` | String | Address 2 of merchant | ""                                      |
| `postcode`     | String | Postcode of merchant  | “81300”                                 |
| `city`         | String | City of merchant      | "Selangor"                              |
| `state`        | String | State of merchant     | "Selangor"                              |
| `country`      | String | Country of merchant   | "Malaysia"                              |

> Example Response

```json
{
  "item": {
    "id": "5611759774758429587",
    "companyName": "YUSSUF TEST",
    "companyType": "SOLE PROPRIETORSHIP",
    "companyLogoUrl": "https://storage.googleapis.com/rm-dev-merchant/5611759774758429587/logo/merchant.jpeg",
    "registrationNumber": "12343",
    "businessCategory": "INSURANCE SERVICES",
    "establishedAt": "2018-05-12T16:00:00Z",
    "countryCode": "60",
    "phoneNumber": "167367171",
    "addressLine1": "20, JALAN JASA 38, TAMAN MUTIARA RINI",
    "addressLine2": "",
    "postcode": "81300",
    "city": "AYER HITAM",
    "state": "JOHOR",
    "country": "MALAYSIA",
    "invoiceAddress": {
      "addressLine1": "20, JALAN JASA 38, TAMAN MUTIARA RINI",
      "addressLine2": "",
      "postcode": "81300",
      "city": "AYER HITAM",
      "state": "JOHOR",
      "country": "MALAYSIA"
    },
    "isActive": true,
    "status": "VERIFIED",
    "isMasterMerchant": false,
    "masterMerchantId": "2301663653361832803",
    "isPartner": false,
    "partnerId": "2301663653361832803",
    "gstNo": "",
    "createdAt": "2018-05-14T09:26:22Z",
    "updatedAt": "2018-05-22T05:23:02Z"
  },
  "code": "SUCCESS"
}
```
