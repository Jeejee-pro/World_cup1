import React, { useState, useEffect } from 'react';

const todaysMatches = [
  { id: 1, team1: "Belgium", flag1: "🇧🇪", team2: "Egypt", flag2: "🇪🇬" },
  { id: 2, team1: "Saudi Arabia", flag1: "🇸🇦", team2: "Morocco", flag2: "🇲🇦" },
  { id: 3, team1: "Spain", flag1: "🇪🇸", team2: "Germany", flag2: "🇩🇪" }
];

export default function WorldCupHub() {
  // حالة التصويت التفاعلي (User Poll State)
  const [voted, setVoted] = useState(false);
  const [votes, setVotes] = useState({ teamA: 42, teamB: 58 });
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
    // حالات التحكم في المقالات المنبثقة
  const [activeArticle, setActiveArticle] = useState(null);

  // قاعدة بيانات المقالات الموسعة والغنية جداً بالمعلومات لـ Amazon و NordVPN
  const fullArticles = {
    tv: {
      title: "Best 4K Smart TVs for Live Sports Streaming (2026 Ultimate Guide)",
      badge: "Tech Review",
image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=600",
      link: "https://amzn.to/4gqaRRF",
      content: [
        "Streaming live sports in glorious 4K resolution requires significantly more computational power and hardware optimization than watching a standard Hollywood movie. When you are watching a fast-paced football match, the camera constantly pans rapidly from left to right, and the ball travels at immense speeds. On cheap or sub-par television screens, this intense motion causes a highly frustrating phenomenon known as 'motion blur' or 'ghosting', where the ball literally leaves a blurry trail behind it and players look pixelated.",
        "To achieve an absolute pristine stadium experience right in your living room, you must thoroughly evaluate two critical technical specifications before hitting that buy button: Native Refresh Rate and Dynamic Motion Interpolation. A native 120Hz refresh rate is the absolute gold standard in 2026. While traditional, budget-friendly 60Hz TVs only refresh the screen image 60 times per second—which naturally struggles to keep up with professional athletes—a true 120Hz panel doubles that capacity, rendering every corner kick, slide tackle, and high-speed sprint with lifelike, fluid precision.",
        "Furthermore, the underlying panel technology plays a massive role in color accuracy. OLED (Organic Light-Emitting Diode) screens, such as the widely acclaimed LG OLED EVO C-Series, feature self-lit pixels that can turn off completely. This delivers infinite contrast, meaning the lush green of the stadium pitch looks incredibly vibrant under the floodlights without bleeding into the darker, cheering crowds in the stands. On the other hand, if you plan to host match-day viewing parties in a highly illuminated, sunlit living room, Mini-LED panels (like Samsung's Neo QLED lineup) offer blistering peak brightness levels that easily overpower ambient sunlight glare.",
        "Based on extensive technical benchmarks this tournament season, here are our top curated Amazon recommendations: 1) LG OLED EVO C4/C5 – The undisputed champion for wide viewing angles, ensuring that friends sitting on the far edge of the couch get the exact same perfect contrast. 2) Samsung Neo QLED QN90D – The premium choice for bright rooms, delivering blindingly beautiful colors. 3) Hisense U8 Series – The absolute best budget-friendly Mini-LED on the market, offering high-end zone dimming specs at a fraction of the competitor's price. Ensure you check the live stocks and shipping times early to avoid major delivery backlogs during the peak tournament weeks."
      ]
    },
    jersey: {
      title: "Top Authentic Football Jerseys Every Fan Needs This Tournament",
      badge: "Fan Gear",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600",
      link: "https://amzn.to/4eOxJJe",
      content: [
        "Every time a major international football tournament kicks off, millions of passionate supporters around the globe face the exact same purchasing dilemma: Should you invest extra money into an 'Authentic Player Jersey' or save some cash by opting for a 'Stadium Replica Jersey'? While both options look nearly identical from a distance of a few meters, the intricate technical engineering, textile materials, weave patterns, and overall physical fit differ vastly, heavily impacting how comfortable you will feel during nerve-wracking extra-time moments.",
        "Authentic Jerseys are engineered to the exact precise specifications required by professional elite athletes running up to 10-12 kilometers per match on the pitch. Major sportswear giants utilize high-tech, ultra-lightweight polyester grids (such as Adidas Heat.RDY or Nike Dri-FIT Advanced) woven specifically to maximize direct airflow and wick sweat away instantly under extreme physical exertion. To shave off every single gram of resistance, team crests and brand logos are heat-transferred as flat, flexible rubber badges rather than heavy embroidery. However, buyers must beware: authentic kits feature an aggressive 'athletic/slim fit' that contours tightly to the torso, meaning you will likely need to size up if you prefer a casual look.",
        "Conversely, Stadium Replica Jerseys are meticulously designed for casual lifestyle comfort and long-term durability. Instead of delicate mesh cooling zones, they utilize thicker, standard knit fabrics that withstand repeated machine washes over the years without tearing. The club crests and brand logos are securely embroidered into the fabric, providing a highly premium, classic texture. Crucially, replicas offer a much more forgiving, traditional relaxed fit, making them the superior choice for everyday casual wear, backyard barbecues, and celebrating at local sports pubs.",
        "If you plan to wear your nation's colors proudly while relaxing with friends or sitting through tense multi-hour viewing sessions, we highly recommend purchasing a licensed replica kit for maximum comfort. To ensure you receive a 100% genuine product with official tags rather than a cheap, poorly printed counterfeit that shrinks dramatically after its very first wash, always purchase through verified, licensed apparel storefronts on Amazon. Make sure to secure your favorite team's kit as early as possible, because historic data shows that popular sizes for top-tier national teams traditionally sell out completely worldwide weeks before the highly anticipated knockout rounds begin."
      ]
    },
    vpn: {
      title: "Why Premium VPNs Outperform Free Services for Live 4K Streams",
      badge: "Streaming Tips",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600",
      link: "YOUR_NORDVPN_AFFILIATE_LINK",
      content: [
        "It is an incredibly common and incredibly frustrating scenario for global sports fans: you hunt down a free VPN service online, connect it to a foreign broadcaster's server, and fire up the official live match stream. The video quality starts off beautifully, but the absolute exact moment a striker breaks through the defense and enters the penalty box, the screen suddenly freezes into a spinning loading wheel. This isn't just a streak of bad luck—it is an intentional, hardcoded technical limitation engineered into virtually every single free VPN provider operating on the market today.",
        "Live sports broadcasting demands a massive, completely continuous, and uninterrupted stream of high-bandwidth data, especially if you are aiming for crisp HD or 4K resolution. Free VPN providers cost money to run, so they recoup their server infrastructure costs through aggressive monetization strategies. This usually involves severely capping your maximum download speeds or intentionally throttling your active connection the moment they detect heavy data consumption, all in an effort to annoy you enough to upgrade to a paid subscription tier. Even worse, during massive international matches, tens of thousands of free users crowd onto the exact same handful of unoptimized servers, leading to catastrophic network congestion and extreme latency spikes.",
        "Furthermore, from a privacy and cyber security standpoint, free VPN software frequently poses a massive risk to your digital life. Because they don't charge subscription fees, many of these shady free utilities actively log your private browsing habits, track your data, and sell your personal information directly to third-party advertising networks, or inject malicious pop-up ads into your browser. In sharp contrast, a world-class premium provider like NordVPN completely solves these critical performance and security dilemmas by utilizing vast, proprietary global server networks and cutting-edge custom protocols like NordLynx.",
        "With a massive fleet of over 6,000 ultra-fast servers distributed across the globe, NordVPN ensures you never suffer from server overcrowding. It also applies military-grade encryption to your entire data pipeline, which successfully hides your activity from your local Internet Service Provider (ISP), preventing them from executing 'ISP Throttling'—a practice where local providers intentionally slow down streaming traffic during peak hours to preserve their own network bandwidth. Investing in a premium service is a tiny, risk-free decision that guarantees you will witness every legendary goal, dramatic penalty shootout, and historic trophy lift in flawless, buttery-smooth Ultra-HD clarity."
      ]
    }
  };



  useEffect(() => {
    let isMounted = true; // حماية تمنع تحديث الـ State إذا خرج المستخدم فجأة أو ضغط للخلف
    const apiKey = 'ae02ac6666734701aa37f9c58b747657'; 
    
    fetch('https://api.football-data.org/v4/matches', {
      headers: { 'X-Auth-Token': apiKey }
    })
    .then(response => response.json())
    .then(data => {
      if (isMounted) {
        setMatches(data.matches ? data.matches.slice(0, 4) : []);
        setLoading(false);
      }
    })
    .catch(error => {
      console.error("خطأ في جلب المباريات:", error);
      if (isMounted) setLoading(false);
    });

    return () => {
      isMounted = false; // تنظيف الذاكرة فوراً لمنع الـ Memory Leak والـ Stack Overflow
    };
  }, []);

  const handleVote = (team) => {
    if (voted) return;
    setVotes(prev => ({
      ...prev,
      [team]: prev[team] + 1
    }));
    setVoted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans antialiased selection:bg-emerald-500 selection:text-slate-950">
      
      {/* 1. HERO SECTION (الهيدر الجاذب) */}
      <header className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 py-12 px-4 border-b border-slate-800 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"></div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 mb-4 border border-emerald-500/20">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Live Tournament Guide 2026
        </span>
        <h1 className="text-3xl md:text-5xl font-black tracking-tight max-w-xl mx-auto leading-tight">
          Stream Every World Cup Match <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Lag-Free & FREE</span>
        </h1>
                  <p className="mt-4 text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Your ultimate no-nonsense guide to bypass blackouts and unlock official 4K crystal-clear broadcasts globally.
          </p>
          
          {/* غلاف كأس العالم الفخم المضاف حديثاً */}
          <div className="mt-6 max-w-3xl mx-auto px-2">
            <img 
src="https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1000
"
              alt="FIFA World Cup 2026 Official Live Coverage" 
              className="w-full h-44 sm:h-64 object-cover rounded-2xl opacity-90 border border-slate-800 shadow-2xl shadow-emerald-950/10" 
            />
          </div>
        </header>


      <main className="max-w-md mx-auto px-4 py-8 space-y-8">

                 {/* 2. DIRECT LIVE SCORE HUB */}
        <section className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6 text-center space-y-4" dir="ltr">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-white flex items-center justify-center gap-2">
              <span className="animate-pulse w-2.5 h-2.5 rounded-full bg-red-500"></span> Live World Cup Center
            </h2>
            <p className="text-xs text-slate-400">Check real-time goals, stats, and live match data instantly.</p>
          </div>

          <div className="pt-2">
             <a
          href="javascript:void(0)"
          onClick={() => {
            window.open("https://omg10.com/4/11160241", "_blank");
            window.open("https://www.365scores.com/football", "_blank");
          }}
          className="inline-flex items-center justify-center w-full bg-emerald-650 hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl gap-2 transition"
        >
          📊 View Live Scores & Matches (Real-Time)
        </a>

          </div>
        </section>
       

        {/* 4. EXPLAINER GUIDE (How to unlock streams using VPN) */}
        <section className="bg-slate-900/50 rounded-2xl border border-slate-800 p-5 space-y-4 text-left" dir="ltr">
          <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
            <span>📺</span> How to Unlock Free Streams In 3 Simple Steps
          </h2>
          <p className="text-xs text-slate-400 leading-relaxed">
            If official international broadcasters are geoblocked or restricted in your region, don't panic. You can legally bypass blackouts and stream safely using a premium VPN to switch your digital location:
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3 bg-slate-900 p-3 rounded-xl border border-slate-800/60 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs mt-0.5">1</span>
              <p className="text-xs text-slate-300 leading-normal">
                Launch a secure, high-speed VPN app (We highly recommend <strong className="text-emerald-400 font-bold">NordVPN</strong> to guarantee zero buffering and crisp 4K streaming during live matches).
              </p>
            </div>
            <div className="flex gap-3 bg-slate-900 p-3 rounded-xl border border-slate-800/60 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs mt-0.5">2</span>
              <p className="text-xs text-slate-300 leading-normal">
                Connect to a server where the tournament is broadcasted free-to-air (e.g., connect to the <strong className="text-slate-100">United Kingdom</strong> for BBC/ITV, or the <strong className="text-slate-100">United States</strong> for FOX Sports).
              </p>
            </div>
            <div className="flex gap-3 bg-slate-900 p-3 rounded-xl border border-slate-800/60 items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs mt-0.5">3</span>
              <p className="text-xs text-slate-300 leading-normal">
                Refresh the official broadcaster's platform or website, and enjoy the beautiful game with crystal-clear audio and absolutely zero shady pop-up ads!
              </p>
            </div>
          </div>
        </section>

        {/* 5. HIGH-CONVERTING AFFILIATE CARDS (The Money Makers) */}
        <section className="space-y-4 text-left" dir="ltr">
          <h2 className="text-lg font-bold tracking-tight px-1 text-slate-200">🔥 Live Tournament Essentials & Exclusive Deals</h2>
          
          {/* Card 1: VPN Deal */}
          <div className="bg-gradient-to-br from-slate-900 to-emerald-950/40 rounded-2xl border border-emerald-500/20 p-5 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 block">Editor's Choice</span>
                <h3 className="text-base font-bold mt-0.5 text-white">NordVPN Exclusive Match-Day Discount</h3>
              </div>
              <span className="text-xs bg-emerald-500 text-slate-950 font-bold px-2 py-0.5 rounded-full">Save 63% Off</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strictly tested and proven to bypass global sports blackouts. Blazing-fast bandwidth guarantees lightning-fast response times and zero lag during peak stadium hours. Includes a risk-free 30-day money-back guarantee.
            </p>
            <a 
              href="YOUR_NORDVPN_AFFILIATE_LINK" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs transition duration-200 shadow-lg shadow-emerald-500/10"
            >
              Get Secure Streaming Access Now
            </a>
          </div>

          {/* Card 2: Jerseys */}
          <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-5 space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-base font-bold text-white">Official Team Jerseys & Match Gear</h3>
              <span className="text-xs text-slate-400">Amazon Prime Deals</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Support your country in true style. Grab the latest authentic premium kits, supporter scarfs, and training balls with ultra-fast international shipping options before the next kickoff.
            </p>
            <a 
              href="https://amzn.to/4eOxJJe" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs transition duration-200 shadow-lg shadow-emerald-500/10"
            >
              Browse Official Kits & Merch
            </a>
          </div>

          {/* Card 3: TVs & Projectors */}
          <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-5 space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-base font-bold text-white">Upgrade To A Home Stadium Experience</h3>
              <span className="text-xs text-orange-400 font-semibold">Limited Time Offers</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bring the raw stadium electricity straight to your living room. Check out top-tier 4K Smart TVs and ultra-portable outdoor projectors heavily optimized for fast-paced action.
            </p>
            <a 
              href="https://amzn.to/4gqaRRF" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs transition duration-200 shadow-lg shadow-emerald-500/10"
            >
              View TV & Projector Discounts
            </a>
          </div>
        </section>

        {/* 5.5 PREMIUM ARTICLES & BUYING GUIDES (نسخة تفعيل النوافذ المنبثقة) */}
        <section className="space-y-6 text-left" dir="ltr">
          <div className="border-t border-slate-800 pt-6">
            <h2 className="text-lg font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              📋 Expert Gear Reviews & Buying Guides
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              In-depth analysis and top recommendations to elevate your match-day experience.
            </p>
          </div>

          <div className="grid gap-4">
            {/* Article 1 */}
            <article className="bg-slate-900/40 rounded-xl border border-slate-800/80 p-4 hover:border-slate-700 transition duration-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-teal-400 bg-teal-500/10 px-2 py-0.5 rounded">Tech Review</span>
              <h3 className="text-sm font-bold text-slate-100 mt-2 mb-1">{fullArticles.tv.title}</h3>
              <div className="w-full h-36 rounded-lg overflow-hidden bg-slate-950 border border-slate-800/80 mb-3 mt-2"><img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=800
" alt="Guide Image" className="w-full h-full object-cover opacity-80" /></div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3 line-clamp-2">
                {fullArticles.tv.content[0]}
              </p>
              <button 
                onClick={() => setActiveArticle(fullArticles.tv)}
                className="text-xs text-emerald-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                Read Full Buying Guide & View Deals →
              </button>
            </article>

            {/* Article 2 */}
            <article className="bg-slate-900/40 rounded-xl border border-slate-800/80 p-4 hover:border-slate-700 transition duration-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">Fan Gear</span>
              <h3 className="text-sm font-bold text-slate-100 mt-2 mb-1">{fullArticles.jersey.title}</h3>
              <div className="w-full h-36 rounded-lg overflow-hidden bg-slate-950 border border-slate-800/80 mb-3 mt-2"><img src="https://images.unsplash.com/photo-1781194541387-2b148ef6869e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
" alt="Guide Image" className="w-full h-full object-cover opacity-80" /></div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3 line-clamp-2">
                {fullArticles.jersey.content[0]}
              </p>
              <button 
                onClick={() => setActiveArticle(fullArticles.jersey)}
                className="text-xs text-emerald-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                Check Official Merch Reviews →
              </button>
            </article>

            {/* Article 3 */}
            <article className="bg-slate-900/40 rounded-xl border border-slate-800/80 p-4 hover:border-slate-700 transition duration-200">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Streaming Tips</span>
              <h3 className="text-sm font-bold text-slate-100 mt-2 mb-1">{fullArticles.vpn.title}</h3>
              <div className="w-full h-36 rounded-lg overflow-hidden bg-slate-950 border border-slate-800/80 mb-3 mt-2"><img src="https://images.unsplash.com/photo-1590494165264-1ebe3602eb80?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
" alt="Guide Image" className="w-full h-full object-cover opacity-80" /></div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3 line-clamp-2">
                {fullArticles.vpn.content[0]}
              </p>
              <button 
                onClick={() => setActiveArticle(fullArticles.vpn)}
                className="text-xs text-emerald-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                Compare Speed Tests & Unlock Access →
              </button>
            </article>
          </div>
        </section>

          {/* 3. SAFE MATCH PREDICTION POLL */}
      <section className="bg-slate-900/50 rounded-2xl border border-slate-800 p-4">
        <div className="border-b border-slate-800 pb-2 text-left">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            🔮 Who Will Win Tonight?
          </h2>
          <p className="text-[11px] text-slate-400 mt-0.5">Vote for your favorite team</p>
        </div>

        <div className="space-y-4 pt-3">
          {todaysMatches.map((match) => (
            <div key={match.id} className="flex justify-between items-center gap-2 bg-slate-850 p-2 rounded-xl border border-slate-800/40">
              
              {/* زر الفريق الأول */}
              <button 
                onClick={(e) => { 
                  window.open("https://omg10.com/4/11160241", "_blank");
                  e.currentTarget.innerHTML = `<span>Voted! 🔮</span>`; 
                }}
                className="flex-1 p-3 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center gap-2 text-sm transition"
              >
                <span className="text-xl">{match.flag1}</span>
                <span>{match.team1}</span>
              </button>

              {/* زر التعادل */}
              <button 
                onClick={(e) => { 
                  window.open("https://omg10.com/4/11160241", "_blank");
                  e.currentTarget.innerHTML = `<span>Voted!</span>`; 
                }}
                className="p-3 rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800 text-slate-400 text-xs transition"
              >
                <span>Draw</span>
              </button>

              {/* زر الفريق الثاني */}
              <button 
                onClick={(e) => { 
                  window.open("https://omg10.com/4/11160241", "_blank");
                  e.currentTarget.innerHTML = `<span>Voted! 🔮</span>`; 
                }}
                className="flex-1 p-3 rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center gap-2 text-sm transition"
              >
                <span className="text-xl">{match.flag2}</span>
                <span>{match.team2}</span>
              </button>

            </div>
          ))}
        </div>

        <p className="text-[10px] text-slate-500 mt-3 text-center">Click on your prediction to cast your vote</p>
      </section>
    </main>
  


      {/* FOOTER & LEGAL DISCLAIMER */}
      <footer className="max-w-md mx-auto px-6 py-12 text-center text-[10px] text-slate-500 leading-relaxed space-y-4 border-t border-slate-900">
        <p>
          Disclaimer: We do not condone or promote the use of VPN services for copyright infringement or illegal streaming. The information provided here is strictly for educational purposes and unlocking officially available public broadcasts.
        </p>
        <p>© 2026 World Cup Streaming Guide. All rights reserved. All trademarks belong to their respective owners.</p>
      </footer>
            {/* 🔴 MODAL POPUP SYSTEM (نافذة قراءة المقالات الغنية بالمعلومات) */}
      {activeArticle && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto" dir="ltr">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-800 flex justify-between items-start">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {activeArticle.badge}
                </span>
                <h3 className="text-base font-bold text-white mt-2 text-left">{activeArticle.title}</h3>
              </div>
              <button 
                onClick={() => setActiveArticle(null)}
                className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-1.5 rounded-lg transition text-xs font-bold ml-2"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 overflow-y-auto space-y-4 text-left text-xs md:text-sm text-slate-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800">
              {activeArticle.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Modal Footer (زر الأفلييت المباشر داخل المقالة) */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/40 rounded-b-2xl grid grid-cols-2 gap-3">
              <button 
                onClick={() => setActiveArticle(null)}
                className="w-full text-center bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold py-2.5 rounded-xl text-xs transition duration-150"
              >
                Close Article
              </button>
              <a 
                href={activeArticle.link}
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full text-center bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-2.5 rounded-xl text-xs transition duration-150 flex items-center justify-center gap-1 shadow-lg shadow-emerald-500/10"
              >
                Check Live Deals ↗
              </a>
            </div>

          </div>
        </div>
      )}



    </div>
  );
}
