// tempek

document.getElementById('generate-btn').addEventListener('click', function() {
    const text = document.getElementById('qr-input').value;
    const qrcodeContainer = document.getElementById('qrcode');
    
    if (!text.trim()) {
        alert('Masukkan teks atau URL terlebih dahulu!');
        return;
    }
    
    qrcodeContainer.innerHTML = '';
    
    new QRCode(qrcodeContainer, {
        text: text,
        width: 200,
        height: 200
    });
});

document.getElementById('download-btn').addEventListener('click', function() {
    const qrImage = document.querySelector('#qrcode img');
    
    if (qrImage && qrImage.src) {
        const link = document.createElement('a');
        link.href = qrImage.src;
        link.download = 'qrcode.png';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert('Buat QR code terlebih dahulu!');
    }
});
