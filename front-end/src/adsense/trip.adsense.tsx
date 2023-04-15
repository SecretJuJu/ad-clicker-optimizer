export const TripAdsense = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "500px",
      }}
      dangerouslySetInnerHTML={{
        __html: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9847908790312508"
        crossorigin="anonymous"></script>
   <ins class="adsbygoogle"
        style="display:block"
        data-ad-format="autorelaxed"
        data-ad-client="ca-pub-9847908790312508"
        data-ad-slot="5539287976"></ins>
   <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
   </script>`
      }}
    />
  );
}
