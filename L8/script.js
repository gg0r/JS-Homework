let arr = [{
        name: "Rose",
        family: "Rosaceae",
        description: 'Best flowers in town.',
        imgSrc: "https://nashzelenyimir.ru/wp-content/uploads/2016/09/%D0%A0%D0%BE%D0%B7%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-720x340.jpg"
    },
    {
        name: "Violet",
        family: 'Violaceae',
        description: 'Best flowers in town.',
        imgSrc: "https://nashzelenyimir.ru/wp-content/uploads/2016/08/%D0%A4%D0%B8%D0%B0%D0%BB%D0%BA%D0%B0-%D0%B4%D0%BE%D0%BC%D0%B0%D1%88%D0%BD%D1%8F%D1%8F-%D1%81%D0%B5%D0%BD%D0%BF%D0%BE%D0%BB%D0%B8%D1%8F-%D1%84%D0%BE%D1%82%D0%BE-720x340.jpg"
    },
    {
        name: "Lilac",
        family: 'Oleaceae',
        description: 'Best flowers in town.',
        imgSrc: "https://nashzelenyimir.ru/wp-content/uploads/2016/07/%D0%A1%D0%B8%D1%80%D0%B5%D0%BD%D1%8C-%D1%84%D0%BE%D1%82%D0%BE-720x340.jpg"

    },
    {
        name: "Carnation",
        family: 'Caryophyllaceae',
        description: 'Best flowers in town.',
        imgSrc: "https://nashzelenyimir.ru/wp-content/uploads/2016/08/%D0%93%D0%B2%D0%BE%D0%B7%D0%B4%D0%B8%D0%BA%D0%B0-%D1%84%D0%BE%D1%82%D0%BE-720x340.jpeg"
    },
    {
        name: "Tulip",
        family: 'Liliaceae',
        description: 'Best flowers in town.',
        imgSrc: "https://nashzelenyimir.ru/wp-content/uploads/2016/07/%D0%A2%D1%8E%D0%BB%D1%8C%D0%BF%D0%B0%D0%BD-%D1%84%D0%BE%D1%82%D0%BE-720x340.jpg"

    },
    {
        name: "Orchid",
        family: 'Orchidaceae',
        description: 'Best flowers in town.',
        imgSrc: "https://nashzelenyimir.ru/wp-content/uploads/2016/06/%D0%9E%D1%80%D1%85%D0%B8%D0%B4%D0%B5%D1%8F-%D1%84%D0%BE%D1%82%D0%BE-720x340.jpg"

    },
    {
        name: "Hydrangea",
        family: '	Hydrangeaceae',
        description: 'Best flowers in town.',
        imgSrc: "https://nashzelenyimir.ru/wp-content/uploads/2015/10/%D0%93%D0%BE%D1%80%D1%82%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F-%D1%84%D0%BE%D1%82%D0%BE-%D1%83%D1%85%D0%BE%D0%B4-720x340.jpg"

    },
    {
        name: "Marigold",
        family: 'Asteraceae',
        description: 'Best flowers in town.',
        imgSrc: "https://nashzelenyimir.ru/wp-content/uploads/2017/02/%D0%91%D0%B0%D1%80%D1%85%D0%B0%D1%82%D1%86%D1%8B-%D1%84%D0%BE%D1%82%D0%BE-720x340.jpg"
    },
    {
        name: "Daisy",
        family: 'Asteraceae',
        description: 'Best flowers in town.',
        imgSrc: "https://nashzelenyimir.ru/wp-content/uploads/2015/09/%D1%84%D0%BE%D1%82%D0%BE-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0-%D0%BC%D0%B0%D1%80%D0%B3%D0%B0%D1%80%D0%B8%D1%82%D0%BA%D0%B8-%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D0%B2-720x340.jpg"

    }


]

let wrapper = document.querySelector('.wrapper');

function createCard(parent, cardObject) {
    let card = document.createElement('div');
    card.classList.add("card");

    card.innerHTML = `
    <div class="picture">
      <img src='${cardObject.imgSrc}' alt="picture">
    </div>
    <div class="heading">
      <h3>${cardObject.name}</h3>
      <h4> ${cardObject.family}</h4>
    </div>

    <div class="desc-block">
      ${cardObject.description}
    </div>

    <div class="action-block">
      <div class="order">
        Order
      </div>

    </div>
  `;

    parent.append(card)
}

arr.forEach(function(card) {
    createCard(wrapper, card)
});