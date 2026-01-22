---
id: update-merchant
title: Update Merchant
sidebar_label: Update Merchant
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "gray", fontWeight: "bold" }}>PATCH</span><br/>
URL : `https://open.revenuemonster.my/v3/partner/merchant/{merchantID}`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/partner/merchant/{merchantID}`

:::note
Update Merchant By ID
:::

### Request Parameters

| Parameter                   | Type              | Example     |
| --------------------------- | ----------------- | ----------- |
| `brandName`                 | String            | ""          |
| `websiteURL`                | String            | ""          |
| `registrationNumber`        | String            | ""          |
| `establishedAt`             | DateTime          | ""          |
| `addressLine1`              | String            | ""          |
| `addressLine2`              | String            | ""          |
| `postCode`                  | String            | ""          |
| `city`                      | String            | ""          |
| `state`                     | String            | ""          |
| `countryCode`               | String            | ""          |
| `phoneNumber`               | String            | ""          |
| `companyName`               | String            | ""          |
| `companyType`               | String            | ""          |
| `businessCategory`          | String            | ""          |
| `averageTicketSize`         | String            | ""          |
| `averageTurnoverPerMonth`   | String            | ""          |
| `businessScope`             | String            | ""          |
| `invoiceAddress`            | Object (nullable) | Refer Below |
| `document`                  | Object            | Refer Below |
| `inspectList`               | Array (nullable)  | Refer Below |
| `bankAccountType`           | String            | ""          |
| `bankAccountHolderName`     | String            | ""          |
| `bankAccountNo`             | String            | ""          |
| `bankCode`                  | String            | ""          |
| `latitude`                  | Float             | ""          |
| `longitude`                 | Float             | ""          |
| `paymentSubscription`       | String            | ""          |
| `terminalOfflineEWallet`    | String            | ""          |
| `terminalOfflineCreditCard` | String            | ""          |
| `onlineCreditCard`          | String            | ""          |

<br/>

<strong>invoiceAddress (parameter) :</strong>

| Parameter      | Type   | Description     | Example |
| -------------- | ------ | --------------- | ------- |
| `addressLine1` | String | AddressLine1    | ""      |
| `addressLine2` | String | AddressLine2    | ""      |
| `postCode`     | String | Customer Remark | ""      |
| `city`         | String | City            | ""      |
| `state`        | String | Address State   | ""      |
| `country`      | String | Country         | ""      |

<br/>

<strong>inspectList (parameter) :</strong>

| Parameter       | Type   | Example |
| --------------- | ------ | ------- |
| `fullName`      | String | ""      |
| `email`         | String | ""      |
| `position`      | String | ""      |
| `countryCode`   | String | ""      |
| `phoneNumber`   | String | ""      |
| `gender`        | String | ""      |
| `birthday`      | String | ""      |
| `nationality`   | String | ""      |
| `iDType`        | String | ""      |
| `iDNo`          | String | ""      |
| `beginDateTime` | String | ""      |
| `endDateTime`   | String | ""      |

<br/>
<strong>document (parameter) :</strong>

| Parameter                     | Type   | Example |
| ----------------------------- | ------ | ------- |
| `ctosFileUrl`                 | String | ""      |
| `ownerICFileUrl`              | String | ""      |
| `directorICFileUrl`           | String | ""      |
| `shareHolderICFileUrl`        | String | ""      |
| `businessRegistrationFileUrl` | String | ""      |
| `bankStatementFileUrl `       | String | ""      |
| `moaFileUrl`                  | String | ""      |
| `form24FileUrl`               | String | ""      |
| `form49FileUrl`               | String | ""      |
| `section14FileUrl `           | String | ""      |
| `form44FileUrl`               | String | ""      |
| `businessSitePhotoFileUrl`    | String | ""      |

> Example Request

```json
curl --location --request PATCH "https://sb-open.revenuemonster.my/v3/partner/merchant/1629258448138509563" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiKiJdLCJleHAiOjE1MjE2MjkyNTYsImlhdCI6MTUyMTYyMjA1NywiaXNzIjoiaHR0cHM6Ly9zYi1vYXV0aC5yZXZlbnVlbW9uc3Rlci5teSIsImp0aSI6IkVod0tFRTlCZFhSb1FXTmpaWE56Vkc5clpXNFF5cmYza3EzTDY4QnoiLCJuYmYiOjE1MjE2MjIwNTcsInN1YiI6IkVoUUtDRTFsY21Ob1lXNTBFSlhWemQzd3JhcVRPUklRQ2dSVmMyVnlFSXlKcUl6dnlNUFZjUSJ9.dJknY9MZHLNrKx1p7gZxS0_oA3uXLWplDU1r1dpwxIbmdB6yw4tQBTXKlWArDfKLlBDn6v22_gT5Px7sdCMj7e5M9eRoJoMnoPnslgYpmJJ5kjqAbKU7dUxKb1OzFLrvmtSK9r-FRLVtMFHioWYpwgSvSPBgZ6lAYkUyDzH7aKadFYtQcBuJR0hlq2CXtP0mzbHOeu2q6giONf3E5-XqS8lLRtuHPAbJ7_YFwo0Oe2zc6h05IOocmx_NvBVPfDBnuygTU063h70Q987MYeGDV_Os4N6N_I4b-GoHprEPtmntB1RJPrFrY28hvvoUfDHXHZVXT1GlrsozrkWV4EjbTw" \
  --header "X-Signature: sha256 Uf8oEHcq3l5ZkPc/y9eUsRjoKkx0dLUQz5PEFntWUZcR4A0DYdtQ9+VTx5Rq4e4XsRVp+4KZb4cwpDfzPABCZA==" \
  --header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
  --header "X-Timestamp: 1527407052" \
  --data-raw '{
    "brandName": "Revenue Monster",
    "websiteUrl": "https://revenuemonster.my",
    "registrationNumber": "XAS1233123",
    "establishedAt": "2006-01-02T15:04:05Z",
    "addressLine1": "1, Jalan Pertanian 25",
    "addressLine2": "Taman Universiti",
    "postCode": "81300",
    "city": "SKUDAI",
    "state": "JOHOR",
    "country": "MALAYSIA",
    "countryCode": "60",
    "phoneNumber": "187824152",
    "companyName": "Revenue Monster",
    "companyType": "PRIVATE LIMITED COMPANY (SDN BHD)",
    "businessCategory": "COMPUTER AND ELECTRONICS",
    "averageTicketSize": 1000000,
    "averageTurnoverPerMonth": 1000000,
    "businessScope": "some business scope",
    "invoiceAddress": {
        "addressLine1": "1, Jalan Pertanian 25",
        "addressLine2": "Taman Universiti",
        "postCode": "81300",
        "city": "SKUDAI",
        "state": "JOHOR",
        "country": "MALAYSIA"
    },
    "document": {
        "ctosFileUrl": "https://somefilenedpoint.com",
        "ownerICFileUrl": "https://somefilenedpoint.com",
        "directorICFileUrl": "https://somefilenedpoint.com",
        "shareHolderICFileUrl": "https://somefilenedpoint.com",
        "businessRegistrationFileUrl": "https://somefilenedpoint.com",
        "bankStatementFileUrl": "https://somefilenedpoint.com",
        "moaFileUrl": "https://somefilenedpoint.com",
        "form24FileUrl": "https://somefilenedpoint.com",
        "form49FileUrl": "https://somefilenedpoint.com",
        "section14FileUrl": "https://somefilenedpoint.com",
        "form44FileUrl": "https://somefilenedpoint.com",
        "businessSitePhotoFileUrl": "https://somefilenedpoint.com"
    },
    "inspectList": [
        {
            "fullName": "NG SZE CHEN",
            "gender": "MALE",
            "birthday": "1999-07-14T15:59:59Z",
            "nationality": "MALAYSIAN",
            "idType": "IC",
            "idNo": "2131290134"
        }
    ],
    "bankAccountType": "CORPORATE",
    "bankAccountHolderName": "Revenue Monster",
    "bankAccountNo": "32312323",
    "bankCode": "HLBB",
    "latitude": 0.0,
    "longitude": 0.0,
    "paymentSubscription": "BOTH",
    "terminalOfflineEWallet": false,
    "terminalOfflineCreditCard": false,
    "onlineCreditCard": false
}'
```

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object |                                                                                                           | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br/>
<strong>Item Object :</strong>

| Parameter                 | Type              | Description                             | Example                                 |
| ------------------------- | ----------------- | --------------------------------------- | --------------------------------------- |
| `id`                      | String            | Store ID                                | "1629258558902992793"                   |
| `MerchantId`              | String            | Merchant ID                             | "1629258448138509563"                   |
| `isDefault`               | bool              | Default Settlement                      | true                                    |
| `companyName`             | String            | Company name of merchant                | "REVENUE MONSTER"                       |
| `companyType`             | String            | Type of company incorporation           | "SOLE PROPRIETOR"                       |
| `registrationNumber`      | String            | Registration number of merchant         | “12344”                                 |
| `businessCategory`        | String            | Business category of merchant           | "SOFTWARE AND IT"                       |
| `businessScope`           | String            | Business category of merchant           | "SOFTWARE AND IT"                       |
| `sourceOfFunds`           | String            | Business category of merchant           | "SOFTWARE AND IT"                       |
| `customerOrigin`          | String            | Business category of merchant           | "SOFTWARE AND IT"                       |
| `establishedAt`           | DateTime          | Established date time of merchant       | "2018-03-26T04:50:57Z"                  |
| `countryCode`             | String            | Country code of merchant contact number | "60"                                    |
| `phoneNumber`             | String            | Phone number of merchant                | "377334080"                             |
| `addressLine1`            | String            | Address 1 of merchant                   | "20, JALAN JASA 38, TAMAN MUTIARA RINI" |
| `addressLine2`            | String            | Address 2 of merchant                   | ""                                      |
| `postcode`                | String            | Postcode of merchant                    | “81300”                                 |
| `city`                    | String            | City of merchant                        | "Selangor"                              |
| `state`                   | String            | State of merchant                       | "Selangor"                              |
| `country`                 | String            | Country of merchant                     | "Malaysia"                              |
| `isSameBusinessAddress`   | Boolean           |                                         | false                                   |
| `invoiceAddress`          | Object (nullable) |                                         | Refer Below                             |
| `inspectList`             | Array (nullable)  |                                         | Refer Below                             |
| `status`                  | String            | Current status of merchant              | “REVIEWING”                             |
| `document`                | Object            |                                         | Refer Below                             |
| `documentFile`            | Object            |                                         | Refer Below                             |
| `bankAccountNo`           | String            |                                         | ""                                      |
| `bankAccountType`         | String            |                                         | ""                                      |
| `bankAccountHolderName`   | String            |                                         | ""                                      |
| `bankName`                | String            |                                         | ""                                      |
| `bankCode`                | String            |                                         | ""                                      |
| `averageTicketSize`       | Uint              |                                         | 0                                       |
| `averageTurnoverPerMonth` | Uint              |                                         | 0                                       |
| `paymentSubscription`     | String            |                                         | ""                                      |
| `createdAt`               | DateTime          | Creation date time of merchant          | "2021-02-12T08:53:13Z"                  |
| `updatedAt`               | DateTime          | Last update date time of merchant       | "2021-02-12T08:53:13Z"                  |

<br/>

<strong>invoiceAddress (parameter) :</strong>

| Parameter      | Type   | Description     | Example |
| -------------- | ------ | --------------- | ------- |
| `addressLine1` | String | AddressLine1    | ""      |
| `addressLine2` | String | AddressLine2    | ""      |
| `postCode`     | String | Customer Remark | ""      |
| `city`         | String | City            | ""      |
| `state`        | String | Address State   | ""      |
| `country`      | String | Country         | ""      |

<br/>

<strong>inspectList (parameter) :</strong>

| Parameter       | Type   | Example |
| --------------- | ------ | ------- |
| `fullName`      | String | ""      |
| `email`         | String | ""      |
| `position`      | String | ""      |
| `countryCode`   | String | ""      |
| `phoneNumber`   | String | ""      |
| `gender`        | String | ""      |
| `birthday`      | String | ""      |
| `nationality`   | String | ""      |
| `iDType`        | String | ""      |
| `iDNo`          | String | ""      |
| `beginDateTime` | String | ""      |
| `endDateTime`   | String | ""      |

<br/>
<strong>document (parameter) :</strong>

| Parameter                     | Type   | Example |
| ----------------------------- | ------ | ------- |
| `ctosFileUrl`                 | String | ""      |
| `ownerICFileUrl`              | String | ""      |
| `directorICFileUrl`           | String | ""      |
| `shareHolderICFileUrl`        | String | ""      |
| `businessRegistrationFileUrl` | String | ""      |
| `bankStatementFileUrl `       | String | ""      |
| `moaFileUrl`                  | String | ""      |
| `form24FileUrl`               | String | ""      |
| `form49FileUrl`               | String | ""      |
| `section14FileUrl `           | String | ""      |
| `form44FileUrl`               | String | ""      |
| `businessSitePhotoFileUrl`    | String | ""      |

<br/>
<strong>documentFile (parameter) :</strong>

| Parameter                     | Type   | Example |
| ----------------------------- | ------ | ------- |
| `CTOSFileURL`                 | String | ""      |
| `OwnerICFileURL`              | String | ""      |
| `DirectorICFileURL `          | String | ""      |
| `ShareHolderICFileURL`        | String | ""      |
| `BusinessRegistrationFileURL` | String | ""      |
| `BankStatementFileURL`        | String | ""      |
| `MOAFileURL`                  | String | ""      |
| `Form24FileURL`               | String | ""      |
| `Form49FileURL`               | String | ""      |
| `Section14FileURL`            | String | ""      |
| `Form44FileURL`               | String | ""      |
| `BusinessSitePhotoFileURL`    | String | ""      |

> Example Response

```json
{
  "item": {
    "id": "1622609881925201839",
    "merchantId": "1622608181378590507",
    "isDefault": true,
    "companyName": "Revenue Monster",
    "companyType": "PRIVATE LIMITED COMPANY (SDN BHD)",
    "registrationNumber": "XAS1233123",
    "businessCategory": "COMPUTER AND ELECTRONICS",
    "businessScope": "some business scope",
    "sourceOfFunds": "",
    "customerOrigin": "",
    "establishedAt": "2006-01-02T15:04:05Z",
    "countryCode": "60",
    "phoneNumber": "187824152",
    "addressLine1": "1, Jalan Pertanian 25",
    "addressLine2": "Taman Universiti",
    "postcode": "81300",
    "city": "SKUDAI",
    "state": "JOHOR",
    "country": "MALAYSIA",
    "isSameBusinessAddress": false,
    "invoiceAddress": {
      "addressLine1": "1, Jalan Pertanian 25",
      "addressLine2": "Taman Universiti",
      "postcode": "81300",
      "city": "SKUDAI",
      "state": "JOHOR",
      "country": "MALAYSIA"
    },
    "inspectList": [
      {
        "fullName": "NG SZE CHEN",
        "email": "",
        "position": "",
        "countryCode": "",
        "phoneNumber": "",
        "gender": "MALE",
        "birthday": "1999-07-14T15:59:59Z",
        "nationality": "MALAYSIAN",
        "idType": "IC",
        "idNo": "2131290134",
        "beginAt": "",
        "endAt": ""
      }
    ],
    "status": "UNVERIFIED",
    "document": {
      "ctosFileUrl": "https://somefilenedpoint.com",
      "ownerICFileUrl": "https://somefilenedpoint.com",
      "directorICFileUrl": "https://somefilenedpoint.com",
      "shareHolderICFileUrl": "https://somefilenedpoint.com",
      "businessRegistrationFileUrl": "https://somefilenedpoint.com",
      "bankStatementFileUrl": "https://somefilenedpoint.com",
      "moaFileUrl": "https://somefilenedpoint.com",
      "form24FileUrl": "https://somefilenedpoint.com",
      "form49FileUrl": "https://somefilenedpoint.com",
      "section14FileUrl": "https://somefilenedpoint.com",
      "form44FileUrl": "https://somefilenedpoint.com",
      "businessSitePhotoFileUrl": "https://somefilenedpoint.com"
    },
    "documentFile": {
      "CTOSFileURL": null,
      "OwnerICFileURL": null,
      "DirectorICFileURL": null,
      "ShareHolderICFileURL": null,
      "BusinessRegistrationFileURL": null,
      "BankStatementFileURL": null,
      "MOAFileURL": null,
      "Form24FileURL": null,
      "Form49FileURL": null,
      "Section14FileURL": null,
      "Form44FileURL": null,
      "BusinessSitePhotoFileURL": null
    },
    "bankAccountNo": "32312323",
    "bankAccountType": "CORPORATE",
    "bankAccountHolderName": "Revenue Monster",
    "bankName": "HONG LEONG BANK",
    "bankCode": "HLBB",
    "averageTicketSize": 0,
    "averageTurnoverPerMonth": 0,
    "paymentSubscription": "",
    "createdAt": "2021-06-02T14:37:25+08:00",
    "updatedAt": "2021-06-02T14:37:25+08:00"
  },
  "code": "SUCCESS"
}
```
