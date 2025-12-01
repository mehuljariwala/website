import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Mehul Jariwala - AI Consultant & LLM Expert";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 80%, rgba(16, 163, 127, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px 60px",
            textAlign: "center",
          }}
        >
          {/* Avatar placeholder */}
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "60px",
              background: "linear-gradient(135deg, #10a37f 0%, #3b82f6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 30,
              fontSize: 48,
              color: "white",
              fontWeight: 700,
            }}
          >
            MJ
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "white",
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            Mehul Jariwala
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 28,
              color: "#10a37f",
              marginBottom: 24,
              fontWeight: 600,
            }}
          >
            AI Consultant & LLM Expert
          </div>

          {/* Description */}
          <div
            style={{
              fontSize: 20,
              color: "#a1a1aa",
              maxWidth: 800,
              lineHeight: 1.5,
            }}
          >
            8+ years building AI agents, RAG systems & LLM applications
          </div>

          {/* Tags */}
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 32,
            }}
          >
            {["ChatGPT", "LangChain", "RAG", "AI Agents"].map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 20px",
                  background: "rgba(16, 163, 127, 0.2)",
                  border: "1px solid rgba(16, 163, 127, 0.4)",
                  borderRadius: 20,
                  color: "#10a37f",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* URL */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              fontSize: 18,
              color: "#71717a",
            }}
          >
            mehuljari.in
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
