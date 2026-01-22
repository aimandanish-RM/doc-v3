---
id: member-authorize
title: Member Authorize
sidebar_label: Member Authorize
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/loyalty/member/authorize`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/loyalty/member/authorize`

:::note
Get Member Authorized URL
:::

### Request Parameters

| Parameter     | Type   | Description         | Example     |
| ------------- | ------ | ------------------- | ----------- |
| `countryCode` | String | Country Code        | "60"        |
| `phoneNumber` | String | Member phone number | "187824153" |

> Example Request

```bash
curl --location --request POST 'https://sb-open.revenuemonster.my/v3/loyalty/member/authorize' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVNbkFxWjZHek9MS0ZRIl0sImV4cCI6MTYxMTczMzcxMiwiaWF0IjoxNjA5MTQxNzEyLCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UTYtRElnc3E3dEtvVyIsIm5iZiI6MTYwOTE0MTcxMiwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.vDyDrmriPMyvrzpadJx3iBLvBtX4ELsK4shnKkUPqgC9KovNzSTFVEqOe9hxAqqh9VFrEC7kBbS4FNm007CWC4P9_zbN0Ax829Q1DRS3ZZQg-wYEXywFgIqMEPKavG9KkpQ_zvNplu4kLq-gdlR0sjF37x9s7j7uZVJg8xAf8LVEOJzqfgsnt56JpcOGWsaQahQyvhAUq8_O9EYLM_PewqxIfVT6hJA83_ULGUFF9wp4xVbS1kU-u93E569F0gdiJnmcQ80CB6fz4q4u_oMrqBZiaZIJ1RYNKRXk3i8pNPhu9d3sIulPCY8PuD9eqdL31LF9npd8r54lWs05ATrg-g' \
--header 'X-Signature: sha256 XvedDW8H2gqGL5gMzTHqDy1PXX3OqRF09WuQDkeCDwuinOAsPstcPOSefUwkyHPM9WPNKKHyR5qXbKNLC7UgQyGi8Ynio03kDo0p+g3BqXaUT1tpo5D8kv42Kh2S8CW4RkX2Dkf+Yxi2XMQ8l3kzPZaRyhudaGerUZony4Npzf63p4+oTBbXE01uX/4x/WL57+zkaaVRc1KlJsLdGsBmLlPOHLana7udJffJyxXhOmyokBuJ4GoOC8JpDG9oaKCNMZ88ow9CWWB0yRPrK2KeaEDwzCm2Jh8IFKw1gS6avQAwsjychZWv5XmAXkZ8ZQrnLXJquA09QpLxPTtOeQC9SA==' \
--header 'X-Nonce-Str: XAYZRZNLGCKSTURRFKBIGYALUKLCLJOG' \
--header 'X-Timestamp: 1599467903' \

```

> Example Body Request

```json
{
  "countryCode": "60",
  "phoneNumber": "187824152"
}
```

### Response Parameters

| Parameter | Type   | Description              | Example       |
| --------- | ------ | ------------------------ | ------------- |
| `profile` | Object | Member Profile           | Show as Below |
| `url`     | String | Loyalty App Redirect URL | Show as Below |

<br />

> Example Response

```json
{
  "profile": {
    "id": "",
    "key": "EhIKBk1lbWJlchDOuOKz24XWkg4SGQoNTWVtYmVyUHJvZmlsZRDl-MTxiPOPjzY",
    "name": "yussuf",
    "email": "yussuf888@gmail.com",
    "nric": "",
    "birthDate": "0001-01-01",
    "gender": "",
    "state": "",
    "address": {
      "addressLine1": "",
      "addressLine2": "",
      "postcode": "",
      "city": "",
      "state": "",
      "country": ""
    },
    "memberTier": null,
    "totalLoyaltyPoint": 111,
    "hasPinCode": false,
    "loyaltyPointBalance": 0,
    "spendingPoint": 0,
    "creditBalance": 10160,
    "status": "ACTIVE",
    "createdAt": "2018-10-19T03:39:47Z",
    "updatedAt": "2020-11-30T04:28:15Z"
  },
  "url": "http://sb-open.revenuemonster.my/loyalty-redirect?merchantId=4118165203679668885&accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDIxLTAxLTExVDA4OjEwOjU5WiIsImtleSI6IkVoSUtCazFsYldKbGNoRE91T0t6MjRYV2tnNFNHUW9OVFdWdFltVnlVSEp2Wm1sc1pSRGwtTVR4aVBPUGp6WSIsInR5cGUiOiJtZW1iZXIifQ.IHmAKSJJYfKhev6Ccjve9kLfWwddzMuGQS2s7IUeCMA"
}
```
