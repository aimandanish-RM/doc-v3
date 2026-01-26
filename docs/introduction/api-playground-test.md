# API Playground Test

Below is a live API playground rendered from a code block.

```api-playground
method: POST
title: Create Payment
url: https://sb-open.revenuemonster.my/v3/payment/online
headers:
  Content-Type: application/json
body: |
  {
    "order": {
      "id": "test-order-123",
      "title": "Test Order",
      "currencyType": "MYR",
      "amount": 100
    }
  }
```