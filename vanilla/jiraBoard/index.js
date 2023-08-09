const boardData = {
    todo: [{ id: '343', title: 'Story 1', type:'todo' }, { id: '356', title: 'Story 18', type:'todo' }, { id: '788',title:'story 56', type:'todo' }],
    inProgress: [{id: '346', title:'Story 2', type:'inProgress'}],
    done: [{id: '347', title:'Story 4',type:'done'}],
    wontDo:[{id: '349', title:'Story 5', type:'wontDo'},{id: '399', title:'Story 99', type:'wontDo'}],
}

function onCardClick(event) {
    console.log('this was clicked')
}

function drawBoard(boardData) { 
    Object.keys(boardData).forEach(function (cardType) {
        var cardsElement = document.querySelector(`#${cardType} > .cards`);
        // cardsElement.addEventListener('drop', function () {
        //     console.log('this is a valid drop zone')
        // })
        const fragment = document.createDocumentFragment();
        boardData[cardType].forEach(function (c) {
            var card = document.createElement('div');
            card.innerText = c.title;
            card.setAttribute('id', c.id);
            card.setAttribute('data-type', cardType)
          card.setAttribute('draggable', 'true');
          card.addEventListener('dragover', function (e) {
            e.preventDefault();
            console.log('something happened')
          })
            card.addEventListener('click', onCardClick)
            card.classList.add('card');
            fragment.appendChild(card);
        })
        cardsElement.appendChild(fragment);
    })
}

function addListenersToZones() {
    const zones = document.querySelectorAll('.zones');

    function onDragStart(event) {
        console.log('this', event.target);
    event.target.style.opacity = '0.1'
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', event.target.id);
  }

  function onDragEnd(event) {
    event.target.style.opacity = '1.0'
    zones.forEach(item => {
      item.classList.remove('over')
    })
  }

  function onDragOver(event) {
    event.preventDefault();
    return false;
  }

  function onDrop(event) {
      const card = document.querySelector(`#${event.target.id} #cards`)
      const divHere = document.getElementById(`${event.dataTransfer.getData('text/plain')}`);
      card.insertAdjacentElement("beforeend", divHere);
  }

  function onDragEnter(event) {
    this.classList.add('over')
  }

  function onDragLeave() {
    this.classList.remove('over')
  }
    zones.forEach(function (zone) {
        zone.addEventListener('dragstart', onDragStart);
        zone.addEventListener('dragend', onDragEnd);
        zone.addEventListener('dragenter', onDragEnter)
        zone.addEventListener('dragleave', onDragLeave)
        zone.addEventListener('dragover', onDragOver)
        zone.addEventListener('drop', onDrop)
    })
}

window.addEventListener('DOMContentLoaded', function (e) {
    addListenersToZones();
    drawBoard(boardData);
 })