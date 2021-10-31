function getArticleGenerator(articles) {
    // TODO
    let content = document.querySelector('#content');
    let data = articles.slice(0);
    return function showNextArticle() {
        if (data[0] != undefined) {
            let article = document.createElement('article');
            article.innerHTML = data.shift();
            content.appendChild(article);
        }
       return showNextArticle;
    }
}
