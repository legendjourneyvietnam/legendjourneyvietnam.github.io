(function () {
  'use strict';
  var DATA = window.LJ_DATA || [];
  var BOOKING_EMAIL = 'longnhatharry07@gmail.com';
  var HOTLINE = '0877 312 148';
  var STEPS = ['Địa điểm', 'Thời gian', 'Chọn tour', 'Chi tiết'];

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };
  var img = function (k) { return 'assets/' + k + '.jpg'; };
  var vnd = function (n) { return Math.round(n).toLocaleString('vi-VN') + 'đ'; };
  var short = function (n) { return (n / 1000).toLocaleString('vi-VN') + 'K'; };
  var isFlat = function (p) { return p === 999000 || p === 1599000; };
  var icon = function (id, cls) { return '<svg class="i' + (cls ? ' ' + cls : '') + '"><use href="#i-' + id + '"/></svg>'; };
  var tourCount = function (d) { return d.durations.reduce(function (a, x) { return a + x.tours.length; }, 0); };
  var findDest = function (id) { return DATA.filter(function (d) { return d.id === id; })[0] || null; };

  /* ---------- Trang chủ ---------- */
  function renderHome() {
    $('#dest-grid').innerHTML = DATA.map(function (d) {
      return '<a class="dest" href="#/' + d.id + '">' +
        '<img src="' + img(d.cover) + '" alt="' + esc(d.name) + '" loading="lazy">' +
        '<div><div class="tag">' + icon(d.icon === 'ship' ? 'ship' : 'mountain') + esc(d.tagline) + '</div>' +
        '<h3>' + esc(d.name) + '</h3><p>' + esc(d.intro) + '</p>' +
        '<span class="pill">' + tourCount(d) + ' tour · Khám phá ' + icon('right') + '</span></div></a>';
    }).join('');

    var cards = [];
    var nb = findDest('ninh-binh'), hl = findDest('ha-long');
    var nb1 = nb && nb.durations.filter(function (x) { return x.id === '1d'; })[0];
    if (nb1 && nb1.tours.length) {
      var min = Math.min.apply(null, nb1.tours.map(function (t) { return t.price; }));
      cards.push(featCard({
        image: nb1.image, badge: 'TRỌN GÓI', title: 'Ninh Bình trong ngày',
        sub: 'Tràng An, Tam Cốc, Hang Múa, Hoa Lư, Bái Đính… chọn hành trình bạn thích.',
        facts: [['Thời lượng', 'Đi về trong ngày'], ['Lựa chọn', nb1.tours.length + ' hành trình'], ['Đón khách', 'Phố Cổ Hà Nội'], ['Bữa ăn', 'Buffet trưa']],
        priceLabel: 'Chỉ từ', price: min,
        href: '#/ninh-binh/1d', cta: 'Xem ' + nb1.tours.length + ' hành trình'
      }));
    }
    var hl1 = hl && hl.durations.filter(function (x) { return x.id === '1d'; })[0];
    var son = hl1 && hl1.tours[0];
    if (son) {
      var st = son.days[0].stops;
      cards.push(featCard({
        image: son.image, badge: 'DU THUYỀN 5★', title: 'Vịnh Hạ Long trong ngày',
        sub: son.short,
        facts: [['Đón khách', st[0].time], ['Trở về', st[st.length - 1].time], ['Du thuyền', 'Halong Sonata 5★'], ['Bữa ăn', 'Buffet trưa quốc tế']],
        priceLabel: 'Trọn gói', price: son.price,
        href: '#/ha-long/1d/' + son.code, cta: 'Xem chi tiết & đặt'
      }));
    }
    $('#featured').innerHTML = cards.join('');
  }

  function featCard(c) {
    return '<article class="card">' +
      '<div class="card-img" style="background-image:url(' + img(c.image) + ')" role="img" aria-label="' + esc(c.title) + '"><span class="badge">' + esc(c.badge) + '</span></div>' +
      '<div class="card-body"><div><h3>' + esc(c.title) + '</h3><div class="sub">' + esc(c.sub) + '</div></div>' +
      '<div class="facts">' + c.facts.map(function (f) { return '<div class="fact"><small>' + esc(f[0]) + '</small><b>' + esc(f[1]) + '</b></div>'; }).join('') + '</div>' +
      '<div class="price"><small>' + esc(c.priceLabel) + '</small><strong>' + short(c.price) + '</strong><span>/người</span></div>' +
      '<div class="cta"><a class="btn btn-blue" href="' + c.href + '">' + esc(c.cta) + icon('right') + '</a>' +
      '<a class="btn btn-line" href="tel:0877312148">' + icon('phone') + 'Gọi ' + HOTLINE + '</a></div></div></article>';
  }

  /* ---------- Luồng đặt tour ---------- */
  function stepper(step, d, du) {
    var links = ['#chon-tour', '#/' + (d && d.id), '#/' + (d && d.id) + '/' + (du && du.id), ''];
    return STEPS.map(function (label, i) {
      var cls = i < step ? 'done' : i === step ? 'cur' : '';
      var inner = '<span class="num">' + (i < step ? icon('check') : i + 1) + '</span><span class="lbl">' + label + '</span>';
      var btn = i < step ? '<button type="button" data-go="' + links[i] + '">' + inner + '</button>' : '<button type="button" disabled' + (i === step ? ' aria-current="step"' : '') + '>' + inner + '</button>';
      return '<li class="' + cls + '">' + btn + (i < STEPS.length - 1 ? '<span class="line"></span>' : '') + '</li>';
    }).join('');
  }

  function head(kicker, title, sub) {
    return '<div class="view-head"><div class="eyebrow">' + esc(kicker) + '</div><h1>' + esc(title) + '</h1>' + (sub ? '<p>' + esc(sub) + '</p>' : '') + '</div>';
  }

  function viewDurations(d) {
    return head('Bước 2 · ' + d.name, 'Bạn đi trong bao lâu?', 'Chọn thời lượng chuyến đi phù hợp với lịch trình của bạn.') +
      '<div class="dur-grid">' + d.durations.map(function (du) {
        var min = du.tours.length ? Math.min.apply(null, du.tours.map(function (t) { return t.price; })) : 0;
        return '<a class="tile" href="#/' + d.id + '/' + du.id + '"><div class="ph"><img src="' + img(du.image) + '" alt="' + esc(du.label) + '" loading="lazy"></div>' +
          '<div class="bd"><h3>' + esc(du.label) + '</h3><div class="muted">' + esc(du.sub) + '</div>' +
          '<div class="row"><span>' + (du.tours.length ? du.tours.length + ' lựa chọn · từ <em>' + vnd(min) + '</em>' : 'Liên hệ để đặt') + '</span><span class="go">' + icon('right') + '</span></div></div></a>';
      }).join('') + '</div>';
  }

  function viewTours(d, du) {
    var k = 'Bước 3 · ' + d.name + ' · ' + du.label;
    if (!du.tours.length) {
      return head(k, 'Tour đang được cập nhật') +
        '<div class="empty"><img src="' + img(du.image) + '" alt=""><div><p>Chương trình <b>' + esc(d.name + ' ' + du.label) + '</b> đang được cập nhật. Vui lòng liên hệ để được tư vấn lịch trình và giá tốt nhất.</p>' +
        '<a class="btn btn-blue" href="tel:' + d.hotline.replace(/[^\d+]/g, '') + '">' + icon('phone') + 'Gọi ' + esc(d.hotline) + '</a></div></div>';
    }
    return head(k, 'Chọn hành trình phù hợp', du.tours.length + ' lựa chọn cho chuyến ' + du.label.toLowerCase() + ' tại ' + d.name + '.') +
      '<div class="tour-grid">' + du.tours.map(function (t) {
        return '<a class="tile" href="#/' + d.id + '/' + du.id + '/' + t.code + '"><div class="ph"><img src="' + img(t.image) + '" alt="' + esc(t.name) + '" loading="lazy">' +
          '<span class="chip code">' + esc(t.code) + '</span>' + (t.featured ? '<span class="chip hot">Gợi ý</span>' : '') + '<h3>' + esc(t.name) + '</h3></div>' +
          '<div class="bd"><div class="muted">' + esc(t.short) + '</div><div class="hl">' + t.highlights.map(function (h) { return '<span>' + esc(h) + '</span>'; }).join('') + '</div>' +
          '<div class="row"><div><small>' + (isFlat(t.price) ? 'Đồng giá / khách' : 'Giá / khách') + '</small><b>' + vnd(t.price) + '</b><small>' + esc(t.priceUsd || 'trọn gói') + '</small></div>' +
          '<span class="more">Chi tiết ' + icon('right') + '</span></div></div></a>';
      }).join('') + '</div>';
  }

  function list(items, good) {
    return '<ul class="list ' + (good ? 'good' : 'bad') + '">' + items.map(function (x) { return '<li>' + icon(good ? 'check' : 'x') + '<span>' + esc(x) + '</span></li>'; }).join('') + '</ul>';
  }

  function viewDetail(d, du, t) {
    var g = t.gallery || [];
    var h = '<div class="d-hero"><img src="' + img(t.image) + '" alt="' + esc(t.name) + '"><div class="k">Bước 4 · ' + esc(d.name) + ' · ' + esc(du.label) + ' · ' + esc(t.code) + '</div>' +
      '<h1 id="tour-name">' + esc(t.name) + '</h1><p>' + esc(t.short) + '</p></div>';
    h += '<div class="gallery' + (g.length > 4 ? ' g6' : '') + '">' + g.map(function (k) { return '<button type="button" data-zoom="' + img(k) + '" aria-label="Xem ảnh lớn"><img src="' + img(k) + '" alt="" loading="lazy"></button>'; }).join('') + '</div>';
    h += '<div class="d-grid"><div>';
    t.days.forEach(function (day) {
      h += '<section class="box"><h2>' + esc(day.title) + '</h2>' + (day.meals ? '<div class="meals">Bữa ăn: ' + esc(day.meals) + '</div>' : '') +
        '<ol class="tl">' + day.stops.map(function (s) { return '<li><b>' + esc(s.time) + '</b><p>' + esc(s.text) + '</p></li>'; }).join('') + '</ol></section>';
    });
    if (t.vehicles.length > 1) {
      h += '<section class="box"><h3>' + icon('bus') + 'Phương tiện đưa đón</h3><div class="veh">' + t.vehicles.map(function (v, i) {
        return '<figure><img src="' + img(i === 0 ? 'shuttle' : 'limo') + '" alt="' + esc(v.label) + '" loading="lazy"><figcaption><b>' + esc(v.label) + '</b><span>' + (v.extra ? '+' + vnd(v.extra) + '/khách' : 'Tiêu chuẩn') + '</span></figcaption></figure>';
      }).join('') + '</div></section>';
    }
    h += '<div class="two"><section class="box"><h3>Bao gồm</h3>' + list(t.inclusion, true) + '</section><section class="box"><h3>Không bao gồm</h3>' + list(t.exclusion, false) + '</section></div>';
    h += '<section class="box"><h3>' + icon('baby') + 'Chính sách trẻ em</h3><ul class="dots">' + t.children.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul>' +
      (t.note ? '<div class="note">' + esc(t.note) + '</div>' : '') + '</section>';
    h += '</div><aside id="book-wrap"></aside></div>';
    return h;
  }

  /* ---------- Form đặt tour (giữ nguyên logic bản cũ) ---------- */
  function mountBooking(d, du, t) {
    var wrap = $('#book-wrap');
    var now = new Date();
    var today = new Date(now.getTime() - now.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
    var st = { date: today, adults: t.minPax || 2, kids: 0, babies: 0, veh: 0, single: false, name: '', phone: '', email: '', done: false, sending: false };
    var base = function () { return t.price + t.vehicles[st.veh].extra; };
    var total = function () { return Math.round(base() * st.adults + base() * 0.75 * st.kids + (st.single && t.singleSupplement ? t.singleSupplement : 0)); };

    function ctr(key, label, sub, min) {
      return '<div class="ctr"><div><div class="t">' + label + '</div><div class="s">' + sub + '</div></div><div class="c">' +
        '<button type="button" data-dec="' + key + '" data-min="' + min + '" aria-label="Bớt ' + label + '">−</button><output id="o-' + key + '">' + st[key] + '</output>' +
        '<button type="button" data-inc="' + key + '" aria-label="Thêm ' + label + '">+</button></div></div>';
    }

    function render() {
      if (st.done) {
        wrap.innerHTML = '<div class="book ok"><div class="tick">' + icon('check') + '</div><h3>Đặt tour thành công!</h3>' +
          '<p>Cảm ơn <b>' + esc(st.name) + '</b>. Chúng tôi sẽ liên hệ qua số <b>' + esc(st.phone) + '</b> trong thời gian sớm nhất để xác nhận tour <b>' + esc(t.code) + '</b> ngày <b>' + st.date.split('-').reverse().join('/') + '</b>.</p>' +
          '<div class="total"><span>Tạm tính</span><b>' + vnd(total()) + '</b></div><p><button type="button" class="linkbtn" id="edit">Sửa thông tin</button></p></div>';
        $('#edit').onclick = function () { st.done = false; render(); };
        return;
      }
      var veh = t.vehicles.length > 1 ? '<div><div class="grp-t">' + icon('bus') + 'Phương tiện</div><div class="vopts">' + t.vehicles.map(function (v, i) {
        return '<button type="button" class="vopt' + (i === st.veh ? ' on' : '') + '" data-veh="' + i + '" aria-pressed="' + (i === st.veh) + '"><span>' + esc(v.label) + '</span><span>' + (v.extra ? '+' + vnd(v.extra) : 'Tiêu chuẩn') + '</span></button>';
      }).join('') + '</div></div>' : '';
      wrap.innerHTML = '<div class="book" id="book-form"><div class="lbl-s">Giá người lớn</div><div class="big">' + vnd(t.price) + '</div>' +
        '<div class="tiny">' + (isFlat(t.price) ? 'Đồng giá trọn gói' : (t.priceUsd ? esc(t.priceUsd) + ' · ' : '') + 'Trọn gói') + (t.minPax ? ' · tối thiểu ' + t.minPax + ' khách' : '') + '</div>' +
        '<form novalidate>' +
        '<label class="f">Ngày khởi hành<input type="date" name="date" min="' + today + '" value="' + st.date + '" required></label>' + veh +
        '<div class="pax"><div class="grp-t">' + icon('users') + 'Số khách</div>' +
        ctr('adults', 'Người lớn', 'Từ 9 tuổi', t.minPax || 1) + ctr('kids', 'Trẻ em', '5 – 8 tuổi (75%)', 0) + ctr('babies', 'Em bé', 'Dưới 5 tuổi (miễn phí)', 0) + '</div>' +
        (t.singleSupplement ? '<label class="chk"><input type="checkbox" name="single"' + (st.single ? ' checked' : '') + '>Phòng đơn (+' + vnd(t.singleSupplement) + ')</label>' : '') +
        '<label class="f">Họ và tên<input type="text" name="name" autocomplete="name" value="' + esc(st.name) + '" required></label>' +
        '<label class="f">Số điện thoại / Zalo<input type="tel" name="phone" autocomplete="tel" inputmode="tel" value="' + esc(st.phone) + '" required></label>' +
        '<label class="f">Email (không bắt buộc)<input type="email" name="email" autocomplete="email" value="' + esc(st.email) + '"></label>' +
        '<div class="total"><span>Tạm tính</span><b id="tot">' + vnd(total()) + '</b></div>' +
        '<button class="btn btn-blue submit" type="submit">Đặt tour ngay</button>' +
        '<p class="fine">Không cần thanh toán trước · Chúng tôi sẽ gọi lại để xác nhận</p></form></div>';
      bind();
    }

    function refresh() {
      ['adults', 'kids', 'babies'].forEach(function (k) { var o = $('#o-' + k); if (o) o.textContent = st[k]; });
      var tt = $('#tot'); if (tt) tt.textContent = vnd(total());
      updateBar(t, total());
    }

    function bind() {
      var f = wrap.querySelector('form');
      wrap.querySelectorAll('[data-inc]').forEach(function (b) { b.onclick = function () { st[b.dataset.inc]++; refresh(); }; });
      wrap.querySelectorAll('[data-dec]').forEach(function (b) { b.onclick = function () { var k = b.dataset.dec; st[k] = Math.max(+b.dataset.min, st[k] - 1); refresh(); }; });
      wrap.querySelectorAll('[data-veh]').forEach(function (b) { b.onclick = function () { st.veh = +b.dataset.veh; render(); }; });
      f.oninput = function () {
        st.date = f.date.value; st.name = f.name.value; st.phone = f.phone.value; st.email = f.email.value;
        if (f.single) st.single = f.single.checked;
        refresh();
      };
      f.onsubmit = function (e) {
        e.preventDefault();
        if (st.sending) return;
        if (!f.reportValidity()) return;
        st.name = f.name.value.trim(); st.phone = f.phone.value.trim(); st.email = f.email.value.trim();
        var btn = f.querySelector('.submit'); var bt = btn.textContent;
        st.sending = true; btn.disabled = true; btn.textContent = 'Đang gửi…';
        var dd = st.date.split('-').reverse().join('/');
        var payload = {
          _subject: 'Đơn đặt tour mới: ' + t.code + ' – ' + st.name + ' – ' + dd, _template: 'table',
          'Mã tour': t.code, 'Tên tour': t.name, 'Điểm đến / thời gian': d.name + ' · ' + du.label, 'Ngày khởi hành': dd,
          'Phương tiện': t.vehicles.length > 1 ? t.vehicles[st.veh].label : 'Xe đưa đón khứ hồi',
          'Người lớn': String(st.adults), 'Trẻ em (5–8 tuổi)': String(st.kids), 'Em bé (dưới 5 tuổi)': String(st.babies),
          'Phòng đơn': t.singleSupplement ? (st.single ? 'Có' : 'Không') : '—', 'Tạm tính': vnd(total()),
          'Họ và tên': st.name, 'Số điện thoại / Zalo': st.phone, 'Email khách': st.email || '—', 'Thời gian đặt': new Date().toLocaleString('vi-VN')
        };
        if (st.email) payload._replyto = st.email;
        fetch('https://formsubmit.co/ajax/' + BOOKING_EMAIL, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(payload) })
          .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { if (!r.ok || String(j.success) === 'false') throw 0; }); })
          .then(function () { st.sending = false; st.done = true; render(); wrap.scrollIntoView({ behavior: 'smooth', block: 'center' }); })
          .catch(function () { st.sending = false; btn.disabled = false; btn.textContent = bt; toast('Chưa gửi được đơn. Vui lòng thử lại hoặc gọi hotline ' + HOTLINE + '.'); });
      };
    }
    render();
    updateBar(t, total());
  }

  function toast(m) {
    var el = document.createElement('div'); el.className = 'toast'; el.setAttribute('role', 'alert'); el.textContent = m;
    document.body.appendChild(el); setTimeout(function () { el.remove(); }, 6000);
  }

  /* ---------- Thanh dưới cùng (điện thoại) ---------- */
  var BAR_DEFAULT = $('#bar').innerHTML;
  function updateBar(t, tot) {
    $('#bar').innerHTML = '<div class="bar-price"><small>Tạm tính</small><b>' + vnd(tot) + '</b></div><a class="btn btn-blue" href="#book-form" data-scroll>Đặt ngay</a>';
  }

  /* ---------- Router ---------- */
  function route() {
    var hash = location.hash || '';
    var home = $('#home'), app = $('#app');
    if (hash.indexOf('#/') !== 0) {
      app.hidden = true; home.hidden = false; $('#bar').innerHTML = BAR_DEFAULT;
      document.title = 'Legend Journey – Tour Ninh Bình & Hạ Long từ Hà Nội';
      if (hash.length > 1) { var el = document.getElementById(hash.slice(1)); if (el) setTimeout(function () { el.scrollIntoView(); }, 0); }
      return;
    }
    var p = hash.slice(2).split('/').map(decodeURIComponent);
    var d = findDest(p[0]);
    var du = d && p[1] ? d.durations.filter(function (x) { return x.id === p[1]; })[0] : null;
    var t = du && p[2] ? du.tours.filter(function (x) { return x.code === p[2]; })[0] : null;
    if (!d) { location.replace('#chon-tour'); return; }
    var step = t ? 3 : du ? 2 : 1;
    home.hidden = true; app.hidden = false; $('#bar').innerHTML = BAR_DEFAULT;
    $('#stepper').innerHTML = stepper(step, d, du);
    $('#back').dataset.go = step === 1 ? '#chon-tour' : step === 2 ? '#/' + d.id : '#/' + d.id + '/' + du.id;
    var v = $('#view');
    if (step === 1) { v.innerHTML = viewDurations(d); document.title = d.name + ' – Legend Journey'; }
    else if (step === 2) { v.innerHTML = viewTours(d, du); document.title = d.name + ' ' + du.label + ' – Legend Journey'; }
    else { v.innerHTML = viewDetail(d, du, t); mountBooking(d, du, t); document.title = t.name + ' – Legend Journey'; }
    window.scrollTo(0, 0);
  }

  document.addEventListener('click', function (e) {
    var go = e.target.closest('[data-go]');
    if (go && go.dataset.go) { e.preventDefault(); location.hash = go.dataset.go; return; }
    var hm = e.target.closest('[data-home]');
    if (hm) { e.preventDefault(); history.pushState(null, '', location.pathname + location.search); route(); window.scrollTo(0, 0); return; }
    var z = e.target.closest('[data-zoom]');
    if (z) { var lb = $('#lightbox'); lb.querySelector('img').src = z.dataset.zoom; lb.hidden = false; return; }
    if (e.target.closest('#lightbox')) { $('#lightbox').hidden = true; return; }
    var sc = e.target.closest('[data-scroll]');
    if (sc) { e.preventDefault(); var b = $('#book-form'); if (b) b.scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    var a = e.target.closest('a[href^="#"]');
    if (a && a.getAttribute('href').indexOf('#/') !== 0 && !$('#app').hidden) {
      // từ luồng đặt tour bấm menu trang chủ
      e.preventDefault(); location.hash = a.getAttribute('href');
    }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') $('#lightbox').hidden = true; });
  window.addEventListener('hashchange', route);

  renderHome();
  route();
})();
