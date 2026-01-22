---
id: submit-account-review
title: Submit Account For Review
sidebar_label: Submit Account
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/account/{id}/review`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/account/{id}/review`

:::note
Submit Account For Review
:::

### Request Parameters

> Example Request

```json
curl --location --request GET "https://sb-open.revenuemonster.my/v3/account/{id}/review" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
--header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1528450585" \
--data-raw "{
    "brandName": "Revenue Monster",
    "websiteUrl": "https://revenuemonster.my",
    "registrationNumber": "XAS1233123",
    "establishedAt": "2006-01-02T15:04:05Z",
    "addressLine1": "1, Jalan Pertanian 25",
    "addressLine2": "Taman Universiti",
    "postCode": "81302",
    "city": "SKUDAI",
    "state": "JOHOR",
    "country": "MALAYSIA",
    "countryCode": "60",
    "phoneNumber": "167724152",
    "companyName": "Revenue Monster",
    "companyType": "PRIVATE LIMITED COMPANY (SDN BHD)",
    "businessCategory": "COMPUTER AND ELECTRONICS",
    "averageTicketSize": 1000000,
    "averageTurnoverPerMonth": 1000000,
    "businessScope": "some business scope",
    "invoiceAddress": {
        "addressLine1": "1, Jalan Pertanian 25",
        "addressLine2": "Taman Universiti",
        "postCode": "81302",
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
            "birthday": "2000-07-14T15:59:59Z",
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
    "longitude": 0.0
}"
```

### Response Parameters

| Parameter | Type     | Description                                                                                               | Example                      |
| --------- | -------- | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object[] |                                                                                                           | (Refer to explanation below) |
| `code`    | String   | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br />

<strong>Accoount Info (item):</strong>

| Parameter                 | Type             | Description                             | Example                                 |
| ------------------------- | ---------------- | --------------------------------------- | --------------------------------------- |
| `id`                      | String           | Account ID                              | "1653895399283266156"                   |
| `merchantId`              | String           | Merchant ID                             | "4118165203679668885"                   |
| `isDefault`               | Boolean          |                                         | true                                    |
| `companyName`             | String           | Company name of merchant                | "REVENUE MONSTER"                       |
| `companyType`             | String           | Type of company incorporation           | "SOLE PROPRIETOR"                       |
| `registrationNumber`      | String           | Registration number of merchant         | “12344”                                 |
| `businessCategory`        | String           | Business category of merchant           | "SOFTWARE AND IT"                       |
| `businessScope`           | String           | Business category of merchant           | "SOFTWARE AND IT"                       |
| `sourceOfFunds`           | String           | Business category of merchant           | "SOFTWARE AND IT"                       |
| `customerOrigin`          | String           | Business category of merchant           | "SOFTWARE AND IT"                       |
| `establishedAt`           | DateTime         | Established date time of merchant       | "2018-03-26T04:50:57Z"                  |
| `countryCode`             | String           | Country code of merchant contact number | "60"                                    |
| `phoneNumber`             | String           | Phone number of merchant                | "377334080"                             |
| `addressLine1`            | String           | Address 1 of merchant                   | "20, JALAN JASA 38, TAMAN MUTIARA RINI" |
| `addressLine2`            | String           | Address 2 of merchant                   | ""                                      |
| `postcode`                | String           | Postcode of merchant                    | “81300”                                 |
| `city`                    | String           | City of merchant                        | "Selangor"                              |
| `state`                   | String           | State of merchant                       | "Selangor"                              |
| `country`                 | String           | Country of merchant                     | "Malaysia"                              |
| `isSameBusinessAddress`   | Boolean          |                                         | false                                   |
| `invoiceAddress`          | Object           | Object of Invoice Address               | (Refer below)                           |
| `inspectList`             | Array (nullable) |                                         | null                                    |
| `status`                  | String           | Current status of Account               | "UNVERIFIED"                            |
| `document`                | Object           |                                         | Refer Below                             |
| `documentFile`            | Object           |                                         | Refer Below                             |
| `bankAccountNo`           | String           |                                         | ""                                      |
| `bankAccountType`         | String           |                                         | ""                                      |
| `bankAccountHolderName`   | String           |                                         | ""                                      |
| `bankName`                | String           |                                         | ""                                      |
| `bankCode`                | String           |                                         | ""                                      |
| `averageTicketSize`       | Uint             |                                         | 0                                       |
| `averageTurnoverPerMonth` | Uint             |                                         | 0                                       |
| `paymentSubscription`     | String           |                                         | ""                                      |
| `createdAt`               | DateTime         | Creation date time of merchant          | "2021-01-13T04:35:32Z"                  |
| `updatedAt`               | DateTime         | Last update date time of merchant       | "2021-01-13T04:35:32Z"                  |

<br/>

<strong>Document object :</strong>

