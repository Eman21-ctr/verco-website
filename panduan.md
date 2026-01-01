## 📋 Rencana Struktur Website Verco

### **1. Struktur Folder & File**
```
verco-website/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

### **2. Section-section Website**

**A. Navigation Bar**
- Logo "verco" (sticky/fixed)
- Menu: Produk, Fitur, Harga, FAQ, Kontak
- Responsive mobile menu (hamburger)

**B. Hero Section** ✅ (sudah ada)
- Headline pain-point focused
- Sub-headline value proposition
- CTA button utama

**C. Problem-Solution Section** (baru)
- Highlight 3-4 pain points koperasi desa
- Icon + deskripsi singkat masalah
- Transisi ke "Solusi kami"

**D. Products Section** ✅ (sudah ada, tinggal polish)
- 3 kartu produk: Sikopdes Cloud, Kasir Toko, Sikopdes Offline
- Highlight fitur utama masing-masing
- CTA "Pelajari Lebih Lanjut"

**E. Features Section** (baru)
- 6-8 fitur unggulan lintas produk
- Grid layout dengan icon
- Contoh: Multi-user access, Laporan otomatis, Backup data, dll

**F. Pricing Section** (baru)
- Tabel perbandingan 3 produk
- Harga atau "Hubungi kami"
- Highlight value proposition masing-masing
- CTA per pricing card

**G. Testimonial Section** (baru)
- 3-4 testimoni dari koperasi desa
- Foto/avatar + nama + jabatan + koperasi
- Quote singkat tentang benefit yang dirasakan
- Carousel/slider optional

**H. FAQ Section** (baru)
- Accordion style
- 6-8 pertanyaan umum
- Contoh: "Apakah perlu internet?", "Berapa biaya bulanan?", "Apakah ada training?"

**I. CTA Final Section** (baru)
- Call-to-action terakhir sebelum footer
- "Siap kelola koperasi lebih efisien?"
- Button: "Hubungi Kami" atau "Demo Gratis"

**J. Footer**
- Info kontak
- Link produk
- Social media (optional)
- Copyright

### **3. Design System yang Konsisten**

**Color Palette** (dari artifact):
```css
--bg-primary: #0a0a0f
--bg-secondary: #12121a
--bg-card: #1a1a27
--accent: #6366f1
--accent-light: #818cf8
--text-primary: #e2e8f0
--text-secondary: #94a3b8
--border: #2d2d3f
```

**Typography**:
- Heading: Space Grotesk (700, 600, 500)
- Body: Space Grotesk (400, 300)
- Code/Tech: JetBrains Mono (500, 400)

**Spacing Scale**:
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 5rem (80px)

### **4. Interactive Elements**

**Animations**:
- Gradient orbs floating (background)
- Hover effects pada cards (translateY, shadow)
- Navigation link underline on hover
- Button hover effects (scale, shadow)
- Scroll reveal animations (fade in + slide up)
- FAQ accordion expand/collapse

**Micro-interactions**:
- Smooth scroll ke section
- Card tilt on hover (3D effect) - optional
- Pricing card highlight on hover
- Active navigation indicator

### **5. Responsive Breakpoints**
```css
/* Mobile: < 768px */
/* Tablet: 768px - 1024px */
/* Desktop: > 1024px */
```

### **6. Content yang Perlu Disiapkan**

**Untuk Pricing**:
- Harga atau model "Contact Us"
- Fitur yang included per paket
- Benefit tambahan

**Untuk Testimonial**:
- 3-4 testimoni real atau dummy
- Nama pengurus koperasi
- Nama koperasi + lokasi
- Quote 2-3 kalimat

**Untuk FAQ**:
- 6-8 pertanyaan paling sering ditanya
- Jawaban singkat & jelas

### **7. Technical Requirements**

**HTML**:
- Semantic HTML5
- Proper heading hierarchy (h1, h2, h3)
- Alt text untuk images
- Meta tags (SEO basic)

**CSS**:
- CSS custom properties (variables)
- Flexbox & Grid
- Mobile-first approach
- Smooth transitions

**JavaScript**:
- Smooth scroll navigation
- Mobile menu toggle
- FAQ accordion
- Scroll reveal animation
- Optional: Testimonial carousel

### **8. Checklist Development**

**Phase 1 - Structure**:
- [ ] Setup folder structure
- [ ] Create HTML skeleton semua section
- [ ] Setup CSS variables & reset

**Phase 2 - Styling**:
- [ ] Style navigation
- [ ] Style hero section
- [ ] Style products section
- [ ] Style pricing section
- [ ] Style testimonial section
- [ ] Style FAQ section
- [ ] Style footer

**Phase 3 - Interactivity**:
- [ ] Smooth scroll
- [ ] Mobile menu
- [ ] FAQ accordion
- [ ] Hover effects
- [ ] Scroll animations

**Phase 4 - Content**:
- [ ] Fill real content
- [ ] Optimize images
- [ ] Test responsiveness
- [ ] Cross-browser testing

**Phase 5 - Polish**:
- [ ] Performance optimization
- [ ] Accessibility check
- [ ] SEO basic (meta tags)
- [ ] Final testing

### **9. Dummy Content Suggestions**

**Testimonial Example**:
> "Sejak pakai Sikopdes, pembukuan koperasi kami jadi lebih rapi dan transparan. Anggota juga lebih percaya karena laporan bisa diakses kapan saja."
> — Pak Budi Santoso, Ketua Koperasi Desa Makmur, Yogyakarta

**FAQ Example**:
- Q: Apakah saya perlu koneksi internet?
- A: Tergantung produk yang Anda pilih. Sikopdes Cloud memerlukan internet, sedangkan Sikopdes Offline bisa berjalan tanpa internet.

### **10. Performance Tips**
- Lazy load images
- Minify CSS & JS untuk production
- Use webp format untuk images
- Compress assets
- Consider CDN untuk fonts

---

**Instruksi**:
```
Buatkan website landing page untuk "Verco" - sistem digital koperasi desa dengan struktur:
1. Navigation (sticky)
2. Hero section dengan headline pain-point
3. Problem-Solution section
4. Products section (3 cards: Sikopdes Cloud, Kasir Toko, Sikopdes Offline)
5. Features section (grid 6-8 fitur)
6. Pricing section (comparison table)
7. Testimonial section (3-4 cards)
8. FAQ section (accordion)
9. CTA final section
10. Footer

Design system: dark theme, Space Grotesk font, gradient accents (#6366f1), animated background orbs, smooth micro-interactions. Mobile responsive.
```