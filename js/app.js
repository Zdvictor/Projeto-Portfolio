let myObserver = new IntersectionObserver( (entries) => {


    entries.forEach( (entry) => {


        if(entry.isIntersecting) {
            
            
            entry.target.classList.add('show')


        }else {

            
            entry.target.classList.add('hiddenOut')


        }


    })


})


let elements = document.querySelectorAll('.hidden')


elements.forEach( element => {


    myObserver.observe(element)


})


function modalFutSchool() {

    document.querySelector('#modalFutSchool').click()


}

function modalPlaze() {

    document.querySelector('#modalPlaze').click()


}

function modalMines() {

    document.querySelector('#modalMines').click()


}