---
id: loyalty-member
title: Get Loyalty Member By ID
sidebar_label: Get Loyalty Member By ID
api:
  method: GET
  url:
    sandbox: https://sb-open.revenuemonster.my/v3/loyalty/member/{{member_id}}
    prod: https://open.revenuemonster.my/v3/loyalty/member/{{member_id}}
  headers:
    Content-Type: application/json
    Authorization: Bearer {{access_token}}
    X-Signature: sha256 {{signature}}
    X-Nonce-Str: {{nonce}}
    X-Timestamp: {{timestamp}}
  body: "{}"

examples:
  request: |
    There is no example request provided.
  body: |
    There is no example body request.
  response: |
    {
      "item": {
        "id": "2940921291529816182",
        "name": "Gan",
        "email": "junkai@revenuemonster.my",
        "nric": "",
        "address": {
          "addressLine1": "",
          "addressLine2": "",
          "postcode": "",
          "city": "",
          "state": "",
          "country": ""
        },
        "gender": "",
        "state": "",
        "birthDate": "0001-01-01T00:00:00Z",
        "loyaltyPoint": 0,
        "countryCode": "60",
        "phoneNumber": "167367171",
        "profileImageUrl": "https://storage.googleapis.com/rm-sandbox-asset/img/avatar.png",
        "memberTier": null,
        "status": "ACTIVE",
        "createdAt": "2018-09-19T10:00:21Z"
      },
      "code": "SUCCESS"
    }
---


import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL : `https://open.revenuemonster.my/v3/loyalty/member/2940921291529816182`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/loyalty/member/2940921291529816182`

:::note
Get loyalty member by `Member ID`
:::

### Request Parameters

:::note

- The URL is consists of `[base_URL]`/v3/loyalty/member/`[member_id]`

- Pass an empty JSON object Example: `{}`

:::

### Response Parameters

> Example Response

```json
{
  "item": {
    "id": "2940921291529816182",
    "name": "Gan",
    "email": "junkai@revenuemonster.my",
    "nric": "",
    "address": {
      "addressLine1": "",
      "addressLine2": "",
      "postcode": "",
      "city": "",
      "state": "",
      "country": ""
    },
    "gender": "",
    "state": "",
    "birthDate": "0001-01-01T00:00:00Z",
    "loyaltyPoint": 0,
    "countryCode": "60",
    "phoneNumber": "167367171",
    "profileImageUrl": "https://storage.googleapis.com/rm-sandbox-asset/img/avatar.png",
    "memberTier": null,
    "status": "ACTIVE",
    "createdAt": "2018-09-19T10:00:21Z"
  },
  "code": "SUCCESS"
}
```
