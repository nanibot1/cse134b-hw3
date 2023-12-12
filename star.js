customElements.define("rating-widget", class extends HTMLElement {
    set rating(rate) {
      if (!String(rate).includes("%")) rate = Number(rate) / this.stars * 100 + "%";
      this.querySelector(":nth-child(2)").setAttribute("width", rate); //2nd rect
    }
    connectedCallback() {
      let {bgcolor,stars,nocolor,color,rating} = this.attributes;
      let repeat = (count, func) => Array(count).fill().map(func);
      this.stars = ~~stars.value || 5;
      this.innerHTML = `<svg viewBox="0 0 ${this.stars*100} 100" style=cursor:pointer>` +
        `<rect height=100 fill=${nocolor.value} width=100% />` +
        `<rect height=100 fill=${color.value} />` +
        repeat(this.stars    , (i, n) => `<path fill=${bgcolor.value} d="m${ n*100 } 0h102v100h-102v-100m91 42a6 6 90 00-4-10l-22-1a1 1 90 01-1 0l-8-21a6 6 90 00-11 0l-8 21a1 1 90 01-1 1l-22 1a6 6 90 00-4 10l18 14a1 1 90 010 1l-6 22a6 6 90 008 6l19-13a1 1 90 011 0l19 13a6 6 90 006 0a6 6 90 002-6l-6-22a1 1 90 010-1z"/>`) +
        repeat(this.stars * 2, (i, n) => `<rect x=${ n*100 } n=${n+1} opacity=0 width=50 height=100 ` +
          ` onclick="this.closest('rating-widget').dispatchEvent(new Event('click'))" ` +
          ` onmouseover="this.closest('rating-widget').rating=${(n+1)}"/>`) +
        "</svg>";
      this.rating = rating.value;
    }

});
