import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const alt = "MFLABZ freelance graphic design portfolio";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logoData = await readFile(
    join(process.cwd(), "public/images/mflabz-logo.svg")
  );
  const logoSrc = `data:image/svg+xml;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f8f6f0",
          color: "#111111",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%"
        }}
      >
        <div
          style={{
            alignItems: "center",
            border: "1px solid rgba(17, 17, 17, 0.12)",
            display: "flex",
            flexDirection: "column",
            height: 548,
            justifyContent: "center",
            padding: "48px 56px",
            textAlign: "center",
            width: 548
          }}
        >
          { /* eslint-disable-next-line @next/next/no-img-element */ }
          <img
            src={logoSrc}
            width={143}
            height={77}
            alt="MFLABZ logo"
            style={{ marginBottom: 36 }}
          />

          <p
            style={{
              fontSize: 52,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              lineHeight: 1.02,
              margin: "0 0 18px"
            }}
          >
            Freelance Graphic Designer
          </p>

          <p
            style={{
              color: "#111111",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
              margin: "0 0 32px"
            }}
          >
            Logo · Branding · Print & Social
          </p>

          <div
            style={{
              background: "#111111",
              borderRadius: 999,
              height: 4,
              marginBottom: 28,
              width: 48
            }}
          />

          <p
            style={{
              color: "#111111",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              margin: 0
            }}
          >
            mflabz.com
          </p>
        </div>
      </div>
    ),
    size
  );
}
