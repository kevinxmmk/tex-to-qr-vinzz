        function downloadQR() {
            const qrCanvas = qrContainer.querySelector('canvas');
            const qrImg = qrContainer.querySelector('img');
            
            let sourceUrl = '';
            if (qrCanvas) {
                sourceUrl = qrCanvas.toDataURL('image/png');
            } else if (qrImg && qrImg.src) {
                sourceUrl = qrImg.src;
            }

            if (!sourceUrl) {
                alert('QR Code belum siap!');
                return;
            }

            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                const padding = 20;
                const qrSize = 180;
                const desc = descInput.value;

                canvas.width = qrSize + (padding * 2);
                canvas.height = qrSize + (padding * 2) + (desc ? 40 : 0);

                ctx.fillStyle = lightColorInput.value;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                ctx.drawImage(img, padding, padding, qrSize, qrSize);

                if (desc) {
                    ctx.fillStyle = darkColorInput.value;
                    ctx.font = '14px "Segoe UI", sans-serif';
                    ctx.textAlign = 'center';
                    ctx.fillText(desc, canvas.width / 2, qrSize + padding + 25);
                }

                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'qrcode-vinzzkedce.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
            img.src = sourceUrl;
        }
