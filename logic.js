		let display = document.getElementById('display');
		
		function clearDisplay() {
			display.value = '';
		}
		
		function deleteChar() {
			display.value = display.value.slice(0, -1);
		}
		
		function appendValue(value) {
			if (value === '=') {
				try {
					display.value = eval(display.value);
				} catch (error) {
					display.value = 'Error';
				}
			} else {
				display.value += value;
			}
		}
