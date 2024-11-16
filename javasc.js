
  !(function () {
    "use strict";
    var t = new (class {
      msg(t) {
        this.c(t + " to view this website.", "");
      }
      c(t, e) {
        this.issueW = this.div("-w", e);
        const i = this.div("", "");
        (i.textContent = "Please " + t),
          this.issueW.appendChild(i),
          R.G.id("app").appendChild(this.issueW);
      }
      div(t, e) {
        const i = R.Cr("div");
        return (i.className = "iss" + t + e), i;
      }
    })();
    class e {
      constructor(e) {
        const i = _C,
          s = R.Snif;
        s.isIEolderThan11 || s.isSafariOlderThan8
          ? t.msg("update your browser")
          : this.glOn() || t.msg("enable WebGL"),
          s.isIE11 && (document.body.className = "ie11"),
          (i.is404 = !document.querySelector("meta[name=description]")),
          this.webpCheck((t) => {
            (_C.webpAvailable = t), e();
          });
      }
      webpCheck(t) {
        const e = new Image();
        (e.onload = (i) => {
          const s = e.width > 0 && e.height > 0;
          t(s);
        }),
          (e.onerror = (e) => {
            t(!1);
          }),
          (e.src =
            "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA");
      }
      glOn() {
        try {
          const t = R.Cr("canvas");
          return (
            !!window.WebGLRenderingContext &&
            (t.getContext("webgl") || t.getContext("experimental-webgl"))
          );
        } catch (t) {
          return !1;
        }
      }
    }
    var i = new (class {
      constructor() {
        this.c = _C;
      }
      init() {
        (this.first = R.G.id("first")),
          (this.no = R.G.class("loader-no")),
          (this.descS = R.G.id("o0-tra-desc-s")),
          (this.ins = R.G.id("loader-ins")),
          (this.h1 = R.G.id("o0-tra-h1").children),
          (this.descL = R.G.class("o0-tra-desc-l")),
          (this.bg = R.G.id("o0-tra-bg")),
          (this.navVW = R.G.class("nav-vertical-white")),
          (this.progW = R.G.id("nav-burger-prog-white")),
          (this.progR = R.G.id("nav-burger-prog-red"));
      }
      show(t) {
        const e = "o6",
          i = "o1",
          s = this.c.isLocal ? 0 : 1800,
          h = this.c.isLocal ? 0 : 2500,
          a = this.c.isLocal ? 0 : 500,
          n = this.c.isLocal ? 0 : 400,
          o = this.c.isLocal ? 0 : 60,
          r = this.c.isLocal ? 0 : 100,
          l = new R.TL();
        l.from({
          el: "#nav-bg-transparent",
          p: { opacity: [0, 1] },
          d: h,
          e: i,
          delay: a,
        }),
          l.from({
            el: "#nav-burger-border-white",
            p: { opacity: [0, 1] },
            d: h,
            e: i,
            delay: o,
          }),
          l.from({
            el: ".nav-burger-line-white",
            p: { opacity: [0, 1] },
            d: h,
            e: i,
            delay: o,
          }),
          l.from({
            el: this.progW,
            p: { opacity: [0, 1] },
            d: h,
            e: i,
            delay: o,
          });
        for (let t = 0; t < 6; t++) {
          const e = t > 0 && t < 4 ? 0 : o;
          l.from({
            el: this.navVW[t],
            p: { opacity: [0, 1] },
            d: h,
            e: i,
            delay: e,
          });
        }
        l.from({
          el: "#nav-vertical-line-white",
          p: { opacity: [0, 1] },
          d: h,
          e: i,
          delay: o,
        }),
          l.from({
            el: "#nav-ams-red",
            p: { opacity: [0, 1] },
            d: h,
            e: i,
            delay: o,
          });
        for (let i = 0; i < 4; i++) {
          const h = 2 === i && t;
          l.from({
            el: this.no[i],
            p: { y: [102, 0] },
            d: s,
            e: e,
            delay: o,
            cb: h,
          });
        }
        l.from({ el: this.ins, p: { y: [102, 0] }, d: s, e: e, delay: n }),
          l.from({
            el: this.descS,
            p: { opacity: [0, 0.4] },
            d: s,
            e: e,
            delay: r,
          }),
          (this.first.style.opacity = "0"),
          l.play();
      }
      hide(t) {
        const e = "io6",
          i = this.c.isLocal ? 0 : 1800,
          s = this.c.isLocal ? 0 : 800,
          h = this.c.isLocal ? 0 : 2400,
          a = this.c.isLocal ? 0 : 2100,
          n = this.c.isLocal ? 0 : 700,
          o = this.c.isLocal ? 0 : 300,
          r = this.c.isLocal ? 0 : 1200,
          l = this.c.isLocal ? 0 : 100,
          c = this.c.isLocal ? 0 : 60,
          d = this.c.isLocal ? 0 : 3300,
          p = "polygon",
          u = ".nav-burger-line-",
          g = a,
          w = new R.M({
            el: u + "top",
            svg: { type: p, end: "0,0 0,6 60,6 60,0" },
            d: h,
            e: e,
            delay: g,
          }),
          m = new R.M({
            el: u + "center",
            svg: { type: p, end: "0,22 0,28 60,28 60,22" },
            d: h,
            e: e,
            delay: g,
          }),
          y = new R.M({
            el: u + "bottom",
            svg: { type: p, end: "0,44 0,50 60,50 60,44" },
            d: h,
            e: e,
            delay: g,
          }),
          f = new R.TL();
        for (let t = 0; t < 4; t++) {
          const e = 0 === t ? o : 0;
          f.from({
            el: this.no[t],
            p: { y: [0, -102] },
            d: s,
            e: "i3",
            delay: e,
          });
        }
        f.from({ el: this.ins, p: { y: [0, -102] }, d: s, e: "i3" });
        for (let t = 0; t < 6; t++) {
          const e = 0 === t ? s : c;
          f.from({
            el: this.h1[t],
            p: { y: [102, 0] },
            d: i,
            e: "o6",
            delay: e,
          });
        }
        f.from({ el: this.bg, p: { y: [0, -100] }, d: h, e: e, delay: n });
        for (let t = 0; t < 3; t++) {
          const e = 0 === t ? r : l;
          f.from({
            el: this.descL[t],
            p: { y: [102, 0] },
            d: i,
            e: "o6",
            delay: e,
          });
        }
        f.from({ el: this.descS, p: { opacity: [0.4, 1] }, d: i, e: "o1" }),
          f.from({ el: this.progW, p: { opacity: [1, 0] }, d: i, e: "o4" }),
          f.from({ el: this.progR, p: { opacity: [0, 1] }, d: i, e: "o4" }),
          w.play(),
          m.play(),
          y.play(),
          f.play(),
          new R.Delay(t, d).run();
      }
    })();
    var s = new (class {
      constructor() {
        this.c = _C;
      }
      run(t) {
        (this.cb = t),
          (this.noE = R.G.class("loader-no")),
          (this.no = 0),
          (this.prevNo = 0),
          R.BM(this, ["loop"]),
          (this.raf = new R.RafR(this.loop)),
          (this.tex = []);
        const e = this.c.shape;
        this.shapeL = e.length;
        for (let t = 0; t < this.shapeL; t++)
          this.imgLoad({ src: e[t].src, index: t });
        this.raf.run();
      }
      imgLoad(t) {
        const e = new Image();
        (e.onload = (i) => {
          (this.tex[t.index] = e), this.no++;
        }),
          (e.src = t.src);
      }
      loop() {
        let t = 75 + Math.round((44 / this.shapeL) * this.no);
        t > 99 && (t -= 100), t < 10 && (t = "0" + t);
        let e = 13 + Math.round((7 / this.shapeL) * this.no);
        (t = String(t)),
          (e = String(e)),
          this.no !== this.prevNo &&
            ((this.prevNo = this.no),
            (this.noE[0].textContent = e.charAt(0)),
            (this.noE[1].textContent = e.charAt(1)),
            (this.noE[2].textContent = t.charAt(0)),
            (this.noE[3].textContent = t.charAt(1))),
          this.no === this.shapeL && (this.raf.stop(), this.cb(this.tex));
      }
    })();
    var h = new (class {
      constructor() {
        (this.c = _C), R.BM(this, ["cb"]);
      }
      run() {
        i.init(),
          i.show((t) => {
            s.run(this.cb);
          });
      }
      cb(t) {
        this.c.engine.GLTex(t),
          this.c.engine.init(),
          i.hide((t) => {
            this.c.engine.on(), (this.c.outroIsOn = !0);
          });
      }
    })();
    class a {
      constructor(t) {
        _C,
          R.BM(this, ["eD"]),
          R.L(document.body, "a", "click", this.eD),
          h.run();
      }
      eD(t) {
        const e = window;
        let i = t.target,
          s = !1;
        for (; i; ) {
          if ("A" === i.tagName) {
            s = !0;
            break;
          }
          i = i.parentNode;
        }
        if (s) {
          const t = R.Is.und(i.dataset.href) ? i.href : i.dataset.href;
          if (i.classList.contains("_tb")) h(), e.open(t);
          else if ("mailto" === t.substring(0, 6)) {
            h();
            const i = e.open(t);
            setTimeout((t) => {
              i.close();
            }, 300);
          }
        }
        function h() {
          t.preventDefault();
        }
      }
    }
    var n = new (class {
      run() {
        const t = _C,
          e = t.data;
        (t.win = { w: innerWidth, h: innerHeight }),
          (t.win.ratio = t.win.h / t.win.w),
          (t.winDemi = { w: t.win.w / 2, h: t.win.h / 2 }),
          (t.psd = { h: e.psd.h, w: e.psd.w }),
          (t.winWpsdW = t.win.w / t.psd.w),
          (t.winHpsdH = t.win.h / t.psd.h),
          (t.psdWwinW = t.psd.w / t.win.w),
          (t.psdHwinH = t.psd.h / t.win.h),
          this.txt();
        const i = R.G.id("u"),
          s = i.children,
          h = s.length;
        let a = 0;
        for (let t = 0; t < h; t++) a += s[t].offsetWidth;
        (t.pageW = a - h - 2), (i.style.width = a + 2 + "px");
      }
      txt() {
        const t = window.matchMedia("(max-height: 980px)").matches ? "s" : "l",
          e = R.G.class("p"),
          i = [],
          s =
            "Amsterdam is located in Noord-Holland, the northwestern province of the Netherlands. It's the capital city and has a population of around 850,000 in the main city area and more than 2 million in the wider metropolitan area, being the largest and most lived-in city in the country. With its famous canal belt and very well preserved 17th century architecture, the city thrives on tourism bringing in ",
          h =
            " experience the best of the canals by boat, through a time of late sunsets and lively city atmosphere. ",
          a =
            " one of the world's most multicultural cities with over 170 nationalities.";
        i[0] = {
          l:
            "The city of " +
            s +
            "many millions of visitors each year. The summer months from June to August see the biggest influx of visitors who can" +
            h +
            "As well as its global visitors, it’s" +
            a,
          s:
            s +
            "millions of visitors each year. Summer from June to August sees the biggest influx of visitors who" +
            h +
            "It’s also" +
            a,
        };
        const n =
          " These 165 canals divide the city into a series of small islands connected by over 1200 bridges, with the oldest completed in 1648; the Torensluis. The majority of canals can be accessed by private boats, group tours, or rental boats with many moored on the canal edges next to houseboats. The city’s bridges were built to withstand horse and cart weight of the time, which have since been affected by the trucks and small amount of cars that pass through the canal ring. ";
        i[1] = {
          l:
            "Amsterdam has a vast array of water canals over 100km in length, around 60 miles." +
            n +
            "Complex maintenance work is underway to strengthen certain canal walls and bridges throughout the city. To commute, the majority of Dutch bike to work or use the tram system.",
          s:
            "Amsterdam has a vast array of canals over 100km in length, around 60 miles." +
            n +
            "However, maintenance work is currently underway to strengthen certain canal walls and bridges.",
        };
        const o =
          "the creation of the canal ring, known as the Grachtengordel. This term often refers to the ";
        i[2] = {
          l:
            "Four hundred years have gone in<br/>to " +
            o +
            "grand-est four canals; the Herengracht, Keizersgracht, Prinsengracht and the Singel which encompass the older city around Dam Square. Although Amsterdam is older than 400 years, it has gone through a number of key expansions which lead to the design of the Grachtengordel, most notably the Third Expansion starting in 1613 and later the Fourth Expansion. From the early 1600s, the size of the city vastly expanded outwards with residential housing and warehouses. This long time period, combined with the swampy ground and piles the city sits upon gives Amsterdam its characteristic lopsided charm.",
          s:
            "Four hundred years have gone in to<br/>" +
            o +
            "grandest four canals; the Herengracht, Keizersgracht, Prinsengracht and the Singel encompassing the old city around Dam Square. Although Amsterdam is older than 400 years, it has gone through multiple expansions leading to the creation of the Grachtengordel, notably the Third Expansion starting in 1613 and later the Fourth Expansion. This long time period, combined with the city sitting on top of millions of wooden piles on swampy ground, gives houses their characteristic lopsided charm.",
        };
        const r =
          "Like much of the Netherlands, the city is situated on old, soft banks of peat. The early settlers drained this peat by digging ditches ";
        i[3] = {
          l:
            "Over hundreds of years and through constant water management via dams, locks and dykes, the residents of Amsterdam are able to live several meters below sea level. " +
            r +
            "a certain distance apart from one another, removing this material. Over a long time, this series of drain-age ditches and compacted land lead to the early form of waterways with the higher ground creating livable zones. Once the land was reclaimed, the buildings and houses needed structural support from piles driven down into the sand below.",
          s:
            "Over hundreds of years and through water management via dams, locks and dykes, Amsterdam residents are able to live several meters below sea level.<br/>" +
            r +
            "then removing this material. Over time, this series of drainage ditches and compacted land lead to the early form of waterways with higher ground creating livable zones. After reclaiming, the buildings need structural support from piles driven into the sand.",
        };
        const l =
            "In the early days, they formed defensive measures surrounding the city like an elaborate moat. Wars in Europe meant the city needed protection from attack, however in the 1600s when the city expanded, the defensive canals were turned into residential areas. As a maritime port, the canals were used to deliver goods from ships in the harbour",
          c =
            "The key importance of Amsterdam’s canals has slowly changed over time.";
        i[4] = {
          l: c + " " + l + " via small boats to warehouses.",
          s: c + "<br/>" + l + ".",
        };
        const d = " central Amsterdam in the 1600s.";
        i[5] = {
          l:
            "As vehicles were invented to deliver goods, the purpose changed again to social boating and commonly for tour boats today. The artwork to the right shows just how many boats, barges and ships would enter into" +
            d,
          s:
            "As vehicles began to deliver goods, the purpose changed to social boating and often for tour boats today. To the right shows how many boats would enter" +
            d,
        };
        const p =
            " immense profits to the early city and business owners. Amsterdam has two key entry points by water through the river Amstel and the IJ. The turning point was the creation of a dam in the center of the old city, known now as Dam Square. This blocked off the water route from the Amstel to the IJ and built a meeting point for hundreds of trading ships. Small boats would bring everything from food, construction materials and flowers to markets ",
          u =
            "Although water in Amsterdam<br/>is a constant source of manag-ement, it ",
          g =
            " the Dutch Golden Age, Amsterdam was one of the wealthiest and most powerful cities in Europe. ";
        i[6] = {
          l:
            u +
            "brought" +
            p +
            "which residents would visit every day. In the 1600s, during a time known as" +
            g +
            "This port and its economic influence was a driving factor in the growth.",
          s:
            u +
            "did bring" +
            p +
            "every day. In the 1600s during" +
            g +
            "The port and its economic influence was a driving factor in the growth.",
        };
        const w =
            "During the 1800s, the canals started<br/>to provide other uses such as public space and additional areas to live.",
          m =
            " barges delivering goods to the city could live on these as well. Over time, the barges remained on the canal",
          y =
            "ronment and private gardens left for the wealthy upper class, the canals provided an area to socialise. ";
        i[7] = {
          l:
            w +
            "<br/>With a densely populated urban envi-" +
            y +
            "Certain people who worked on boats such as" +
            m +
            "<br/>sides and were later renovated into modern houseboats. As the land<br/>based transport increased and more ground areas were needed, Amster-dam has filled in certain canals such<br/>as the old Spuistraat, Rozengracht and Elandsgracht with roads for car use.",
          s:
            w +
            " With a densely populated urban envi" +
            y +
            "People who worked on" +
            m +
            " sides and many interiors have been renovated into modern homes.",
        };
        const f =
          "15-20 meters long. These piles need to pass through the soft ground layer into the sand deeper down to provide enough support";
        (i[8] = {
          l:
            "The wooden piles that support buildings and canal houses can be around " +
            f +
            " for the buildings. Although this technique of using wooden piles has worked well for hundreds of years, the foundations of buildings cannot remain entirely stable over time due to changes in groundwater and subsidence under the weight.",
          s:
            "The wooden piles that support buildings and houses can be around<br/>" +
            f +
            ". Although the method has worked for hundreds of years, the foundations cannot remain entirely stable over time due to changes in groundwater and subsidence.<br/>Small changes in millimeters cause issues, therefore all buildings have their foundations checked and the piles are renewed with modern reinforced concrete. Piles were first driven into the top layer of sand, however with modern machinery they reach a second layer further down for extra support.",
        }),
          (i[9] = {
            l: "Even small changes in millimeters causes issues, therefore all buildings have their foundations checked and the piles are renewed with modern reinforced concrete. Piles were first driven into the top layer of sand, however with modern machinery they are now driven into a second layer further down for extra support.",
            s: "",
          });
        const b =
          "For most visitors to Amsterdam, the fact there are large internal private gardens on each canal block is generally a complete secret, as they are entirely hidden from view.";
        i[10] = { l: b, s: b };
        const v =
            ", they were more uniform that what we see today. For example, a plot may have been around 190 feet deep from the front and 30 feet wide. Owners were allowed to build their home as high as they wanted within the first 110 feet but there were low height restrictions in the remaining area. ",
          A =
            "These gardens have always formed an important part to each home. They originate from building regulations, set out when first home owners bought a plot of canal front land. When plots of land were put up for auction in the ";
        i[11] = {
          l:
            A +
            "17th century" +
            v +
            "Therefore, this empty zone behind each house would give way to an area perfect for internal gardens. The desire for plants would explode during the Dutch Golden Age, and  to this day the Netherlands is the largest global exporter of flowers.",
          s:
            A +
            "1600s" +
            v +
            "This empty zone behind each house would give way to an area perfect for internal gardens and horticulture.",
        };
        const x =
            "During this time the Eighty Years’ War was taking place. A key moment was in 1585 when Antwerp came under control of the Spanish, causing many to flee north to Amsterdam.<br/><br/>1 / &nbsp; It was of utmost importance to keep Amsterdam safely defended on all sides and if the city needed to expand it had to extend its defensive line first.<br/><br/>2 / &nbsp; Not all newcomers lived within the city walls but also outside in the open land. This posed defensive issues where enemy may be able to seek refuge",
          L =
            ".<br/><br/>3 / &nbsp; Thousands of ships would arrive at Amsterdam every day selling a number of goods at markets inside the city.";
        i[12] = { l: x + " in these areas" + L, s: x + L };
        const C =
            "<i>A Significant Time</i><br/><br/>The timing is significant as 1609 was the start of the <i>Twelve Years Truce</i>, an arrangement with the Spanish and Dutch to stop hostilities with each other. As fighting ceased it allowed Amsterdam to expand outwards without concern of attack",
          T =
            ".<br/><br/><i>Creating the Herengracht</i><br/><br/>The moat that formed the bounds of the old city was widened and named the Herengracht. This would become the most prime real estate in the city, intended for luxurious homes of wealthy merchants. Plots of land were put up for public auction, with many sold quickly within months.";
        i[13] = {
          l:
            C +
            " while its defenses were rebuilt" +
            T +
            " It had new stone bridges constructed with an emphasis on keeping these grand canals clean from pollution, noise and unwanted boat traffic.",
          s: C + T,
        };
        const G =
            "Auctions for plots of land allowed wealthy owners to buy even more area, as purchasing a ‘lot’ entitled them to buy the one next to it. This lead to the design and construction of enormous canal front homes, seen in areas such as the Golden Bend on the Herengracht. A number of these buildings are now home to office spaces for international businesses.<br/><br/>Even today, the Canal ring does not make a complete loop around the city, due to a slowing in land sales in the East during the 1600s.",
          W =
            "This area known as the Plantage was filled with many trees and gardens for socialising. Today, it’s home to ‘Artis’ the Royal Zoo and ‘De Hortus’ Botanical Gardens founded in 1638, one of the oldest in the world.";
        i[14] = { l: G + "<br/><br/>" + W, s: G + " " + W };
        const M = i.length;
        for (let s = 0; s < M; s++) e[s].innerHTML = i[s][t];
      }
    })();
    class o {
      constructor(t) {
        const e = t.cb;
        (this.cbX = e.x),
          (this.c = _C),
          (this.isOn = !1),
          (this.isFF = R.Snif.isFirefox),
          R.BM(this, ["raf", "run"]);
        const i = ["mouseWheel", "keydown"];
        for (let t = 0; t < 2; t++) R.L(document, "a", i[t], this.raf);
      }
      on() {
        (this.tick = !1), (this.isOn = !0);
      }
      off() {
        this.isOn = !1;
      }
      resize() {
        this.spaceGap = this.c.win.h - 40;
      }
      raf(t) {
        (this.e = t),
          (this.eT = t.type),
          (this.eK = t.key),
          !t.cancelable ||
            ("keydown" === this.eT && "Tab" !== this.eK) ||
            t.preventDefault(),
          this.isOn &&
            (this.tick || (requestAnimationFrame(this.run), (this.tick = !0)));
      }
      run() {
        const t = this.eT;
        "wheel" === t
          ? this.w()
          : "mousewheel" === t
          ? this.mw()
          : "keydown" === t && this.keyD();
      }
      mw() {
        const t = this.e.wheelDeltaX ? this.e.wheelDeltaX : this.e.wheelDelta,
          e = this.e.wheelDeltaY ? this.e.wheelDeltaY : this.e.wheelDelta,
          i = Math.abs(t) >= Math.abs(e) ? t : e;
        (this.x = i), this.gCb();
      }
      w() {
        const t = this.e.wheelDeltaX || -1 * this.e.deltaX,
          e = this.e.wheelDeltaY || -1 * this.e.deltaY;
        let i = Math.abs(t) >= Math.abs(e) ? t : e;
        this.isFF && 1 === this.e.deltaMode && (i *= 60),
          (i *= 0.556),
          (this.x = i),
          this.gCb();
      }
      keyD() {
        const t = this.eK,
          e = "ArrowUp" === t || "ArrowLeft" === t,
          i = "ArrowDown" === t || "ArrowRight" === t,
          s = " " === t;
        if (e || i || s) {
          let t = 0;
          if (e) t = 100;
          else if (i) t = -100;
          else if (s) {
            const e = this.e.shiftKey ? 1 : -1;
            t = this.spaceGap * e;
          }
          (this.x = t), this.gCb();
        } else this.tick = !1;
      }
      gCb() {
        this.tick && (this.cbX(-this.x), (this.tick = !1));
      }
    }
    const r = 0.1;
    function l(t, e) {
      return 1 - 3 * e + 3 * t;
    }
    function c(t, e) {
      return 3 * e - 6 * t;
    }
    function d(t) {
      return 3 * t;
    }
    function p(t, e, i) {
      return ((l(e, i) * t + c(e, i)) * t + d(e)) * t;
    }
    function u(t, e, i) {
      return 3 * l(e, i) * t * t + 2 * c(e, i) * t + d(e);
    }
    function g(t, e, i, s) {
      const h = new Float32Array(11);
      if (t !== e || i !== s)
        for (let e = 0; e < 11; ++e) h[e] = p(e * r, t, i);
      function a(e) {
        let s = 0;
        for (var a = 1; 10 !== a && h[a] <= e; ++a) s += r;
        --a;
        const n = s + ((e - h[a]) / (h[a + 1] - h[a])) * r;
        return (
          (s = u(n, t, i)),
          s >= 0.001
            ? (function (t, e, i, s) {
                for (let h = 0; h < 4; ++h) {
                  const h = u(e, i, s);
                  if (0 === h) return e;
                  e -= (p(e, i, s) - t) / h;
                }
                return e;
              })(e, n, t, i)
            : 0 === s
            ? n
            : (function (t, e, i, s, h) {
                let a,
                  n,
                  o = 0;
                do {
                  (n = e + (i - e) / 2),
                    (a = p(n, s, h) - t),
                    a > 0 ? (i = n) : (e = n);
                } while (Math.abs(a) > 1e-7 && ++o < 10);
                return n;
              })(e, s, s + r, t, i)
        );
      }
      return function (h) {
        return t === e && i === s
          ? h
          : 0 === h
          ? 0
          : 1 === h
          ? 1
          : p(a(h), e, s);
      };
    }
    class w {
      constructor(t) {
        (this.c = _C),
          (this.c.isSTo = !1),
          (this.xUp = t.xUp),
          (this.sUp = t.sUp),
          R.BM(this, ["fn"]);
      }
      on() {
        this.l("a");
      }
      off() {
        this.l("r");
      }
      stop() {
        this.c.isSTo && (this.a.pause(), (this.c.isSTo = !1));
      }
      l(t) {
        R.L(".s-to", t, "click", this.fn);
      }
      fn(t) {
        if (this.c.menuOpen) return;
        const e = t.target,
          i = "o0-tra-cir" === e.id;
        this.c.isSTo = !0;
        const s = this.c.s.x;
        let h;
        if (i) h = this.c.sTo.menu[0];
        else {
          const t = R.Index.class(e, "s3-t-century-li");
          (h = this.c.sTo.timeline[t]), this.c.tColor.sTo(t);
        }
        const a = this.c.pageW,
          n = s > h && i;
        let o, r, l, c, d, p;
        if (n)
          (r = a - s),
            (o = r + h),
            (l = 2e3),
            (d = "io5"),
            (p = g(0.6, 0, 0, 1)),
            (c = l - 700);
        else {
          o = Math.abs(h - s);
          const t = 5e3;
          (l = 0 === o ? 0 : R.Lerp(300, 1500, R.Clamp(o / t, 0, 1))),
            (d = "io" + R.Clamp(Math.ceil(o / (t / 6)), 1, 6)),
            (c = l);
        }
        R.Is.def(this.a) && this.a.pause(),
          R.Is.def(this.b) && this.b.stop(),
          (this.a = new R.M({
            d: l,
            e: d,
            update: (t) => {
              let e;
              n
                ? ((e = R.Lerp(0, o, p(t.prog))),
                  e < r ? (e += s) : (e -= r),
                  this.sUp({ x: e }))
                : ((e = R.Lerp(s, h, t.progE)), this.xUp(e));
            },
          })),
          i &&
            ((this.b = new R.Delay((t) => {
              (this.c.navNoCurr = 1), this.c.navColor.play(void 0);
            }, c)),
            this.b.run()),
          this.a.play();
      }
    }
    class m {
      constructor(t) {
        (this.cb = t.cb),
          (this.tick = !1),
          R.BM(this, ["gRaf", "run"]),
          (this.raf = new R.RafR(this.run));
      }
      on() {
        this.l("a");
      }
      off() {
        this.l("r");
      }
      l(t) {
        R.L(document, t, "mousemove", this.gRaf);
      }
      gRaf(t) {
        (this.e = t), this.tick || ((this.tick = !0), this.raf.run());
      }
      run() {
        const t = this.iM ? this.e.changedTouches[0] : this.e;
        this.cb(t.pageX, t.pageY, this.e), this.raf.stop(), (this.tick = !1);
      }
    }
    class y {
      constructor() {
        (this.c = _C),
          (this.c.s = { x: 0, delta: 1, needS: !1, lerp: 0.09 }),
          (this.s = { x: {} }),
          (this.isDown = !1),
          (this.first = !0),
          R.BM(this, ["sX", "xUp", "sUp", "move", "down", "up"]),
          (this.vScroll = new o({ cb: { x: this.sX } })),
          (this.sTo = new w({ xUp: this.xUp, sUp: this.sUp })),
          (this.MM = new m({ cb: this.move }));
      }
      init() {
        (this.prog = R.G.id("nav-prog")), this.sUp({ x: 0 }), this.sTo.on();
      }
      resize() {
        (this.winW = this.c.win.w),
          (this.max = this.c.pageW),
          (this.min = 0),
          this.vScroll.resize(),
          this.sUp({ x: this.clamp(this.s.x.targ) });
      }
      clamp(t) {
        return R.R(R.Clamp(t, this.min, this.max));
      }
      on() {
        this.vScroll.on(), this.MM.on(), this.downL("a");
      }
      off() {
        this.vScroll.off(), this.MM.off(), this.downL("r");
      }
      sX(t) {
        this.sTo.stop(), this.xUp(this.s.x.targ + t);
      }
      xUp(t) {
        (this.s.x.targ = R.R(t)),
          this.first &&
            (this.s.x.targ > this.winW
              ? (this.first = !1)
              : (this.s.x.targ = Math.max(this.s.x.targ, 0)));
      }
      down(t) {
        this.downL("r"),
          (this.isDown = !0),
          (this.start = t.pageX),
          (this.targPrev = this.s.x.targ),
          this.upL("a");
      }
      move(t, e, i) {
        if (!this.isDown) return;
        this.sTo.stop();
        const s = 2 * -(t - this.start) + this.targPrev;
        this.xUp(s);
      }
      up() {
        this.upL("r"), (this.isDown = !1), this.downL("a");
      }
      loop() {
        if (
          ((this.c.s.needS = this.s.x.currR !== this.s.x.targ), this.c.s.needS)
        ) {
          const t = this.s.x.currR < 0;
          if (t || this.s.x.currR > this.max) {
            const e = t ? 1 : -1,
              i = this.max * e;
            (this.s.x.currR += i),
              (this.s.x.curr += i),
              (this.s.x.targ += i),
              (this.c.s.x += i),
              (this.targPrev += i);
          }
          const e = -R.R(100 - (this.s.x.currR / this.max) * 100);
          R.T(this.prog, 0, e, "%"),
            (this.s.x.curr = R.Damp(
              this.s.x.curr,
              this.s.x.targ,
              this.c.s.lerp
            )),
            (this.s.x.currR = R.R(this.s.x.curr)),
            (this.c.s.x = this.s.x.currR);
        }
      }
      sUp(t) {
        const e = t.x;
        (this.s.x.targ = e),
          (this.s.x.curr = e),
          (this.s.x.currR = e),
          (this.c.s.x = e);
      }
      downL(t) {
        R.L(document, t, "mousedown", this.down);
      }
      upL(t) {
        R.L(document, t, "mouseup", this.up);
      }
    }
    class f {
      constructor() {
        this.c = _C;
      }
      init(t) {
        (this.el = R.Select.el(t.scroll)[0]),
          (this.qty = t.qty + 1),
          (this.lerp = t.lerp),
          (this.ease = t.ease),
          (this.isOut = !1);
      }
      resize(t, e) {
        const i = this.c.win.w,
          s = t.inside.left;
        (this.isStatic = !1), (this.tImgW = R.G.class("s3-t-img-w"));
        const h = [5, 6, 5, 5];
        this.imgDateW = [];
        let a = 0;
        for (let t = 0; t < 4; t++) {
          this.imgDateW[t] = 0 === t ? 0 : this.imgDateW[t - 1];
          for (let e = 0; e < h[t]; e++)
            this.imgDateW[t] += this.tImgW[a + e].offsetWidth;
          a += h[t];
        }
        (this.totalW = []), (this.movingW = []), (this.sStatic = []);
        let n = 0;
        for (let t = 0; t < this.qty; t++) {
          const h = 0 === t ? 0 : e.b[t - 1];
          (this.totalW[t] = s + h),
            (this.movingW[t] = 0 === t ? i : e.a[t - 1]),
            (n += 0 === t ? 0 : this.movingW[t - 1]),
            (this.sStatic[t] = s + n);
        }
      }
      run(t, e) {
        if (R.Is.und(e)) {
          for (let e = 0; e < this.qty; e++) this.draw(t);
          return;
        }
        const i = [];
        for (let e = 0; e < this.qty; e++) i[e] = t - this.totalW[e];
        const s = this.qty - 1;
        for (let e = 0; e < this.qty; e++) {
          if (0 === e) {
            if (i[0] < 0 && !this.isStatic) {
              (this.isStatic = !0), this.draw(this.sStatic[0]);
              break;
            }
          } else if (
            i[e - 1] > this.movingW[e - 1] &&
            i[e] < 0 &&
            !this.isStatic
          ) {
            (this.isStatic = !0), this.draw(this.sStatic[e]);
            break;
          }
          if (i[e] >= 0 && i[e] * this.lerp <= this.movingW[e]) {
            this.isStatic && (this.isStatic = !1);
            const t =
                "io1" === this.ease && 0 === e ? R.Ease.o1 : R.Ease[this.ease],
              s =
                this.sStatic[e] +
                this.movingW[e] * t((i[e] * this.lerp) / this.movingW[e]);
            this.draw(s);
            break;
          }
          if (e === s && i[e] > this.movingW[e] && !this.isStatic) {
            (this.isStatic = !0), this.draw(t);
            break;
          }
        }
      }
      draw(t) {
        R.T(this.el, -t, 0, "px");
      }
    }
    var b = new (class {
      constructor() {
        this.t = new f();
      }
      init() {
        (this.tDate = R.G.class("s3-t-date")),
          (this.tImgW = R.G.class("s3-t-img-w")),
          this.t.init({
            scroll: "#s3-t-date-w",
            qty: 4,
            lerp: 0.7,
            ease: "io1",
          });
      }
      resize(t) {
        const e = [];
        for (let t = 0; t < 4; t++) e[t] = this.tDate[t].offsetWidth;
        const i = [5, 6, 5, 5],
          s = [];
        let h = 0;
        for (let t = 0; t < 4; t++) {
          s[t] = 0 === t ? 0 : s[t - 1];
          for (let e = 0; e < i[t]; e++) s[t] += this.tImgW[h + e].offsetWidth;
          h += i[t];
        }
        return this.t.resize(t, { a: e, b: s }), s;
      }
      run(t, e) {
        this.t.run(t, e);
      }
    })();
    var v = new (class {
      constructor() {
        this.t = new f();
      }
      init() {
        (this.tImgWrap = R.G.id("s3-t-img-wrap")),
          (this.tBg = R.G.id("s3-t-bg")),
          this.t.init({ scroll: this.tBg, qty: 1, lerp: 1, ease: "linear" });
      }
      resize(t) {
        const e = [this.tBg.offsetWidth],
          i = [this.tImgWrap.offsetWidth];
        this.t.resize(t, { a: e, b: i });
      }
      run(t, e) {
        this.t.run(t, e);
      }
    })();
    var A = new (class {
      constructor() {
        this.t = new f();
      }
      init() {
        (this.tImgWrap = R.G.id("s3-t-img-wrap")),
          (this.tCentury = R.G.id("s3-t-century-w")),
          this.t.init({
            scroll: this.tCentury,
            qty: 1,
            lerp: 0.7,
            ease: "io1",
          });
      }
      resize(t) {
        const e = [this.tCentury.offsetWidth],
          i = [this.tImgWrap.offsetWidth];
        this.t.resize(t, { a: e, b: i });
      }
      run(t, e) {
        this.t.run(t, e);
      }
    })();
    class x {
      constructor() {
        (this.c = _C),
          (this.curr = -1),
          (this.tBgBeigeShow = new R.TL()),
          this.tBgBeigeShow.from({
            el: "#s3-t-bg-beige",
            p: { opacity: [0, 1] },
          }),
          this.tBgBeigeShow.from({
            el: ".s3-t-date-white",
            p: { opacity: [1, 0] },
          }),
          this.tBgBeigeShow.from({
            el: ".s3-t-date-red",
            p: { opacity: [0, 1] },
          }),
          (this.centuryLi = R.G.class("s3-t-century-li")),
          (this.centuryShow = []);
        for (let t = 0; t < 4; t++)
          (this.centuryShow[t] = new R.TL()),
            this.centuryShow[t].from({
              el: this.centuryLi[t].children[1],
              p: { opacity: [0, 1] },
            }),
            this.centuryShow[t].from({
              el: this.centuryLi[t].children[0],
              p: { opacity: [1, 0] },
            });
      }
      run(t) {
        if (t === this.curr) return;
        const e = "o6",
          i = -1 === t ? 0 : 1e3;
        if (
          (this.curr > -1 &&
            (this.centuryShow[this.curr].play({ d: i, e: e, reverse: !0 }),
            (this.centuryLi[this.curr].className = "s3-t-century-li s-to")),
          this.centuryShow[t].play({ d: i, e: e }),
          (this.centuryLi[t].className = "s3-t-century-li s-to on"),
          -1 === this.curr && 3 === t)
        )
          this.tBgBeigeShow.play({ d: 0, e: e });
        else {
          const i = 0 === this.curr && 3 === t ? 0 : 1e3;
          t % 2 == 0
            ? this.tBgBeigeShow.play({ d: i, e: e, reverse: !0 })
            : this.tBgBeigeShow.play({ d: i, e: e });
        }
        this.curr = t;
      }
      sTo(t) {
        if (t === this.curr) return;
        const e = "o6",
          i = 1e3;
        (this.centuryLi[this.curr].className = "s3-t-century-li s-to"),
          (this.centuryLi[t].className = "s3-t-century-li s-to on"),
          this.centuryShow[this.curr].play({ d: i, e: e, reverse: !0 }),
          this.centuryShow[t].play({ d: i, e: e }),
          t % 2 == 0
            ? this.tBgBeigeShow.play({ d: i, e: e, reverse: !0 })
            : this.tBgBeigeShow.play({ d: i, e: e }),
          this.c.navColor.change(t + 33),
          (this.curr = t);
      }
    }
    var L = new (class {
      constructor() {
        (this.c = _C), (this.c.sTo = { timeline: [], menu: [] });
      }
      init() {
        (this.arr = []),
          (this.arrL = 0),
          (this.nav = R.G.id("nav")),
          (this.navNoNew = 0),
          b.init(),
          v.init(),
          A.init(),
          (this.centuryNo = -1),
          (this.c.tColor = new x());
        const t = R.G.id("u").children,
          e = t.length;
        for (let i = 0; i < e; i++) {
          const e = t[i],
            s = e.id,
            h = "s3-t" === s,
            a = h ? R.G.id("s3-t-img-wrap") : e,
            n = R.G.id("o" + s.substr(1));
          (this.arr[this.arrL] = { dom: a, isTimeline: h, over: n }),
            this.arrL++;
        }
        for (let t = 0; t < this.arrL; t++) {
          const e = this.arr[t];
          (e.inside = {}), e.isTimeline && ((e.tBg = {}), (e.tDate = {}));
        }
      }
      resize() {
        const t = this.c.s.x,
          e = this.c.win.w;
        this.navW = this.nav.offsetWidth;
        for (let i = 0; i < this.arrL; i++) {
          const s = this.arr[i];
          this.draw(s, t);
          const h = s.dom.getBoundingClientRect().left,
            a = h + s.dom.offsetWidth;
          (s.inside.left = h + t - e),
            (s.inside.right = a + t),
            s.over && (s.over.style.left = h + t + "px"),
            s.isTimeline &&
              (v.resize(s),
              A.resize(s),
              (this.imgDateW = b.resize(s)),
              (this.imgDateWL = this.imgDateW.length));
          const n = R.R(s.inside.left + e),
            o = R.R(n - this.navW),
            r = R.R(s.inside.right - this.navW);
          if (s.isTimeline) {
            const t = 0.1 * e,
              i = 0.42 * e;
            (s.navL = []), (s.navR = []);
            for (let e = 0; e < this.imgDateWL; e++) {
              const h = 0 === e ? i : this.imgDateW[e - 1] + t;
              this.c.sTo.timeline[e] = Math.max(n + h, 0);
              const a = 0 === e ? 0 : this.imgDateW[e - 1];
              (s.navL[e] = Math.max(o + a, 0)),
                (s.navR[e] = Math.max(r + a, 0));
            }
          } else (s.navL = Math.max(o, 0)), (s.navR = Math.max(r, 0));
          const l = [1, 11, 21, 31],
            c = (e - this.navW) / 2;
          for (let t = 0; t < 4; t++)
            if (i === l[t]) {
              const e = 0 === t ? -3 : c;
              this.c.sTo.menu[t] = o - e;
            }
          s.isOut = !1;
        }
        this.run();
      }
      run() {
        let t;
        for (let e = 0; e < this.arrL; e++) {
          const i = this.arr[e];
          if (
            ((t = this.c.s.x),
            0 === e && (t = t >= this.c.traW ? t - this.c.pageW : t),
            t >= i.inside.left && t <= i.inside.right)
          ) {
            if ((i.isOut && (i.isOut = !1), i.isTimeline)) {
              for (let s = this.imgDateWL - 1; s > -1; s--)
                if (t > i.navL[s] && t < i.navR[s]) {
                  const t = e + s;
                  t !== this.navNoNew &&
                    ((this.navNoNew = t), (this.centuryNo = t - 33));
                  break;
                }
              b.run(t, i), v.run(t, i), A.run(t, i);
            } else
              0 !== this.centuryNo && 0 !== e && (this.centuryNo = 0),
                e !== this.navNoNew &&
                  (0 === t && 0 === e
                    ? (this.navNoNew = 0)
                    : t > i.navL && t < i.navR && (this.navNoNew = e));
            this.draw(i, t);
          } else
            i.isOut ||
              ((i.isOut = !0),
              i.isTimeline && (b.run(t), v.run(t), A.run(t)),
              this.draw(i, t));
        }
        this.c.isSTo || this.c.tColor.run(this.centuryNo),
          this.c.isSTo ||
            this.navNoNew === this.c.navNoCurr ||
            this.c.navColor.change(this.navNoNew);
      }
      draw(t, e) {
        R.T(t.dom, -e, 0, "px"), t.over && R.T(t.over, -e, 0, "px");
      }
    })();
    var C = new (class {
      canvasCtx(t, e) {
        return t.getContext("webgl", e) || t.getContext("experimental-webgl");
      }
      crP(t, e) {
        const i = this.crS(t, e[0], t.VERTEX_SHADER),
          s = this.crS(t, e[1], t.FRAGMENT_SHADER),
          h = t.createProgram();
        return t.attachShader(h, i), t.attachShader(h, s), t.linkProgram(h), h;
      }
      crS(t, e, i) {
        const s = t.createShader(i);
        return t.shaderSource(s, e), t.compileShader(s), s;
      }
      loc(t, e, i, s) {
        const h = s.length,
          a = {},
          n = "a" === t ? "Attrib" : "Uniform";
        for (let o = 0; o < h; o++)
          a[s[o]] = e["get" + n + "Location"](i, t + "_" + s[o]);
        return a;
      }
      resizeCvs(t, e) {
        const i = t.canvas,
          s = i.clientWidth * e,
          h = i.clientHeight * e;
        (i.width === s && i.height === h) || ((i.width = s), (i.height = h)),
          t.viewport(0, 0, i.width, i.height);
      }
    })();
    class T {
      constructor(t, e) {
        const i = e.length,
          s = [];
        for (let h = 0; h < i; h++) {
          const i = t.createTexture();
          t.bindTexture(t.TEXTURE_2D, i),
            t.texImage2D(
              t.TEXTURE_2D,
              0,
              t.RGBA,
              t.RGBA,
              t.UNSIGNED_BYTE,
              e[h]
            ),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR),
            t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0),
            (s[h] = i);
        }
        return { gl: s, img: e };
      }
    }
    var G = new (class {
      inverse(t, e) {
        e = e || new Float32Array(16);
        var i = t[0],
          s = t[1],
          h = t[2],
          a = t[3],
          n = t[4],
          o = t[5],
          r = t[6],
          l = t[7],
          c = t[8],
          d = t[9],
          p = t[10],
          u = t[11],
          g = t[12],
          w = t[13],
          m = t[14],
          y = t[15],
          f = p * y,
          b = m * u,
          R = r * y,
          v = m * l,
          A = r * u,
          x = p * l,
          L = h * y,
          C = m * a,
          T = h * u,
          G = p * a,
          W = h * l,
          M = r * a,
          E = c * w,
          k = g * d,
          S = n * w,
          B = g * o,
          D = n * d,
          P = c * o,
          N = i * w,
          _ = g * s,
          F = i * d,
          I = c * s,
          O = i * o,
          X = n * s,
          z = f * o + v * d + A * w - (b * o + R * d + x * w),
          U = b * s + L * d + G * w - (f * s + C * d + T * w),
          H = R * s + C * o + W * w - (v * s + L * o + M * w),
          Y = x * s + T * o + M * d - (A * s + G * o + W * d),
          q = 1 / (i * z + n * U + c * H + g * Y);
        return (
          (e[0] = q * z),
          (e[1] = q * U),
          (e[2] = q * H),
          (e[3] = q * Y),
          (e[4] = q * (b * n + R * c + x * g - (f * n + v * c + A * g))),
          (e[5] = q * (f * i + C * c + T * g - (b * i + L * c + G * g))),
          (e[6] = q * (v * i + L * n + M * g - (R * i + C * n + W * g))),
          (e[7] = q * (A * i + G * n + W * c - (x * i + T * n + M * c))),
          (e[8] = q * (E * l + B * u + D * y - (k * l + S * u + P * y))),
          (e[9] = q * (k * a + N * u + I * y - (E * a + _ * u + F * y))),
          (e[10] = q * (S * a + _ * l + O * y - (B * a + N * l + X * y))),
          (e[11] = q * (P * a + F * l + X * u - (D * a + I * l + O * u))),
          (e[12] = q * (S * p + P * m + k * r - (D * m + E * r + B * p))),
          (e[13] = q * (F * m + E * h + _ * p - (N * p + I * m + k * h))),
          (e[14] = q * (N * r + X * m + B * h - (O * m + S * h + _ * r))),
          (e[15] = q * (O * p + D * h + I * r - (F * r + X * p + P * h))),
          e
        );
      }
      perspective(t, e, i, s, h) {
        h = h || new Float32Array(16);
        var a = Math.tan(0.5 * Math.PI - 0.5 * t),
          n = 1 / (i - s);
        return (
          (h[0] = a / e),
          (h[1] = 0),
          (h[2] = 0),
          (h[3] = 0),
          (h[4] = 0),
          (h[5] = a),
          (h[6] = 0),
          (h[7] = 0),
          (h[8] = 0),
          (h[9] = 0),
          (h[10] = (i + s) * n),
          (h[11] = -1),
          (h[12] = 0),
          (h[13] = 0),
          (h[14] = i * s * n * 2),
          (h[15] = 0),
          h
        );
      }
      multiply(t, e, i) {
        i = i || new Float32Array(16);
        var s = e[0],
          h = e[1],
          a = e[2],
          n = e[3],
          o = e[4],
          r = e[5],
          l = e[6],
          c = e[7],
          d = e[8],
          p = e[9],
          u = e[10],
          g = e[11],
          w = e[12],
          m = e[13],
          y = e[14],
          f = e[15],
          b = t[0],
          R = t[1],
          v = t[2],
          A = t[3],
          x = t[4],
          L = t[5],
          C = t[6],
          T = t[7],
          G = t[8],
          W = t[9],
          M = t[10],
          E = t[11],
          k = t[12],
          S = t[13],
          B = t[14],
          D = t[15];
        return (
          (i[0] = s * b + h * x + a * G + n * k),
          (i[1] = s * R + h * L + a * W + n * S),
          (i[2] = s * v + h * C + a * M + n * B),
          (i[3] = s * A + h * T + a * E + n * D),
          (i[4] = o * b + r * x + l * G + c * k),
          (i[5] = o * R + r * L + l * W + c * S),
          (i[6] = o * v + r * C + l * M + c * B),
          (i[7] = o * A + r * T + l * E + c * D),
          (i[8] = d * b + p * x + u * G + g * k),
          (i[9] = d * R + p * L + u * W + g * S),
          (i[10] = d * v + p * C + u * M + g * B),
          (i[11] = d * A + p * T + u * E + g * D),
          (i[12] = w * b + m * x + y * G + f * k),
          (i[13] = w * R + m * L + y * W + f * S),
          (i[14] = w * v + m * C + y * M + f * B),
          (i[15] = w * A + m * T + y * E + f * D),
          i
        );
      }
      lookAt(t, e, i, s) {
        s = s || new Float32Array(16);
        var h = this.normalize(this.subtract(t, e)),
          a = this.normalize(this.cross(i, h)),
          n = this.normalize(this.cross(h, a));
        return (
          (s[0] = a[0]),
          (s[1] = a[1]),
          (s[2] = a[2]),
          (s[3] = 0),
          (s[4] = n[0]),
          (s[5] = n[1]),
          (s[6] = n[2]),
          (s[7] = 0),
          (s[8] = h[0]),
          (s[9] = h[1]),
          (s[10] = h[2]),
          (s[11] = 0),
          (s[12] = t[0]),
          (s[13] = t[1]),
          (s[14] = t[2]),
          (s[15] = 1),
          s
        );
      }
      subtract(t, e, i) {
        return (
          ((i = i || new Float32Array(3))[0] = t[0] - e[0]),
          (i[1] = t[1] - e[1]),
          (i[2] = t[2] - e[2]),
          i
        );
      }
      cross(t, e, i) {
        return (
          ((i = i || new Float32Array(3))[0] = t[1] * e[2] - t[2] * e[1]),
          (i[1] = t[2] * e[0] - t[0] * e[2]),
          (i[2] = t[0] * e[1] - t[1] * e[0]),
          i
        );
      }
      normalize(t, e) {
        e = e || new Float32Array(3);
        var i = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
        return (
          i > 1e-5 && ((e[0] = t[0] / i), (e[1] = t[1] / i), (e[2] = t[2] / i)),
          e
        );
      }
    })();
    class W {
      constructor() {
        const t = (45 * Math.PI) / 180;
        return {
          matrix: G.multiply(
            G.perspective(t, 1, 1, 10),
            G.inverse(G.lookAt([0, 0, 5], [0, 0, 0], [0, 1, 0]))
          ),
          winGl: R.R(2 * Math.tan(t / 2) * 5, 5),
        };
      }
    }
    class M {
      constructor(t) {
        (this.c = _C),
          (this.winW = this.c.win.w),
          (this.winRatio = R.R(this.winW / this.c.win.h, 7)),
          (this.winGlwinW = this.c.winGlwinW),
          (this.winGlwinH = this.c.winGlwinH),
          (this.demiWinGl = this.c.winGlDemi),
          (this.e = R.Ease.o3);
      }
      run(t) {
        const e = t.shape;
        let i,
          s,
          h,
          a,
          n,
          o,
          r,
          l,
          c = -e.y1,
          d = -e.y0;
        if (R.Is.und(e.rotation)) {
          const p = t.scroll.x,
            u = (e.x0 - p) * this.winGlwinW - this.demiWinGl,
            g = (e.x1 - p) * this.winGlwinW - this.demiWinGl;
          (c = c * this.winGlwinH + this.demiWinGl),
            (d = d * this.winGlwinH + this.demiWinGl),
            (i = u),
            (s = c),
            (h = g),
            (a = c),
            (n = u),
            (o = d),
            (r = g),
            (l = d);
        } else {
          const p = e.rotation;
          (this.angleCos = Math.cos(p)),
            (this.angleSin = Math.sin(p)),
            (this.back = e.x0 + t.shape.wDemi - t.scroll.x);
          const u = -t.shape.wDemi,
            g = t.shape.wDemi;
          (i = this.rX(u, c)),
            (s = this.rY(u, c)),
            (h = this.rX(g, c)),
            (a = this.rY(g, c)),
            (n = this.rX(u, d)),
            (o = this.rY(u, d)),
            (r = this.rX(g, d)),
            (l = this.rY(g, d));
        }
        const p = [];
        (p[0] = i),
          (p[1] = s),
          (p[2] = h),
          (p[3] = a),
          (p[4] = n),
          (p[5] = o),
          (p[6] = n),
          (p[7] = o),
          (p[8] = h),
          (p[9] = a),
          (p[10] = r),
          (p[11] = l);
        const u = p.length / 2,
          g = t.index,
          w = t.img,
          m = {};
        (m.img = R.R(w.width / w.height, 7)), (m.shape = R.R(e.w / e.h, 7));
        let y = 1;
        (1 !== g && 3 !== g && 10 !== g && 13 !== g) ||
          (y = R.Lerp(1.14, 1, this.e(t.norm)));
        const f = {};
        m.shape > m.img
          ? ((f.w = y), (f.h = (y / m.img) * m.shape))
          : ((f.w = (y * m.img) / m.shape), (f.h = y)),
          (f.w = 1 / f.w),
          (f.h = 1 / f.h);
        const b = 1 - f.w,
          v = 1 - f.h,
          A = [];
        let x;
        if (R.Is.def(e.prlxX))
          if (e.prlxX > 0) x = R.Lerp(0, b, t.norm);
          else {
            let i = b * e.wWinWW;
            i > 0 ? (i = Math.min(i, f.w)) : i < 0 && (i = Math.max(i, f.w)),
              (x = R.Lerp(b + i, 0 - i, t.norm));
          }
        else x = 48 === g ? b * t.norm : b / 2;
        const L = x + f.w,
          C = 1 - v / 2,
          T = C - f.h;
        return (
          (A[0] = x),
          (A[1] = C),
          (A[2] = L),
          (A[3] = C),
          (A[4] = x),
          (A[5] = T),
          (A[6] = x),
          (A[7] = T),
          (A[8] = L),
          (A[9] = C),
          (A[10] = L),
          (A[11] = T),
          { pos: { type: "TRIANGLES", arr: p, l: u }, texCoord: { arr: A } }
        );
      }
      rX(t, e) {
        return (
          (t * this.angleCos - e * this.angleSin + this.back) * this.winGlwinW -
          this.demiWinGl
        );
      }
      rY(t, e) {
        return (
          (t * this.angleSin + e * this.angleCos) * this.winGlwinH +
          this.demiWinGl
        );
      }
    }
    const E = {
      vertex: [
        "precision mediump float;",
        "",
        "attribute vec4 a_p;",
        "uniform mat4 u_m;",
        "",
        "attribute vec2 a_t;",
        "varying vec2 v;",
        "",
        "void main() {",
        "    gl_Position = u_m * a_p;",
        "    v = a_t;",
        "}",
      ].join("\n"),
      fragment: [
        "precision mediump float;",
        "",
        "varying vec2 v;",
        "uniform sampler2D u_tex;",
        "",
        "void main() {",
        "    gl_FragColor = texture2D(u_tex, v);",
        "}",
      ].join("\n"),
    };
    class k {
      constructor() {
        (this.c = _C),
          R.BM(this, ["resize"]),
          (this.RO = new R.RO({ cb: this.resize, throttleDelay: 100 })),
          this.init();
      }
      init() {
        (this.gl = C.canvasCtx(R.G.id("gl"), { antialias: !0, alpha: !0 })),
          (this.program = C.crP(this.gl, [E.vertex, E.fragment])),
          (this.attrib = C.loc("a", this.gl, this.program, ["p", "t"])),
          (this.uniform = C.loc("u", this.gl, this.program, ["m"])),
          (this.texCoordBuffer = this.gl.createBuffer()),
          this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texCoordBuffer),
          this.gl.vertexAttribPointer(
            this.attrib.t,
            2,
            this.gl.FLOAT,
            !1,
            0,
            0
          ),
          (this.positionBuffer = this.gl.createBuffer()),
          this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer),
          this.gl.vertexAttribPointer(
            this.attrib.p,
            2,
            this.gl.FLOAT,
            !1,
            0,
            0
          ),
          this.gl.enableVertexAttribArray(this.attrib.p);
      }
      resize() {
        C.resizeCvs(this.gl, 1.5),
          this.gl.enable(this.gl.CULL_FACE),
          this.gl.cullFace(this.gl.BACK),
          this.gl.enable(this.gl.BLEND),
          this.gl.blendFunc(this.gl.SRC_ALPHA, this.gl.ONE_MINUS_SRC_ALPHA),
          this.gl.useProgram(this.program);
        const t = new W();
        (this.c.winGl = t.winGl),
          (this.c.winGlDemi = this.c.winGl / 2),
          (this.c.winGlwinW = this.c.winGl / this.c.win.w),
          (this.c.winGlwinH = this.c.winGl / this.c.win.h),
          this.gl.uniformMatrix4fv(this.uniform.m, !1, t.matrix),
          (this.vertices = new M());
      }
      imgU(t) {
        this.tex = new T(this.gl, t);
      }
      drawImg(t) {
        const e = t.index,
          i = t.shape,
          s = this.tex,
          h = this.vertices.run({
            index: e,
            shape: i,
            img: s.img[t.index],
            scroll: t.scroll,
            norm: t.norm,
          });
        this.gl.bindTexture(this.gl.TEXTURE_2D, s.gl[t.index]),
          this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.texCoordBuffer),
          this.gl.enableVertexAttribArray(this.attrib.t),
          this.gl.bufferData(
            this.gl.ARRAY_BUFFER,
            new Float32Array(h.texCoord.arr),
            this.gl.STATIC_DRAW
          ),
          this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer),
          this.gl.enableVertexAttribArray(this.attrib.p),
          this.gl.bufferData(
            this.gl.ARRAY_BUFFER,
            new Float32Array(h.pos.arr),
            this.gl.STATIC_DRAW
          ),
          this.gl.drawArrays(this.gl[h.pos.type], 0, h.pos.l);
      }
    }
    var S = new (class {
      constructor() {
        this.c = _C;
      }
      init(t) {
        (this.cb = t.cb),
          (this.arr = this.c.shape),
          (this.arrL = this.arr.length);
        for (let t = 0; t < this.arrL; t++) {
          const e = this.arr[t];
          (e.isOut = !0), (e.inside = {});
        }
      }
      resize() {
        this.winW = this.c.win.w;
        for (let t = 0; t < this.arrL; t++) {
          const e = this.arr[t],
            i = e.inside;
          (i.left = e.x0 - this.winW), (i.right = e.x1);
        }
        this.run();
      }
      run() {
        this.sX = this.c.s.x;
        for (let t = 0; t < this.arrL; t++) this.inOut(t);
      }
      inOut(t) {
        const e = this.arr[t],
          i = e.inside;
        let s;
        (s =
          t === this.c.last
            ? this.sX >= this.c.pageW - this.winW || this.sX <= this.c.traW
            : this.sX >= i.left && this.sX <= i.right),
          s
            ? (e.isOut && (e.isOut = !1), this.cb(t))
            : e.isOut || ((e.isOut = !0), this.cb(t));
      }
    })();
    class B {
      constructor() {
        this.c = _C;
        const t = this.c.webpAvailable ? "webp" : "jpg";
        (this.GLCore = new k()),
          (this.gli = R.G.class("gli")),
          (this.tra = R.G.id("s0-tra-w")),
          (this.c.shape = []),
          (this.c.shapeL = this.gli.length),
          (this.c.last = this.gli.length);
        const e = "?" + this.c.v,
          i = "/public/media/d/",
          s = [0, 2, 6, 7, 14, 18, 20, 26],
          h = [4, 8, 15, 22, 25];
        for (let a = 0; a < this.c.shapeL; a++) {
          let n;
          s.indexOf(a) > -1 ? (n = -1) : h.indexOf(a) > -1 && (n = 1);
          const o = 1;
          let r;
          16 === a
            ? (r = 2 * this.c.pi180)
            : 21 === a
            ? (r = 1.8 * this.c.pi180)
            : 19 === a && (r = -0.2 * this.c.pi180);
          const l = (a > 32 && a < 36) || 38 === a ? "png" : t;
          this.c.shape[a] = {
            src: i + a + "." + l + e,
            rotation: r,
            prlxX: n,
            scale: o,
          };
        }
        (this.c.shape[this.c.last] = { src: i + "intro." + t + e }),
          this.c.shapeL++,
          R.BM(this, ["draw"]);
      }

      tex(t) {
        this.GLCore.imgU(t);
      }
      init() {
        S.init({ cb: this.draw });
      }
      resize() {
        const t = this.c.win.w;
        this.c.traW = this.tra.offsetWidth;
        for (let e = 0; e < this.c.shapeL; e++) {
          let i = this.c.s.x;
          e === this.c.last && (i = i >= this.c.traW ? i - this.c.pageW : i);
          const s = e === this.c.last ? this.tra : this.gli[e],
            h = s.getBoundingClientRect(),
            a = this.c.shape[e];
          (a.x0 = h.left + i),
            (a.x1 = h.right + i),
            (a.y0 = h.top),
            (a.y1 = h.bottom),
            (a.w = s.offsetWidth),
            (a.wDemi = s.offsetWidth / 2),
            (a.wWinW = a.w + t),
            (a.wWinWW = a.w / (t - a.w)),
            (a.h = s.offsetHeight);
        }
        this.GLCore.resize(), S.resize();
      }
      inside() {
        S.run();
      }
      draw(t) {
        const e = this.c;
        let i = e.s.x;
        t === e.last && (i = i >= e.traW ? i - e.pageW : i);
        const s = e.shape[t],
          h = R.Clamp((i - s.inside.left) / s.wWinW, 0, 1);
        this.GLCore.drawImg({ index: t, shape: s, norm: h, scroll: { x: i } });
      }
    }
    class D {
      constructor() {
        (this.c = _C), (this.c.navNoCurr = 0);
      }
      init(t) {
        (this.sectionBgColor = this.c.data.navBgColor),
          (this.bgColor = "Transparent"),
          (this.burgerColor = "White"),
          (this.amsColor = "Red"),
          (this.progColor = "Red");
        const e = "nav-bg-",
          i = "nav-ams-",
          s = R.G.id(e + "transparent"),
          h = R.G.id(e + "black"),
          a = R.G.id(e + "red"),
          n = R.G.id(e + "beige"),
          o = R.G.id(e + "white"),
          r = R.G.id(i + "black"),
          l = R.G.id(i + "red"),
          c = R.G.id(i + "white"),
          d = 1e3,
          p = { opacity: [0, 1] };
        (this.bgTransparentA = new R.M({ el: s, p: p, d: d })),
          (this.bgBlackA = new R.M({ el: h, p: p, d: d })),
          (this.bgRedA = new R.M({ el: a, p: p, d: d })),
          (this.bgWhiteA = new R.M({ el: o, p: p, d: d })),
          (this.bgBeigeA = new R.M({ el: n, p: p, d: d })),
          (this.amsBlackA = new R.M({ el: r, p: p, d: d })),
          (this.amsRedA = new R.M({ el: l, p: p, d: d })),
          (this.amsWhiteA = new R.M({ el: c, p: p, d: d })),
          (this.progWhiteA = new R.M({ el: "#nav-prog-white", p: p, d: d })),
          (this.progRedA = new R.M({ el: "#nav-prog-red", p: p, d: d })),
          (this.burgerProgWhiteA = new R.M({
            el: "#nav-burger-prog-white",
            p: p,
            d: d,
          })),
          (this.burgerProgRedA = new R.M({
            el: "#nav-burger-prog-red",
            p: p,
            d: d,
          })),
          (this.burgerBorderWhiteA = new R.M({
            el: "#nav-burger-border-white",
            p: p,
            d: d,
          })),
          (this.burgerBorderBlackA = new R.M({
            el: "#nav-burger-border-black",
            p: p,
            d: d,
          })),
          (this.burgerLineWhiteA = new R.M({
            el: ".nav-burger-line-white",
            p: p,
            d: d,
          })),
          (this.burgerLineBlackA = new R.M({
            el: ".nav-burger-line-black",
            p: p,
            d: d,
          })),
          (this.verticalWhiteA = new R.M({
            el: ".nav-vertical-white",
            p: p,
            d: d,
          })),
          (this.verticalBlackA = new R.M({
            el: ".nav-vertical-black",
            p: p,
            d: d,
          })),
          (this.verticalLineWhiteA = new R.M({
            el: "#nav-vertical-line-white",
            p: p,
            d: d,
          })),
          (this.verticalLineBlackA = new R.M({
            el: "#nav-vertical-line-black",
            p: p,
            d: d,
          }));
      }
      change(t) {
        (this.c.navNoCurr = t),
          this.sectionBgColor[t] === this.bgColor ||
            this.c.menuOpen ||
            this.play(this.sectionBgColor[t]);
      }
      play(t, e) {
        const i = R.Is.und(t) ? this.sectionBgColor[this.c.navNoCurr] : t;
        if (i === this.bgColor) return;
        const s = R.Is.und(e) ? "o6" : e,
          h = { e: s },
          a = { reverse: !0, e: s },
          n = this.bgColor;
        this.bgColor = i;
        const o = this.burgerColor;
        this.burgerColor =
          "Transparent" === this.bgColor || "Black" === this.bgColor
            ? "White"
            : "Black";
        const r = this.amsColor;
        this.amsColor =
          "Transparent" === this.bgColor
            ? "Red"
            : "Black" === this.bgColor
            ? "White"
            : "Black";
        const l = this.progColor;
        (this.progColor = "Red" === this.bgColor ? "White" : "Red"),
          this["bg" + this.bgColor + "A"].play(h),
          this["bg" + n + "A"].play(a),
          this.burgerColor !== o &&
            (this["burgerBorder" + this.burgerColor + "A"].play(h),
            this["burgerLine" + this.burgerColor + "A"].play(h),
            this["vertical" + this.burgerColor + "A"].play(h),
            this["verticalLine" + this.burgerColor + "A"].play(h),
            this["burgerBorder" + o + "A"].play(a),
            this["burgerLine" + o + "A"].play(a),
            this["vertical" + o + "A"].play(a),
            this["verticalLine" + o + "A"].play(a)),
          this.amsColor !== r &&
            (this["ams" + this.amsColor + "A"].play(h),
            this["ams" + r + "A"].play(a)),
          this.progColor !== l &&
            (this["burgerProg" + this.progColor + "A"].play(h),
            this["prog" + this.progColor + "A"].play(h),
            this["burgerProg" + l + "A"].play(a),
            this["prog" + l + "A"].play(a));
      }
    }
    var P = new (class {
      constructor() {
        (this.c = _C),
          R.BM(this, ["openFn", "closeFn", "anchorFn", "aboShow", "aboHide"]);
      }
      init(t) {
        (this.scroll = t.s), (this.navBack = R.G.id("nav-back"));
        const e = "polygon";
        (this.burger = R.G.id("nav-burger")), (this.menu = R.G.id("menu"));
        const i = "menu-bg";
        (this.bg = R.G.id(i)),
          (this.bgShadow = R.G.id(i + "-shadow")),
          (this.liC = "menu-li");
        const s = R.G.class(this.liC + "-name");
        (this.liNoC = this.liC + "-no"),
          (this.no = R.G.class(this.liNoC)),
          (this.line = R.G.class(this.liC + "-line")),
          (this.menuAbout = R.G.id("menu-about")),
          (this.close = R.G.id("close"));
        const h = "#close-cross-",
          a = ".nav-burger-line-",
          n = "#close-arrow-line-";
        (this.abo = R.G.id("about")),
          (this.aboLPEl = R.G.class("about-l-p")),
          (this.aboRPEl = R.G.class("about-r-p"));
        const o = "about-credit-",
          r = R.G.class(o + "role"),
          l = R.G.class(o + "name"),
          c = R.G.class(o + "twitter"),
          d = R.G.class(o + "line"),
          p = R.G.class(o + "contact"),
          u = "about-ref-",
          w = R.G.class(u + "title"),
          m = R.G.class(u + "content"),
          y = R.G.id("about-line");
        (this.c.menuOpen = !1),
          (this.isAbout = !1),
          (this.active = 0),
          (this.e = g(0.84, 0, 0, 1)),
          (this.x = 100.1);
        const f = 1e3,
          b = { y: [102, 0] };
        (this.lineTop = new R.M({
          el: a + "top",
          svg: { type: e, start: "0,0 0,6 60,6 60,0", end: "0,0 0,6 0,6 0,0" },
          d: f,
          e: "o5",
        })),
          (this.lineBottom = new R.M({
            el: a + "bottom",
            svg: {
              type: e,
              start: "0,44 0,50 60,50 60,44",
              end: "60,44 60,50 60,50 60,44",
            },
            d: f,
            e: "o5",
          })),
          (this.circleRotate = new R.M({
            el: "#close-circle-w",
            p: { rotate: [0, -180], scale: [-1, -1] },
          })),
          (this.circle = new R.M({
            el: "#close-circle",
            line: { start: 0, end: 100 },
          })),
          (this.crossTop = new R.M({
            el: h + "top",
            svg: {
              type: e,
              end: "157.7,149.2 149.2,157.7 262.3,270.8 270.8,262.3",
            },
          })),
          (this.crossBottom = new R.M({
            el: h + "bottom",
            svg: {
              type: e,
              end: "262.3,149.2 149.2,262.3 157.7,270.8 270.8,157.7",
            },
          })),
          (this.arrowLine0 = new R.M({
            el: n + "0",
            svg: { type: e, end: "295.5,204 295.5,216 138.1,216 138.1,204" },
          })),
          (this.arrowLine1 = new R.M({
            el: n + "1",
            svg: { type: e, end: "130.5,210 176.5,164 185,172.5 139,218.5" },
          })),
          (this.arrowLine2 = new R.M({
            el: n + "2",
            svg: { type: e, end: "130.5,210 176.5,256 185,247.5 139,201.5" },
          })),
          (this.name = []),
          (this.noA = []);
        for (let t = 0; t < 4; t++)
          (this.name[t] = new R.M({ el: s[t], p: b })),
            (this.noA[t] = new R.M({ el: this.no[t], p: b }));
        (this.menuAboutA = new R.M({ el: this.menuAbout, p: b })),
          (this.bgA = new R.M({
            el: "#menu-bg-light",
            p: { opacity: [0, 1] },
            d: f,
          })),
          (this.closeOpa = new R.M({
            el: "#close-circle-w",
            p: { opacity: [1, 0.05] },
            d: f,
            e: "o6",
          })),
          (this.aboLP = []),
          (this.aboRP = []),
          (this.aboCRole = []),
          (this.aboCName = []),
          (this.aboLinkLi = []),
          (this.aboCTwit = []),
          (this.aboCLine = []),
          (this.aboCContact = []),
          (this.aboRefTi = []),
          (this.aboRefCo = []);
        for (let t = 0; t < 5; t++)
          this.aboRefCo[t] = new R.M({
            el: m[t],
            p: { opacity: [0, 0.85], y: [10, 0] },
          });
        for (let t = 0; t < 3; t++)
          (this.aboLP[t] = new R.M({ el: this.aboLPEl[t], p: b })),
            (this.aboRP[t] = new R.M({ el: this.aboRPEl[t], p: b }));
        for (let t = 0; t < 2; t++)
          (this.aboCRole[t] = new R.M({ el: r[t], p: b })),
            (this.aboCName[t] = new R.M({ el: l[t], p: b })),
            (this.aboCTwit[t] = new R.M({ el: c[t], p: b })),
            (this.aboCLine[t] = new R.M({ el: d[t], p: b })),
            (this.aboCContact[t] = new R.M({ el: p[t], p: b })),
            (this.aboRefTi[t] = new R.M({ el: w[t], p: b }));
        (this.aboH2 = new R.M({ el: "#about-h2", p: b })),
          (this.aboMade = new R.M({ el: "#about-made", p: b })),
          (this.aboLine = new R.M({ el: y, r: 6, p: { scaleX: [0, 1] } }));
      }
      resize() {
        const t =
            '<a class="_tb" href="https://www.rijksmuseum.nl">Rijksmuseum<span class="about-link-line"></span></a>',
          e = "Canals is a personal passion project celebrating",
          i = "Historic artwork, maps & photographs presented",
          s = "through an editorial style, visual design piece.";
        window.matchMedia("(min-aspect-ratio: 15/10)").matches
          ? ((this.aboLPEl[0].textContent = e),
            (this.aboLPEl[1].textContent =
              "the iconic Amsterdam canals and their rich history"),
            (this.aboLPEl[2].textContent = s),
            (this.aboRPEl[0].innerHTML = i),
            (this.aboRPEl[1].textContent =
              "throughout the experience are sourced from the digital"),
            (this.aboRPEl[2].innerHTML =
              "image collection of the Amsterdam " + t + "."))
          : ((this.aboLPEl[0].textContent = e + " the iconic Amsterdam"),
            (this.aboLPEl[1].textContent =
              "canals and their rich history " + s),
            (this.aboLPEl[2].textContent = ""),
            (this.aboRPEl[0].innerHTML = i + " throughout the experience"),
            (this.aboRPEl[1].innerHTML =
              "are sourced from the digital image collection of the Amsterdam " +
              t +
              "."),
            (this.aboRPEl[2].textContent = ""));
        const h = R.G.class("about-link-line");
        for (let t = 0; t < 3; t++)
          (this.aboLinkLi[t] = new R.M({ el: h[t], p: { x: [-102, 0] } })),
            this.isAbout &&
              this.aboLinkLi[t].play({
                delay: 0,
                d: 1,
                p: { x: { newStart: -102, newEnd: 0 } },
              });
      }
      on() {
        this.lOpen("a");
      }
      lOpen(t) {
        R.L(this.burger, t, "click", this.openFn);
      }
      lClose(t) {
        R.L(this.burger, t, "click", this.closeFn),
          R.L(this.close, t, "click", this.closeFn);
      }
      lMenu(t) {
        R.L("." + this.liC, t, "click", this.anchorFn);
      }
      lAboutShow(t) {
        R.L(this.menuAbout, t, "click", this.aboShow);
      }
      lAboutHide(t) {
        R.L(this.burger, t, "click", this.closeFn),
          R.L(this.close, t, "click", this.aboHide);
      }
      aboShow() {
        this.lAboutShow("r"),
          this.lMenu("r"),
          this.lClose("r"),
          R.PE.none(this.menu),
          R.PE.all(this.abo),
          (this.isAbout = !0);
        const t = "i2",
          e = 1600,
          i = "o6",
          s = { reverse: !0, delay: 0, d: 500, e: t },
          h = { delay: 500, d: e, e: i },
          a = { y: { newStart: 102, newEnd: 0 } },
          n = { y: { newStart: 40, newEnd: 0 } },
          o = { x: { newStart: -102, newEnd: 0 } },
          r = 800;
        for (let e = 0; e < 4; e++) {
          const i = {
            delay: 0,
            p: { y: { newEnd: -101 } },
            d: 500,
            e: t,
            reverse: !0,
          };
          this.noA[e].play(i), this.name[e].play(i);
        }
        this.menuAboutA.play({
          reverse: !0,
          delay: 0,
          p: { y: { newEnd: -101 } },
          d: 500,
          e: t,
        }),
          this.crossTop.play(s),
          this.crossBottom.play(s),
          this.closeOpa.play({ delay: 500 }),
          this.bgA.play({ delay: 500, e: "o3" }),
          new R.Delay((t) => {
            this.c.navColor.play("White", "o3");
          }, 500).run(),
          this.arrowLine0.play(h),
          this.arrowLine1.play(h),
          this.arrowLine2.play(h),
          this.aboH2.play({ delay: r, d: e, e: i, p: a }),
          this.aboMade.play({ delay: 1800, d: e, e: i, p: a }),
          this.aboLine.play({
            delay: 1800,
            d: e,
            e: i,
            p: { x: { newStart: 102, newEnd: 0 } },
          });
        for (let t = 0; t < 5; t++)
          this.aboRefCo[t].play({ delay: 1500, d: e, e: i, p: n });
        for (let t = 0; t < 3; t++)
          this.aboLP[t].play({ delay: 900, d: e, e: i, p: a }),
            this.aboRP[t].play({ delay: 1e3, d: e, e: i, p: a }),
            this.aboLinkLi[t].play({ delay: 1300, d: e, e: i, p: o });
        for (let t = 0; t < 2; t++)
          this.aboCRole[t].play({ delay: 1100, d: e, e: i, p: a }),
            this.aboCName[t].play({ delay: 1200, d: e, e: i, p: a }),
            this.aboCTwit[t].play({ delay: 1400, d: e, e: i, p: a }),
            this.aboCLine[t].play({ delay: 1400, d: e, e: i, p: a }),
            this.aboCContact[t].play({ delay: 1400, d: e, e: i, p: a }),
            this.aboRefTi[t].play({ delay: 1300, d: e, e: i, p: a });
        new R.Delay((t) => {
          this.lAboutHide("a");
        }, 1400).run();
      }
      aboHide() {
        this.lAboutHide("r"), (this.isAbout = !1);
        const t = 1600,
          e = "o6",
          i = { delay: 0, d: 400, e: "i2", reverse: !0 },
          s = { delay: 500, d: t, e: e },
          h = { delay: 500, d: t, e: e, reverse: !0 },
          a = { y: { newStart: 101, newEnd: 0 } },
          n = {
            delay: 0,
            d: 500,
            e: "i2",
            reverse: !0,
            p: { y: { newEnd: -102 } },
          },
          o = {
            delay: 0,
            d: 500,
            e: "i2",
            reverse: !0,
            p: { x: { newEnd: -102 } },
          },
          r = {
            delay: 0,
            d: 500,
            e: "i2",
            reverse: !0,
            p: { y: { newEnd: -40 } },
          };
        R.Is.def(this.lineA) && this.lineA.pause(),
          R.T(this.line[this.active], -101, 0),
          (this.lineA = new R.M({
            el: this.line[this.active],
            p: { x: [-100.5, 0] },
          })),
          this.arrowLine0.play(i),
          this.arrowLine1.play(i),
          this.arrowLine2.play(i),
          this.aboH2.play(n),
          this.aboMade.play(n),
          this.aboLine.play(o);
        for (let t = 0; t < 5; t++) this.aboRefCo[t].play(r);
        for (let t = 0; t < 3; t++)
          this.aboLP[t].play(n),
            this.aboRP[t].play(n),
            this.aboLinkLi[t].play(o);
        for (let t = 0; t < 2; t++)
          this.aboCRole[t].play(n),
            this.aboCName[t].play(n),
            this.aboCTwit[t].play(n),
            this.aboCLine[t].play(n),
            this.aboCContact[t].play(n),
            this.aboRefTi[t].play(n);
        this.bgA.play({ delay: 500, reverse: !0, e: "o3" }),
          new R.Delay((t) => {
            this.c.navColor.play("Red", "o3");
          }, 500).run(),
          this.crossTop.play(s),
          this.crossBottom.play(s),
          this.closeOpa.play(h);
        for (let i = 0; i < 4; i++) {
          const s = this.del(800, i),
            h = s + 100,
            n = s + 200;
          this.name[i].play({ delay: s, d: t, e: e, p: a }),
            this.noA[i].play({ delay: h, d: t, e: e, p: a }),
            i === this.active && this.lineA.play({ delay: n, d: t, e: e });
        }
        this.menuAboutA.play({
          delay: 1e3,
          p: { y: { newStart: 101, newEnd: 0 } },
          d: t,
          e: e,
        }),
          new R.Delay((t) => {
            R.PE.all(this.menu),
              R.PE.none(this.abo),
              this.lAboutShow("a"),
              this.lMenu("a"),
              this.lClose("a");
          }, 1400).run();
      }
      anchorFn(t) {
        this.lAboutShow("r"),
          this.lMenu("r"),
          this.lClose("r"),
          R.PE.none(this.menu),
          R.PE.none(this.close);
        const e = this.c.s.x,
          i = R.Index.class(t.target, this.liC),
          s = this.c.sTo.menu[i];
        if (e === s) this.closeFn();
        else {
          const t = 800,
            h = "io4";
          (this.c.s.lerp = 1),
            (this.scrollTo = new R.M({
              d: t,
              e: h,
              update: (t) => {
                const i = R.Lerp(e, s, t.progE);
                this.scroll.xUp(i);
              },
            }));
          const a = [1, 11, 21, 31];
          if (((this.c.navNoCurr = a[i]), this.active !== i)) {
            const e = new R.M({
              el: this.line[i],
              p: { x: [100.5, 0] },
              d: t,
              e: h,
            });
            (this.no[this.active].className = this.liNoC),
              (this.no[i].className = this.liNoC + " on"),
              (this.active = i),
              this.lineA.play({ d: t, e: h, delay: 0, reverse: !0 }),
              e.play();
          }
          this.scrollTo.play(),
            new R.Delay((t) => {
              (this.c.s.lerp = 0.09), this.closeFn();
            }, t).run();
        }
      }
      openFn() {
        this.scroll.off(),
          (this.c.menuOpen = !0),
          R.PE.all(this.menu),
          R.PE.all(this.close),
          this.lOpen("r"),
          this.lClose("a"),
          R.Is.def(this.lineA) && this.lineA.pause();
        const t = this.c.sTo.menu;
        let e = 0;
        for (let i = 3; i > -1; i--)
          if (this.c.s.x >= t[i]) {
            e = i;
            break;
          }
        R.T(this.line[this.active], -101, 0),
          (this.no[this.active].className = this.liNoC),
          (this.no[e].className = this.liNoC + " on"),
          (this.lineA = new R.M({ el: this.line[e], p: { x: [-100.5, 0] } })),
          (this.active = e),
          R.Is.def(this.closeNavDelay) && this.closeNavDelay.stop(),
          R.Is.def(this.menuDelay) && this.menuDelay.stop();
        const i = 1400,
          s = Math.max((this.x / 100) * i, 500),
          h = this.gE(s),
          a = this.del(700, 4),
          n = 1600,
          o = "o6",
          r = { y: { newStart: 101, newEnd: 0 } };
        this.c.navColor.play("Red"),
          this.bgX(0, i, h),
          this.lineTop.play(),
          this.lineBottom.play();
        for (let t = 0; t < 4; t++) {
          const e = this.del(700, t),
            i = e + 100,
            s = e + 200;
          this.name[t].play({ delay: e, d: n, e: o, p: r }),
            this.noA[t].play({ delay: i, d: n, e: o, p: r }),
            t === this.active && this.lineA.play({ delay: s, d: n, e: o });
        }
        this.crossTop.play({ delay: a, d: n, e: o }),
          this.crossBottom.play({ delay: a, d: n, e: o }),
          this.circleRotate.play({ delay: a, d: n, e: o }),
          this.circle.play({ delay: a, d: n, e: o, line: { end: 100 } }),
          this.menuAboutA.play({ delay: a, p: r, d: n, e: o }),
          this.isAbout &&
            ((this.isAbout = !1),
            this.bgA.play({ delay: 0, reverse: !0, e: "o6" })),
          (this.menuDelay = new R.Delay((t) => {
            R.T(this.navBack, 0, 0), this.lMenu("a"), this.lAboutShow("a");
          }, i)),
          this.menuDelay.run();
      }
      del(t, e) {
        return t + 120 * e;
      }
      closeFn() {
        this.scroll.on(),
          R.PE.none(this.menu),
          R.PE.none(this.close),
          R.PE.none(this.abo),
          this.lAboutShow("r"),
          this.lAboutHide("r"),
          this.lMenu("r"),
          this.lClose("r"),
          this.lOpen("a"),
          R.Is.def(this.menuDelay) && this.menuDelay.stop();
        const t = 400,
          e = "i2",
          i = { reverse: !0 },
          s = { reverse: !0, delay: 0, d: t, e: e },
          h = { delay: 0, d: t, e: e, reverse: !0 },
          a = Math.max(((100.1 - this.x) / 100) * 1200, 500),
          n = this.gE(a),
          o = {
            delay: 0,
            d: 500,
            e: e,
            reverse: !0,
            p: { y: { newEnd: 102 } },
          },
          r = {
            delay: 0,
            d: 500,
            e: e,
            reverse: !0,
            p: { x: { newEnd: -102 } },
          },
          l = { delay: 0, d: 500, e: e, reverse: !0, p: { y: { newEnd: 40 } } };
        if (
          (R.T(this.navBack, -102, 0),
          this.bgX(100.1, a, n),
          (this.closeNavDelay = new R.Delay((t) => {
            this.c.navColor.play(void 0), (this.c.menuOpen = !1);
          }, a - 200)),
          this.closeNavDelay.run(),
          this.lineTop.play(i),
          this.lineBottom.play(i),
          this.crossTop.play(s),
          this.crossBottom.play(s),
          this.circleRotate.play(s),
          this.circle.play({
            reverse: !0,
            delay: 0,
            d: t,
            e: e,
            line: { end: 0 },
          }),
          this.isAbout)
        ) {
          this.closeOpa.play({ delay: 0, reverse: !0 }),
            this.arrowLine0.play(h),
            this.arrowLine1.play(h),
            this.arrowLine2.play(h),
            this.aboH2.play(o),
            this.aboMade.play(o),
            this.aboLine.play(r);
          for (let t = 0; t < 5; t++) this.aboRefCo[t].play(l);
          for (let t = 0; t < 3; t++)
            this.aboLP[t].play(o),
              this.aboRP[t].play(o),
              this.aboLinkLi[t].play(r);
          for (let t = 0; t < 2; t++)
            this.aboCRole[t].play(o),
              this.aboCName[t].play(o),
              this.aboCTwit[t].play(o),
              this.aboCLine[t].play(o),
              this.aboCContact[t].play(o),
              this.aboRefTi[t].play(o);
        } else {
          this.menuAboutA.play({
            reverse: !0,
            delay: 0,
            p: { y: { newEnd: 101 } },
            d: t,
            e: e,
          });
          for (let t = 0; t < 4; t++) {
            const i = {
              delay: 0,
              d: 500,
              e: e,
              reverse: !0,
              p: { y: { newEnd: 101 } },
            };
            this.noA[t].play(i), this.name[t].play(i);
          }
        }
      }
      gE(t) {
        let e;
        return (e = t < 600 ? R.Ease.io2 : t < 900 ? R.Ease.io3 : this.e), e;
      }
      bgX(t, e, i) {
        R.Is.def(this.a) && (this.a.pause(), this.b.pause());
        const s = this.x,
          h = 0 === t;
        this.a = new R.M({
          d: e,
          update: (e) => {
            (this.x = R.Lerp(s, t, i(e.prog))), R.T(this.bg, -this.x, 0);
          },
        });
        const a = h ? 0 : 1,
          n = h ? 1 : 0,
          o = h ? 0 : e - 500,
          r = h ? "o1" : "i1";
        (this.b = new R.M({
          el: this.bgShadow,
          p: { opacity: [a, n] },
          d: 500,
          e: r,
          delay: o,
        })),
          this.a.play(),
          this.b.play();
      }
    })();
    var N = new (class {
      constructor() {
        (this.c = _C),
          (this.trigger = []),
          (this.sensibility = []),
          (this.tl = []),
          (this.isVisible = []),
          (this.limit = []),
          (this.limitM = []),
          (this.sen0 = 0.9),
          (this.sen1 = 0.8),
          (this.sen2 = 0.7);
      }
      init() {
        this.a = 0;
        const t = R.G.class("fx"),
          e = t.length;
        for (let i = 0; i < e; i++) {
          const e = t[i],
            s = e.children,
            h = s.length;
          (this.trigger[this.a] = e),
            (this.sensibility[this.a] = this.sen0),
            (this.tl[this.a] = new R.TL());
          for (let t = 0; t < h; t++) {
            const e = 0 === t ? 0 : 70;
            this.tl[this.a].from({
              el: s[t],
              p: { y: [102, 0] },
              d: 1700,
              e: "o6",
              delay: e,
            });
          }
          this.a++;
        }
        this.s0(),
          this.s1(),
          this.s2(),
          this.s3(),
          (this.triggerL = this.trigger.length);
        for (let t = 0; t < this.triggerL; t++) this.isVisible[t] = !1;
      }
      resize() {
        const t = this.c.s.x,
          e = this.c.win.w;
        for (let i = 0; i < this.triggerL; i++) {
          this.limit[i] =
            this.trigger[i].getBoundingClientRect().left +
            t -
            e * this.sensibility[i];
          const s = this.trigger[i].id;
          this.limitM[i] =
            "s1-gar-line-w" === s || "s0-int-line" === s
              ? this.limit[i] + e
              : this.limit[i] + this.trigger[i].offsetWidth;
        }
      }
      run() {
        const t = this.c.s.x;
        for (let e = 0; e < this.triggerL; e++)
          t > this.limit[e] &&
            t < this.limitM[e] &&
            !this.isVisible[e] &&
            ((this.isVisible[e] = !0), this.tl[e].play());
      }
      s0() {
        const t = R.G.id("s0-int-line");
        (this.trigger[this.a] = t),
          (this.sensibility[this.a] = this.sen2),
          (this.tl[this.a] = new R.TL()),
          this.tl[this.a].from({
            el: t,
            p: { scaleY: [0, 1] },
            d: 2200,
            e: "o6",
            r: 6,
          }),
          this.a++;
        const e = "s0-noo",
          i = R.G.id(e),
          s = R.G.class(e + "-h2", i);
        for (let t = 0; t < 2; t++) {
          const e = s[t].children,
            i = e.length;
          (this.trigger[this.a] = s[0]),
            (this.sensibility[this.a] = this.sen1),
            (this.tl[this.a] = new R.TL());
          for (let s = 0; s < i; s++) {
            const i = 0 === s ? 100 * t : 100;
            this.tl[this.a].from({
              el: e[s],
              p: { y: [102, 0] },
              d: 1700,
              e: "o6",
              delay: i,
            });
          }
          this.a++;
        }
        const h = R.G.id(e + "-line");
        (this.trigger[this.a] = s[0]),
          (this.sensibility[this.a] = this.sen0),
          (this.tl[this.a] = new R.TL()),
          this.tl[this.a].from({
            el: h,
            p: { scaleX: [0, 1] },
            d: 2200,
            e: "o6",
            r: 6,
          }),
          this.a++;
        const a = "s0-key-0-",
          n = R.G.id(a + "txt-0"),
          o = R.G.id(a + "line-0"),
          r = R.G.id(a + "line-1");
        (this.trigger[this.a] = n),
          (this.sensibility[this.a] = this.sen1),
          (this.tl[this.a] = new R.TL()),
          this.tl[this.a].from({
            el: o,
            p: { scaleX: [0, 1] },
            d: 2500,
            e: "o6",
            r: 6,
          }),
          this.tl[this.a].from({
            el: r,
            p: { scaleX: [0, 1] },
            d: 2500,
            e: "o6",
            r: 6,
            delay: 300,
          }),
          this.a++;
        const l = "s0-key-1-",
          c = R.G.id(l + "txt-1"),
          d = R.G.id(l + "line");
        (this.trigger[this.a] = c),
          (this.sensibility[this.a] = this.sen1),
          (this.tl[this.a] = new R.TL()),
          this.tl[this.a].from({
            el: d,
            p: { scaleX: [0, 1] },
            d: 2500,
            e: "o6",
            r: 6,
          }),
          this.a++;
        const p = "s0-hun-title",
          u = R.G.id(p + "-w"),
          g = R.G.class(p),
          w = g.length,
          m = [4, 3, 0, 7, 1, 5, 6, 2];
        (this.trigger[this.a] = u),
          (this.sensibility[this.a] = this.sen1),
          (this.tl[this.a] = new R.TL());
        for (let t = 0; t < w; t++) {
          const e = 0 === t ? 0 : 100;
          this.tl[this.a].from({
            el: g[m[t]],
            p: { y: [102, 0] },
            d: 1700,
            e: "o6",
            delay: e,
          });
        }
        this.a++;
        const y = "s0-hun-line-",
          f = R.G.id(y + "0"),
          b = R.G.id(y + "1");
        (this.trigger[this.a] = u),
          (this.sensibility[this.a] = this.sen0),
          (this.tl[this.a] = new R.TL()),
          this.tl[this.a].from({
            el: f,
            p: { scaleX: [0, 1] },
            d: 2200,
            e: "o6",
            r: 6,
            delay: 100 * (w + 2),
          }),
          this.tl[this.a].from({
            el: b,
            p: { scaleX: [0, 1] },
            d: 2200,
            e: "o6",
            r: 6,
          }),
          this.a++;
      }
      s1() {
        const t = R.G.id("s1-int-p"),
          e = t.children,
          i = e.length;
        (this.trigger[this.a] = t),
          (this.sensibility[this.a] = this.sen0),
          (this.tl[this.a] = new R.TL());
        for (let t = 0; t < i; t++) {
          const i = 0 === t ? 0 : 40;
          this.tl[this.a].from({
            el: e[t],
            p: { opacity: [0, 1], y: [102, 0] },
            d: 1700,
            e: "o6",
            delay: i,
          });
        }
        this.a++;
        const s = "s1-sea-top",
          h = R.G.id(s + "-w"),
          a = R.G.class(s),
          n = a.length;
        (this.trigger[this.a] = h),
          (this.sensibility[this.a] = this.sen0),
          (this.tl[this.a] = new R.TL());
        for (let t = 0; t < n; t++) {
          const e = 0 === t ? 0 : 100;
          this.tl[this.a].from({
            el: a[t],
            p: { y: [102, 0] },
            d: 1700,
            e: "o6",
            delay: e,
          });
        }
        this.a++;
        const o = "s1-sea-",
          r = R.G.id(o + "line"),
          l = R.G.id(o + "bottom"),
          c = l.children,
          d = c.length;
        (this.trigger[this.a] = l),
          (this.sensibility[this.a] = this.sen1),
          (this.tl[this.a] = new R.TL());
        for (let t = 0; t < d; t++) {
          const e = 0 === t ? 0 : 100;
          this.tl[this.a].from({
            el: c[t],
            p: { y: [102, 0] },
            d: 1700,
            e: "o6",
            delay: e,
          });
        }
        this.tl[this.a].from({
          el: r,
          p: { scaleX: [0, 1] },
          d: 2200,
          e: "o6",
          r: 6,
          delay: 100,
        }),
          this.a++;
        const p = "s1-wat-",
          u = R.G.id(p + "line"),
          g = R.G.class(p + "0-title"),
          w = g.length;
        (this.trigger[this.a] = g[0]),
          (this.sensibility[this.a] = this.sen1),
          (this.tl[this.a] = new R.TL());
        for (let t = 0; t < w; t++) {
          const e = 0 === t ? 0 : 160;
          this.tl[this.a].from({
            el: g[t],
            p: { y: [102, 0] },
            d: 1700,
            e: "o6",
            delay: e,
          });
        }
        this.tl[this.a].from({
          el: u,
          p: { scaleX: [0, 1] },
          d: 2200,
          e: "o6",
          r: 6,
        }),
          this.a++;
        const m = "s1-pil",
          y = R.G.id(m),
          f = R.G.id(m + "-line");
        (this.trigger[this.a] = y),
          (this.sensibility[this.a] = this.sen2),
          (this.tl[this.a] = new R.TL()),
          this.tl[this.a].from({
            el: f,
            p: { scaleX: [0, 1] },
            d: 2200,
            e: "o6",
            r: 6,
          }),
          this.a++;
        const b = "s1-gar-",
          v = R.G.id(b + "p-s-1"),
          A = R.G.id(b + "line");
        (this.trigger[this.a] = v),
          (this.sensibility[this.a] = this.sen2),
          (this.tl[this.a] = new R.TL()),
          this.tl[this.a].from({
            el: A,
            p: { scaleY: [0, 1] },
            d: 2200,
            e: "o6",
            r: 6,
          }),
          this.a++;
      }
      s2() {
        const t = R.G.id("s2-cit-img"),
          e = "o2-cit-no-",
          i = R.G.class(e + "bg"),
          s = R.G.class(e + "txt");
        (this.trigger[this.a] = t),
          (this.sensibility[this.a] = this.sen2),
          (this.tl[this.a] = new R.TL());
        for (let t = 0; t < 3; t++) {
          const e = 0 === t ? 0 : 300;
          this.tl[this.a].from({
            el: i[t],
            p: { scale: [0, 1] },
            d: 1500,
            e: "o6",
            r: 6,
            delay: e,
          }),
            this.tl[this.a].from({
              el: s[t],
              p: { opacity: [0, 1] },
              d: 1500,
              e: "o6",
            });
        }
        this.a++;
        const h = R.G.id("s2-thi-img");
        (this.trigger[this.a] = h),
          (this.sensibility[this.a] = this.sen2),
          (this.tl[this.a] = new R.M({
            el: "#o2-thi-ring-path",
            line: { dashed: "2,8", start: 0, end: 100 },
            d: 3e3,
            e: "o5",
          })),
          this.a++;
        const a = R.G.id("o2-thi-ring");
        (this.trigger[this.a] = h),
          (this.sensibility[this.a] = this.sen2),
          (this.tl[this.a] = new R.TL()),
          this.tl[this.a].from({
            el: a,
            p: { rotate: [-45, 0] },
            d: 3e3,
            e: "o5",
          }),
          this.a++;
        const n = R.G.id("o2-fou-1-zoom");
        (this.trigger[this.a] = n),
          (this.sensibility[this.a] = this.sen2),
          (this.tl[this.a] = new R.M({
            el: "#o2-fou-1-zoom-circle-path",
            line: { dashed: "1,13", start: 0, end: 100 },
            d: 2200,
            e: "o6",
            delay: 200,
          })),
          this.a++;
        const o = R.G.id("o2-fou-1-zoom-line"),
          r = R.G.id("o2-fou-1-zoom-png");
        (this.trigger[this.a] = n),
          (this.sensibility[this.a] = this.sen1),
          (this.tl[this.a] = new R.TL()),
          this.tl[this.a].from({
            el: r,
            p: { scale: [0.5, 1], opacity: [0, 1] },
            d: 1700,
            e: "o6",
            r: 6,
          }),
          this.tl[this.a].from({
            el: o,
            p: { scaleX: [0, 1] },
            d: 1700,
            e: "o6",
            r: 6,
            delay: 100,
          }),
          this.a++;
      }
      s3() {
        const t = "s3-int-txt-l",
          e = R.G.id(t + "-w"),
          i = R.G.class(t),
          s = i.length;
        (this.trigger[this.a] = e),
          (this.sensibility[this.a] = this.sen1),
          (this.tl[this.a] = new R.TL());
        for (let t = 0; t < s; t++) {
          const e = 0 === t ? 0 : 160;
          this.tl[this.a].from({
            el: i[t],
            p: { y: [102, 0] },
            d: 1700,
            e: "o6",
            delay: e,
          });
        }
        this.a++,
          (this.trigger[this.a] = e),
          (this.sensibility[this.a] = this.sen1),
          (this.tl[this.a] = new R.M({
            el: "#s3-int-line",
            svg: {
              type: "polygon",
              end: "2480,1349.9 2480,1360.9 3360,1360.9 3360,1349.9",
            },
            d: 2200,
            e: "o6",
          }));
      }
    })();
    var _ = new (class {
      constructor() {
        R.BM(this, ["fn"]);
      }
      init(t) {
        (this.cir = R.G.id("o0-tra-cir")),
          (this.morph = new R.M({
            el: "#o0-tra-cir-wave-poly",
            svg: {
              type: "polygon",
              end: "0,24.8 0,26 0,26.8 0,27.7 0,28.6 0,29.6 0,30.8 2.1,30.8 4.2,30.8 8.1,30.8 12.3,30.8 14.6,30.8 16.9,30.8 19.3,30.8 21.8,30.8 25.4,30.8 28.8,30.8 32.6,30.8 36.5,30.8 38.6,30.8 41.6,30.8 45.7,30.8 49.4,30.8 51.6,30.8 53.5,30.8 55.3,30.8 56.9,30.8 58.8,30.8 61.3,30.8 63.7,30.8 66.7,30.8 68.5,30.8 71.2,30.8 73.2,30.8 76,30.8 79.2,30.8 82.6,30.8 84.7,30.8 87.1,30.8 90.2,30.8 93.4,30.8 95.8,30.8 98.5,30.8 101.8,30.8 103.4,30.8 106.2,30.8 109.8,30.8 111.8,30.8 114.2,30.8 116.7,30.8 118.5,30.8 116.7,32.6 114.9,34.4 113,36.3 111.3,38 109.4,39.9 107.6,41.7 106.1,43.2 104.5,44.8 102.9,46.4 101,48.3 99.6,49.6 98,51.3 102.2,55.5 104.2,53.6 106,51.8 107.4,50.4 108.6,49.2 110.1,47.7 111.7,46 113.5,44.3 115.6,42.2 117.3,40.5 118.9,38.9 120.3,37.5 121.7,36.1 123.1,34.7 124.5,33.3 126,31.8 127.2,30.5 128.6,29.2 130,27.8 128.3,26.1 126.9,24.7 125.2,22.9 123.8,21.6 122.5,20.3 121.2,19 119.9,17.7 118.5,16.3 116.9,14.7 115.4,13.1 113.7,11.5 112.3,10.1 110.9,8.7 109.4,7.2 108.1,5.9 106.7,4.4 105.3,3.1 103.9,1.7 102.2,0 98,4.2 99.4,5.7 100.6,6.9 102.1,8.4 103.7,10 105,11.2 106.2,12.5 107.9,14.1 108.9,15.1 110.3,16.5 111.9,18.2 113.8,20.1 115.6,21.9 117.1,23.4 118.5,24.8 116.7,24.8 114.5,24.8 112,24.8 109.3,24.8 106,24.8 103,24.8 99.6,24.8 96.8,24.8 94.4,24.8 91.9,24.8 89.4,24.8 87.5,24.8 85.2,24.8 83.2,24.8 79.6,24.8 75.9,24.8 72.3,24.8 70.6,24.8 68,24.8 65.9,24.8 63.7,24.8 62,24.8 59.9,24.8 57.5,24.8 55.9,24.8 54.1,24.8 52.4,24.8 50.6,24.8 48.3,24.8 44.1,24.8 41.3,24.8 37.9,24.8 33.1,24.8 30.1,24.8 26.6,24.8 23,24.8 19.7,24.8 17.1,24.8 14.7,24.8 13,24.8 11.3,24.8 8.7,24.8 6.4,24.8 4.2,24.8 1.8,24.8",
            },
            d: 800,
            e: "o5",
          }));
      }
      on() {
        this.l("a");
      }
      off() {
        this.l("r");
      }
      l(t) {
        R.L(this.cir, t, "mouseenter", this.fn),
          R.L(this.cir, t, "mouseleave", this.fn);
      }
      fn(t) {
        const e = "mouseenter" !== t.type && { reverse: !0 };
        this.morph.play(e);
      }
    })();
    class F {
      constructor() {
        (this.c = _C),
          R.BM(this, ["resize", "loop"]),
          (this.GL = new B()),
          (this.ro = new R.RO({ cb: this.resize, throttleDelay: 100 })),
          (this.raf = new R.RafR(this.loop)),
          (this.scroll = new y()),
          (this.c.navColor = new D());
      }
      GLTex(t) {
        this.GL.tex(t);
      }
      init() {
        this.GL.init(),
          this.c.navColor.init(),
          P.init({ s: this.scroll }),
          _.init(),
          this.scroll.init(),
          L.init(),
          N.init(),
          this.resize(),
          this.ro.on();
      }
      resize() {
        n.run(),
          P.resize(),
          this.scroll.resize(),
          L.resize(),
          this.GL.resize(),
          N.resize();
      }
      on() {
        this.raf.run(), P.on(), _.on(), this.scroll.on();
      }
      loop() {
        this.scroll.loop(),
          (this.c.s.needS || this.c.isSTo) &&
            (N.run(), this.GL.inside(), L.run());
      }
      off() {
        this.ro.off(), this.scroll.off(), _.off();
      }
      destroy() {
        this.raf.stop();
      }
    }
    var I = {
      psd: { w: 3840, h: 2160 },
      navBgColor: [
        "Transparent",
        "Red",
        "Red",
        "White",
        "Black",
        "Black",
        "Black",
        "White",
        "White",
        "Red",
        "Red",
        "White",
        "White",
        "White",
        "White",
        "Black",
        "White",
        "White",
        "White",
        "White",
        "White",
        "Red",
        "Red",
        "Red",
        "Red",
        "White",
        "White",
        "White",
        "Red",
        "Red",
        "Red",
        "Red",
        "Red",
        "Red",
        "Beige",
        "Red",
        "Beige",
      ],
    };
    var O = new (class {
      run(t, e) {
        const i = "m" === t ? location.pathname : "/",
          s = i + "?url=" + i + "&index=true&device=" + t,
          h = new XMLHttpRequest();
        h.open("GET", s, !0),
          (h.onreadystatechange = (t) => {
            if (4 === h.readyState && 200 === h.status) {
              const t = JSON.parse(h.responseText);
              R.G.id("app").insertAdjacentHTML("afterbegin", t.view),
                (R.G.tag("title")[0].inner = t.title),
                history.pushState({ page: i }, "", i),
                e();
            }
          }),
          h.send(null);
      }
    })();
    new (class {
      constructor() {
        new e((t) => {
          const e = _C;
          e.is404 ||
            ((e.pi180 = Math.PI / 180),
            (e.isLocal = !1),
            (e.data = I),
            O.run("d", (t) => {
              (e.engine = new F()), new a();
            }));
        });
      }
    })();
  })();

