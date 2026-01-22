---
id: review-merchant
title: Submit Merchant for Review
sidebar_label: Submit Merchant for Review
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/partner/merchant/{merchantID}`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/partner/merchant/{merchantID`

:::note

Submit Merchant for Revenue Monster to Review


> Example Request

```json
curl --location --request POST "https://sb-open.revenuemonster.my/v3/partner/merchant/1629292083526787883" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
--header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1528450585"
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
| `invoiceAddress`          | String (nullable) |                                         | null                                    |
| `inspectList`             | String (nullable) |                                         | null                                    |
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

> Example Response

```json
{
  "item": {
    "id": "1629297229825579798",
    "merchantId": "1629292083526787883",
    "isDefault": true,
    "companyName": "",
    "companyType": "",
    "registrationNumber": "",
    "businessCategory": "",
    "businessScope": "",
    "sourceOfFunds": "",
    "customerOrigin": "",
    "establishedAt": "0001-01-01T00:00:00Z",
    "countryCode": "",
    "phoneNumber": "",
    "addressLine1": "",
    "addressLine2": "",
    "postcode": "",
    "city": "",
    "state": "",
    "country": "",
    "isSameBusinessAddress": false,
    "invoiceAddress": null,
    "inspectList": null,
    "status": "REVIEWING",
    "document": {
      "ctosFileUrl": "",
      "ownerICFileUrl": "",
      "directorICFileUrl": "",
      "shareHolderICFileUrl": "",
      "businessRegistrationFileUrl": "",
      "bankStatementFileUrl": "",
      "moaFileUrl": "",
      "form24FileUrl": "",
      "form49FileUrl": "",
      "section14FileUrl": "",
      "form44FileUrl": "",
      "businessSitePhotoFileUrl": "",
      "essmDocumentFileUrl": "",
      "letterOfConsentFileUrl": ""
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
    "bankAccountNo": "",
    "bankAccountType": "",
    "bankAccountHolderName": "",
    "bankName": "",
    "bankCode": "",
    "averageTicketSize": 0,
    "averageTurnoverPerMonth": 0,
    "paymentSubscription": "",
    "createdAt": "2021-08-18T14:33:49Z",
    "updatedAt": "2021-08-18T14:33:49Z"
  },
  "code": "SUCCESS"
}
```
