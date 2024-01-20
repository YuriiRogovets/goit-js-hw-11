import{i as u,S as d}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const p=document.querySelector(".search-form"),f=document.querySelector(".gallery"),n=document.querySelector(".loader"),m="https://pixabay.com/api/",y="41900218-778e908913d1efd90b8f97d56",h="photo",g="horizontal",v="true";n.style.display="none";p.addEventListener("submit",$);function $(s){s.preventDefault(),n.style.display="block";const r=s.currentTarget,l=r.elements.query.value;b(l).then(o=>{o.hits.length===0&&u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",icon:"none"}),S(o.hits)}).catch(o=>console.error(o)).finally(()=>{r.reset(),n.style.display="none"})}function b(s){return fetch(`${m}?key=${y}&q=${s}&image_type=${h}&orientation=${g}&safesearch=${v}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const L=new d(".gallery a",{captionsData:"alt",captionDelay:250});function S(s){const r=s.map(({largeImageURL:l,webformatURL:o,tags:e,likes:t,views:i,comments:a,downloads:c})=>`<li class="gallery-card">
        <a class="gallery-link" href="${o}">
            <img 
                class="gallery-image"
                    src="${l}"
                    alt="${e}"/>
        </a>
        
        <div class="titles-box">
            <div class="title-element">
                <p class="title-text">Likes:</p>
                <p class="title-value">${t} </p>
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
    </li>`).join("");f.innerHTML=r,L.refresh()}
//# sourceMappingURL=commonHelpers.js.map
