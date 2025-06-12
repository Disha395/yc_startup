import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typscript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
            },
        ],
    },

    // ✅ Move experimental inside nextConfig
    experimental: {
        ppr: "incremental",
        after: true,
    },

    // ✅ Move devIndicators inside nextConfig
    devIndicators: {
        appIsrStatus: true,
        buildActivity: true,
        buildActivityPosition: "bottom-right",
    },
};

export default withSentryConfig(nextConfig, {
    org: "jsmastery-mj",
    project: "javascript-nextjs",
    silent: !process.env.CI,
    widenClientFileUpload: true,
    disableLogger: true,
    automaticVercelMonitors: true,
});
