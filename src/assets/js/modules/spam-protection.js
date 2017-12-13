import $ from 'jquery'

export default class SpamProtection {
  constructor(el) {
    let
      $el = $(el),
      $result = $el.attr('href').replace('[at]', '@').replace('[dot]', '.')

    $el.attr('href', $result)
    if ($el.text().indexOf('[at]') > -1)
      $el.text($result.replace('mailto:', ''))
  }
}