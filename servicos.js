(() => {
  const WHATSAPP = '5531999291567';
  let services = [
  {
    "category": "Backup e dados",
    "name": "Backup de arquivos",
    "price": "30,00",
    "icon": "fa-hard-drive",
    "description": "Backup dos seus arquivos para o próprio dispositivo ou unidade externa do cliente.",
    "note": "Armazenamento"
  },
  {
    "category": "Backup e dados",
    "name": "Backup de dados até 100 GB",
    "price": "120,00",
    "icon": "fa-database",
    "description": "Cópia organizada dos seus dados, até 100 GB.",
    "note": "Armazenamento"
  },
  {
    "category": "Backup e dados",
    "name": "Formatação + backup + programas",
    "price": "300,00",
    "icon": "fa-boxes-stacked",
    "description": "Pacote completo para preparar o computador com backup e programas essenciais.",
    "note": "Pacote completo"
  },
  {
    "category": "Backup e dados",
    "name": "Configuração de backup automático",
    "price": "150,00",
    "icon": "fa-cloud-arrow-up",
    "description": "Configure cópias automáticas locais ou em nuvem.",
    "note": "Local ou nuvem"
  },
  {
    "category": "Windows e formatação",
    "name": "Windows 10 + Office 2007",
    "price": "80,00",
    "icon": "fa-compact-disc",
    "description": "Formatação e instalação do pacote informado. Consulte compatibilidade e licenças.",
    "note": "Pacote 4"
  },
  {
    "category": "Windows e formatação",
    "name": "Windows 10 + Office 2013",
    "price": "80,00",
    "icon": "fa-windows",
    "description": "Formatação e instalação do pacote informado. Consulte compatibilidade e licenças.",
    "note": "Pacote 1"
  },
  {
    "category": "Windows e formatação",
    "name": "Windows 10 + Office 2019",
    "price": "90,00",
    "icon": "fa-file-word",
    "description": "Formatação e instalação do pacote informado. Consulte compatibilidade e licenças.",
    "note": "Pacote 2"
  },
  {
    "category": "Windows e formatação",
    "name": "Windows 10 + Office 2019 + antivírus",
    "price": "100,00",
    "icon": "fa-shield-halved",
    "description": "Formatação com pacote Office informado e antivírus.",
    "note": "Pacote 3"
  },
  {
    "category": "Windows e formatação",
    "name": "Windows 10 Pro + configuração",
    "price": "120,00",
    "icon": "fa-laptop-code",
    "description": "Instalação e configuração do Windows 10 Pro.",
    "note": "Configuração incluída"
  },
  {
    "category": "Windows e formatação",
    "name": "Windows 7 / 8.1 + Office 2010",
    "price": "80,00",
    "icon": "fa-window-restore",
    "description": "Instalação para equipamentos compatíveis. Sistemas antigos podem ter limitações de segurança.",
    "note": "Compatibilidade sob consulta"
  },
  {
    "category": "Windows e formatação",
    "name": "Windows 11 + Office",
    "price": "180,00",
    "icon": "fa-windows",
    "description": "Formatação e instalação do Windows 11 com Office.",
    "note": "Licenças sob consulta"
  },
  {
    "category": "Windows e formatação",
    "name": "Windows 11 + LibreOffice",
    "price": "150,00",
    "icon": "fa-file-lines",
    "description": "Instalação do Windows 11 e LibreOffice. Não inclui backup.",
    "note": "Não inclui backup"
  },
  {
    "category": "Windows e formatação",
    "name": "Instalação de programas gratuitos",
    "price": "20,00",
    "icon": "fa-download",
    "description": "Instalação de programas gratuitos conforme a necessidade.",
    "note": "Programas FREE"
  },
  {
    "category": "Windows e formatação",
    "name": "Instalação de programas pagos",
    "price": "30,00",
    "icon": "fa-cubes",
    "description": "Instalação de programas licenciados fornecidos pelo cliente.",
    "note": "Licença não inclusa"
  },
  {
    "category": "Windows e formatação",
    "name": "Instalação do pacote Office",
    "price": "70,00",
    "icon": "fa-file-word",
    "description": "Instalação do Office. Não inclui licença.",
    "note": "Licença não inclusa"
  },
  {
    "category": "Windows e formatação",
    "name": "Instalação do Office 2010",
    "price": "15,00",
    "icon": "fa-file-word",
    "description": "Instalação em equipamento compatível.",
    "note": ""
  },
  {
    "category": "Windows e formatação",
    "name": "Instalação do Office 2013",
    "price": "20,00",
    "icon": "fa-file-word",
    "description": "Instalação em equipamento compatível.",
    "note": ""
  },
  {
    "category": "Windows e formatação",
    "name": "Instalação do Office 2019",
    "price": "30,00",
    "icon": "fa-file-word",
    "description": "Instalação em equipamento compatível.",
    "note": ""
  },
  {
    "category": "Windows e formatação",
    "name": "Chave original Windows 10 Pro",
    "price": "50,00",
    "icon": "fa-key",
    "description": "Chave de ativação original para um equipamento.",
    "note": "1 máquina"
  },
  {
    "category": "Windows e formatação",
    "name": "Chave original Office 2019",
    "price": "30,00",
    "icon": "fa-key",
    "description": "Chave de ativação original para um equipamento.",
    "note": "1 máquina"
  },
  {
    "category": "Segurança e desempenho",
    "name": "Instalação de antivírus",
    "price": "30,00",
    "icon": "fa-shield-virus",
    "description": "Instalação e configuração de antivírus compatível.",
    "note": "Avast ou alternativa"
  },
  {
    "category": "Segurança e desempenho",
    "name": "Remoção de vírus e malware",
    "price": "130,00",
    "icon": "fa-bug-slash",
    "description": "Análise e limpeza lógica para remover ameaças e programas indesejados.",
    "note": "Limpeza lógica"
  },
  {
    "category": "Segurança e desempenho",
    "name": "Limpeza do sistema",
    "price": "30,00",
    "icon": "fa-broom",
    "description": "Remoção de arquivos temporários e ajustes para melhorar o desempenho.",
    "note": "Otimização lógica"
  },
  {
    "category": "Segurança e desempenho",
    "name": "Substituição / instalação de drivers",
    "price": "50,00",
    "icon": "fa-gears",
    "description": "Instalação e atualização de drivers por equipamento.",
    "note": "Por equipamento"
  },
  {
    "category": "Segurança e desempenho",
    "name": "Configuração de e-mail corporativo",
    "price": "60,00",
    "icon": "fa-envelope",
    "description": "Configure uma conta de e-mail profissional no seu dispositivo.",
    "note": "Por conta"
  },
  {
    "category": "Manutenção física",
    "name": "Limpeza interna de PC ou notebook",
    "price": "50,00",
    "icon": "fa-fan",
    "description": "Limpeza interna do equipamento. Não inclui troca de pasta térmica.",
    "note": "Sem pasta térmica"
  },
  {
    "category": "Manutenção física",
    "name": "Limpeza completa + pasta térmica",
    "price": "150,00",
    "icon": "fa-temperature-half",
    "description": "Limpeza interna e troca da pasta térmica do processador.",
    "note": "PC / notebook"
  },
  {
    "category": "Manutenção física",
    "name": "Troca de pasta térmica",
    "price": "120,00",
    "icon": "fa-temperature-arrow-down",
    "description": "Substituição da pasta térmica para auxiliar na dissipação de calor.",
    "note": "CPU / notebook"
  },
  {
    "category": "Manutenção física",
    "name": "Troca de processador + limpeza",
    "price": "50,00",
    "icon": "fa-microchip",
    "description": "Mão de obra para troca do processador, limpeza e pasta térmica.",
    "note": "Peça não inclusa"
  },
  {
    "category": "Manutenção física",
    "name": "Manutenção de slot do processador",
    "price": "100,00",
    "icon": "fa-screwdriver-wrench",
    "description": "Avaliação e tentativa de correção de pinos empenados.",
    "note": "Sujeito à avaliação"
  },
  {
    "category": "Manutenção física",
    "name": "Reparo e solda de componentes",
    "price": "70,00",
    "icon": "fa-microchip",
    "description": "Reparo eletrônico e soldagem conforme diagnóstico.",
    "note": "Sujeito à avaliação"
  },
  {
    "category": "Manutenção física",
    "name": "Manutenção / troca de componentes da fonte",
    "price": "50,00",
    "icon": "fa-plug",
    "description": "Avaliação e serviço em componentes da fonte.",
    "note": "Sujeito à avaliação"
  },
  {
    "category": "Manutenção física",
    "name": "Mão de obra + testes",
    "price": "80,00",
    "icon": "fa-list-check",
    "description": "Serviço técnico com testes de funcionamento.",
    "note": ""
  },
  {
    "category": "Manutenção física",
    "name": "Diagnóstico técnico",
    "price": "70,00",
    "icon": "fa-stethoscope",
    "description": "Identificação da causa provável do defeito. Valor abatido se o serviço for aprovado.",
    "note": "Abatido se aprovado"
  },
  {
    "category": "Armazenamento e upgrades",
    "name": "Instalação de SSD",
    "price": "120,00",
    "icon": "fa-hard-drive",
    "description": "Instalação física de SSD no computador.",
    "note": "Mão de obra"
  },
  {
    "category": "Armazenamento e upgrades",
    "name": "Troca de HD por SSD + clonagem",
    "price": "220,00",
    "icon": "fa-copy",
    "description": "Migração para SSD buscando manter o sistema e os arquivos existentes.",
    "note": "Clonagem do sistema"
  },
  {
    "category": "Armazenamento e upgrades",
    "name": "Troca de SSD/HD + formatação",
    "price": "100,00",
    "icon": "fa-hard-drive",
    "description": "Troca de unidade e formatação conforme pacote combinado.",
    "note": "Pacote 1"
  },
  {
    "category": "Armazenamento e upgrades",
    "name": "Teste de HD + empréstimo de HDD",
    "price": "50,00",
    "icon": "fa-magnifying-glass-chart",
    "description": "Teste de armazenamento e empréstimo de HDD 2,5” de 320 GB.",
    "note": "Conforme disponibilidade"
  },
  {
    "category": "Armazenamento e upgrades",
    "name": "SSD Kingston A400 240 GB",
    "price": "184,00",
    "icon": "fa-hard-drive",
    "description": "Unidade SSD de 240 GB. Confirme estoque antes da compra.",
    "note": "Produto"
  },
  {
    "category": "Armazenamento e upgrades",
    "name": "SSD Kingston A400 480 GB",
    "price": "229,99",
    "icon": "fa-hard-drive",
    "description": "Unidade SSD de 480 GB. Confirme estoque antes da compra.",
    "note": "Produto"
  },
  {
    "category": "Armazenamento e upgrades",
    "name": "SSD WD SATA 480 GB",
    "price": "219,90",
    "icon": "fa-hard-drive",
    "description": "Unidade SSD SATA de 480 GB. Confirme estoque antes da compra.",
    "note": "Produto"
  },
  {
    "category": "Armazenamento e upgrades",
    "name": "HD Seagate 320 GB 2,5”",
    "price": "190,00",
    "icon": "fa-hard-drive",
    "description": "HD de 320 GB para notebook ou uso compatível.",
    "note": "Produto"
  },
  {
    "category": "Armazenamento e upgrades",
    "name": "Cabo SATA 3.0 para HD/SSD",
    "price": "10,00",
    "icon": "fa-ethernet",
    "description": "Cabo SATA para conexão de unidade de armazenamento.",
    "note": "Produto"
  },
  {
    "category": "Armazenamento e upgrades",
    "name": "Instalação de SSD M.2 SATA/NVMe",
    "price": "100,00",
    "icon": "fa-memory",
    "description": "Instalação de unidade M.2, conforme compatibilidade da placa-mãe.",
    "note": "Compatibilidade sob consulta"
  },
  {
    "category": "Armazenamento e upgrades",
    "name": "Instalação de memória RAM",
    "price": "100,00",
    "icon": "fa-memory",
    "description": "Instalação e teste de memória RAM compatível.",
    "note": "Mão de obra"
  },
  {
    "category": "Armazenamento e upgrades",
    "name": "Memória RAM DDR2 2 GB",
    "price": "40,00",
    "icon": "fa-memory",
    "description": "Módulo de memória DDR2 de 2 GB. Valor e estoque sujeitos ao mercado.",
    "note": "Estoque sob consulta"
  },
  {
    "category": "Armazenamento e upgrades",
    "name": "Troca de processador",
    "price": "210,00",
    "icon": "fa-microchip",
    "description": "Substituição do processador conforme compatibilidade.",
    "note": "Peça / compatibilidade sob consulta"
  },
  {
    "category": "Peças e componentes",
    "name": "Placa de rede Ethernet",
    "price": "50,00",
    "icon": "fa-ethernet",
    "description": "Placa de rede cabeada; confirme modelo e compatibilidade.",
    "note": "Preço sujeito ao mercado"
  },
  {
    "category": "Peças e componentes",
    "name": "Troca / instalação de placa-mãe",
    "price": "50,00",
    "icon": "fa-chess-board",
    "description": "Instalação ou substituição de placa-mãe compatível.",
    "note": "Peça não inclusa"
  },
  {
    "category": "Peças e componentes",
    "name": "Troca / instalação de placa de áudio",
    "price": "50,00",
    "icon": "fa-volume-high",
    "description": "Instalação ou substituição da placa de áudio.",
    "note": "Peça não inclusa"
  },
  {
    "category": "Peças e componentes",
    "name": "Fonte ATX KMEX 200 W",
    "price": "83,00",
    "icon": "fa-plug",
    "description": "Fonte ATX nominal de 200 W. Confirme estoque e compatibilidade.",
    "note": "Produto"
  },
  {
    "category": "Peças e componentes",
    "name": "Fonte gamer T-Dagger 600 W",
    "price": "260,00",
    "icon": "fa-plug-circle-bolt",
    "description": "Fonte gamer de 600 W. Confirme estoque e compatibilidade.",
    "note": "Produto"
  },
  {
    "category": "Peças e componentes",
    "name": "Troca de fonte",
    "price": "60,00",
    "icon": "fa-plug",
    "description": "Mão de obra para substituição da fonte.",
    "note": "Peça não inclusa"
  },
  {
    "category": "Peças e componentes",
    "name": "Cooler 140 mm 12 V",
    "price": "42,51",
    "icon": "fa-fan",
    "description": "Ventoinha de 140 mm e 12 V. Confirme compatibilidade.",
    "note": "Produto"
  },
  {
    "category": "Peças e componentes",
    "name": "Air Cooler Master Hyper H412R",
    "price": "168,81",
    "icon": "fa-fan",
    "description": "Cooler para processador. Confirme compatibilidade antes da compra.",
    "note": "Produto"
  },
  {
    "category": "Peças e componentes",
    "name": "Bateria CMOS 3 V",
    "price": "10,00",
    "icon": "fa-battery-half",
    "description": "Bateria para relógio e configurações da BIOS. Preço pode variar conforme mercado.",
    "note": "Valor sujeito ao mercado"
  },
  {
    "category": "Rede e periféricos",
    "name": "Configuração de rede / Wi-Fi",
    "price": "100,00",
    "icon": "fa-wifi",
    "description": "Configuração de roteador e conexão de dispositivos.",
    "note": "Roteador e dispositivos"
  },
  {
    "category": "Rede e periféricos",
    "name": "Configuração de impressora",
    "price": "80,00",
    "icon": "fa-print",
    "description": "Instalação e configuração de impressora USB ou Wi-Fi.",
    "note": "USB ou Wi-Fi"
  },
  {
    "category": "Suporte técnico",
    "name": "Suporte remoto (1 hora)",
    "price": "80,00",
    "icon": "fa-headset",
    "description": "Atendimento remoto para resolver problemas de software e configuração.",
    "note": "1 hora"
  },
  {
    "category": "Suporte técnico",
    "name": "Suporte presencial (1 hora)",
    "price": "120,00",
    "icon": "fa-user-gear",
    "description": "Atendimento presencial em Belo Horizonte e região.",
    "note": "1 hora"
  },
  {
    "category": "Suporte técnico",
    "name": "Visita técnica",
    "price": "120,00",
    "icon": "fa-location-dot",
    "description": "Visita para avaliação e suporte. O valor pode variar pela distância.",
    "note": "Distância pode alterar o valor"
  },
  {
    "category": "Suporte técnico",
    "name": "Recuperação simples de arquivos",
    "price": "200,00",
    "icon": "fa-file-circle-question",
    "description": "Tentativa de recuperação lógica em casos sem dano físico.",
    "note": "Sujeito à avaliação"
  },
  {
    "category": "Montagem e configuração",
    "name": "Montagem de computador",
    "price": "180,00",
    "icon": "fa-computer",
    "description": "Montagem de PC novo e organização dos componentes.",
    "note": "Peças não inclusas"
  },
  {
    "category": "Montagem e configuração",
    "name": "Troca de tela de notebook",
    "price": "220,00",
    "icon": "fa-laptop",
    "description": "Serviço de substituição de tela. Peça e compatibilidade sob consulta.",
    "note": "Peça sob consulta"
  },
  {
    "category": "Montagem e configuração",
    "name": "Instalação de programas licenciados",
    "price": "30,00",
    "icon": "fa-window-maximize",
    "description": "Instalação de software com licença válida fornecida pelo cliente.",
    "note": "Licença não inclusa"
  }
];
  const grid = document.querySelector('#servicesGrid');
  const search = document.querySelector('#servicesSearch');
  const count = document.querySelector('#servicesCount');
  const categoryBar = document.querySelector('#serviceCategories');
  const sort = document.querySelector('#servicesSort');
  let activeCategory = 'Todos';
  const money = value => 'R$ ' + value;
  const waLink = service => {
    const msg = `Olá! Tenho interesse no serviço: ${service.name}. Valor informado: ${money(service.price)}. Gostaria de mais informações e confirmar disponibilidade/valor final.`;
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  };
  function initializeCatalog() {
    const categories = ['Todos', ...new Set(services.map(s => s.category))];
    categoryBar.innerHTML = categories.map(cat => `<button class="service-filter${cat === 'Todos' ? ' is-active' : ''}" type="button" data-category="${cat}">${cat === 'Todos' ? '<i class="fa-solid fa-grip"></i> ' : ''}${cat}</button>`).join('');
    function render() {
      const query = (search.value || '').trim().toLocaleLowerCase('pt-BR');
      let filtered = services.filter(s => (activeCategory === 'Todos' || s.category === activeCategory) && `${s.name} ${s.category} ${s.description} ${s.note}`.toLocaleLowerCase('pt-BR').includes(query));
      if (sort.value === 'asc') filtered.sort((a,b) => Number(String(a.price).replace(',','.')) - Number(String(b.price).replace(',','.')));
      if (sort.value === 'desc') filtered.sort((a,b) => Number(String(b.price).replace(',','.')) - Number(String(a.price).replace(',','.')));
      count.textContent = `${filtered.length} ${filtered.length === 1 ? 'serviço encontrado' : 'serviços encontrados'}`;
      grid.innerHTML = filtered.length ? filtered.map(s => `<article class="service-card">
        <a class="service-card-main" href="${waLink(s)}" target="_blank" rel="noopener noreferrer" aria-label="Consultar ${s.name} pelo WhatsApp">
          <div class="service-card-top"><span class="service-icon"><i class="fa-solid ${s.icon}"></i></span><span class="service-arrow"><i class="fa-solid fa-arrow-up-right-from-square"></i></span></div>
          <span class="service-category">${s.category}</span><h2>${s.name}</h2><p>${s.description}</p>
          ${s.note ? `<span class="service-note"><i class="fa-solid fa-circle-info"></i> ${s.note}</span>` : ''}
          <div class="service-card-bottom"><span class="service-price-label">Valor informado</span><strong>R$ ${s.price}</strong></div>
          <span class="service-cta"><i class="fa-brands fa-whatsapp"></i> Consultar pelo WhatsApp</span>
        </a></article>`).join('') : `<div class="services-empty"><i class="fa-solid fa-magnifying-glass"></i><h2>Nenhum serviço encontrado</h2><p>Tente outro termo ou selecione uma categoria diferente.</p><button type="button" id="clearServiceFilters">Limpar filtros</button></div>`;
      const clear = document.querySelector('#clearServiceFilters');
      if (clear) clear.addEventListener('click', () => { search.value = ''; activeCategory = 'Todos'; sort.value = 'default'; categoryBar.querySelectorAll('button').forEach(b => b.classList.toggle('is-active', b.dataset.category === 'Todos')); render(); });
    }
    categoryBar.addEventListener('click', e => { const btn = e.target.closest('[data-category]'); if (!btn) return; activeCategory = btn.dataset.category; categoryBar.querySelectorAll('button').forEach(b => b.classList.toggle('is-active', b === btn)); render(); });
    search.addEventListener('input', render); sort.addEventListener('change', render);
    document.querySelectorAll('[data-quick-category]').forEach(btn => btn.addEventListener('click', () => { activeCategory = btn.dataset.quickCategory; categoryBar.querySelectorAll('button').forEach(b => b.classList.toggle('is-active', b.dataset.category === activeCategory)); document.querySelector('#servicesCatalog').scrollIntoView({behavior:'smooth',block:'start'}); render(); }));
    render();
  }
  fetch('config/services.json', { cache: 'no-store' })
    .then(response => { if (!response.ok) throw new Error('Não foi possível carregar o catálogo'); return response.json(); })
    .then(data => { if (Array.isArray(data)) services = data; })
    .catch(() => { /* Usa o catálogo de reserva embutido para manter a página disponível. */ })
    .finally(initializeCatalog);
})();
