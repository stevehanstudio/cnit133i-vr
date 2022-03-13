AFRAME.registerComponent('rotate-cylinder', {
  init: function() {
    const { el } = this
    this.rotateCylinder = function() {
      const curRotationX = el.getAttribute('rotation.x')
      const params = {
        property: 'rotation.x',
        to: curRotationX - 180,
        dur: 2000,
        loop: -1,
        easing: 'easeInOutCirc'
      }
      el.setAttribute('animation', params)
    }
    el.addEventListener('click', this.rotateCylinder)
  },
  remove: function() {
    el.removeEventListener('click', this.rotateCylinder)
  }
})

AFRAME.registerComponent('lift-sphere', {
  init: function() {
    const { el } = this
    this.liftSphere = function() {
      const curPosition = el.getAttribute('position')
      const params = {
        property: 'position',
        to: {
          x: curPosition.x,
          y: curPosition.y + 0.5,
          z: curPosition.z
        },
        dur: 1000,
        easing: 'easeInOutCubic'
      }
      el.setAttribute('animation', params)
    }
    el.addEventListener('click', this.liftSphere)
  },
  remove: function() {
    el.removeEventListener('click', this.liftSphere)
  }
})

AFRAME.registerComponent('change-color', {
	init: function () {
		const { el } = this
    console.log(el);
		this.changeColor = function () {
			const curColor = el.getAttribute('color')
			// note: colors get converted from hex to RGBA
			// const newColor = curColor === '#4655b8' ? '#E6C72E' : '#4655b8'
			const newColor =
				curColor === 'rgba(230,199,46,1)'
					? 'rgba(70,85,46,1)'
					: 'rgba(230,199,46,1)'
			// console.log('color', curColor, newColor)
			const params = {
				property: 'color',
				to: newColor,
				dur: 1000,
				easing: 'easeInOutCubic',
			}
			el.setAttribute('animation__click', params)
		}
		this.el.addEventListener('click', this.changeColor)
	},
	remove: function () {
		this.el.removeEventListener('click', this.changeColor)
	},
})

