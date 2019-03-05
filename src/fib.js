// Re-set the document title
document.title = 'TODO: Dynamic Fibonacci Sequence in JavaScript';

// Create a red div in the body of the document
var div = document.createElement('div');
div.setAttribute('class', 'red fib-container');
document.querySelector('body').appendChild(div);

// Make a paragraph to hold some instructions
/*var para = document.createElement('p');
para.textContent = "Write code necessary to";
div.appendChild(para);*/

var para = document.createElement('p');
para.textContent = "Slider for Fibbonacci Sequence ";
div.appendChild(para);



/*    <form id="list-of-divs">
        <label for="list-slider" id="list-label">List(0)</label>
        <input id="list-slider" type="range"
               min="0" max="50" value="0"
               oninput="listSlider(this)"
        />
    </form>*/


var f = document.createElement('form');
f.setAttribute('id', 'list-of-divs');

var l = document.createElement('label');
l.textContent = 'Fib (0)';
l.setAttribute('id', 'list-label');

var input = document.createElement('input');
input.setAttribute('type','range');
input.setAttribute('min', '0');
input.setAttribute('max', '11');
input.setAttribute('value', '0');
input.setAttribute('oninput', 'listSlider(this)');

f.appendChild(l);
f.appendChild(input);

div.appendChild(f);

var div2 = document.createElement('div');
div2.setAttribute('class', 'fib-container');
div2.setAttribute('id', 'tree-of-divs');
div.appendChild(div2);

/*<div id="tree-of-divs" class="fib-container">
        <div class="fib-item">
            <p>0</p>
        </div>
    </div>*/

var newDiv = document.createElement('div');
newDiv.setAttribute('class', 'fib-item');

var p = document.createElement('p');
p.textContent = 'Fib(0) = 0';
newDiv.appendChild(p);

div2.appendChild(newDiv);
var fib = function(val) {
    if (val == 0 ) {
        return 0;
    }
    if (val == 1 ) {
        return 1;
    }
    if (val == 2 ) {
        return 1;
    }
    return fib(val-1) + fib(val-2)
}

var recursiveBinTree = function(depth) {
    var newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'fib-item');
    var newP = document.createElement('p');
    newP.textContent = `Fib(${depth}) = ${depth}`
    newDiv.appendChild(newP);

    if (depth === 0) {
        return newDiv;
    }
    else {
        var left = recursiveBinTree(depth -1);
        var cls = left.getAttribute('class');
        left.setAttribute('class', `fib-left ${cls}`);
        newDiv.appendChild(left);

        var right = recursiveBinTree( depth -1);
        cls = right.getAttribute('class');
        right.setAttribute('class', `fib-right ${cls}`);
        newDiv.appendChild(right);

        return newDiv;
    }
}

var listSlider = function(me) {
    //var value = me.value;
    // Put the slider's value into the <label>
    var label = document.querySelector('#list-label');
    label.textContent = `Fib(${me.value})`;

    var tree = document.querySelector('#tree-of-divs');
    if (tree) {
        tree.remove();
    }

    tree = document.createElement('div');
    tree.setAttribute('id', 'tree-of-divs');
    tree.setAttribute('class', 'fib-container');

    var treeObj = recursiveBinTree(me.value);
    tree.appendChild(treeObj);

    var theForm = document.querySelector('#list-of-divs');
    theForm.appendChild(tree);
}




