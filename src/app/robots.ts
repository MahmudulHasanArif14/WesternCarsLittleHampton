import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Booking confirmations carry query tokens and must stay unindexed.
const disallow = ["/book-now", "/thank-you"];

/**
 * Answer-engine crawlers are named explicitly rather than left to the wildcard.
 * Several of them (Google-Extended, Applebot-Extended) only grant AI surface
 * inclusion when they find their own user-agent, and an explicit allow removes
 * any ambiguity about citation in AI answers.
 */
const aiAgents = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "Amazonbot",
  "meta-externalagent",
  "DuckAssistBot",
  "MistralAI-User",
  "cohere-ai",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: aiAgents, allow: "/", disallow },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
