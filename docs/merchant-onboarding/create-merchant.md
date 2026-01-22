---
id: create-merchant
title: Create Merchant
sidebar_label: Create Merchant
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/partner/merchant`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/partner/merchant`

:::note

For Merchant that has a Partner account

**For Active a Partner account [(contact us)](https://revenuemonster.my/about-us)**

:::

### Request Parameters

| Parameter     | Type   | Example               |
| ------------- | ------ | --------------------- |
| `companyName` | String | "Revenue Monster"     |
| `countryCode` | String | "60"                  |
| `email`       | String | "rmtesting@gmail.com" |
| `firstName`   | String | "Edwin"               |
| `lastName`    | String | "Testing"             |
| `phoneNumber` | String | "164699177"           |

> Example Request

```json
curl --location --request POST "https://sb-open.revenuemonster.my/v3/partner/merchant" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
--header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1528450585" \
--data-raw '{
    "companyName":"Revenue Monster",
    "countryCode":"60",
    "email":"rmtesting@gmail.com",
    "firstName":"Edwin",
    "lastName":"Testing",
    "phoneNumber":"164699177"
}'
```

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object |                                                                                                           | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br/>

<strong>Merchant Object (item):</strong>

| Parameter             | Type     | Description                             | Example                                                        |
| --------------------- | -------- | --------------------------------------- | -------------------------------------------------------------- |
| `id`                  | String   | Store ID                                | "6170506694335521334"                                          |
| `companyName`         | String   | Company name of merchant                | "REVENUE MONSTER"                                              |
| `brandName`           | String   | Brand name of merchant                  | "REVENUE MONSTER"                                              |
| `companyType`         | String   | Type of company incorporation           | "SOLE PROPRIETOR"                                              |
| `companyLogoUrl`      | String   | Public URL to show merchant's logo      | "https://storage.googleapis.com/rm-dev-asset/img/merchant.png" |
| `registrationNumber`  | String   | Registration number of merchant         | “12344”                                                        |
| `businessCategory`    | String   | Business category of merchant           | "SOFTWARE AND IT"                                              |
| `businessScope`       | String   | Business category of merchant           | "SOFTWARE AND IT"                                              |
| `sourceOfFunds`       | String   | Business category of merchant           | "SOFTWARE AND IT"                                              |
| `customerOrigin`      | String   | Business category of merchant           | "SOFTWARE AND IT"                                              |
| `websiteUrl`          | String   | Business category of merchant           | "SOFTWARE AND IT"                                              |
| `establishedAt`       | DateTime | Established date time of merchant       | "2018-03-26T04:50:57Z"                                         |
| `countryCode`         | String   | Country code of merchant contact number | "60"                                                           |
| `phoneNumber`         | String   | Phone number of merchant                | "377334080"                                                    |
| `addressLine1`        | String   | Address 1 of merchant                   | "20, JALAN JASA 38, TAMAN MUTIARA RINI"                        |
| `addressLine2`        | String   | Address 2 of merchant                   | ""                                                             |
| `postcode`            | String   | Postcode of merchant                    | “81300”                                                        |
| `city`                | String   | City of merchant                        | "Selangor"                                                     |
| `state`               | String   | State of merchant                       | "Selangor"                                                     |
| `country`             | String   | Country of merchant                     | "Malaysia"                                                     |
| `invoiceAddress`      | Object   | Object of Invoice Address               | (Refer below)                                                  |
| `isActive`            | Boolean  | Merchant active or deactivated status   | true                                                           |
| `status`              | String   | Current status of merchant              | “REVIEWING”                                                    |
| `isMasterMerchant`    | Bool     | Master Merchant flag                    | true                                                           |
| `masterMerchantId`    | String   | Master Merchant ID, if any              | "2301663653361832803"                                          |
| `isPartner`           | Bool     | Partner Merchant flag                   | true                                                           |
| `partnerId`           | String   | Partner Merchant ID, if any             | "2301663653361832803"                                          |
| `gstNo`               | String   | GST No, if any                          | ""                                                             |
| `paymentSubscription` | String   |                                         | ""                                                             |
| `subscription`        | Object   |                                         | Refer Below                                                    |
| `registrationSource`  | String   | Register From                           | "OPEN_API"                                                     |
| `createdAt`           | DateTime | Creation date time of merchant          | "2018-02-12T08:53:13Z"                                         |
| `updatedAt`           | DateTime | Last update date time of merchant       | "2018-02-12T08:53:13Z"                                         |

<br/>

<strong>Subscription object :</strong>

| Parameter                   | Type | Description | Example |
| --------------------------- | ---- | ----------- | ------- |
| `terminalOfflineEWallet`    | Bool |             | false   |
| `terminalOfflineCreditCard` | Bool |             | false   |
| `onlineCreditCard`          | Bool |             | false   |

<br />

<strong>Store object (store):</strong>

| Parameter              | Type              | Description                                     | Example                                                      |
| ---------------------- | ----------------- | ----------------------------------------------- | ------------------------------------------------------------ |
| `id`                   | String            | Store ID                                        | "6170506694335521334"                                        |
| `merchantSettlementId` | String            | Merchant Settlement Id                          | "1596124530153936377"                                        |
| `name`                 | String            | Store Name                                      | "REVENUE MONSTER"                                            |
| `imageUrl`             | String            | Default Image                                   | "https://storage.googleapis.com/rm-prod-asset/img/store.png" |
| `addressLine1`         | String            | Store Address 1                                 | "B-5-30, 5th Floor, Block Bougainvillea,"                    |
| `addressLine2`         | String            | Store Address 2                                 | "PJU 6A, Lebuhraya SPRINT, 10 Boulevard,"                    |
| `postCode`             | String            | Postcode of store                               | "47400"                                                      |
| `city`                 | String            | City of store                                   | "Petaling Jaya"                                              |
| `state`                | String            | State of store                                  | "Selangor"                                                   |
| `country`              | String            | Country of store                                | "Malaysia"                                                   |
| `countryCode`          | String            | Country code of store contact number            | "60"                                                         |
| `phoneNumber`          | String            | Phone number of store                           | "377334080"                                                  |
| `geoLocation`          | Object of [Float] | Geo Location (latitude and longtitude) of store | {"latitude": 3.1349857, "longtitude": 101.6136659 }          |
| `status`               | String            | Current status of store                         | "ACTIVE"                                                     |
| `createdAt`            | DateTime          | Creation date time of store                     | "2018-02-12T08:53:13Z"                                       |
| `updatedAt`            | DateTime          | Last update date time of store                  | "2018-02-12T08:53:13Z"                                       |

<br />

<strong>User object (store):</strong>

| Parameter             | Type     | Description                         | Example                                                       |
| --------------------- | -------- | ----------------------------------- | ------------------------------------------------------------- |
| `id`                  | String   | User ID                             | “8190656045166232716”                                         |
| `firstName`           | String   | First name of user                  | “MOHAMED”                                                     |
| `lastName`            | String   | Last name of user                   | “YUSSUF”                                                      |
| `countryCode`         | String   | Country code of user contact number | "60"                                                          |
| `phoneNumber`         | String   | Phone number of user                | "377334080"                                                   |
| `email`               | String   | Email address of user               | "yussuf@revenuemonster.my"                                    |
| `avatarUrl`           | String   | Public URL to show user’s avatar    | "https://storage.googleapis.com/rm-prod-asset/img/avatar.png" |
| `status`              | String   | Current status of user              | “ACTIVE”                                                      |
| `SettlementAccountId` | Object   | Settlement Account ID               | []                                                            |
| `storeId`             | Object   | Store ID                            | []                                                            |
| `isActive`            | Boolean  | User active or deactivated status   | true                                                          |
| `currentStoreId`      | String   | Current Store ID                    | ""                                                            |
| `createdAt`           | DateTime | Creation date time of user          | "2018-02-12T08:53:13Z"                                        |
| `updatedAt`           | DateTime | Last update date time of user       | "2018-02-12T08:53:13Z"                                        |

> Example Response

```json
{
  "item": {
    "merchant": {
      "id": "1629292083526787883",
      "companyName": "Revenue Monster",
      "brandName": "",
      "companyType": "",
      "companyLogoUrl": "https://storage.googleapis.com/rm-sandbox-asset/img/merchant.png",
      "registrationNumber": "",
      "businessCategory": "",
      "businessScope": "",
      "sourceOfFunds": "",
      "customerOrigin": "",
      "websiteUrl": "",
      "establishedAt": "0001-01-01T00:00:00Z",
      "countryCode": "",
      "phoneNumber": "",
      "addressLine1": "",
      "addressLine2": "",
      "postcode": "",
      "city": "",
      "state": "",
      "country": "",
      "invoiceAddress": null,
      "isActive": true,
      "status": "UNVERIFIED",
      "isMasterMerchant": false,
      "masterMerchantId": "",
      "isPartner": true,
      "partnerId": "",
      "gstNo": "",
      "extraInfo": {
        "contactInfo": [],
        "businessHour": []
      },
      "paymentSubscription": "",
      "subscription": {
        "terminalOfflineEWallet": false,
        "terminalOfflineCreditCard": false,
        "onlineCreditCard": false
      },
      "registrationSource": "OPEN_API",
      "createdAt": "2021-08-18T13:08:03.530436644Z",
      "updatedAt": "2021-08-18T13:08:03.530437084Z"
    },
    "store": {
      "id": "1629292083696729288",
      "merchantSettlementId": "",
      "name": "Revenue Monster",
      "imageUrl": "https://storage.googleapis.com/rm-prod-asset/img/store.png",
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
      "createdAt": "2021-08-18T13:08:03.535674197Z",
      "updatedAt": "2021-08-18T13:08:03.53567448Z"
    },
    "user": {
      "id": "1629292083650514742",
      "firstName": "EDWIN",
      "lastName": "TESTING",
      "countryCode": "60",
      "phoneNumber": "164699177",
      "email": "rmtesting@gmail.com",
      "avatarUrl": "https://storage.googleapis.com/rm-sandbox-asset/img/avatar.png",
      "status": "ACTIVE",
      "settlementAccountId": [],
      "storeId": [],
      "isActive": true,
      "currentStoreId": "",
      "createdAt": "2021-08-18T13:08:03.537653715Z",
      "updatedAt": "2021-08-18T13:08:03.537654163Z"
    }
  },
  "code": "SUCCESS"
}
```
