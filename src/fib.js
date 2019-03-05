// Re-set the document title
document.title = 'TODO: Dynamic Fibonacci Sequence in JavaScript';

// Create a red div in the body of the document
var div = document.createElement('div');
div.setAttribute('class', 'red fib-container');
document.querySelector('body').appendChild(div);

// Make a paragraph to hold some instructions
var para = document.createElement('p');
para.textContent = "Write code necessary to";
div.appendChild(para);

var ol = document.createElement('ol');
div.appendChild(ol)

var li = document.createElement('li');
li.textContent = "create a <form>";
ol.appendChild(li);

li = document.createElement('li');
li.textContent = "an <input> of type 'range' with the 'onchange' attribute which calls a JavaScript function";
ol.appendChild(li);

li = document.createElement('li');
li.textContent = "as well as any other functions needed to compute the Fibonacci numbers recursively";
ol.appendChild(li);


li = document.createElement('li');
li.textContent = "and create a <div> for each recursive function call";
ol.appendChild(li);

li = document.createElement('li');
li.textContent = "adding more stuff to this unordered list to mess with javascript";
ol.appendChild(li);

var treeSlider = function(me) {
    // get the value from the slider
    var form = me.parentNode;

    var value = parseInt(me.value);
    console.log(value);

    // Put the slider's value into the <label>
    var label = document.querySelector('label#tree-label');
    label.textContent = `Tree(${value})`;

    // Remove an existing list of numbers found in a <div> of class 'fib-list'
    var tree = document.querySelector('#tree-of-divs');
    if (tree) {
        tree.remove();
    }

    tree = document.createElement('div');
    tree.id = 'tree-of-divs';
    tree.setAttribute('class', 'fib-container');

    var treeObj = recursiveBinTree(value);
    tree.appendChild(treeObj);

    form.parentNode.appendChild(tree);
}