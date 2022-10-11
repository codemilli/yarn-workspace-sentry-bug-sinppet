const { withSentryConfig } = require('@sentry/nextjs');

const nextConfig = {
  sentry: {
    transpileClientSDK: true,
  },
}

const userSentryWebpackPluginOptions = {
  dryRun: true
}

module.exports = withSentryConfig(nextConfig, userSentryWebpackPluginOptions);
