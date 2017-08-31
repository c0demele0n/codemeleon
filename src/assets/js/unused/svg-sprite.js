import $ from 'jquery'
import svg4everybody from 'svg4everybody'

export default class SVGSprite {
  constructor(el) {
		let
			templateUrl = $(el).data('template-url') ? $(el).data('template-url') : '',
			spriteUrl = templateUrl ? templateUrl + '/assets-opt/svg/sprite.svg' : __dirname + 'svg/sprite.svg'

		$.get(spriteUrl).done((data) => {
			this.placeSprite(el, data)
			svg4everybody()
		})
  }

  placeSprite(el, data) {
	  el.innerHTML = new XMLSerializer().serializeToString(data.documentElement)
	  document.body.insertBefore(el, document.body.childNodes[0])
	}
}
