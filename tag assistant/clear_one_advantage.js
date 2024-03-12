const body = document.querySelector('body');

const form_closest = body.closest('form');

const types_value = [
	...document.querySelectorAll('input[name="q_debt_types"]:checked'),
]
	.map((item) => item.value)
	.join();

const bills_value = document.querySelector(
	'input[name="q_bills"]:checked'
).value;

//es5 code
function test() {
	const checkedItems = [];
	const checkboxes = document.querySelectorAll(
		'input[name="q_debt_types"]:checked'
	);
	for (let i = 0; i < checkboxes.length; i++) {
		checkedItems.push(checkboxes[i].value);
	}
	let joinedValues = '';
	for (let i = 0; i < checkedItems.length; i++) {
		joinedValues += checkedItems[i];
		if (i < checkedItems.length - 1) {
			joinedValues += ',';
		}
	}
	return joinedValues;
}
test();
