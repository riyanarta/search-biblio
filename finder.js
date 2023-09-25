
  $(document).ready(function(){
    $.ajaxSetup({ cache: false });
    $('#inp').keypress(function(){
        $('#resultlist').html('');
        $('#state').val('');
        var searchField = $('#inp').val();
        var expression = new RegExp(searchField, "i");

        $.getJSON('buku.json', function(data) {
          $.each(data, function(key, value){
            if (value.id.search(expression) != -1 || value.judul.search(expression) != -1 || value.call.search(expression) != -1){
              $('#resultlist').append(`
                <li class="list-group-item link-class">
                  <span class="id">`+value.id+`</span><br>
                  <span class="">`+value.judul+`</span>
                  <span class="text-muted" style="float: right;">`+value.call+`</span>
                </li>`);
            }
          });   
        });
    });

    $('#resultlist').on('click', 'li', function() {
      let id_book = $(this).children('.id').text();

      $('#id_book').val(id_book);
      $("#resultlist").html('');
    });
  });
