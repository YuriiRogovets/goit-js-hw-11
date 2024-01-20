import{i as d,S as p}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const f=document.querySelector(".search-form"),a=document.querySelector(".gallery"),n=document.querySelector(".loader"),m="https://pixabay.com/api",y="41900218-778e908913d1efd90b8f97d56",h="photo",g="horizontal",v="true";n.style.display="none";f.addEventListener("submit",$);console.log(a);function $(l){l.preventDefault(),n.style.display="block";const t=l.currentTarget;console.log(t);const r=t.elements.query.value;console.log(r),b(r).then(s=>{s.hits.length===0&&d.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),S(s.hits)}).catch(s=>console.error(s)).finally(()=>{t.reset(),n.style.display="none"})}function b(l){return fetch(`${m}?key=${y}&q=${l}&image_type=${h}&orientation=${g}&safesearch=${v}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const L=new p(".gallery a",{captionsData:"alt",captionDelay:250});function S(l){const t=l.map(({largeImageURL:r,webformatURL:s,tags:e,likes:o,views:i,comments:c,downloads:u})=>`<li class="gallery-card">
        <a class="gallery-link" href="${s}">
            <img 
                class="gallery-image"
                    src="${r}"
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
                <p class="title-value">${c} </p>
            </div>
            <div class="title-element">
                <p class="title-text">Downloads:</p>
                <p class="title-value">${u} </p>
            </div>
        </div>
    </li>`).join("");a.innerHTML=t,L.refresh()}
//# sourceMappingURL=commonHelpers.js.map
