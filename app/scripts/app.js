$('#exampleModal').on('show.bs.modal', event => {
  var button = $(event.relatedTarget);
  var modal = $(this);
  // Use above variables to manipulate the DOM
  
});

var $mediaElements = $('.media');

$('.filter_link').click(function(e){
    e.preventDefault();
    // get the category from the attribute
    var filterVal = $(this).data('filter');

    if(filterVal === 'all'){
      $mediaElements.show();
    }else{
       // hide all then filter the ones to show
       $mediaElements.hide().filter('.' + filterVal).show();
    }
});