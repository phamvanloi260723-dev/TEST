import "../styles/globals.css";

const SITE_METADATA = {
  title: "Hoàng Vũ & Hương Giang - JUNOWED",
  description:
    "Hoàng Vũ & Hương Giang - JUNOWED. Trải qua bao nhiêu chuyện thì chúng tôi đã tìm thấy nhau 1 mảnh ghép tình yêu.",
  url: "https://huonggiang-hoangvu.junowed.com/",
  // Sửa dòng dưới thành tên file mới hoàn toàn
  thumbnail: "https://huonggiang-hoangvu.junowed.com/thumbnail_logo_v2.jpg",
  googleVerification: "",
};

const generateMetaTags = (metadata: typeof SITE_METADATA) => (
  <>
    <title>{metadata.title}</title>

    <meta name="description" content={metadata.description} />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1,maximum-scale=1 "
    />
    <link rel="icon" href="/src/app/favicon.ico" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap"
      rel="stylesheet"
    />

    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={metadata.url} />
    <meta property="og:title" content={metadata.title} />
    <meta property="og:description" content={metadata.description} />
    <meta property="og:image" content={metadata.thumbnail} />
    <meta property="og:image:secure_url" content={metadata.thumbnail} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:locale" content="vi_VN" />
    <meta property="og:site_name" content="JUNOWED" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={metadata.title} />
    <meta name="twitter:description" content={metadata.description} />
    <meta name="twitter:image" content={metadata.thumbnail} />

    {/* Zalo */}
    <meta property="zalo:site_name" content="JUNOWED" />
    <meta property="zalo:title" content={metadata.title} />
    <meta property="zalo:description" content={metadata.description} />
    <meta property="zalo:image" content={metadata.thumbnail} />
  </>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" data-bs-theme="light" suppressHydrationWarning>
      <head>
        {generateMetaTags(SITE_METADATA)}
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
        <link rel="canonical" href="https://huonggiang-hoangvu.junowed.com/" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FFD700'><path d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4 8.24 4 9.91 5.01 10.44 6.36 10.97 5.01 12.64 4 14.38 4 16.88 4 18.88 6 18.88 8.5 18.88 12.28 15.48 15.36 12 20.03 12 20.03 12 21.35 12 21.35z'/></svg>"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="https://huonggiang-hoangvu.junowed.com/thumbnail_logo_v2.jpg"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Allura&family=Great+Vibes&family=Parisienne&family=Tangerine:wght@400;700&family=Sacramento&family=Playfair+Display:wght@400;600&family=Cormorant+Garamond:wght@400;600&family=Cinzel:wght@400;600&family=Bodoni+Moda:wght@400;600&family=DM+Serif+Display&family=Montserrat:wght@400;600&family=Lora:wght@400;600&family=Libre+Baskerville&family=Poppins:wght@400;600&family=Raleway:wght@400;600&family=Be+Vietnam+Pro:wght@400;600&family=Spectral:wght@400;600&display=swap"
          rel="stylesheet"
        ></link>
        {/* Preconnect CDN */}
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap"
        />

        {/* Bootstrap CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          integrity="sha256-2FMn2Zx6PuH5tdBQDRNwrOo60ts5wWPC9R8jK67b3t4="
          crossOrigin="anonymous"
        />

        {/* FontAwesome CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@7.1.0/css/all.min.css"
          integrity="sha256-4rTIfo5GQTi/7UJqoyUJQKzxW8VN/YBH31+Cy+vTZj4="
          crossOrigin="anonymous"
        />

        {/* Bootstrap JS */}
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
          integrity="sha256-5P1JGBOIxI7FBAvT/mb1fCnI5n/NhQKzNUuW7Hq0fMc="
          crossOrigin="anonymous"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem("bs-theme");
                  var autoTheme = document.documentElement.getAttribute("data-bs-theme") === "auto";
                  if (storedTheme) {
                    document.documentElement.setAttribute("data-bs-theme", storedTheme);
                  } else if (autoTheme) {
                    var isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    document.documentElement.setAttribute("data-bs-theme", isDark ? "dark" : "light");
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
