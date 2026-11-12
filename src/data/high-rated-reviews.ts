import { testimonialsData, type TestimonialItem } from "@/data/testimonials-data";

export const REVIEWS_PER_PAGE = 80;

function mixOrder(seed: number) {
  return function next() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let value = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleByDate<T extends { item: TestimonialItem }>(items: T[]) {
  const result = [...items];
  const random = mixOrder(20261112);

  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    const current = result[index];
    const swap = result[swapIndex];

    if (!current || !swap) {
      continue;
    }

    result[index] = swap;
    result[swapIndex] = current;
  }

  return result;
}

export const highRatedReviews: TestimonialItem[] = shuffleByDate(
  testimonialsData
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => item.rating === 4 || item.rating >= 4.7)
).map(({ item }) => item);

export const highRatedReviewPageCount = Math.max(
  1,
  Math.ceil(highRatedReviews.length / REVIEWS_PER_PAGE)
);

export function reviewsForPage(page: number) {
  const start = (page - 1) * REVIEWS_PER_PAGE;

  return highRatedReviews.slice(start, start + REVIEWS_PER_PAGE);
}
