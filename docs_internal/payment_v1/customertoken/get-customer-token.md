---
id: get-customer-token
title: Get Customer Tokens
sidebar_label: Get Customer Tokens
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>GET</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/tokens/{customerId}`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/tokens/{customerId}`

:::note
Get Customer Tokens ( Customer ID based on your side pass in to Web Payment )
:::

### Request Parameters

> Example Request

```json
curl --location --request GET "https://sb-open.revenuemonster.my/v3/payment/tokens/{customerId}" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMy0xOCIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVQZUEyYXJ4dk1PSUZnIl0sImV4cCI6MTU5MzU4MDY0NSwiaWF0IjoxNTkwOTg4NjQ1LCJpc3MiOiJodHRwczovL29hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXMtNnI5LVgzbElvVyIsIm5iZiI6MTU5MDk4ODY0NSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVMUF9wNlNKNnFQN0ZSSVFDZ1JWYzJWeUVPaXZfb1dKNnFQN0ZRIn0.RKtXykw3y0ov3mKKa_K2h5FZB2jXtqf3gNRwwnzzA4xTMdY09mEHlFupMeUmchFW2XHYK254LdMYbF4ZhjxK9K51UUdQBYH-zZpo0WWtPSZqrPGtT-c4z_sEO73EDVcek3rDwyWiXvjSKDpsZM7NOdKRm5tvT3qNK-7C7WMUjSXDcBzbTFhwfOAOO1n-wMR9H_w0DuIE-yMjEZkOdt7GUIBC8F5izATlZH0FRTx4VAwQWY4gjjQ9-3PbUbHx-NKiFXwCOAsxu-79PiF0HDEHb6ZOCGywNmKuanEXqLonli0caZiUZfrdT53y3Xnd3W2SEr6s7ZQxWnQO5PeOU7BQYA" \
--header "X-Signature: sha256 bFGc2JOEFqdI91DE5VXYBUllr+9DHcrrylRFU3i1r72aPmJreljn0dU+nwPSwTH/dTQUiZ9C2aQSF8AuT959EW4WEyEZ6VWgt9gCyZaU/bcOQ/ZIhKc06+uwzivVhAzpbUtG5tm5/sBp4ig6Sk7L6SE0Ecu6Tm0FhYl0qdgZvrTh4EEpLs3kHIuYL9QXKJILfKlu4gTX1Exrt7nNyEr8ndeUMaKYrj3FckMbRtmCwc829SsVp6FAgvoDPnguUJ+VjLF1e9NXhar2JwYjuqMkwsmUWRDbittqCgCCfaPF8anarlLsoXbdYEa7bp9BYp2U/Dw3Xd2MlamEZSR8H+Dosw==" \
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1528450585" \

```

### Response Parameters

```json
{
  "item": [
    {
      "id": "1647923849996233083",
      "label": "Card Label",
      "provider": "GOBIZ",
      "token": "tk10f26d83de548aee420872dae999992475",
      "country": "",
      "createdAt": "2022-03-22T04:37:29Z",
      "updatedAt": "2022-03-22T04:37:29Z",
      "address": {
        "addressLine1": "",
        "addressLine2": "",
        "postCode": "",
        "city": "",
        "state": "",
        "country": ""
      },
      "card": {
        "name": "CITIBANK",
        "method": "MASTER_CARD",
        "fundingtype": "",
        "lastFourNo": "1234",
        "expMonth": 12,
        "ExpYear": 2022,
        "isCvcCheck": true
      }
    },
    {
      "id": "1647923890677792333",
      "label": "Card Label 2",
      "provider": "GOBIZ",
      "token": "tk1072e12a1df2d4367fa30c7246ce86c2e5",
      "country": "",
      "createdAt": "2022-03-22T04:38:10Z",
      "updatedAt": "2022-03-22T04:38:10Z",
      "address": {
        "addressLine1": "",
        "addressLine2": "",
        "postCode": "",
        "city": "",
        "state": "",
        "country": ""
      },
      "card": {
        "name": "ANOTHER_BANK",
        "method": "VISA",
        "fundingtype": "",
        "lastFourNo": "1234",
        "expMonth": 12,
        "ExpYear": 2022,
        "isCvcCheck": true
      }
    }
  ],
  "code": "SUCCESS"
}
```
