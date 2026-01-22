---
id: send-sms
title: Send SMS
sidebar_label: Send SMS
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>

URL: `https://open.revenuemonster.my/v3/sms`<br/>

Sandbox URL: `https://sb-open.revenuemonster.my/v3/sms`

:::note

- Send TAC to user
<!-- - Send TAC or Promotional to user -->

:::

### Request Parameters

| Parameter     | Type   | Description | Example       |
| ------------- | ------ | ----------- | ------------- |
| `countryCode` | String |             | "60"          |
| `phoneNumber` | String | User Number | "163877652"   |
| `message`     | String |             | "test"        |
| `type`        | String |             | "VERIFY_CODE" |

<!-- :::note

- VERIFY_CODE ( Send tac code )
- PROMOTIONAL ( Send promotional message )

::: -->

> Example Request

```bash
curl --location --request POST 'https://sb-open.revenuemonster.my/v3/sms' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVKTE42dFdBMG82MEx3Il0sImV4cCI6MTYwMzI1NDU2OSwiaWF0IjoxNjAwNjYyNTY5LCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UTZNenR5b1RFckpzVyIsIm5iZiI6MTYwMDY2MjU2OSwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.H3G6UDX7sR9EXtTMNs4Q2OHdhUGIhhCfdlAeOpywH4rDuVOcWXXwzF4Imbx8E7I10vFAJpwYZrEkCWCdCCw-WV11y9VT5kP6k75CeS-ZPMOLcKnC5iFT7vEi07r6ovwty9erlcZeXrtrmEIn3rnLva-dxSg3vZ2MyymoNDk-kV7ltXnkoWW4jtXRls6siLhxeY__8kXn2qa0ojVX4Nm6HmzN_vgi-RKSmToMgsdzTF94Y61QVBWhZfolD2-JpHx4qNlklcUdv8HOJ1QHHWpyoJytaJmvr3GJ5G399LbcTLwxB1p2qPg7z4hpoGNu4AP-ybRJVC3P9q9OscQYDNX-dA' \
--header 'X-Signature: sha256 Sty3LNcKA8+WlMHtAgIY+y1xbwnzKsN0UdyKaW+yYIgcTkBAtF7G5Lx251qQITURJ4wiXPDODxhs1nFVmBBing==' \
--header 'X-Nonce-Str: VYNknZohxwicZMaWbNdBKUrnrxDtaRhN' \
--header 'X-Timestamp: 1528450585' \
--data-raw '{
    "countryCode":"60",
    "phoneNumber": "163877652",
    "message": "test",
    "type": "VERIFY_CODE"
}'
```

### Response Parameters

| Parameter | Type   | Description                                                                                              | Example   |
| --------- | ------ | -------------------------------------------------------------------------------------------------------- | --------- |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix : Error Codes`) | "SUCCESS" |

> Example Response

```json
{
  "code": "SUCCESS"
}
```
