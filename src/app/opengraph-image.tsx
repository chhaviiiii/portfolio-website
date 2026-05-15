import { ImageResponse } from "next/og";

export const alt = "Chhavi Nayyar — portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#f5f2ed",
          color: "#1a1a1a",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Chhavi Nayyar
        </div>
        <div
          style={{
            fontSize: 26,
            color: "#952470",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 20,
          }}
        >
          Fullstack · UX · ML
        </div>
        <div style={{ fontSize: 28, color: "#4a4a4a", maxWidth: 720, lineHeight: 1.4 }}>
          Portfolio of work, research, and experience
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 10,
            background: "#952470",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
