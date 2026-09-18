// ============ SEMINAR DATA ============
const SEMINARS = [
  { id:1, judul:"Seminar Nasional Pendidikan di Era Digital", kategori:"Pendidikan", tanggal:"2026-02-15", waktu:"09:00 - 12:00 WIB", format:"Online", lokasi:"Zoom Meeting", harga:0, sertifikat:true, penyelenggara:"Universitas Nusantara", pembicara:"Dr. Anisa Rahmawati, M.Pd.", deskripsi:"Membahas transformasi pendidikan di era digital, pemanfaatan teknologi pembelajaran, dan tantangan guru masa kini.", emoji:"🎓", tags:["Digital","Pendidikan","Teknologi"], manfaat:["Memahami tren pendidikan digital","Mendapat e-sertifikat resmi","Networking dengan pendidik"] },
  { id:2, judul:"Webinar Literasi Sains untuk Generasi Muda", kategori:"IPA & Sains", tanggal:"2026-02-18", waktu:"13:00 - 15:30 WIB", format:"Online", lokasi:"Google Meet", harga:10000, sertifikat:true, penyelenggara:"Sains Muda Indonesia", pembicara:"Prof. Dr. Budi Santoso", deskripsi:"Meningkatkan literasi sains generasi muda melalui pendekatan praktis dan menyenangkan.", emoji:"🔬", tags:["Sains","Literasi","Muda"], manfaat:["Menambah wawasan sains","E-sertifikat","Diskusi interaktif"] },
  { id:3, judul:"Basic Research Skills for Students", kategori:"Pendidikan", tanggal:"2026-02-20", waktu:"08:00 - 11:00 WIB", format:"Offline", lokasi:"Aula FIP UNY", harga:25000, sertifikat:true, penyelenggara:"Himpunan Mahasiswa Pendidikan", pembicara:"Dr. Citra Dewi, M.Si.", deskripsi:"Pelatihan dasar penelitian untuk mahasiswa: menentukan topik, metode, dan menulis laporan.", emoji:"📚", tags:["Riset","Metodologi"], manfaat:["Skill riset dasar","Template penelitian","E-sertifikat"] },
  { id:4, judul:"Public Speaking untuk Mahasiswa", kategori:"Pengembangan Diri", tanggal:"2026-02-22", waktu:"10:00 - 13:00 WIB", format:"Online", lokasi:"Zoom Meeting", harga:15000, sertifikat:true, penyelenggara:"SpeakUp Academy", pembicara:"Rina Kartika, S.Pd.", deskripsi:"Tingkatkan kemampuan public speaking, atasi demam panggung, dan kuasai teknik presentasi.", emoji:"🎤", tags:["Public Speaking","Komunikasi"], manfaat:["Percaya diri berbicara","Teknik presentasi","E-sertifikat"] },
  { id:5, judul:"AI dan Masa Depan Pendidikan", kategori:"Teknologi", tanggal:"2026-02-25", waktu:"15:00 - 17:00 WIB", format:"Online", lokasi:"Zoom Meeting", harga:0, sertifikat:true, penyelenggara:"TechEdu Community", pembicara:"Ir. Doni Pratama, M.T.", deskripsi:"Eksplorasi peran AI dalam dunia pendidikan dan peluang karier di bidang teknologi pendidikan.", emoji:"🤖", tags:["AI","Teknologi","Edukasi"], manfaat:["Paham AI di pendidikan","Gratis","E-sertifikat"] },
  { id:6, judul:"Seminar Kewirausahaan Mahasiswa", kategori:"Bisnis", tanggal:"2026-02-27", waktu:"09:00 - 12:00 WIB", format:"Offline", lokasi:"Gedung Kewirausahaan", harga:30000, sertifikat:true, penyelenggara:"Inkubator Bisnis Kampus", pembicara:"Andi Wijaya, S.E., M.M.", deskripsi:"Membangun jiwa wirausaha, ide bisnis, dan strategi memulai startup dari kampus.", emoji:"💼", tags:["Bisnis","Startup","Wirausaha"], manfaat:["Ide bisnis baru","Mentoring","E-sertifikat"] },
  { id:7, judul:"Mental Health Awareness for Students", kategori:"Kesehatan", tanggal:"2026-03-01", waktu:"13:00 - 15:00 WIB", format:"Online", lokasi:"Zoom Meeting", harga:0, sertifikat:true, penyelenggara:"Psikologi Peduli", pembicara:"Dra. Eka Sari, M.Psi.", deskripsi:"Mengenali tanda stres, mengelola kecemasan, dan menjaga kesehatan mental di masa kuliah.", emoji:"🧠", tags:["Mental Health","Psikologi"], manfaat:["Paham kesehatan mental","Gratis","E-sertifikat"] },
  { id:8, judul:"Workshop Pengembangan Media Pembelajaran", kategori:"Pendidikan", tanggal:"2026-03-03", waktu:"08:00 - 14:00 WIB", format:"Offline", lokasi:"Lab Multimedia", harga:50000, sertifikat:true, penyelenggara:"Pusat Inovasi Pendidikan", pembicara:"Fajar Nugroho, S.Pd., M.Pd.", deskripsi:"Praktik langsung membuat media pembelajaran interaktif berbasis digital.", emoji:"🎨", tags:["Media","Pembelajaran"], manfaat:["Praktik langsung","Software pembelajaran","E-sertifikat"] },
  { id:9, judul:"Seminar Nasional Teknologi Pembelajaran", kategori:"Teknologi", tanggal:"2026-03-05", waktu:"08:00 - 15:00 WIB", format:"Online", lokasi:"Zoom Meeting", harga:25000, sertifikat:true, penyelenggara:"Asosiasi Teknologi Pendidikan", pembicara:"Prof. Dr. Gunawan, M.T.", deskripsi:"Konferensi nasional tentang teknologi pembelajaran terkini dan implementasinya.", emoji:"💻", tags:["Teknologi","Konferensi"], manfaat:["Update teknologi","Networking","E-sertifikat"] },
  { id:10, judul:"Webinar Personal Branding untuk Mahasiswa", kategori:"Pengembangan Diri", tanggal:"2026-03-07", waktu:"14:00 - 16:00 WIB", format:"Online", lokasi:"Zoom Meeting", harga:10000, sertifikat:true, penyelenggara:"Career Center UGM", pembicara:"Hana Lestari, S.I.Kom.", deskripsi:"Membangun personal branding di media sosial untuk karier dan profesionalisme.", emoji:"✨", tags:["Branding","Karier"], manfaat:["Personal branding","LinkedIn profile","E-sertifikat"] },
  { id:11, judul:"Workshop Menulis Karya Ilmiah", kategori:"Pendidikan", tanggal:"2026-03-10", waktu:"09:00 - 13:00 WIB", format:"Offline", lokasi:"Ruang Seminar FBS", harga:20000, sertifikat:true, penyelenggara:"Lembaga Penelitian Mahasiswa", pembicara:"Dr. Indah Permata, M.Hum.", deskripsi:"Teknik menulis karya ilmiah yang baik, mulai dari abstrak hingga daftar pustaka.", emoji:"✍️", tags:["Menulis","Ilmiah"], manfaat:["Skill menulis","Template karya","E-sertifikat"] },
  { id:12, judul:"Seminar Pengembangan Karier Mahasiswa", kategori:"Bisnis", tanggal:"2026-03-12", waktu:"10:00 - 13:00 WIB", format:"Online", lokasi:"Google Meet", harga:0, sertifikat:true, penyelenggara:"Alumni Career Network", pembicara:"Bayu Setiawan, M.B.A.", deskripsi:"Persiapan karier setelah lulus: CV, interview, dan soft skill yang dibutuhkan industri.", emoji:"🚀", tags:["Karier","CV","Interview"], manfaat:["CV review","Simulasi interview","E-sertifikat"] }
];

