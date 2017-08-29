import _ from 'lodash';

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button');

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	btn.innerHTML = 'Click me and check console message.';
	btn.onclick = function(){console.log('Code Splitting!')};

	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());