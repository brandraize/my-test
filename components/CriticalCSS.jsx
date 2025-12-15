export default function CriticalCSS() {
  return (
    <style dangerouslySetInnerHTML={{__html: `
      /* Critical Bootstrap subset for initial render */
      *,::after,::before{box-sizing:border-box}
      body{margin:0;font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;font-size:1rem;font-weight:400;line-height:1.5;color:#212529;background-color:#fff;font-display:optional}
      /* Prevent CLS from images */
      img{vertical-align:middle;border-style:none;height:auto;max-width:100%}
      img[width][height]{aspect-ratio:attr(width)/attr(height)}
      .container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}
      @media (min-width:576px){.container{max-width:540px}}
      @media (min-width:768px){.container{max-width:720px}}
      @media (min-width:992px){.container{max-width:960px}}
      @media (min-width:1200px){.container{max-width:1140px}}
      .row{display:flex;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}
      .col-lg-6{position:relative;width:100%;padding-right:15px;padding-left:15px}
      @media (min-width:992px){.col-lg-6{flex:0 0 50%;max-width:50%}}
      .d-flex{display:flex!important}
      .flex-column{flex-direction:column!important}
      .align-items-center{align-items:center!important}
      .justify-content-center{justify-content:center!important}
      .justify-content-between{justify-content:space-between!important}
      .position-relative{position:relative!important}
      .position-absolute{position:absolute!important}
      .position-fixed{position:fixed!important}
      .w-100{width:100%!important}
      .h-100{height:100%!important}
      .mb-3{margin-bottom:1rem!important}
      .mb-4{margin-bottom:1.5rem!important}
      .mb-5{margin-bottom:3rem!important}
      .p-4{padding:1.5rem!important}
      .py-5{padding-top:3rem!important;padding-bottom:3rem!important}
      .text-center{text-align:center!important}
      .bg-white{background-color:#fff!important}
      .rounded-4{border-radius:.5rem!important}
      .shadow{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}
      .fixed-top{position:fixed;top:0;right:0;left:0;z-index:1030}
      .navbar{position:relative;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:.5rem 1rem}
      .navbar-brand{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}
      .d-none{display:none!important}
      @media (min-width:992px){.d-lg-flex{display:flex!important}.d-lg-none{display:none!important}}
      .btn{display:inline-block;font-weight:400;text-align:center;vertical-align:middle;user-select:none;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out}
      .gap-2{gap:.5rem!important}
      .gap-3{gap:1rem!important}
      a{color:#0d6efd;text-decoration:none}
      a:hover{color:#0a58ca}
      h1,h2,h3{margin-top:0;margin-bottom:.5rem;font-weight:500;line-height:1.2}
      h1{font-size:2.5rem}
      h2{font-size:2rem}
      h3{font-size:1.75rem}
      p{margin-top:0;margin-bottom:1rem}
      .lead{font-size:1.25rem;font-weight:300}
      img{vertical-align:middle;border-style:none}
      /* Prevent layout shift from framer-motion */
      [data-projection-id]{will-change:auto!important}
    `}} />
  );
}
