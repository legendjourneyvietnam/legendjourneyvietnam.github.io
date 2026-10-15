(function () {
  'use strict';
  /* Bản dịch nội dung cố định trên trang: tiếng Việt -> tiếng Anh */
  var STATIC = {
    'Tour': 'Tours',
    'Về chúng tôi': 'About us',
    'Liên hệ': 'Contact',
    'Đặt tour': 'Book now',
    'Tour trong ngày & 2N1Đ từ Hà Nội': 'Day trips & 2D1N tours from Hanoi',
    'Mỗi hành trình, một huyền thoại.': 'Every journey, a legend.',
    'Khám phá Ninh Bình & Vịnh Hạ Long cùng Legend Journey. Điểm đón Nhà Hát Lớn Hà Nội, lịch trình chuyên nghiệp, giá trọn gói.': 'Discover Ninh Binh & Ha Long Bay with Legend Journey. Pick-up at Hanoi Opera House, professional itineraries, all-inclusive prices.',
    'Chọn tour ngay': 'Choose a tour',
    'Bước 1': 'Step 1',
    'Bạn muốn đi đâu?': 'Where would you like to go?',
    'Chọn điểm đến để xem các tour khởi hành hằng ngày từ Hà Nội, điểm đón tại Nhà Hát Lớn Hà Nội.': 'Pick a destination to see daily tours from Hanoi, with pick-up at Hanoi Opera House.',
    'Tour 1 ngày nổi bật': 'Featured day trips',
    'Đi sáng, về tối': 'Leave in the morning, back by night',
    'Không cần xin nghỉ dài. Hai lựa chọn trọn gói cho một ngày cuối tuần trọn vẹn.': 'No long leave needed. Two all-inclusive options for a perfect weekend day.',
    'Du lịch chất lượng, dành cho người Việt': 'Quality travel, made for Vietnamese travellers',
    'Legend Journey ra đời với một sứ mệnh rõ ràng: mang đến những chuyến du lịch chất lượng, được thiết kế dành riêng cho người Việt.': 'Legend Journey was founded with a clear mission: to deliver quality trips designed especially for Vietnamese travellers.',
    'Nhu cầu khám phá của người Việt ngày một lớn, nhưng phần lớn các chuyến đi vẫn mang tính tự phát: tự tìm xe, tự lên lịch trình, tự lo ăn nghỉ. Mất nhiều công chuẩn bị, nhưng trải nghiệm nhận lại chưa trọn vẹn.': 'More and more Vietnamese people love to explore, yet most trips are still self-organised: finding transport, planning the route, arranging meals. A lot of effort, for an experience that often falls short.',
    'Legend Journey thay bạn lo trọn những việc đó. Mỗi hành trình trong ngày hay ngắn ngày đều được xây dựng bài bản: lịch trình tối ưu thời gian, điểm đón thuận tiện tại Nhà Hát Lớn Hà Nội, hướng dẫn viên đồng hành và mức giá trọn gói minh bạch. Bạn chỉ cần chọn ngày đi, phần còn lại để chúng tôi lo.': 'Legend Journey takes care of all that for you. Every day trip and short tour is carefully built: time-efficient itineraries, a convenient pick-up at Hanoi Opera House, a guide by your side and transparent all-inclusive prices. Just pick your date and leave the rest to us.',
    'Với mức giá hợp lý và chất lượng dịch vụ luôn đặt lên hàng đầu, Legend Journey hướng tới trở thành người bạn đồng hành tin cậy trên hàng triệu chuyến đi của người Việt.': 'With fair prices and service quality always first, Legend Journey aims to be a trusted companion on millions of journeys.',
    'Sứ mệnh': 'Mission',
    'Mang đến những chuyến du lịch chất lượng, an tâm và trọn vẹn cho mọi người Việt.': 'To deliver quality, worry-free and fulfilling trips for every traveller.',
    'Tầm nhìn': 'Vision',
    'Trở thành thương hiệu du lịch ngắn ngày được hàng triệu người Việt tin chọn.': 'To become the short-trip travel brand trusted by millions.',
    'Lịch trình chuyên nghiệp': 'Professional itineraries',
    'Từng điểm dừng, khung giờ và cung đường đều được tính toán kỹ, để mỗi phút trong chuyến đi đều đáng giá.': 'Every stop, time slot and route is carefully planned, so every minute of your trip is worth it.',
    'Tối ưu thời gian': 'Time-efficient',
    'Tour trong ngày và 2 ngày 1 đêm, khởi hành từ Hà Nội. Không cần xin nghỉ dài vẫn đi được xa.': 'Day trips and 2-day-1-night tours from Hanoi. Travel far without taking long leave.',
    'Giá minh bạch, uy tín': 'Transparent, trusted prices',
    'Giá trọn gói công bố rõ ràng ngay từ đầu, dịch vụ đúng như cam kết.': 'All-inclusive prices shown upfront, and service exactly as promised.',
    '4 bước để lên đường': '4 steps to hit the road',
    'BƯỚC 01': 'STEP 01', 'BƯỚC 02': 'STEP 02', 'BƯỚC 03': 'STEP 03', 'BƯỚC 04': 'STEP 04',
    'Chọn điểm đến': 'Choose a destination',
    'Ninh Bình hoặc Vịnh Hạ Long.': 'Ninh Binh or Ha Long Bay.',
    'Chọn thời gian': 'Choose the duration',
    'Đi trong ngày hoặc 2 ngày 1 đêm.': 'A day trip or 2 days 1 night.',
    'Chọn hành trình': 'Choose an itinerary',
    'So sánh lịch trình, điểm tham quan và giá.': 'Compare itineraries, sights and prices.',
    'Điền ngày đi, số khách. Không cần thanh toán trước, chúng tôi gọi lại xác nhận.': 'Enter your date and number of guests. No prepayment needed — we will call you to confirm.',
    'Bắt đầu chọn tour': 'Start choosing a tour',
    'Sẵn sàng cho hành trình tiếp theo?': 'Ready for your next journey?',
    'Văn phòng': 'Office',
    'Legend Journey – Du Lịch Cho Người Việt': 'Legend Journey – Travel for Vietnamese',
    'Quay lại': 'Back',
    'Một số ảnh phong cảnh:': 'Some landscape photos:',
    '© 2026 Legend Journey · Một số ảnh phong cảnh:': '© 2026 Legend Journey · Some landscape photos:',
    'Gọi đặt tour': 'Call to book',
    'Chọn tour': 'Choose a tour',
    'Gọi 0878 533 399': 'Call 0878 533 399',
    'Nhắn Zalo': 'Chat on Zalo',
    'Nhắn WhatsApp': 'Chat on WhatsApp'
  };
  var ATTR = {
    'Legend Journey – trang chủ': 'Legend Journey – home',
    'Điều hướng chính': 'Main navigation',
    'Giới thiệu': 'Introduction',
    'Thuyền nan bên Thủy Đình giữa núi đá Tràng An, Ninh Bình': 'Rowing boat by a water pavilion in Trang An, Ninh Binh',
    'Du thuyền giữa vịnh Hạ Long': 'Cruise boats on Ha Long Bay',
    'Bản đồ: 192 Kim Mã, Ngọc Hà, Hà Nội': 'Map: 192 Kim Ma, Ngoc Ha, Hanoi',
    'Các bước đặt tour': 'Booking steps',
    'Liên hệ nhanh': 'Quick contact',
    'Gọi điện 0878 533 399': 'Call 0878 533 399',
    'Nhắn Zalo 0878 533 399': 'Chat on Zalo 0878 533 399',
    'Nhắn WhatsApp 0878 533 399': 'Chat on WhatsApp 0878 533 399',
    'Đóng': 'Close'
  };

  /* Chữ dùng trong phần chọn tour và form đặt tour */
  var UI = {
    vi: {
      steps: ['Địa điểm', 'Thời gian', 'Chọn tour', 'Chi tiết'],
      explore: 'Khám phá', toursN: '{n} tour', perPerson: '/người', call: 'Gọi',
      featNbTitle: 'Ninh Bình trong ngày', featNbSub: 'Tràng An, Tam Cốc, Hang Múa, Hoa Lư, Bái Đính… chọn hành trình bạn thích.',
      featHlTitle: 'Vịnh Hạ Long trong ngày', badgeAll: 'TRỌN GÓI', badgeCruise: 'DU THUYỀN 5★',
      fDuration: 'Thời lượng', fDayTrip: 'Đi về trong ngày', fOptions: 'Lựa chọn', fItins: '{n} hành trình', fPickup: 'Đón khách', fPickupVal: 'Nhà Hát Lớn Hà Nội',
      fMeal: 'Bữa ăn', fLunch: 'Buffet trưa', fReturn: 'Trở về', fCruise: 'Du thuyền', fIntlLunch: 'Buffet trưa quốc tế',
      fromPrice: 'Chỉ từ', allIn: 'Trọn gói', seeItins: 'Xem {n} hành trình', seeDetail: 'Xem chi tiết & đặt',
      step: 'Bước', howLong: 'Bạn đi trong bao lâu?', howLongSub: 'Chọn thời lượng chuyến đi phù hợp với lịch trình của bạn.',
      optFrom: '{n} lựa chọn · từ', contactToBook: 'Liên hệ để đặt', updating: 'Tour đang được cập nhật',
      updatingTxt: 'Chương trình <b>{x}</b> đang được cập nhật. Vui lòng liên hệ để được tư vấn lịch trình và giá tốt nhất.',
      pickItin: 'Chọn hành trình phù hợp', pickItinSub: '{n} lựa chọn cho chuyến {d} tại {p}.', suggest: 'Gợi ý',
      flatPer: 'Đồng giá / khách', pricePer: 'Giá / khách', allInLower: 'trọn gói', detail: 'Chi tiết', zoom: 'Xem ảnh lớn',
      meals: 'Bữa ăn', transport: 'Phương tiện đưa đón', perGuest: '/khách', standard: 'Tiêu chuẩn',
      incl: 'Bao gồm', excl: 'Không bao gồm', kids: 'Chính sách trẻ em',
      adultPrice: 'Giá người lớn', flatAllIn: 'Đồng giá trọn gói', minPax: 'tối thiểu {n} khách',
      date: 'Ngày khởi hành', vehicle: 'Phương tiện', guests: 'Số khách', adults: 'Người lớn', adultsSub: 'Từ 9 tuổi',
      children: 'Trẻ em', childrenSub: '5 – 8 tuổi (75%)', babies: 'Em bé', babiesSub: 'Dưới 5 tuổi (miễn phí)',
      less: 'Bớt', more: 'Thêm', single: 'Phòng đơn', name: 'Họ và tên', phone: 'Số điện thoại / Zalo', email: 'Email (không bắt buộc)',
      total: 'Tạm tính', bookNow: 'Đặt tour ngay', fine: 'Không cần thanh toán trước · Chúng tôi sẽ gọi lại để xác nhận',
      sending: 'Đang gửi…', ok: 'Đặt tour thành công!',
      okTxt: 'Cảm ơn <b>{name}</b>. Chúng tôi sẽ liên hệ qua số <b>{phone}</b> trong thời gian sớm nhất để xác nhận tour <b>{code}</b> ngày <b>{date}</b>.',
      edit: 'Sửa thông tin', fail: 'Chưa gửi được đơn. Vui lòng thử lại hoặc gọi hotline {h}.', bookShort: 'Đặt ngay',
      title: 'Legend Journey – Tour Ninh Bình & Hạ Long từ Hà Nội'
    },
    en: {
      steps: ['Destination', 'Duration', 'Tour', 'Details'],
      explore: 'Explore', toursN: '{n} tours', perPerson: '/person', call: 'Call',
      featNbTitle: 'Ninh Binh day trip', featNbSub: 'Trang An, Tam Coc, Mua Cave, Hoa Lu, Bai Dinh… choose the route you like.',
      featHlTitle: 'Ha Long Bay day cruise', badgeAll: 'ALL-INCLUSIVE', badgeCruise: '5★ CRUISE',
      fDuration: 'Duration', fDayTrip: 'Day trip', fOptions: 'Options', fItins: '{n} itineraries', fPickup: 'Pick-up', fPickupVal: 'Hanoi Opera House',
      fMeal: 'Meals', fLunch: 'Buffet lunch', fReturn: 'Return', fCruise: 'Cruise', fIntlLunch: 'International buffet',
      fromPrice: 'From', allIn: 'All-inclusive', seeItins: 'See {n} itineraries', seeDetail: 'Details & booking',
      step: 'Step', howLong: 'How long is your trip?', howLongSub: 'Choose the trip length that fits your schedule.',
      optFrom: '{n} options · from', contactToBook: 'Contact us to book', updating: 'Tour coming soon',
      updatingTxt: 'The <b>{x}</b> programme is being updated. Please contact us for the best itinerary and price.',
      pickItin: 'Choose your itinerary', pickItinSub: '{n} options for a {d} trip in {p}.', suggest: 'Top pick',
      flatPer: 'Flat price / guest', pricePer: 'Price / guest', allInLower: 'all-inclusive', detail: 'Details', zoom: 'View larger photo',
      meals: 'Meals', transport: 'Transport', perGuest: '/guest', standard: 'Standard',
      incl: 'Included', excl: 'Not included', kids: 'Children policy',
      adultPrice: 'Adult price', flatAllIn: 'Flat all-inclusive price', minPax: 'minimum {n} guests',
      date: 'Departure date', vehicle: 'Vehicle', guests: 'Guests', adults: 'Adults', adultsSub: 'Age 9+',
      children: 'Children', childrenSub: 'Age 5 – 8 (75%)', babies: 'Infants', babiesSub: 'Under 5 (free)',
      less: 'Fewer', more: 'More', single: 'Single room', name: 'Full name', phone: 'Phone / Zalo / WhatsApp', email: 'Email (optional)',
      total: 'Estimated total', bookNow: 'Book this tour', fine: 'No prepayment needed · We will call you to confirm',
      sending: 'Sending…', ok: 'Booking received!',
      okTxt: 'Thank you, <b>{name}</b>. We will contact you at <b>{phone}</b> shortly to confirm tour <b>{code}</b> on <b>{date}</b>.',
      edit: 'Edit details', fail: 'Your booking could not be sent. Please try again or call {h}.', bookShort: 'Book now',
      title: 'Legend Journey – Ninh Binh & Ha Long tours from Hanoi'
    }
  };

  var lang = 'vi';
  try { var q = new URLSearchParams(location.search).get('lang'); if (q === 'en' || q === 'vi') lang = q; else { var s = localStorage.getItem('lj_lang'); if (s === 'en' || s === 'vi') lang = s; } } catch (e) {}

  var ROOTS = ['header', '#home', '#app > .wrap > .back', 'footer', '#bar', '.fab', '#lightbox'];
  var orig = new WeakMap(), origAttr = new WeakMap();
  function norm(x) { return x.replace(/\s+/g, ' ').trim(); }

  function applyStatic() {
    var en = lang === 'en';
    ROOTS.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (root) {
        if (root.id === 'dest-grid' || root.id === 'featured') return;
        var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
          acceptNode: function (n) { return n.parentNode.closest('#dest-grid,#featured,#view,#stepper,script,style') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; }
        });
        var n;
        while ((n = w.nextNode())) {
          if (!orig.has(n)) orig.set(n, n.nodeValue);
          var vi = orig.get(n), key = norm(vi);
          if (!key) continue;
          n.nodeValue = en && STATIC[key] ? vi.replace(key, STATIC[key]) : vi;
        }
        root.querySelectorAll('[aria-label],[alt],[title]').forEach(function (el) {
          if (el.closest('#dest-grid,#featured,#view,#stepper')) return;
          if (!origAttr.has(el)) origAttr.set(el, { a: el.getAttribute('aria-label'), alt: el.getAttribute('alt'), t: el.getAttribute('title') });
          var o = origAttr.get(el);
          [['aria-label', o.a], ['alt', o.alt], ['title', o.t]].forEach(function (p) {
            if (p[1] == null) return;
            el.setAttribute(p[0], en && ATTR[p[1]] ? ATTR[p[1]] : p[1]);
          });
        });
      });
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
  }

  function t(key, vars) {
    var s = UI[lang][key]; if (s == null) s = UI.vi[key];
    if (vars && typeof s === 'string') s = s.replace(/\{(\w+)\}/g, function (_, k) { return vars[k] != null ? vars[k] : ''; });
    return s;
  }

  var listeners = [];
  window.LJ_I18N = {
    get lang() { return lang; },
    t: t,
    data: function () { return lang === 'en' && window.LJ_DATA_EN ? window.LJ_DATA_EN : window.LJ_DATA; },
    applyStatic: applyStatic,
    onChange: function (fn) { listeners.push(fn); },
    set: function (l) {
      if (l === lang) return;
      lang = l;
      try { localStorage.setItem('lj_lang', l); } catch (e) {}
      applyStatic();
      listeners.forEach(function (fn) { fn(l); });
    }
  };

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-lang]');
    if (b) { e.preventDefault(); window.LJ_I18N.set(b.dataset.lang); }
  });
})();
