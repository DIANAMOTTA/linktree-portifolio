document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('cookie-popup');
    const acceptBtn = document.getElementById('accept-cookies');
  
    // Mostra o pop-up apenas se o usuário não tiver aceitado antes
    if (!localStorage.getItem('cookies-accepted')) {
      popup.style.display = 'block';
    }
  
    // Ao clicar em "Aceitar"
    acceptBtn.addEventListener('click', function() {
      localStorage.setItem('cookies-accepted', 'true');
      popup.style.display = 'none';
      loadGoogleAnalytics(); // Carrega o Google Analytics
    });
  
    // Função para carregar o GA
    function loadGoogleAnalytics() {
      if (localStorage.getItem('cookies-accepted') === 'true') {
        // Script do Google Analytics (substitua G-XXXXXXXXXX pelo seu ID)
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-WY5DPTLF71';
        document.head.appendChild(script);
  
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', 'G-WY5DPTLF71');
      }
    }
  
    // Carrega o GA se já tiver sido aceito antes
    loadGoogleAnalytics();
  });