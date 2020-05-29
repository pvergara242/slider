function nextSlide() {
    var itemsSlider = document.getElementsByClassName('slider-item')
    var activeItem = itemsSlider[0]
    var nextItem = itemsSlider[1]
    var lengthItemsSlider = itemsSlider.length
    if(lengthItemsSlider < 2) {
        console.error('El slider debe tener al menos 2 imágenes para un correcto funcionamiento')
    }
    for(var index = 0; index < lengthItemsSlider; index++) {
        var currentItem = itemsSlider[index]
        if(currentItem.classList.contains('active')) {
            activeItem = currentItem

            
            if(index < lengthItemsSlider - 1 ) {
                nextItem = itemsSlider[index + 1]
            }
            
            else {
                nextItem = itemsSlider[0]
            }
        }
    }

    activeItem.classList.remove('active')
    nextItem.classList.add('active')
}

   
function prevSlide() {
    var itemsSlider = document.getElementsByClassName('slider-item')
    var activeItem = itemsSlider[2]
    var nextItem = itemsSlider[1]
    
    for(var index = 0; index < 3 ; index++) {        
        var currentItem = itemsSlider[index]
        if(currentItem.classList.contains('active'))
          { activeItem = currentItem
            if(index > 0 ) {nextItem = itemsSlider[index - 1]}
            else {nextItem = itemsSlider[index + 2]}
          }
    }
  
    activeItem.classList.remove('active')
    nextItem.classList.add('active')
}


