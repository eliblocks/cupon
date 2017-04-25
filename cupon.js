$(function() {
  data = "";
  getDeals();
  //printCards(groupon);
});

function getDeals() {
  $.getJSON("sfdeals.json", function(groupon) {
    data = groupon;
    printCards(data)
  });
  return data;
}

function cardString(deal) {
  var cardString = `<div class="col-md-5">
                      <div class="card deal-card">
                        <img class="card=img-top" src="${deal.largeImageUrl}">
                        <div class="card-block">
                          <p deal-title">${deal.title}</p>
                        </div>
                        <div class="card-block">
                          <span class="price">
                            ${deal.options[0].price.formattedAmount}
                          </span>
                          <span class="quantity">
                            ${deal.soldQuantityMessage} bought
                          </span>
                        </div>
                      </div>
                    </div>`
  return cardString;
}

function printCards(data) {
  $.each(data.deals, function(index, deal) {
    $("#deal-row").append(cardString(deal));
  });
}



