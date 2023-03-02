let fetchData = [];
const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => {
            if (data?.status) {
                showCategory(data.data);
                // console.log(data.data);
            } else {
                alert(`Can't fetch data from server`);
                return;
            }
        })
}
const showCategory = (categories) => {
    // console.log(categories.news_category);
    const categorySection = document.getElementById('category-section');
    // console.log(categorySection);
    categories.news_category.forEach(category => {
        const categoryItem = document.createElement('p');
        categoryItem.innerHTML = `
        <a href='#' class='nav-link' onclick="fetchCategoryNews('${category.category_id}','${category.category_name}')">${category.category_name}</a>
        `;
        categorySection.appendChild(categoryItem);
    })
}
const fetchCategoryNews = (id, categoryName) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    // console.log(url);
    // console.log(id, categoryName);
    fetch(url)
        .then(res => res.json())
        .then(data => displayCategoryNews(data.data, categoryName))
}
const displayCategoryNews = (categoryNews, categoryName) => {
    // console.log(news);
    fetchData = categoryNews;
    // console.log(fetchData)
    document.getElementById('news-count').innerText = categoryNews.length;
    document.getElementById('category-name').innerText = categoryName;
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    categoryNews.forEach(newsItem => {
        const { title, image_url, author, _id, rating, total_view, details
        } = newsItem;
        // console.log(title, image_url, author, _id, rating, total_view, details);
        newsContainer.innerHTML += `
        <div class="card mb-3 w-100">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${image_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                            <p class="card-text">${details.slice(0, 200)}...</p>
                            <div class="d-flex align-items-center justify-content-around mt-4">
                                <div class="d-flex align-items-center">
                                    <div>
                                        <img width="40" height="40" class="rounded-pill"  src="${author.img}" alt="author img">
                                    </div>
                                    <div class="ms-3">
                                    <p class="mb-0">${author.name}</p>
                                    <p class="mb-0">${author.published_date
            }</p>
                                    </div>
                                </div>
                                <div>
                                    <svg style="width: 24px; height:24px;" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>${total_view}</span>

                                </div>
                                <div>
                                    <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>

                                </div>
                                <div>
                                    <svg onclick="fetchNewsDetail('${_id}')" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        `;
    })

}
const fetchNewsDetail = (id) => {
    const url = `https://openapi.programming-hero.com/api/news/${id}`;
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => showNewsDetails(data.data[0]))
}
const showNewsDetails = (newsDetail) => {
    // console.log(newsDetail);
    const { image_url, details, title, author } = newsDetail;
    // console.log(image_url, details, title, author);
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
    <img class="img-fluid" src="${image_url}"> 
    <h3 class="my-3">${title}</h3>  
    <p>${details}</p>
    <div class="d-flex align-items-center mt-4 ">
                                <div class="d-flex justify-content-between">
                                <div>
                                <img width="40" height="40" class="rounded-pill"  src="${author.img}" alt="author img">
                            </div>
                            <div class="ms-3">
                            <p class="mb-0">${author.name}</p>
                            <p class="mb-0">${author.published_date}</p>
                                </div>
                                <div>
                                    <svg style="width: 24px; height:24px;" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>546</span>

                                </div>
                                <div>
                                    <svg style="width: 24px; height: 24px" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                        class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                    </svg>
                                    
                                    
                                    

                                </div>
                                
                            </div>
    `;

}
const showTodaysPick = () => {
    const trending = fetchData.filter(item => item.others_info.is_trending === true
    );
    const category_name = document.getElementById("category-name").innerText;
    console.log(trending, category_name);
    displayCategoryNews(trending, category_name);
}