// ============ FAVORITE SYSTEM ============
const FAV_KEY = 'seminara_favorites';
function getFavorites(){ try{ return JSON.parse(localStorage.getItem(FAV_KEY))||[] }catch(e){ return [] } }
function saveFavorites(arr){ localStorage.setItem(FAV_KEY, JSON.stringify(arr)) }
function isFavorite(id){ return getFavorites().includes(id) }
function toggleFavorite(id){
  let favs = getFavorites();
  if(favs.includes(id)){ favs = favs.filter(f=>f!==id); saveFavorites(favs); return false; }
  else { favs.push(id); saveFavorites(favs); return true; }
}

// ============ NAVBAR ============
function initNavbar(){
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if(navbar){
    window.addEventListener('scroll',()=>{
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }
  if(hamburger && navMenu){
    hamburger.addEventListener('click',()=>{
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('open');
    });
    navMenu.querySelectorAll('a').forEach(a=>{
      a.addEventListener('click',()=>{
        hamburger.classList.remove('active');
        navMenu.classList.remove('open');
      });
    });
  }
  // Set active link
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href === path || (path==='' && href==='index.html')) a.classList.add('active');
  });
}

// ============ HELPERS ============
function formatRupiah(n){
  if(n===0) return 'GRATIS';
  return 'Rp' + n.toLocaleString('id-ID');
}
function formatDate(str){
  const d = new Date(str);
  const bulan = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
  return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
}

