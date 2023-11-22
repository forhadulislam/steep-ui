import React from "react";

const Scraping = () => {

    scrapeWebPage('https://www.bobswatches.com/pre-owned-rolex-datejust-41-ref-126303-slate-roman-dial.html');



    return (
        <div className='scrap'>
            <h1>Scraping</h1>
        </div>
    );
}



function scrapeWebPage(webpage) {

    const url = 'https://api.allorigins.win/raw?url=' + encodeURIComponent(webpage)
    // var url = 'https://www.bobswatches.com/pre-owned-rolex-datejust-41-ref-126303-slate-roman-dial.html';

    fetch(url)
        .then(response => response.text())
        .then(contents => {

            console.log(contents);

            const parser = new DOMParser(),
            dom = parser.parseFromString(contents, "text/html");

            let Price = dom.querySelector('meta[property="product:sale_price:amount"]').content;
            let Currency = dom.querySelector('meta[property="product:sale_price:currency"]').content;
            let FormattedPrice = dom.querySelector('meta[name="twitter:data1"]').content;

            console.log(Price, Currency);
            console.log(FormattedPrice);

            console.log(dom.scripts.item(5));

        })
        .catch(() => console.log("Can’t access response. Blocked by browser?"))
}

export default Scraping;