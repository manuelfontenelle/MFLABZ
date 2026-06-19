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
          padding: "72px",
          width: "100%"
        }}
      >
        <div
          style={{
            border: "1px solid rgba(17, 17, 17, 0.14)",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            overflow: "hidden",
            padding: "56px",
            width: "100%"
          }}
        >
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexShrink: 0,
              justifyContent: "space-between",
              marginBottom: 20
            }}
          >
            { /* eslint-disable-next-line @next/next/no-img-element */ }
            <img src={logoSrc} width={146} height={79} alt="MFLABZ logo" />
            <span
              style={{
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: "-0.02em"
              }}
            >
              Paris + Worldwide
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
              gap: 20,
              justifyContent: "center",
              minHeight: 0
            }}
          >
            <h1
              style={{
                fontSize: 80,
                fontWeight: 700,
                letterSpacing: "-0.075em",
                lineHeight: 0.96,
                margin: 0,
                maxWidth: 900
              }}
            >
              Freelance Graphic Designer for Modern Brands
            </h1>
            <p
              style={{
                color: "rgba(17, 17, 17, 0.68)",
                fontSize: 26,
                lineHeight: 1.35,
                margin: 0,
                whiteSpace: "nowrap"
              }}
            >
              Logo design, brand identity, print design and social media visuals.
            </p>
          </div>

          <div
            style={{
              color: "#2150dc",
              display: "flex",
              flexShrink: 0,
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: "-0.01em",
              marginTop: 24
            }}
          >
            mflabz.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
