document.addEventListener('DOMContentLoaded', () => {
  const yesBtn = document.getElementById('yes');
  const noBtn  = document.getElementById('no');
  const overlay = document.getElementById('overlay');
  const msg = document.getElementById('msg');
  const close = document.getElementById('close');

  let yesCount = 0;
  let noCount = 0;

  function show(text) {
    msg.textContent = text;
    overlay.style.display = 'grid';
  }

  close.onclick = () => overlay.style.display = 'none';

  yesBtn.onclick = () => {
    yesCount++;
    if (yesCount === 1) {
      show("Awww really? 🥹");
    }
    else if (yesCount === 2) {
      show("Yay! One more time? 💕");
    }
    else {
      show("Sobrang saya ko! Thank you! 🎀");
      setTimeout(() => {
        overlay.style.display = 'none';

        // Update the letter content to the final message
        document.querySelector('.letter-content').innerHTML = `
          <h2 style="color:#ff4d6d; text-align:center;">Finally ♡</h2>
          <p style="text-align:center; margin:2rem 0;">
            Valentine ko na si<br>
            <strong>Miss Grisette Directo</strong>
          </p>
          <p style="text-align:center;">Salamat. ❤️</p>
        `;

        // Wait a bit more so the user can see the final message
        setTimeout(() => {
          // Try to close the window/tab
          window.close();

          // Fallback message if the browser blocks window.close()
          // (most modern browsers block it unless the window was opened by script)
          if (!window.closed) {
            document.body.innerHTML = `
              <div style="height:100vh; display:grid; place-items:center; text-align:center; font-size:1.4rem;">
                <div>
                  <h1 style="color:#ff4d6d;">Thank you! 💕</h1>
                  <p>You can now close this tab/window.</p>
                </div>
              </div>
            `;
          }
        }, 1800); // 1.8 seconds delay before trying to close

      }, 1200);
    }
  };

  noBtn.onclick = () => {
    noCount++;
    if (noCount === 1) show("Uy sure ka? 😢");
    else if (noCount === 2) show("Hala... wag naman 🥺");
    else show("Okay... maiintindihan ko na 😭");
  };
});