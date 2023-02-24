const addButton = document.getElementById('addButton');

addButton.addEventListener('click', _addRow);

function _addRow( e ){
const inputBox = e.target.previousSibling.previousSibling;

const value = inputBox.value;
inputBox.value = '';

const row = document.createElement('tr');

//adding list item name

row.appendChild(document.createElement('td'))
.appendChild(document.createTextNode( value ))

//adding remove button 

row.appendChild(document.createElement('td'))
.appendChild( document.createElement('button'))
.appendChild( document.createTextNode( 'Remove'))
.parentNode
.addEventListener('click', _removeRow);

document.getElementById('shoppingList').appendChild(row);
}

function _removeRow( e){
    const row = e.target.parentNode.parentNode;
    console.log(row);

    row.parentNode.removeChild(row)
}
