import{S as d,i as f}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const p=document.querySelector(".search-form"),a=document.querySelector(".gallery"),n=document.querySelector(".loader"),m=new d(".gallery a",{captionsData:"alt",captionDelay:250});p.addEventListener("submit",h);function h(o){o.preventDefault(),n.style.display="block",a.innerHTML="";const s=o.currentTarget,l=s.elements.query.value.trim();y(l).then(r=>{r.hits.length===0&&f.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red",icon:"none"}),g(r.hits)}).catch(r=>console.error(r)).finally(()=>{s.reset(),n.style.display="none"})}function y(o){const s="https://pixabay.com/api",l="41900218-778e908913d1efd90b8f97d56",r=new URLSearchParams({key:l,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${s}/?${r}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function g(o){const s=o.map(({largeImageURL:l,webformatURL:r,tags:e,likes:t,views:i,comments:c,downloads:u})=>`<li class="gallery-card">
        <a class="gallery-link" href="${l}">
            <img 
                class="gallery-image"
                    src="${r}"
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
                <p class="title-value">${c} </p>
            </div>
            <div class="title-element">
                <p class="title-text">Downloads:</p>
                <p class="title-value">${u} </p>
            </div>
        </div>
    </li>`).join("");a.insertAdjacentHTML("beforeend",s),m.refresh()}
//# sourceMappingURL=commonHelpers.js.map
