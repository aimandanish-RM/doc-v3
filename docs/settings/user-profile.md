---
id: user-profile
title: Get User Profile
sidebar_label: Get User Profile
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL :`https://open.revenuemonster.my/v3/user`<br/>
Sandbox URL :`https://sb-open.revenuemonster.my/v3/user`

:::note
To query for ALL users under this merchant.
:::

### Request Parameters:

:::note
No request parameter is required for this endpoint.
:::

### Response Parameters

| Parameter | Type     | Description                                                                                               | Example                      |
| --------- | -------- | --------------------------------------------------------------------------------------------------------- | ---------------------------- |
| `item`    | Object[] | Array of user object                                                                                      | (Refer to explanation below) |
| `code`    | String   | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS"                    |

<br/>

<strong>Array of store object (item):</strong>

| Parameter     | Type     | Description                         | Example                                                       |
| ------------- | -------- | ----------------------------------- | ------------------------------------------------------------- |
| `id`          | String   | User ID                             | “8190656045166232716”                                         |
| `firstName`   | String   | First name of user                  | “MOHAMED”                                                     |
| `lastName`    | String   | Last name of user                   | “YUSSUF”                                                      |
| `countryCode` | String   | Country code of user contact number | "60"                                                          |
| `phoneNumber` | String   | Phone number of user                | "377334080"                                                   |
| `email`       | String   | Email address of user               | "yussuf@revenuemonster.my"                                    |
| `avatarUrl`   | String   | Public URL to show user’s avatar    | "https://storage.googleapis.com/rm-prod-asset/img/avatar.png" |
| `status`      | String   | Current status of user              | “ACTIVE”                                                      |
| `storeId`     | String   | Store ID                            | "6170506694335521334"                                         |
| `isActive`    | Boolean  | User active or deactivated status   | true                                                          |
| `createdAt`   | DateTime | Creation date time of user          | "2018-02-12T08:53:13Z"                                        |
| `updatedAt`   | DateTime | Last update date time of user       | "2018-02-12T08:53:13Z"                                        |

> Example Response

```json
{
  "item": {
    "id": "2728070797661038926",
    "firstName": "M",
    "lastName": "YUSSUF",
    "countryCode": "60",
    "phoneNumber": "176473298",
    "email": "yussuf@revenuemonster.my",
    "avatarUrl": "https://storage.googleapis.com/rm-dev-asset/img/avatar.png",
    "status": "ACTIVE",
    "storeId": ["6883264812332703106"],
    "isActive": true,
    "createdAt": "2018-05-14T09:26:23Z",
    "updatedAt": "2018-05-15T03:29:56Z"
  },
  "code": "SUCCESS"
}
```
