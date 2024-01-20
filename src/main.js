import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.querySelector(".search-form");
const gallery = document.querySelector(".gallery");
const loaderEl = document.querySelector(".loader");

const BASE_URL = "https://pixabay.com/api";
const API_KEY = "41900218-778e908913d1efd90b8f97d56"
const imageType = "photo";
const orientation = "horizontal";
const safeSearch = "true";

loaderEl.style.display = "none";

searchForm.addEventListener("submit", handleSerch);


function handleSerch(event) {
    event.preventDefault();
    loaderEl.style.display = "block";

    const form = event.currentTarget;
    const q = form.elements.query.value;
    
    fetchImages(q)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                message: "Sorry, there are no images matching your search query. Please try again!",
                position: "topRight",
                backgroundColor: "red",
                icon: "none",
                });
            }
            createMarkup(data.hits);
        })
        .catch((err) => console.error(err))
        .finally(() => {
            form.reset();
            loaderEl.style.display = "none";

        });
}

function fetchImages(query) {
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=${imageType}&orientation=${orientation}&safesearch=${safeSearch}`).then(resp => {
        if (!resp.ok) {
            throw new Error(resp.status);
        }
        return resp.json()
    })
}

const lightboxEl = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,    
});


function createMarkup(arr) {
    const markup = arr.map(({ largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => 
    `<li class="gallery-card">
        <a class="gallery-link" href="${webformatURL}">
            <img 
                class="gallery-image"
                    src="${largeImageURL}"
                    alt="${tags}"/>
        </a>
        
        <div class="titles-box">
            <div class="title-element">
                <p class="title-text">Likes:</p>
                <p class="title-value">${likes} </p>
            </div>
            <div class="title-element">
                <p class="title-text">Views:</p>
                <p class="title-value">${views} </p>
            </div>
            <div class="title-element">
                <p class="title-text">Comments:</p>
                <p class="title-value">${comments} </p>
            </div>
            <div class="title-element">
                <p class="title-text">Downloads:</p>
                <p class="title-value">${downloads} </p>
            </div>
        </div>
    </li>`
    ).join("");

    gallery.innerHTML = markup;

    lightboxEl.refresh();
}

   



