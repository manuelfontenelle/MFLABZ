import { getTranslations } from "next-intl/server";

import { Container } from "@/components/ui";
import { Link } from "@/i18n/navigation";

import { Footer } from "./footer";
import { Navbar } from "./navbar";

type LegalSection = {
  title: string;
  paragraphs: string[];
  list?: string[];
};

type LegalPageKey = "privacy" | "terms" | "notice";

type LegalPageProps = {
  pageKey: LegalPageKey;
};

export async function LegalPage({ pageKey }: LegalPageProps) {
  const t = await getTranslations(`Legal.${pageKey}`);
  const common = await getTranslations("Common");

  const sections = t.raw("sections") as LegalSection[];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-8 pb-section">
        <Container size="md">
          <article className="overflow-hidden rounded-md border border-border bg-muted/45 p-6 sm:p-8 lg:rounded-[0.54rem] lg:p-10">
            <header className="mb-10 border-b border-border pb-8">
              <Link
                href="/"
                className="mb-6 inline-flex text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {common("backToHome")}
              </Link>
              <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                {t("title")}
              </h1>
              <p className="mt-3 max-w-2xl text-body-sm leading-6 text-muted-foreground">
                {t("description")}
              </p>
              <p className="mt-3 text-xs font-medium text-muted-foreground">
                {common("lastUpdated", { date: t("lastUpdated") })}
              </p>
            </header>

            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="mb-3 text-lg font-semibold text-foreground">
                    {section.title}
                  </h2>
                  <div className="space-y-3">
                    {section.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-body-sm leading-7 text-muted-foreground"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.list && (
                    <ul className="mt-3 list-disc space-y-2 pl-5">
                      {section.list.map((item) => (
                        <li
                          key={item}
                          className="text-body-sm leading-7 text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </>
  );
}
