/* eslint-disable no-undef */

const i18n = {
  locales: ["en", "fr"],
  defaultLocale: "en",
};

const compiler = {
  styledComponents: true,
};

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Powered-By",
    value: "Next.js & onRuntime",
  },
];

const headers = async () => {
  return [
    {
      // Apply these headers to all routes in your application.
      source: "/:path*",
      headers: securityHeaders,
    },
  ];
};

module.exports = {
  poweredByHeader: false,
  i18n,
  compiler,
  headers,
};
