// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        faqItems.forEach(i => i.classList.remove('active'));

        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = '1rem 0';
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        navbar.style.padding = '1.5rem 0';
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
    }
});

// Simple Scroll Reveal
const revealElements = document.querySelectorAll('.problem-card, .product-card, .feature-item, .section-header');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < triggerBottom) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Initial state for reveal
revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger once on load

// Product Modal Logic
const productData = {
    cloud: {
        title: "Sikopdes Cloud",
        content: `
            <p>Sikopdes Cloud adalah solusi manajemen koperasi berbasis web yang dirancang untuk kemudahan akses dan kolaborasi tim secara real-time.</p>
            <h3>Fitur Utama:</h3>
            <ul>
                <li><strong>Multi-user & Role:</strong> Kelola hak akses pengurus, pengawas, dan anggota dengan aman.</li>
                <li><strong>Laporan Otomatis:</strong> Neraca, rugi laba, dan laporan arus kas tersedia seketika.</li>
                <li><strong>Backup Cloud:</strong> Data terjamin aman di server cloud dengan backup harian otomatis.</li>
                <li><strong>Akses Kapan Saja:</strong> Cukup gunakan browser dari laptop atau smartphone Anda.</li>
            </ul>
            <h3>Cocok Untuk:</h3>
            <p>Koperasi yang memiliki koneksi internet stabil dan ingin memantau perkembangan koperasi secara remote.</p>
        `,
        cta: "https://wa.me/6285704519549?text=Halo%20Admin%2C%20saya%20ingin%20tanya%20lebih%20detail%20tentang%20Sikopdes%20Cloud."
    },
    kasir: {
        title: "Sistem Kasir Toko (POS)",
        content: `
            <p>Tingkatkan profesionalisme unit usaha toko atau minimarket koperasi Anda dengan sistem kasir yang modern dan terintegrasi.</p>
            <h3>Fitur Utama:</h3>
            <ul>
                <li><strong>Manajemen Stok:</strong> Notifikasi otomatis saat stok barang menipis.</li>
                <li><strong>Barcode Scanner:</strong> Transaksi lebih cepat dan akurat menggunakan scanner.</li>
                <li><strong>Integrasi Simpanan:</strong> Anggota bisa belanja menggunakan saldo simpanan atau sistem poin.</li>
                <li><strong>Struk & Laporan Penjualan:</strong> Cetak struk dan rekap penjualan harian/bulanan dengan mudah.</li>
            </ul>
            <h3>Cocok Untuk:</h3>
            <p>Unit usaha pertokoan, waserda, atau minimarket milik koperasi desa.</p>
        `,
        cta: "https://wa.me/6285704519549?text=Halo%20Admin%2C%20saya%20ingin%20tanya%20lebih%20detail%20tentang%20Sistem%20Kasir%20Toko."
    },
    offline: {
        title: "Sikopdes Offline",
        content: `
            <p>Solusi manajemen koperasi desktop bagi wilayah yang memiliki kendala koneksi internet. Berjalan stabil di PC/Laptop tanpa kuota.</p>
            <h3>Fitur Utama:</h3>
            <ul>
                <li><strong>Instalasi Lokal:</strong> Data tersimpan sepenuhnya di komputer kantor koperasi Anda.</li>
                <li><strong>Zero Internet:</strong> Gunakan semua fitur manajemen anggota dan keuangan tanpa perlu internet.</li>
                <li><strong>Export Excel:</strong> Pindahkan data ke Excel untuk kebutuhan pelaporan eksternal dengan satu klik.</li>
                <li><strong>Keamanan Lokal:</strong> Akses aplikasi dilindungi dengan sistem login yang terenkripsi.</li>
            </ul>
            <h3>Cocok Untuk:</h3>
            <p>Koperasi di daerah pelosok yang ingin memulai digitalisasi tanpa bergantung pada stabilitas internet.</p>
        `,
        cta: "https://wa.me/6285704519549?text=Halo%20Admin%2C%20saya%20ingin%20tanya%20lebih%20detail%20tentang%20Sikopdes%20Offline."
    }
};

const modal = document.getElementById('product-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const modalCTA = document.getElementById('modal-cta');
const closeButtons = document.querySelectorAll('[data-micromodal-close]');

const openModal = (productId) => {
    const data = productData[productId];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalContent.innerHTML = data.content;
    modalCTA.href = data.cta;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent scroll
};

const closeModal = () => {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore scroll
};

// Event Listeners for Details Buttons
document.querySelectorAll('.btn-detail').forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = e.currentTarget.getAttribute('data-product');
        openModal(productId);
    });
});

// Close modal listeners
closeButtons.forEach(button => {
    button.addEventListener('click', closeModal);
});

// Close on Escape key
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
        closeModal();
    }
});
