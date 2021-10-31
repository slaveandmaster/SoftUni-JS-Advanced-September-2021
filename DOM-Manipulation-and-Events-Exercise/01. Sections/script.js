function create(words) {
   let content = document.querySelector('#content');
   //let createDiv = document.createElement('div');
   //second variant ot event propagation
   //content.addEventListener('click', onClick);
   // function onClick(e) {
   //    if (e.target.tagName == 'DIV' && e.target != content) {
   //       e.target.children[0].style.display = '';
   //    }
   // }
   words.forEach((e) => {
      let createDiv = document.createElement('div')
      let createParagraph = document.createElement('p');
      createParagraph.textContent = e;
      createParagraph.style.display = 'none';
      createDiv.appendChild(createParagraph);
      createDiv.addEventListener('click', onClick);
      content.appendChild(createDiv)
   })
   function onClick(e) {
      e.currentTarget.children[0].style.display = '';
   }
   
}