| Parameter                     | Type   | Description | Example |
| ----------------------------- | ------ | ----------- | ------- |
| `ctosFileUrl`                 | String |             | ""      |
| `ownerICFileUrl`              | String |             | ""      |
| `directorICFileUrl`           | String |             | ""      |
| `shareHolderICFileUrl`        | String |             | ""      |
| `businessRegistrationFileUrl` | String |             | ""      |
| `bankStatementFileUrl`        | String |             | ""      |
| `moaFileUrl`                  | String |             | ""      |
| `form24FileUrl`               | String |             | ""      |
| `form49FileUrl`               | String |             | ""      |
| `section14FileUrl`            | String |             | ""      |
| `form44FileUrl`               | String |             | ""      |
| `businessSitePhotoFileUrl`    | String |             | ""      |
| `essmDocumentFileUrl`         | String |             | ""      |
| `letterOfConsentFileUrl`      | String |             | ""      |

<br />

<strong>DocumentFile object :</strong>

| Parameter                     | Type              | Description | Example |
| ----------------------------- | ----------------- | ----------- | ------- |
| `CtosFileUrl`                 | String (nullable) |             | null    |
| `OwnerICFileUrl`              | String (nullable) |             | null    |
| `DirectorICFileUrl`           | String (nullable) |             | null    |
| `ShareHolderICFileUrl`        | String (nullable) |             | null    |
| `BusinessRegistrationFileUrl` | String (nullable) |             | null    |
| `BankStatementFileUrl`        | String (nullable) |             | null    |
| `MoaFileUrl`                  | String (nullable) |             | null    |
| `Form24FileUrl`               | String (nullable) |             | null    |
| `Form49FileUrl`               | String (nullable) |             | null    |
| `Section14FileUrl`            | String (nullable) |             | null    |
| `Form44FileUrl`               | String (nullable) |             | null    |
| `BusinessSitePhotoFileUrl`    | String (nullable) |             | null    |

<br />

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

> Example Response

```json
{
  "items": {
    "id": "1596124535165747709",
    "merchantId": "4118165203679668885",
    "isDefault": false,
    "companyName": "Merchant & Testings",
    "companyType": "SOLE PROPRIETORSHIP",
    "registrationNumber": "123455-Test",
    "businessCategory": "BANK, FINANCIAL INSITUTION",
    "businessScope": "Finance industry",
    "sourceOfFunds": "",
    "customerOrigin": "",
    "establishedAt": "2018-05-31T09:06:26Z",
    "countryCode": "60",
    "phoneNumber": "123907657",
    "addressLine1": "1, TEST ROAD 1",
    "addressLine2": "",
    "postcode": "50000",
    "city": "KUALA LUMPUR",
    "state": "KUALA LUMPUR",
    "country": "MALAYSIA",
    "isSameBusinessAddress": false,
    "invoiceAddress": {
      "addressLine1": "1, TEST ROAD 1",
      "addressLine2": "",
      "postcode": "50000",
      "city": "KUALA LUMPUR",
      "state": "KUALA LUMPUR",
      "country": "MALAYSIA"
    },
    "inspectList": [
      {
        "fullName": "DFDSF",
        "email": "",
        "position": "DIRECTOR",
        "countryCode": "",
        "phoneNumber": "",
        "gender": "MALE",
        "birthday": "2018-05-20T23:59:59.000Z",
        "nationality": "ALBANIAN",
        "idType": "IC",
        "idNo": "123456789098",
        "beginAt": "",
        "endAt": ""
      }
    ],
    "status": "UNVERIFIED",
    "document": {
      "ctosFileUrl": "",
      "ownerICFileUrl": "https://rm-sandbox-document.oss-ap-southeast-3.aliyuncs.com/4118165203679668885/T3duZXJJQ0ZpbGVVUkw=.png",
      "directorICFileUrl": "",
      "shareHolderICFileUrl": "",
      "businessRegistrationFileUrl": "https://rm-sandbox-document.oss-ap-southeast-3.aliyuncs.com/4118165203679668885/QnVzaW5lc3NSZWdpc3RyYXRpb25GaWxlVVJM.png",
      "bankStatementFileUrl": "https://rm-sandbox-document.oss-ap-southeast-3.aliyuncs.com/4118165203679668885/YmFua1N0YXRlbWVudEZpbGVVcmw=.png",
      "moaFileUrl": "",
      "form24FileUrl": "",
      "form49FileUrl": "",
      "section14FileUrl": "",
      "form44FileUrl": "",
      "businessSitePhotoFileUrl": "https://rm-sandbox-document.oss-ap-southeast-3.aliyuncs.com/4118165203679668885/YnVzaW5lc3NTaXRlUGhvdG9GaWxlVXJs.png",
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
    "bankAccountNo": "asdsad13123123",
    "bankAccountType": "INDIVIDUAL",
    "bankAccountHolderName": "Revenue Monster Sdn Bhd",
    "bankName": "KUWAIT FINANCE HOUSE",
    "bankCode": "KFHO",
    "averageTicketSize": 0,
    "averageTurnoverPerMonth": 0,
    "paymentSubscription": "",
    "createdAt": "2021-01-13T04:35:32Z",
    "updatedAt": "2021-01-13T04:35:32Z"
  },
  "code": "SUCCESS"
}
```
