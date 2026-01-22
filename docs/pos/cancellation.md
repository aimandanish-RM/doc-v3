---
id: cancellation
title: POS Payment Cancellation
sidebar_label: POS Payment Cancellation
---

import { Box, Heading, Text, Card, Image, Button, Flex } from "rebass";

**Method :** <span style={{ color: "orange", fontWeight: "bold" }}>POST</span><br/>
URL : `https://open.revenuemonster.my/v3/event/terminal`<br/>
Sandbox URL : `https://sb-open.revenuemonster.my/v3/event/terminal`

### Request Parameters

| Parameter    | Type   | Required | Description  | Example               |
| ------------ | ------ | :------: | ------------ | --------------------- |
| `terminalId` | String |   Yes    | Terminal ID  | "1582107209454501456" |
| `type`       | String |   Yes    | Request type | "CANCEL"              |

> Example Request

```json
curl --location --request POST "https://sb-open.revenuemonster.my/v3/event/terminal" \
--header "Content-Type: application/json" \
--header "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMTgtMDMtMTMiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiYXBpX2NsaWVudEBFaGNLQzA5QmRYUm9RMnhwWlc1MEVNV1Z4NF9UbE5MZEZRIl0sImV4cCI6MTU4NjMzNzc1OCwiaWF0IjoxNTgzNzQ1NzU4LCJpc3MiOiJodHRwczovL3NiLW9hdXRoLnJldmVudWVtb25zdGVyLm15IiwianRpIjoiRWh3S0VFOUJkWFJvUVdOalpYTnpWRzlyWlc0UXlKSG9qb2VNcHYwViIsIm5iZiI6MTU4Mzc0NTc1OCwic3ViIjoiRWhRS0NFMWxjbU5vWVc1MEVKWFZ6ZDN3cmFxVE9SSVFDZ1JWYzJWeUVJeUpxSXp2eU1QVmNRIn0.FfBkCb7fjCKJdcy_DS06dKgEtcAvukPio0HyDRtH2UovhZsLFSqD_8oo21u094XSor_mqFg4hqXmLaHjX-h92Wz3kHl7OwiKQb16x8Rnl5OdyPHtMqIZqP8ab8Ch0RHEZ33VchK1zBTnG6Xosrb1B44tWqJ0_kdTtbRZN4rG821C8i4sb6sx8GaxgluJ5q7CEifMTBFJam_Jub9LfAfukq8YyIl0Bykp7B3A_su2QoELL9L_ElJdV9FuwFPHcKr9bxLvVSrEdyrFg7IBm_tJHxSl8gTh3j4b6lWZrBCfMSLraXaYRNzz1ddbVnwYD4aRuSyRmQeMYTUj0cInktnKUA" \
--header "X-Signature: sha256 GohuT2QTUXJV3MZh2OoEE9qW9wcfakOU9iVLmkTjM12NQuV6IcWMRQDz9NdxAOVIrh5MssfYCLDlafb2illXxgQMpmZkZ38NT6NQsMeMfGbHBS1Kc+BUtU7o1TMLUzk55J1tA6f0Z95oEuBlCeLm6VsgCG30wFm5YmgssJ0weIwMcW355r2sFl7QcKOuRqynoGtmmr/aGfOk1HjiFLoFzSd38O7rRjwGrekYwuYUD1N/Wp5GFXRjtaaPkzAERPbXEmnh/taLME8VeAhky6dAVGZE6gHKnP5WvvVjUE+KLtj3D32YIHzxhzEW9x3JEObqgvm5Q2oRZNxoh6/MvqwkVA==" \
--header "X-Nonce-Str: bfdgdjgtjhmnbmmjmdfdghghffj" \
--header "X-Timestamp: 1546850694" \
--data-raw {
    "terminalId": "1582107209454501456",
    "type": "CANCEL"
}
```

### Response Parameters

| Parameter | Type   | Description                                                                                               | Example   |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- | --------- |
| `code`    | String | Successfully call this endpoint. If fail, will return error code object (Refer `Appendix 1: Error Codes`) | "SUCCESS" |
| `error`   | String | (Refer `Appendix: Error Codes`)                                                                           | {}        |

<br/>

> Example Response

```json
{
  "code": "SUCCESS"
}
```
