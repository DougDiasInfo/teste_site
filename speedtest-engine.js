/**
 * Engine Nativo de Medição de Latência e Largura de Banda para Ambientes Hospitalares
 */
document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startSpeedTestBtn');
    const pingDisplay = document.getElementById('pingValue');
    const downloadDisplay = document.getElementById('downloadValue');
    const statusDisplay = document.getElementById('statusClinical');

    if (!startBtn) return;

    startBtn.addEventListener('click', async () => {
        startBtn.disabled = true;
        startBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Medindo Conectividade...`;
        
        // 1. MEDIÇÃO DE LATÊNCIA (PING)
        const ping = await measurePing();
        pingDisplay.textContent = `${ping} ms`;

        // 2. MEDIÇÃO DE BANDWIDTH (DOWNLOAD)
        const speedMbps = await measureDownloadSpeed();
        downloadDisplay.textContent = `${speedMbps.toFixed(1)} Mbps`;

        // 3. AVALIAÇÃO DE APTIDÃO CLÍNICA DE REDE
        evaluateClinicalReadiness(ping, speedMbps);

        startBtn.disabled = false;
        startBtn.innerHTML = `<i class="fa-solid fa-rotate-right"></i> Testar Novamente`;
    });

    async function measurePing() {
        const startTime = performance.now();
        try {
            // Requisita um ativo leve (cache-busting via timestamp)
            await fetch(`img/logo.png?cache=${Date.now()}`, { method: 'HEAD', cache: 'no-store' });
            const endTime = performance.now();
            return Math.round(endTime - startTime);
        } catch (e) {
            return 999;
        }
    }

    async function measureDownloadSpeed() {
        const testFileUrl = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/webfonts/fa-solid-900.woff2';
        const startTime = performance.now();

        try {
            const response = await fetch(`${testFileUrl}?cache=${Date.now()}`, { cache: 'no-store' });
            const blob = await response.blob();
            const endTime = performance.now();

            const durationInSeconds = (endTime - startTime) / 1000;
            const bitsLoaded = blob.size * 8;
            const speedBps = bitsLoaded / durationInSeconds;
            return (speedBps / (1024 * 1024)); // Converte para Mbps
        } catch (e) {
            return 0;
        }
    }

    function evaluateClinicalReadiness(ping, speed) {
        if (speed >= 30 && ping <= 50) {
            statusDisplay.textContent = "Excelente (PACS & Telemed OK)";
            statusDisplay.style.color = "#00d26a";
        } else if (speed >= 10 && ping <= 100) {
            statusDisplay.textContent = "Estável (Uso de ERP/PEP)";
            statusDisplay.style.color = "#ff6b1a";
        } else {
            statusDisplay.textContent = "Conexão Lenta (Oscilações)";
            statusDisplay.style.color = "#ff3333";
        }
    }
});