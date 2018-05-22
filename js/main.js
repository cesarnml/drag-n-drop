// # Grab Elements
const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

// # Fill Listeners
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// # Loops through empties and call drag events
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)
}

// # Drag Functions
function dragStart () {
  this.className += ' hold'
  setTimeout(() => (this.className = 'invisible'), 0)
}

function dragEnd () {
  this.className = 'fill'
}

function dragOver (e) {
  e.preventDefault()
  console.log('dragOver')
}

function dragEnter () {
  console.log('dragEnter')
}

function dragLeave () {
  console.log('dragLeave')
}

function dragDrop () {
  console.log('dragDrop')
}
