$(document).ready(function () {
    //validasi real-time untuk email
   $('#email').on('input blur', function() {
    const email = $(this).val();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === '') {
        $('#errorEmail').text('Email wajib diisi').show();
    } else if(!emailRegex.test(email)) {
        $('#errorEmail').text('Format email tidak valid').show();
    } else {
        $('#errorEmail').hide()
    }
  });
  // Validasi  saat submit
  $('#formDaftar').submit(function(event) {
    let valid = true;
    // Cek email
    if($('#email').val() === '') {
        $('#errorEmail').text('Email wajib diisi').show();
        valid = false;
    }
    // Cek password
    if($('#password').val().length < 6) {
        $('#errorPassword').text('Password minimal 6 karakter').show();
        valid = false;
    }
    if(!valid) {
        event.preventDefault();
    } else {
        alert('Form valid! Data bisa dikirim');
        //event.target.submit();//Uncomment untuk pengiriman sebenarnya
    }
  });
});