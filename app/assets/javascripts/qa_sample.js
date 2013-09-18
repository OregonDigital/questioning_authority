// Sample JQuery functions

/**
  This function queries our questioning_authorities engine, and process the result for 
  use with .typeahead.  

  lcshQuery
    sends the url /terms?vocab=lcsh&q=MySubject
    
    and returns the data to .typeahaed as:
      ["MySubjectFoo", "MySubjectBar"]

**/
function suggestionQuery(query, vocab, process) {

  $.ajax({ 
    url: '/terms?vocab='+vocab+'&q='+query,
    dataType: 'json'
  }).success(function(data) {
    process(data);
  }).fail(function(jqXHR, textStatus, errorThrown) {
    alert(url);
  });      

}


jQuery(document).ready(function() {

  // Typeahead features
 
  // Calls the lcshQuery function to get an array of terms that match query
  $('.qa-suggest').typeahead({ source: function (query, process) { suggestionQuery(query, this.$element.data('vocabulary'), process) }
});
  

});