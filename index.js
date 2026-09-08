document.getElementById('generate-btn').addEventListener('click', function() {
    const text = document.getElementById('qr-input').value;
    const qrcodeContainer = document.getElementById('qrcode');
    
    if (!text.trim()) {
        alert('Masukkan teks atau URL terlebih dahulu!');
        return;
    }
    
    qrcodeContainer.innerHTML = '';
    
    // Generate QR Code
    new QRCode(qrcodeContainer, {
        text: text,
        width: 200,
        height: 200
    });
});

document.getElementById('download-btn').addEventListener('click', function() {
    const container = document.getElementById('qrcode');
    const canvas = container.querySelector('canvas');
    const img = container.querySelector('img');

    let imageSrc = '';

    // Ambil data gambar dari Canvas atau Img (mana yang tersedia)
    if (canvas) {
        imageSrc = canvas.toDataURL('image/png');
    } else if (img && img.src) {
        imageSrc = img.src;
    }

    if (imageSrc) {
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = 'qrcode.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('Buat QR code terlebih dahulu!');
    }
});
