
    function displayBrowserInfo() {
      const browserName = navigator.appName;
      const version = navigator.appVersion;
      const browserInfo = `You are using ${browserName} version ${version}`;
      
      const div = document.createElement('div');
      div.id = 'browser-info';
      div.textContent = browserInfo;
      
      document.body.appendChild(div);
    }

    displayBrowserInfo();
  
