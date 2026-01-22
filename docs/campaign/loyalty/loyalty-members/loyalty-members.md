---
id: loyalty-members
title: Get Loyalty Members
sidebar_label: Get Loyalty Members
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL : `https://open.revenuemonster.my/v3/loyalty/members`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/loyalty/members`

:::note
Get All Loyalty Members
:::

### Request Parameters

:::note
No request parameter is required for this endpoint.
:::

### Response Parameters

> Example Response

```json
{
  "items": [
    {
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
    {
      "id": "3328113896344269171",
      "name": "Sharon",
      "email": "sharon@apacvebture.com",
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
      "loyaltyPoint": 99,
      "countryCode": "60",
      "phoneNumber": "1126195189",
      "profileImageUrl": "https://storage.googleapis.com/rm-sandbox-asset/img/avatar.png",
      "memberTier": null,
      "status": "ACTIVE",
      "createdAt": "2018-09-13T09:17:24Z"
    },
    {
      "id": "2777058682717858418",
      "name": "yussuf",
      "email": "yussuf@gmail.com",
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
      "loyaltyPoint": 400,
      "countryCode": "60",
      "phoneNumber": "176473298",
      "profileImageUrl": "https://storage.googleapis.com/rm-dev-asset/img/avatar.png",
      "memberTier": null,
      "status": "ACTIVE",
      "createdAt": "2018-09-26T07:13:13Z"
    }
  ],
  "code": "SUCCESS",
  "meta": {
    "count": 3
  }
}
```
