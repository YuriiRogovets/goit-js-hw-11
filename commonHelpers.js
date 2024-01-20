import{i as u,S as f}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const d=document.querySelector(".search-form"),n=document.querySelector(".gallery"),p="https://pixabay.com/api",m="41900218-778e908913d1efd90b8f97d56",h="photo",g="horizontal",y="true";d.addEventListener("submit",v);console.log(n);function v(r){r.preventDefault();const t=r.currentTarget;console.log(t);const l=t.elements.query.value;console.log(l),$(l).then(s=>{s.hits.length===0&&u.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),b(s.hits)}).catch(s=>console.error(s)).finally(()=>t.reset)}function $(r){return fetch(`${p}?key=${m}&q=${r}&image_type=${h}&orientation=${g}&safesearch=${y}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const L=new f(".gallery a",{captionsData:"alt",captionDelay:250});function b(r){const t=r.map(({largeImageURL:l,webformatURL:s,tags:e,likes:o,views:i,comments:a,downloads:c})=>`<li class="gallery-card">
        <a class="gallery-link" href="${s}">
            <img 
                class="gallery-image"
                    src="${l}"
                    alt="${e}"/>
        </a>
        
        <div class="titles-box">
            <div class="title-element">
                <p class="title-text">Likes:</p>
                <p class="title-value">${o} </p>
            </div>
            <div class="title-element">
                <p class="title-text">Views:</p>
                <p class="title-value">${i} </p>
            </div>
            <div class="title-element">
                <p class="title-text">Comments:</p>
                <p class="title-value">${a} </p>
            </div>
            <div class="title-element">
                <p class="title-text">Downloads:</p>
                <p class="title-value">${c} </p>
            </div>
        </div>
    </li>`).join("");n.innerHTML=t,L.refresh()}
//# sourceMappingURL=commonHelpers.js.map
