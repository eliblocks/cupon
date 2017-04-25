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
                        <h4 class="card-title deal-title">${deal.merchant.name}</h4>
                      </div>
                    </div>`
  return cardString;
}

function printCards(data) {
  $.each(data.deals, function(index, deal) {
    $("#deal-row").append(cardString(deal));
  });
}



