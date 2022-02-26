$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $('header').addClass('js-show-header')
    } else {
      $('header').removeClass('js-show-header')
    }
  })

  var windowsize = $(window).width()

  toggleNavbar(windowsize)

  $(window).resize(function () {
    windowsize = $(window).width()
    toggleNavbar(windowsize)
  })

  $('#toggler').click(function () {
    if ($('#header').hasClass('js-navbar-collapsed')) {
      closeNavbar()
    } else {
      openNavbar()
    }
  })

  $('#closeNavBtn').click(function () {
    closeNavbar()
  })

  // Smooth scroll
  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault()

    if ($(window).width() < 1199.98) {
      closeNavbar()
    }

    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top,
      },
      800
    )
  })
})

function toggleNavbar(windowsize) {
  if (windowsize < 1199.98) {
    $('#header').addClass('navbar-collapsed')
  } else {
    closeNavbar()
  }
}

function openNavbar() {
  $('#header').addClass('js-navbar-collapsed')
  $('body').addClass('overflow')
}

function closeNavbar() {
  $('#header').removeClass('js-navbar-collapsed')
  $('body').removeClass('overflow')
}
