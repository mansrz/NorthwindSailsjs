$(document).ready(function(){
  $('.tooltipped').tooltip({delay: 50});
  $('.orders').each(function(i, data){
    var id = $(data).data('id');
    $('.delete[data-id="'+id+'"]').click(function(){
      $.ajax({
        url: '/orders/'+id,
        type: 'DELETE',
        success: function(result) {
          $('tr[data-id="'+id+'"]').remove();
        }
      });
    });
    $('.update[data-id="'+id+'"]').click(function(){
      var shipname = $('tr[data-id="'+id+'"] .shipname').text();
      var shipcity = $('tr[data-id="'+id+'"] .shipcity').text();
      $('#first_name').val(shipname);
      $('#last_name').val(shipcity);
      $('#modal1').openModal();
      $('#send').click(function(){
        var shipname = $('#first_name').val();
        var shipcity = $('#last_name').val();
        $.ajax({
          url: '/orders/'+id+'/',
          type: 'PUT',
          data: {'ShipCity':shipcity, 'ShipName':shipname},
          success: function(result) {
            $('#modal1').closeModal();
            $('tr[data-id="'+id+'"] .shipname').text(shipname);
            $('tr[data-id="'+id+'"] .shipcity').text(shipcity);
            Materialize.toast('Modificado', 3000, 'rounded');
          }
        });
      });
    });
  });
  $.get('/customers/', function(data){
    $(data).each(function(i, data_){
      var customer = data_;
      var option = '<option value="'+customer.CustomerID+'">'+customer.ContactName+'</option>';
      $('#customerID').append(option);
    });
    $('select').material_select();
  });
  $('#nuevo').click(function(){
    $('#modal2').openModal();
  });
  $('#save').click(function(){
    $.post('/orders/', {
      CustomersID: 'RATTC',
      EmployeeID: 1,
      OrderDate: '1998-05-06',
      RequiredDate: '1998-06-03',
      ShipVia: 2,
      Freight: 8.52999973,
      ShipName: 'Rattlesnake Canyon Grocery',
      ShipAddress: '2817 Milton Dr.',
      ShipCity: 'Albuquerque',
      ShipRegion:'NM',
      ShipPostalCode:'87110',
      ShipCountry:'USA'
    }, function(data){
      $('tbody').append('<tr data-');
    });
  });
  $('#login').click(function(){
    $.post('/login/', {'email':$('input[name="email"]').val(), 'password':$('input[name="password"]').val()}
        ).done(function(){
      windows.location= '/orders/list/';
    });
  });
});
