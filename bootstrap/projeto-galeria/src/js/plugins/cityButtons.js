import $ from 'jquery'

const duration = 600

function filterByCity(city) {
    $('[wm-city]').each(function (i, e) {
        const isTarget = $(this).attr('wm-city') == city
            || city == null
        
        if (isTarget) {
            $(this).fadeIn(duration)
        } else {
            $(this).fadeOut(duration)
        }
    })
}

const cityButtons = $('[wm-city-buttons]')
const cities = new Set

$('[wm-city]').each(function (i, e) {
    cities.add($(this).attr('[wm-city'))
})