// ============ RENDER CARD ============
function createSeminarCard(s){
  const fav = isFavorite(s.id);
  return `
  <div class="seminar-card reveal">
    <div class="card-poster">
      <span class="card-category">${s.kategori}</span>
      <button class="fav-btn ${fav?'active':''}" data-id="${s.id}" aria-label="Favorit">${fav?'❤️':'🤍'}</button>
      <span class="poster-emoji">${s.emoji}</span>
    </div>
    <div class="card-body">
      <h3>${s.judul}</h3>
      <div class="card-meta">
        <span>📅 ${formatDate(s.tanggal)}</span>
        <span>⏰ ${s.waktu}</span>
        <span>📍 ${s.format} · ${s.lokasi}</span>
      </div>
      <div class="card-tags">${s.tags.map(t=>`<span class="tag">#${t}</span>`).join('')}</div>
      <div class="card-footer">
        <div>
          <div class="card-price ${s.harga===0?'free':''}">${formatRupiah(s.harga)}</div>
          ${s.sertifikat?'<span class="cert-badge">📜 E-Sertifikat</span>':''}
        </div>
        <a href="detail.html?id=${s.id}" class="btn-detail">Lihat Detail</a>
      </div>
    </div>
  </div>`;
}

function bindFavoriteButtons(container){
  container.querySelectorAll('.fav-btn').forEach(btn=>{
    btn.addEventListener('click', e=>{
      e.preventDefault();
      e.stopPropagation();
      const id = parseInt(btn.dataset.id);
      const nowFav = toggleFavorite(id);
      btn.classList.toggle('active', nowFav);
      btn.textContent = nowFav ? '❤️' : '🤍';
      showToast(nowFav ? 'Ditambahkan ke favorit ❤️' : 'Dihapus dari favorit', 'success');
    });
  });
}

// ============ TOAST ============
function showToast(msg, type=''){
  let toast = document.querySelector('.toast');
  if(!toast){
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.className = 'toast ' + type;
  toast.textContent = msg;
  requestAnimationFrame(()=>toast.classList.add('show'));
  clearTimeout(toast._t);
  toast._t = setTimeout(()=>toast.classList.remove('show'), 3200);
}

// ============ REVEAL ON SCROLL ============
function initReveal(){
  const io = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  },{ threshold:.1 });
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
}

// ============ FLOATING WA ============
function injectWA(){
  if(document.querySelector('.wa-float')) return;
  const a = document.createElement('a');
  a.className = 'wa-float';
  a.href = 'https://wa.me/6282337237718?text=' + encodeURIComponent('Halo Kak Seminara, saya ingin bertanya tentang layanan Seminara.');
  a.target = '_blank';
  a.rel = 'noopener';
  a.setAttribute('aria-label','WhatsApp SEMINARA');
  a.innerHTML = '💬';
  document.body.appendChild(a);
}

// ============ INIT ============
document.addEventListener('DOMContentLoaded', ()=>{
  initNavbar();
  injectWA();
  initReveal();
});