$(function() {
  getDeals();
});



function getDeals() {
  $.getJSON("sfdeals.json", function(data) {
    //printDeals(data.deals);
    returnData(data);
  });
}



function printDeals(data) {
  $.each(data, function(index, value) {
    console.log(value);
  });
}

function returnData(data) {
  return data;
}

