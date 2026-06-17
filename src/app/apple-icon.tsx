import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f8f6f0",
          color: "#111111",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          width: "100%"
        }}
      >
        <div
          style={{
            fontSize: 92,
            fontWeight: 700,
            letterSpacing: "-0.06em",
            lineHeight: 1
          }}
        >
          MF
        </div>
        <div
          style={{
            background: "#2150dc",
            borderRadius: 4,
            height: 8,
            marginTop: 14,
            width: 64
          }}
        />
      </div>
    ),
    size
  );
}
