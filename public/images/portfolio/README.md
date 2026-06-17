# Portfolio Images

Upload your portfolio visuals in this folder.

Use this structure:

```txt
public/images/portfolio/
  logo/
  business-cards/
  trifold/
  bifold/
  brochure/
  flyer/
  roll-up/
  billboard/
  yard-sign/
  social-media/
```

Each image should use the project id from `src/data/portfolio-data.ts` as the file name.

Example:

```txt
public/images/portfolio/logo/monogram-logo-suite.jpg
public/images/portfolio/business-cards/minimal-business-card.png
public/images/portfolio/social-media/instagram-post-set.webp
```

Supported formats:

```txt
.jpg
.png
.webp
.jpeg
```

If a local file is missing, the site will keep showing the current placeholder image automatically.
