const marvel = {
    render: () => {

        const urlAPI = "https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=afeb5e0d47c6c03b9f9288034df4323e&hash=dfb39ae59e16687fefb70b9a5d9be780";
        const container = document.querySelector("#marvel-row");
        let contentHTML = " ";

        fetch(urlAPI)
            .then(res => res.json())
            .then((json) => {

                for (const hero of json.data.results) {
                    let urlHero = hero.urls[0].url;
                    contentHTML += `
                        
                        <div class="col-md-4">
                            <a href="${urlHero}" target="_blank">
                                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}"
                                    class="img-thumbnail">
                            </a>
                            <h3 class="title">${hero.name}</h3>
                        </div>`;
                }
                container.innerHTML = contentHTML;
            })
    }
};
marvel.render();

//This is my work
