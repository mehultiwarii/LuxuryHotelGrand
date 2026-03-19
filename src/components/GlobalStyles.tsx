const GlobalStyles = () => (
  <style>{`
    /* Fonts loaded via <link> in index.html for non-blocking load */
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{
      --beige:#F5F1E9;--olive:#556B2F;--olive-dark:#3a4c20;--olive-deep:#253316;
      --gold:#C9A84C;--gold-light:#e8d5a3;--offwhite:#FAF8F3;--cream:#EDE8DC;
      --text-dark:#1a1a14;--text-mid:#3d3d30;--text-muted:#7a7a65;--text-light:#b0a990;
    }
    html{scroll-behavior:smooth}
    body{background:var(--beige);color:var(--text-dark);font-family:'Jost',sans-serif;font-weight:300;overflow-x:hidden;cursor:auto}
    ::selection{background:var(--gold-light);color:var(--olive-deep)}
    body::before{content:'';position:fixed;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.018'/%3E%3C/svg%3E");pointer-events:none;z-index:9000;}
    ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:var(--cream)}::-webkit-scrollbar-thumb{background:var(--gold);border-radius:2px}

    /* NAVBAR */
    .navbar{position:fixed;top:0;left:0;right:0;z-index:100;padding:2rem 4rem;display:flex;align-items:center;justify-content:space-between;transition:all .6s cubic-bezier(.25,.1,.25,1);animation:fadeUp .7s ease both}
    .navbar.scrolled{padding:1.1rem 4rem;background:rgba(245,241,233,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(201,168,76,.18)}
    .nav-logo{font-family:'Playfair Display',serif;font-size:1.5rem;font-weight:500;letter-spacing:.08em;color:var(--offwhite);transition:color .5s ease}
    .navbar.scrolled .nav-logo{color:var(--olive-dark)}
    .nav-links{display:flex;gap:2.8rem;list-style:none}
    .nav-links a{font-family:'Jost',sans-serif;font-weight:300;font-size:.78rem;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.75);text-decoration:none;transition:color .35s ease}
    .navbar.scrolled .nav-links a{color:var(--text-mid)}
    .nav-links a:hover{color:var(--gold)}
    .nav-reserve{font-family:'Jost',sans-serif;font-weight:400;font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);border:1px solid rgba(201,168,76,.5);padding:.6rem 1.6rem;background:transparent;cursor:pointer;transition:all .4s ease}
    .nav-reserve:hover{background:var(--gold);color:var(--olive-deep)}
    .navbar.scrolled .nav-reserve{color:var(--olive-dark);border-color:var(--olive)}
    .navbar.scrolled .nav-reserve:hover{background:var(--olive);color:var(--offwhite)}

    /* HERO */
    .hero-section{position:relative;height:100vh;overflow:hidden;display:flex;align-items:center;justify-content:center}
    .hero-bg{position:absolute;inset:-10px;background:url('/assets/image1.jpeg') center/cover no-repeat;transform:scale(1.05);will-change:transform}
    .hero-bg::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,0.6)}
    .hero-circle{position:absolute;border-radius:50%;border:1px solid rgba(201,168,76,.12)}
    .hero-content{position:relative;z-index:2;text-align:center;max-width:900px;padding:0 2rem}
    .hero-tag{font-family:'Jost',sans-serif;font-size:.7rem;font-weight:400;letter-spacing:.35em;text-transform:uppercase;color:var(--gold);margin-bottom:2rem;display:flex;align-items:center;justify-content:center;gap:1.2rem;animation:fadeUp 1s ease .3s both}
    .hero-tag::before,.hero-tag::after{content:'';width:40px;height:1px;background:var(--gold);opacity:.5}
    .hero-h1{font-family:'Playfair Display',serif;font-size:clamp(3.2rem,7vw,6.5rem);font-weight:400;line-height:1.08;color:var(--offwhite);margin-bottom:1.6rem;animation:fadeUp 1s ease .55s both}
    .hero-h1 em{font-style:italic;color:var(--gold-light)}
    .hero-sub{font-family:'Cormorant Garamond',serif;font-size:1.35rem;font-weight:400;font-style:italic;color:rgba(255,255,255,0.9);margin-bottom:3.5rem;animation:fadeUp 1s ease .8s both}
    .hero-ctas{display:flex;gap:1.5rem;justify-content:center;align-items:center;animation:fadeUp 1s ease 1.05s both}
    .scroll-indicator{position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:.5rem;color:rgba(245,241,233,.35);font-family:'Jost',sans-serif;font-size:.65rem;letter-spacing:.25em;text-transform:uppercase;animation:fadeUp 1s ease 1.4s both}
    .scroll-line{width:1px;height:50px;background:linear-gradient(to bottom,transparent,rgba(201,168,76,.5),transparent);animation:pulseBar 2.5s ease-in-out infinite}
    @keyframes pulseBar{0%,100%{opacity:.4;transform:scaleY(1)}50%{opacity:1;transform:scaleY(1.2)}}
    @keyframes fadeUp{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}

    /* BUTTONS */
    .btn-primary{font-family:'Jost',sans-serif;font-size:.73rem;font-weight:400;letter-spacing:.22em;text-transform:uppercase;padding:1.05rem 2.8rem;background:var(--gold);color:var(--olive-deep);border:none;cursor:pointer;position:relative;overflow:hidden;transition:color .5s cubic-bezier(.25,.1,.25,1)}
    .btn-primary::before{content:'';position:absolute;inset:0;background:var(--olive-deep);transform:scaleX(0);transform-origin:left;transition:transform .5s cubic-bezier(.25,.1,.25,1)}
    .btn-primary:hover::before{transform:scaleX(1)}
    .btn-primary:hover{color:var(--gold)}
    .btn-primary span{position:relative;z-index:1}
    .btn-outline{font-family:'Jost',sans-serif;font-size:.73rem;font-weight:400;letter-spacing:.22em;text-transform:uppercase;padding:1.05rem 2.8rem;background:transparent;color:var(--offwhite);border:1px solid rgba(245,241,233,.3);cursor:pointer;transition:all .45s ease}
    .btn-outline:hover{border-color:var(--gold);color:var(--gold)}

    /* LAYOUT */
    .section{padding:7rem 0;content-visibility:auto;contain-intrinsic-size:0 600px}
    .container{max-width:1280px;margin:0 auto;padding:0 4rem}
    .section-label{font-family:'Jost',sans-serif;font-size:.68rem;font-weight:400;letter-spacing:.35em;text-transform:uppercase;color:var(--gold);margin-bottom:1.2rem;display:flex;align-items:center;gap:1rem}
    .section-label::after{content:'';flex:0 0 40px;height:1px;background:var(--gold);opacity:.5}
    .section-title{font-family:'Playfair Display',serif;font-size:clamp(2.4rem,4.5vw,4rem);font-weight:400;line-height:1.1;color:var(--text-dark);margin-bottom:1.5rem}
    .section-title em{font-style:italic;color:var(--olive)}
    .section-body{font-family:'Cormorant Garamond',serif;font-size:1.25rem;font-weight:300;font-style:italic;color:var(--text-muted);line-height:1.8}

    /* ABOUT */
    .about-img-wrap{position:relative;overflow:hidden;aspect-ratio:4/5;background:linear-gradient(135deg,#2d3821,#1a1f0e)}
    .about-frame{position:absolute;inset:1.5rem;border:1px solid rgba(201,168,76,.22);pointer-events:none}
    .about-year{position:absolute;bottom:2.5rem;right:-1.5rem;background:var(--gold);color:var(--olive-deep);padding:1.5rem;font-family:'Playfair Display',serif;font-size:2.2rem;font-weight:500;line-height:1;text-align:center;min-width:100px}
    .about-year span{display:block;font-family:'Jost',sans-serif;font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;margin-top:.3rem;font-weight:400}
    .stat-item{border-left:1px solid rgba(201,168,76,.3);padding-left:1.5rem}
    .stat-num{font-family:'Playfair Display',serif;font-size:2.5rem;font-weight:500;color:var(--olive)}
    .stat-label{font-family:'Jost',sans-serif;font-size:.7rem;letter-spacing:.2em;text-transform:uppercase;color:var(--text-muted)}

    /* MENU */
    .menu-section{background:var(--offwhite)}
    .filter-tabs{display:flex;justify-content:center;margin-bottom:4rem;border-bottom:1px solid rgba(201,168,76,.18)}
    .filter-tab{font-family:'Jost',sans-serif;font-size:.72rem;font-weight:400;letter-spacing:.22em;text-transform:uppercase;padding:.9rem 2.5rem;background:transparent;border:none;cursor:pointer;color:var(--text-muted);position:relative;transition:color .35s ease}
    .filter-tab::after{content:'';position:absolute;bottom:-1px;left:0;right:0;height:2px;background:var(--gold);transform:scaleX(0);transition:transform .4s cubic-bezier(.25,.1,.25,1)}
    .filter-tab.active{color:var(--olive-dark)}
    .filter-tab.active::after,.filter-tab:hover::after{transform:scaleX(1)}
    .filter-tab:hover{color:var(--olive-dark)}
    .menu-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px}
    .menu-card{position:relative;overflow:hidden;background:var(--beige)}
    .menu-card-img{aspect-ratio:1/1.05;overflow:hidden;position:relative;background:linear-gradient(135deg,#2d3821,#1a2410)}
    .menu-card-bg{position:absolute;inset:0;transition:transform .8s cubic-bezier(.25,.1,.25,1);will-change:transform}
    .menu-card:hover .menu-card-bg{transform:scale(1.06)}
    .menu-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(26,26,14,.8) 0%,transparent 55%);opacity:0;transition:opacity .5s ease}
    .menu-card:hover .menu-overlay{opacity:1}
    .menu-plate{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100px;height:100px;border-radius:50%;border:1px solid rgba(201,168,76,.14)}
    .menu-plate2{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:64px;height:64px;border-radius:50%;border:1px solid rgba(201,168,76,.1)}
    .menu-card-info{padding:1.8rem 2rem 2rem}
    .menu-card-name{font-family:'Playfair Display',serif;font-size:1.35rem;font-weight:400;color:var(--text-dark);margin-bottom:.5rem}
    .menu-card-desc{font-family:'Cormorant Garamond',serif;font-size:1rem;font-weight:300;font-style:italic;color:var(--text-muted);line-height:1.6;margin-bottom:1rem}
    .menu-card-footer{display:flex;align-items:center;justify-content:space-between}
    .menu-card-price{font-family:'Jost',sans-serif;font-weight:300;font-size:1rem;color:var(--gold);letter-spacing:.05em}
    .menu-card-tag{font-family:'Jost',sans-serif;font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;color:var(--text-light);border:1px solid rgba(176,169,144,.3);padding:.25rem .7rem}

    /* EXPERIENCE */
    .experience-section{background:var(--olive-deep);overflow:hidden;padding:6rem 0;position:relative}
    .experience-section::before,.experience-section::after{content:'';position:absolute;top:0;height:100%;width:150px;z-index:2;pointer-events:none}
    .experience-section::before{left:0;background:linear-gradient(to right,var(--olive-deep),transparent)}
    .experience-section::after{right:0;background:linear-gradient(to left,var(--olive-deep),transparent)}
    .exp-slider{width:100%;overflow:hidden}
    .exp-slider-track{display:flex;gap:30px;width:max-content;animation:expScroll 40s linear infinite;will-change:transform}
    .exp-slider-track:hover{animation-play-state:paused}
    .exp-card{flex:0 0 320px;height:380px;position:relative;overflow:hidden;background:linear-gradient(145deg,#2d3821,#1a1f0e)}
    .exp-bg{position:absolute;inset:0;transition:transform .8s cubic-bezier(.25,.1,.25,1);will-change:transform}
    .exp-card:hover .exp-bg{transform:scale(1.04)}
    .exp-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.72) 0%,transparent 55%)}
    .exp-card-content{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:flex-end;padding:2rem}
    .exp-num{font-family:'Playfair Display',serif;font-size:2.8rem;font-weight:400;color:rgba(201,168,76,.18);line-height:1;margin-bottom:.5rem}
    .exp-title{font-family:'Playfair Display',serif;font-size:1.35rem;font-weight:400;font-style:italic;color:var(--offwhite);margin-bottom:.8rem}
    .exp-text{font-family:'Jost',sans-serif;font-weight:200;font-size:.8rem;letter-spacing:.07em;color:rgba(245,241,233,.5);line-height:1.7}

    @keyframes expScroll{from{transform:translateX(0)}to{transform:translateX(calc(-50% - 15px))}}

    /* CHEF */
    .chef-section{background:var(--offwhite)}
    .chef-img-wrap{width:360px;height:360px;border-radius:50%;background:linear-gradient(135deg,#2d3821,#1a2410);position:relative;overflow:hidden;flex-shrink:0;border:1px solid rgba(201,168,76,.2)}
    .chef-img-inner{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 40%,rgba(85,107,47,.6) 0%,transparent 65%),radial-gradient(ellipse at 30% 80%,rgba(201,168,76,.15) 0%,transparent 50%)}
    .chef-ring{position:absolute;inset:-14px;border-radius:50%;border:1px solid rgba(201,168,76,.13);pointer-events:none}
    .chef-award{position:absolute;bottom:1.5rem;right:-.8rem;background:var(--gold);color:var(--olive-deep);width:88px;height:88px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:'Jost',sans-serif;text-align:center}
    .chef-quote{font-family:'Playfair Display',serif;font-size:clamp(1.45rem,2.5vw,2.1rem);font-weight:400;font-style:italic;line-height:1.5;color:var(--text-dark);margin-bottom:2rem;position:relative;padding-left:2rem}
    .chef-quote::before{content:'"';position:absolute;left:0;top:-.5rem;font-size:5rem;color:var(--gold);opacity:.22;font-family:'Playfair Display',serif;line-height:1}

    /* GALLERY */
    .gallery-section{background:var(--cream)}
    .gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:4px}
    .gallery-item{overflow:hidden;cursor:pointer;position:relative}
    .gallery-item.tall{grid-row:span 2}
    .gallery-item.wide{grid-column:span 2}
    .gallery-img{width:100%;height:100%;min-height:220px;position:relative;transition:transform .8s cubic-bezier(.25,.1,.25,1)}
    .gallery-item:hover .gallery-img{transform:scale(1.05)}
    .gallery-overlay{position:absolute;inset:0;background:rgba(26,26,14,.45);opacity:0;transition:opacity .4s ease;display:flex;align-items:center;justify-content:center}
    .gallery-item:hover .gallery-overlay{opacity:1}
    .gallery-plus{width:44px;height:44px;border-radius:50%;border:1px solid rgba(245,241,233,.45);display:flex;align-items:center;justify-content:center;color:var(--offwhite);font-size:1.4rem;font-weight:200;line-height:1}

    /* RESERVATION */
    .reservation-section{background:var(--olive-deep)}
    .res-card{background:rgba(245,241,233,.04);border:1px solid rgba(201,168,76,.14);backdrop-filter:blur(20px);padding:4rem 5rem;max-width:820px;margin:0 auto}
    .form-row{display:grid;grid-template-columns:1fr 1fr;gap:3rem}
    .form-3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:2.5rem;margin-top:2.5rem}
    .form-field{position:relative}
    .form-input{width:100%;background:transparent;border:none;border-bottom:1px solid rgba(201,168,76,.2);padding:1.5rem 0 .7rem;font-family:'Jost',sans-serif;font-size:.95rem;font-weight:300;color:var(--offwhite);outline:none;transition:border-color .4s ease}
    .form-input:focus{border-bottom-color:var(--gold)}
    .form-input::placeholder{color:transparent}
    .form-label{position:absolute;top:1rem;left:0;font-family:'Jost',sans-serif;font-size:.68rem;font-weight:400;letter-spacing:.2em;text-transform:uppercase;color:rgba(245,241,233,.3);pointer-events:none;transition:all .3s ease}
    .form-input:focus~.form-label,.form-input:not(:placeholder-shown)~.form-label{top:0;font-size:.56rem;color:var(--gold)}
    .form-select-label{display:block;font-family:'Jost',sans-serif;font-size:.68rem;font-weight:400;letter-spacing:.2em;text-transform:uppercase;color:rgba(245,241,233,.3);margin-bottom:.5rem}
    .form-select{-webkit-appearance:none;appearance:none;width:100%;background:transparent;border:none;border-bottom:1px solid rgba(201,168,76,.2);padding:.6rem 0;font-family:'Jost',sans-serif;font-size:.88rem;font-weight:300;color:rgba(245,241,233,.65);outline:none;cursor:pointer;transition:border-color .4s ease}
    .form-select:focus{border-bottom-color:var(--gold)}
    .form-select option{background:#253316;color:#FAF8F3}
    .btn-reserve{width:100%;padding:1.3rem;background:transparent;border:1px solid rgba(201,168,76,.35);color:var(--gold);font-family:'Jost',sans-serif;font-size:.73rem;font-weight:400;letter-spacing:.3em;text-transform:uppercase;cursor:pointer;position:relative;overflow:hidden;transition:color .5s ease;margin-top:2.5rem}
    .btn-reserve::before{content:'';position:absolute;inset:0;background:var(--gold);transform:scaleY(0);transform-origin:bottom;transition:transform .5s cubic-bezier(.25,.1,.25,1)}
    .btn-reserve:hover{color:var(--olive-deep)}
    .btn-reserve:hover::before{transform:scaleY(1)}
    .btn-reserve span{position:relative;z-index:1}

    /* FOOTER */
    .footer{background:var(--olive-deep);border-top:1px solid rgba(201,168,76,.1);padding:5rem 0 2.5rem}
    .footer-logo{font-family:'Playfair Display',serif;font-size:2rem;font-weight:500;color:var(--gold-light);margin-bottom:.8rem}
    .footer-tagline{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1rem;font-weight:300;color:rgba(245,241,233,.3)}
    .footer-divider{width:40px;height:1px;background:rgba(201,168,76,.25);margin:1.5rem 0}
    .footer-about{font-family:'Jost',sans-serif;font-weight:200;font-size:.85rem;color:rgba(245,241,233,.3);line-height:1.9;letter-spacing:.03em;max-width:280px}
    .footer-h{font-family:'Jost',sans-serif;font-size:.63rem;letter-spacing:.28em;text-transform:uppercase;color:var(--gold);margin-bottom:1.5rem}
    .footer-links{list-style:none;display:flex;flex-direction:column;gap:.7rem}
    .footer-links a{font-family:'Jost',sans-serif;font-weight:200;font-size:.87rem;color:rgba(245,241,233,.4);text-decoration:none;letter-spacing:.03em;transition:color .3s ease}
    .footer-links a:hover{color:var(--gold-light)}
    .footer-cp{font-family:'Jost',sans-serif;font-weight:200;font-size:.87rem;color:rgba(245,241,233,.4);line-height:2;letter-spacing:.03em}
    .footer-cp.gold{color:var(--gold);font-weight:300}
    .social-links{display:flex;gap:.8rem;margin-top:1rem}
    .social-link{width:34px;height:34px;border:1px solid rgba(201,168,76,.18);display:flex;align-items:center;justify-content:center;color:rgba(245,241,233,.35);font-size:.72rem;text-decoration:none;cursor:pointer;transition:all .35s ease;font-family:'Jost',sans-serif}
    .social-link:hover{border-color:var(--gold);color:var(--gold)}
    .footer-bottom{border-top:1px solid rgba(245,241,233,.06);margin-top:4rem;padding-top:2rem;display:flex;align-items:center;justify-content:space-between}
    .footer-copy{font-family:'Jost',sans-serif;font-weight:200;font-size:.73rem;letter-spacing:.07em;color:rgba(245,241,233,.18)}

    /* LIGHTBOX */
    .lightbox{position:fixed;inset:0;z-index:8000;background:rgba(8,10,5,.95);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .45s ease}
    .lightbox.open{opacity:1;pointer-events:all}
    .lb-close{position:absolute;top:2rem;right:2.5rem;color:rgba(245,241,233,.45);font-size:2rem;font-weight:200;background:none;border:none;cursor:pointer;font-family:'Jost',sans-serif;line-height:1;transition:color .3s ease}
    .lb-close:hover{color:var(--gold)}
    .lb-img{width:min(900px,85vw);aspect-ratio:4/3}

    /* LOADING */
    .loading-screen{position:fixed;inset:0;z-index:9999;background:var(--olive-deep);display:flex;flex-direction:column;align-items:center;justify-content:center;transition:opacity .8s ease,visibility .8s ease}
    .loading-screen.gone{opacity:0;visibility:hidden}
    .loading-logo{font-family:'Playfair Display',serif;font-size:2.5rem;font-weight:500;color:var(--gold-light);letter-spacing:.1em;margin-bottom:.7rem}
    .loading-sub{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1rem;font-weight:300;color:rgba(245,241,233,.28);margin-bottom:2.5rem}
    .loading-track{width:200px;height:1px;background:rgba(201,168,76,.14);overflow:hidden}
    .loading-fill{height:100%;background:var(--gold);animation:growBar 2s cubic-bezier(.25,.1,.25,1) forwards}
    @keyframes growBar{from{width:0}to{width:100%}}
    .loading-hint{font-family:'Jost',sans-serif;font-size:.6rem;letter-spacing:.3em;text-transform:uppercase;color:rgba(201,168,76,.3);margin-top:1.5rem}

    /* RESPONSIVE */
    @media(max-width:1024px){
      .container{padding:0 2rem}
      .navbar,.navbar.scrolled{padding:1.2rem 2rem}
      .nav-links{display:none}
      .menu-grid{grid-template-columns:repeat(2,1fr)}
      .gallery-grid{grid-template-columns:repeat(2,1fr)}
      .form-3{grid-template-columns:1fr 1fr}
      .res-card{padding:3rem 2.5rem}
      .footer-grid{grid-template-columns:1fr 1fr!important;gap:3rem!important}
    }
    @media(max-width:768px){
      .section{padding:6rem 0}
      .menu-grid{grid-template-columns:1fr}
      .gallery-grid{grid-template-columns:repeat(2,1fr)}
      .gallery-item.wide{grid-column:span 1}
      .gallery-item.tall{grid-row:span 1}
      .form-row{grid-template-columns:1fr}
      .form-3{grid-template-columns:1fr}
      .res-card{padding:2.5rem 1.5rem}
      .chef-img-wrap{width:220px!important;height:220px!important}
      .chef-grid{grid-template-columns:1fr!important;gap:3rem!important}
      .about-grid{grid-template-columns:1fr!important;gap:3rem!important}
      .exp-card{flex:0 0 300px}
      .about-year{right:0}
      .footer-grid{grid-template-columns:1fr!important;gap:2.5rem!important}
      .footer-bottom{flex-direction:column;gap:1rem;text-align:center}
    }
  `}</style>
);

export default GlobalStyles;
