const newsData = [
    {
        url: "https://cinderella-u149-anime.idolmaster-official.jp/news/detail/?id=4x-55rl3dczh&page=",
        date: "1025",
        content: "Blu-ray4巻パッケージ開封動画公開！"
    },
    {
        url: "https://cinderella-u149-anime.idolmaster-official.jp/news/detail/?id=em6xeo6ta&page=",
        date: "0927",
        content: "Blu-ray3巻パッケージ開封動画公開！"
    },
    {
        url: "https://cinderella-u149-anime.idolmaster-official.jp/news/detail/?id=c1bl0iaom&page=",
        date: "0911",
        content: "Blu-ray4巻　表紙イラスト公開！"
    },
    {
        url: "https://cinderella-u149-anime.idolmaster-official.jp/news/detail/?id=w603cp24iby&page=",
        date: "0909",
        content: "Blu-ray告知PV　佐城雪美・遊佐こずえver. 公開！"
    }
]

const news_content_list_items = document.querySelector('.news_content_list_items');

newsData.forEach(news =>{
    //li 要素
    const listItem = document.createElement('li');

    //a　要素
    const link = document.createElement('a');
    link.href = news.url;

    const datePara = document.createElement('p');
    datePara.classList.add('news_content_head_DATE');
    datePara.textContent = news.date;

    const contentPara = document.createElement('p');
    contentPara.classList.add('news_content_head_CONTENT', 'kiwi-maru-regular');
    contentPara.textContent = news.content;

    //a 要素に p 要素 追加
    link.appendChild(datePara);
    link.appendChild(contentPara);
    //li 要素に a 要素 追加
    listItem.appendChild(link);
    news_content_list_items.appendChild(listItem);
});