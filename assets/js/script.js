const menuItens = document.querySelectorAll('.menu a')

// Verificar a distancia entre o alvo e o topo

function getScrollTopByHref(element) {
   const id = element.getAttribute('href')
   return document.querySelector(id).offsetTop
}

// Animar o scroll até o alvo

function scrollToPosition(to) {
   
   smoothScrollTo(0, to)

}

// Verificar se o item foi clicado e fazer a referencia para o alvo dele

function scrollToIdOnClick(event) {
   event.preventDefault()
   const to = getScrollTopByHref(event.currentTarget) - 80
   scrollToPosition(to)
}

menuItens.forEach(item => {
   item.addEventListener('click', scrollToIdOnClick)
})

function smoothScrollTo(endX, endY, duration) {
   const startX = window.scrollX || window.pageXOffset;
   const startY = window.scrollY || window.pageYOffset;
   const distanceX = endX - startX;
   const distanceY = endY - startY;
   const startTime = new Date().getTime();

   duration = typeof duration !== 'undefined' ? duration : 400;

   // Ease function
   const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
   };

   const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
         clearInterval(timer);
      }
      window.scroll(newX, newY);
   }, 1000 / 60);
};

/*Validando o Formulario*/
function enviar() {
   let nome = document.querySelector('#nome')
   let email = document.querySelector('#email')
   let conheceu = document.querySelector('#conheceu')
   let data = document.querySelector('#dtNasc')
   let estado = document.querySelector('#estado')

   /*VERIFICANDO SE OS CAMPOS ESTAO VAZIOS E EMAIL ESTA VALIDO*/ 
   if (nome.value == '' || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || conheceu.value == '' || data.value == '' || estado.options[estado.selectedIndex].value == '') {
      alert('Preencha todos os campos antes de enviar o formulário!')
   } else {
    alert('Formulário enviado com sucesso!')
   }
      
}