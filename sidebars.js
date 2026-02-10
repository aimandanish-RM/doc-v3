module.exports = {
  someSidebar: {
    Introduction: ["introduction/overview", "introduction/usecase"],

    "Quick Start": [
      {
        type: "category",
        label: "SDK",
        items: ["quickstart/sdk", "quickstart/mobile-sdk"],
      },
      "quickstart/signature-algorithm",
      "quickstart/verify-signature",
{
  type: "category",
  label: "Access Token",
  items: [
    {
      type: "doc",
      id: "quickstart/accesstoken/client-credentials",
      className: "api-post",
    },
    {
      type: "doc",
      id: "quickstart/accesstoken/authorization-code",
      className: "api-post",
    },
    {
      type: "doc",
      id: "quickstart/accesstoken/refresh-token",
      className: "api-post",
    },
  ],
}

    ],

"Merchant Onboarding": [
  "merchant-onboarding/introduction",

  {
    type: "doc",
    id: "merchant-onboarding/create-merchant",
    className: "api-post",
  },
  {
    type: "doc",
    id: "merchant-onboarding/get-merchants",
    className: "api-get",
  },
  {
    type: "doc",
    id: "merchant-onboarding/get-merchant",
    className: "api-get",
  },
  {
    type: "doc",
    id: "merchant-onboarding/update-merchant",
    className: "api-patch",
  },
  {
    type: "doc",
    id: "merchant-onboarding/submit-merchant-for-review",
    className: "api-post",
  },
  {
    type: "doc",
    id: "merchant-onboarding/upload-merchant-file",
    className: "api-post",
  },

  {
    type: "category",
    label: "Application Clients",
    items: [
      {
        type: "doc",
        id: "merchant-onboarding/application-clients/get-application-clients",
        className: "api-get",
      },
      {
        type: "doc",
        id: "merchant-onboarding/application-clients/create-application-client",
        className: "api-post",
      },
      {
        type: "doc",
        id: "merchant-onboarding/application-clients/update-application-client",
        className: "api-put",
      },
    ],
  },
],



    Payment: [
      "v2/payment/quick-pay",
      "v2/payment/query-transaction",
      "v2/payment/cancel-transaction",
      "v2/payment/terminal-integration",
      "v2/payment/deeplink-integration",
      "v2/payment/online-payment",
      "v2/payment/tokenization-payment",
      "v2/payment/reconciliation",
    ],

    // "(Deprecated) Payment": [
    //   "payment/overview",
    //   "payment/quick-pay",
    //   {
    //     type: "category",
    //     label: "Transaction QR",
    //     items: [
    //       "payment/transactionQR/transaction-qr",
    //       "payment/transactionQR/get-transaction-qr-code-url",
    //       "payment/transactionQR/get-transaction-qr-code-url-by-code",
    //       "payment/transactionQR/get-transaction-by-code",
    //     ],
    //   },
    //   {
    //     type: "category",
    //     label: "Web/Mobile Payment",
    //     items: [
    //       "payment/webpayment/web-payment",
    //       "payment/webpayment/notify-url",
    //       // "payment/webpayment/get-web-payment-qr-code",
    //       "payment/webpayment/qr-code&url-by-checkout-id",
    //       "payment/webpayment/get-online-transaction",
    //       "payment/customertoken/get-customer-token",
    //       "payment/customertoken/delete-customer-token",
    //     ],
    //   },
    //   {
    //     type: "category",
    //     label: "Customer Binding",
    //     items: [
    //       {
    //         type: "category",
    //         label: "Recurring Payments",
    //         items: [
    //           "payment/customer/recurringpayment/create-recurring-customer"
    //         ]
    //       },
    //       {
    //         type: "category",
    //         label: "Tokenized Payments",
    //         items: [
    //           "payment/customer/tokenizedpayment/create-tokenized-customer",
    //         ]
    //       },
    //       "payment/customer/toggle-customer-status",
    //       "payment/customer/get-customer-orders",
    //       "payment/customer/create-customer-order",
    //     ],
    //   },
    //   "payment/alipay-mini-program",
    //   "payment/refund",
    //   "payment/reverse",
    //   "payment/query-status-by-order-id",
    //   "payment/query-status-by-transaction-id",
    //   "payment/get-fpx-bank-list",
    //   "payment/get-all-transaction",
    //   "payment/daily-settlement-report",
    // ],

    // "(Deprecated) POS Integration": [
    //   "pos/payment",
    //   "pos/cancellation",
    //   "pos/card-refund",
    //   "pos/card-settlement",
    // ],

    "Visa Offers Platform": [
      "visa-vop/enroll-user",
      "visa-vop/unenroll-user",
      "visa-vop/enroll-card",
      "visa-vop/unenroll-card",
      "visa-vop/webhook",
    ],

    Plugin: ["v2/plugin/introduction", "v2/plugin/integration"],

    "à la carte": [
      "alacarte-open/introduction",
      {
        type: "category",
        label: "Orders",
        items: [
          "alacarte-open/orders/get-orders-by-store-id",
          "alacarte-open/orders/get-order-by-id",
          "alacarte-open/orders/update-order-status",
          "alacarte-open/orders/refund-order",
        ],
      },
      {
        type: "category",
        label: "Store",
        items: [
          "alacarte-open/store/get-store-by-id",
          "alacarte-open/store/update-store-by-id-delivery",
          "alacarte-open/store/update-store-by-id-types",
          "alacarte-open/store/update-store-by-id-availability",
        ],
      },
      {
        type: "category",
        label: "Inventory",
        items: [
          "alacarte-open/inventory/create-category-by-store-id",
          "alacarte-open/inventory/get-categories-by-store-id",
          "alacarte-open/inventory/update-category-by-id",
          "alacarte-open/inventory/create-item",
          "alacarte-open/inventory/get-items-by-category-id",
          "alacarte-open/inventory/get-all-items-by-store-id",
          "alacarte-open/inventory/update-item-by-id",
          "alacarte-open/inventory/update-item-quantity-by-id",
        ],
      },
      "alacarte-open/set-notification",
    ],

    "Loyalty & Voucher": [
      {
        type: "category",
        label: "Member",
        items: [
          "campaign/member/register-loyalty-member",
          "campaign/member/check-loyalty-member",
          "campaign/member/profile",
          {
            type: "category",
            label: "Vouchers",
            items: [
              "campaign/member/vouchers/vouchers-detail",
              "campaign/member/vouchers/voucher-by-code",
              "campaign/member/vouchers/redeem-voucher",
            ],
          },
          {
            type: "category",
            label: "Rewards",
            items: [
              "campaign/member/rewards/rewards-detail",
              "campaign/member/rewards/reward-by-id",
              "campaign/member/rewards/redeem-reward",
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Loyalty",
        items: [
          {
            type: "category",
            label: "Loyalty Point",
            items: [
              "campaign/loyalty/loyalty-point/give-loyalty-point",
              "campaign/loyalty/loyalty-point/deduct-loyalty-point",
              "campaign/loyalty/loyalty-point/spending-loyalty-point",
              "campaign/loyalty/loyalty-point/cancel-spending-loyalty-point",
              "campaign/loyalty/loyalty-point/calculate-spending-reward",
            ],
          },
          {
            type: "category",
            label: "Loyalty Members",
            items: [
              "campaign/loyalty/loyalty-members/member-authorize",
              "campaign/loyalty/loyalty-members/loyalty-members",
              "campaign/loyalty/loyalty-members/loyalty-member",
              "campaign/loyalty/loyalty-members/loyalty-member-history",
              "campaign/loyalty/loyalty-members/bulk-create-members",
              "campaign/loyalty/loyalty-members/topup-online",
              "campaign/loyalty/loyalty-members/topup-offline",
            ],
          },
          {
            type: "category",
            label: "Loyalty Balance",
            items: [
              "campaign/loyalty/loyalty-balance/get-loyalty-balances",
              "campaign/loyalty/loyalty-balance/spend-loyalty-balance",
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Voucher",
        items: [
          "campaign/voucher/overview",
          "campaign/voucher/get-voucher-batches",
          "campaign/voucher/voucher-by-code",
          "campaign/voucher/voucher-batch-by-key",
          "campaign/voucher/issue-voucher",
          "campaign/voucher/void-voucher",
          "campaign/voucher/reinstate-voucher",
          "campaign/voucher/bulk-redeem-voucher",
        ],
      },

      {
        type: "category",
        label: "Campaign",
        items: ["campaign/chop-stamp", "campaign/gourmet-card"],
      },
    ],
    // "Merchant Wallet": [
    //   "merchant-wallet/check-balance",
    //   "merchant-wallet/topup-wallet",
    //   "merchant-wallet/history",
    //   "merchant-wallet/topup-history",
    // ],
    Settings: [
      {
        type: "category",
        label: "Account",
        items: [
          "settings/account-detail/create-account",
          "settings/account-detail/get-accounts",
          "settings/account-detail/get-account",
          "settings/account-detail/update-account",
          "settings/account-detail/submit-account-review",
        ],
      },
      {
        type: "category",
        label: "Store",
        items: [
          "settings/store-detail/store-details",
          "settings/store-detail/get-store-by-id",
          "settings/store-detail/create-store",
          "settings/store-detail/update-store",
          "settings/store-detail/delete-store",
        ],
      },
      {
        type: "category",
        label: "Merchant",
        items: [
          "settings/merchant-detail/merchant-profile",
          "settings/merchant-detail/merchant-subscriptions",
        ],
      },
      {
        type: "category",
        label: "User",
        items: ["settings/user-profile"],
      },
    ],
    eKYC: [
      "ekyc/mykad-recognition",
      "ekyc/liveness-check-with-face-verification",
      "ekyc/face-verification",
      "ekyc/get-mykad-result",
      "ekyc/get-ekyc-result",
    ],
    "Short Message Service ": ["sms/send-sms"],
    "Push Notification": ["push-notification/push-to-merchant"],
    Downloads: [
      "downloads/revenue-monster-logo",
      "downloads/application",
      "downloads/logo",
      "downloads/testing-wallets",
    ],
    "e-Commerce Plugin": [
      "ecom-plugin/lowCodeCheckout",
      "ecom-plugin/wooCommerce",
      "ecom-plugin/opencart",
      "ecom-plugin/easystore",
      {
        type: 'link',
        label: "SiteGiant",
        href: "https://support.sitegiant.com/knowledge-base/how-to-set-up-revenue-monster-payment-gateway/",
      },
    ],
    Appendix: ["payment-method", "product-terms", "error-codes", "bank-code"],
  },
};
