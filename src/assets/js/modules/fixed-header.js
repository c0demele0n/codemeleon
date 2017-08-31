import $ from 'jquery'

export default class FixedHeader {
  constructor(el) {
    let
      $el = $(el),
      $window = $(window)

    $window.scroll(() => {
      if ($window.scrollTop() > 0) $el.addClass('is-stuck').removeClass('is-at-top')
      else $el.addClass('is-at-top').removeClass('is-stuck')
    }).trigger('scroll')
  }
}