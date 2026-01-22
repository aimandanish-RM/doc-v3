---
id: register-loyalty-member
title: Register Loyalty Member
sidebar_label: Register Loyalty Member
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/loyalty/member`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/loyalty/member`

:::note
Using Query String to **Get User Profile** by input the **country code** and **phone number**  
:::

### Request Parameters

| Parameter       | Type   | Required | Description                                    | Example                      |
| --------------- | ------ | -------- | ---------------------------------------------- | ---------------------------- |
| `name`          | String | Yes      | Member name                                    | "Oska"                       |
| `countryCode`   | String | Yes      | Country code of member contact number          | "60"                         |
| `phoneNumber`   | String | Yes      | Phone number of member                         | "1878241234"                 |
| `email`         | String | Yes      | Email address of member                        | "developer.oskang@gmail.com" |
| `nric`          | String | Yes      | IC Number                                      | "950711011234"               |
| `birthDate`     | String | Yes      | Member Birth Date                              | "1995-07-11T00:00:00Z"       |
| `gender`        | String | Yes      | Gender                                         | "MALE"                       |
| `point`         | Uint   | Yes      | Loyalty Point                                  | 0                            |
| `address`       | Object | Yes      | Refer to explanation below                     | (Refer to explanation below) |

<br />


> Example Request

```json
curl --location --request GET "{{open_base_path}}/v3/loyalty/member" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
--header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1528450585" \
--data "{
  "name": "Oska",
  "countryCode": "60",
  "phoneNumber": "1878241234",
  "email": "developer.oskang@gmail.com",
  "nric": "950711011234",
  "birthDate": "1995-07-11T00:00:00Z",
  "gender": "MALE",
  "point": 0,
  "address": {
    "addressLine1": "17, Jalan Pertanian 25",
    "addressLine2": "Taman Universiti",
    "postCode": "81301",
    "city": "SKUDAI",
    "state": "JOHOR",
    "country": "MALAYSIA"
  }
}"

```


### Response Parameters

| Parameter | Type   | Description                                                                                               | Example                      |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object | Profile object                                                                                            | (Refer to explanation below) |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br />

<strong>Profile object (item):</strong>

| Parameter             | Type     | Description                  | Example                                                           |
| --------------------- | -------- | ---------------------------- | ----------------------------------------------------------------- |
| `id`                  | String   | Profile ID                   | ""                                                                |
| `key`                 | String   | Profile Key (Internal Usage) | "EhIKBk1lbWJlchDOuOKz24XWkg4SGQoNTWVtYmVyUHJvZmlsZRDl-MTxiPOPjzY" |
| `name`                | String   | Profile name                 | "Oska"                                                            |
| `email`               | String   | Profile email                | "developer.oskang@gmail.com"                                      |
| `nric`                | String   | IC Number                    | "950711011234"                                                    |
| `birthDate`           | String   | User Birth Date (YYYY:MM:DD) | "1995-07-11"                                                      |
| `gender`              | String   | Gender                       | "MALE"                                                            |
| `address`             | Object   | Refer to explanation below   | (Refer to explanation below)                                      |
| `memberTier`          | String   | Member Tier Point            | null                                                              |
| `totalLoyaltyPoint`   | Uint     | Total Loyalty Point          | 0                                                                 |
| `hasPinCode`          | Bool     | User Pin                     | false                                                             |
| `loyaltyPointBalance` | Uint     | Total Point Balance left     | 0                                                                 |
| `spendingPoint`       | Uint     | Point Spend                  | 0                                                                 |
| `creditBalance`       | Uint     | Credit Balance               | 0                                                                 |
| `status`              | String   | Profile Status               | "ACTIVE"                                                          |
| `createdAt`           | DateTime | Creation date time           | "2018-10-19T03:39:47Z"                                            |
| `updatedAt`           | DateTime | Last update date time        | "2020-06-29T10:14:33Z"                                            |

<br />


<strong>Address object:</strong>

| Parameter      | Type   | Description | Example |
| -------------- | ------ | ----------- | ------- |
| `addressLine1` | String | Address 1   | ""      |
| `addressLine2` | String | Address 2   | ""      |
| `postcode`     | String | Postcode    | ""      |
| `city`         | String | City        | ""      |
| `state`        | String | State       | ""      |
| `country`      | String | Country     | ""      |

> Example Response

```json
{
  "item": {
    "id": "",
    "key": "EhIKBk1lbWJlchDCkZOfvLyOphYSGQoNTWVtYmVyUHJvZmlsZRCZp_uzvLyOphY",
    "name": "Oska",
    "email": "",
    "nric": "950711011234",
    "birthDate": "1995-07-11",
    "gender": "MALE",
    "state": "JOHOR",
    "address": {
      "addressLine1": "17, Jalan Pertanian 25",
      "addressLine2": "Taman Universiti",
      "postcode": "81301",
      "city": "SKUDAI",
      "state": "JOHOR",
      "country": "MALAYSIA"
    },
    "memberTier": null,
    "totalLoyaltyPoint": 0,
    "hasPinCode": false,
    "loyaltyPointBalance": 0,
    "spendingPoint": 0,
    "creditBalance": 0,
    "status": "ACTIVE",
    "createdAt": "2020-11-30T07:53:37.0578116Z",
    "updatedAt": "0001-01-01T00:00:00Z"
  },
  "code": "SUCCESS"
}
```
