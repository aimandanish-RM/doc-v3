---
id: delete-customer-token
title: Delete Customer Tokens
sidebar_label: Delete Customer Tokens
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "green", fontWeight: "bold" }}>DELETE</span><br/>
URL : `https://open.revenuemonster.my/v3/payment/tokens/{customerId}`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/payment/tokens/{customerId}`

:::note
Delete Customer Token
:::

### Request Parameters

| Parameter | Type   | Description    | Example                              |
| --------- | ------ | -------------- | ------------------------------------ |
| `token`   | String | Customer Token | tk1072e12a1df2d4367fa30c7246ce86c2e5 |

<br/>

> Example Request

```json
curl --location --request DELETE "https://sb-open.revenuemonster.my/v3/payment/tokens/{customerId}" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVMSDN1YVM0MWNidUZnIl0sImV4cCI6MTY1MzcyODY2MSwiaWF0IjoxNjUxMTM2NjYxLCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UWlieTg3cm1CZ2ZVVyIsIm5iZiI6MTY1MTEzNjY2MSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.iGmBxRNahIhh0IDHHL7AritSojm0tCtysmXaq59vk0JatmTPXhVt8SEEZZq6yBM1oznmzCzSu5mYbTMQsOaPuUMM0GR89Cu7LtTcWgUKZHs4_LAXETrOZ2kU-zodzcj4SjJnaHiE4-KIkmz4W_L5AS9VhsT6bnhQwtUDtVmlBPLXxybf_nQc7cqxZU1Rf5ighZ9fxf6iccT5amCRsRUG81RXDtm81t9ckACMgggJBHGDtyjn2ZmGsvqaLqKNIBGKHKfbh_KLvIGY6nwSRh6nktbQ5_e0G6IWzMbdVTCZ2lWpHvVhRSI4gtrllivheFaHHCg9AzRdJzohCuEYfmfxNw" \
--header "X-Signature: sha256 OsjlEWZLKx0IXgC5PUk6sM+ZZdrS/ELBNdEGj+okOhVAwo/i+GK91CwEmIbLko+p0Vbs8Ph+iBQG/3DyS7kHug==" \
--header "X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN" \
--header "X-Timestamp: 1527407052" \
--data-raw "{
    "token": "tk1072e12a1df2d4367fa30c7246ce86c2e5"
}"

```

