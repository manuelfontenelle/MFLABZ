export type FAQDataItem = {
  id: string;
  question: string;
  answer: string;
};

/** FAQ content lives in messages under FAQ.items; ids kept for accordion defaults. */
export const faqIds = [
  "faq-01",
  "faq-02",
  "faq-03",
  "faq-04",
  "faq-05",
  "faq-06",
  "faq-07",
  "faq-08",
  "faq-09",
  "faq-10"
] as const;
