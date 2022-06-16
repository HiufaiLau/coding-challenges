<!DOCTYPE html>
<html lang="en" dir="ltr">
	<head>
		<meta charset="utf-8" />
		<title>Simple Calculator using HTML, CSS and JavaScript</title>
		<!-- <link rel="stylesheet" href="styles.css" /> -->
		<style>
			@import url("https://fonts.googleapis.com/css2?family=Orbitron&display=swap");
			.calculator {
				padding: 10px;
				border-radius: 1em;
				height: 380px;
				width: 400px;
				margin: auto;
				background-color: #191b28;
				box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
					rgba(0, 0, 0, 0.23) 0px 6px 6px;
			}
			.display-box {
				font-family: "Orbitron", sans-serif;
				background-color: #dcdbe1;
				border: solid black 0.5px;
				color: black;
				border-radius: 5px;
				width: 100%;
				height: 65%;
			}
			.button {
				font-family: "Orbitron", sans-serif;
				background-color: #64278f;
				color: white;
				border: solid black 0.5px;
				width: 100%;
				border-radius: 5px;
				height: 70%;
				outline: none;
			}
			.button:active {
				background: #e5e5e5;
				-webkit-box-shadow: inset 0px 0px 5px #c1c1c1;
				-moz-box-shadow: inset 0px 0px 5px #c1c1c1;
				box-shadow: inset 0px 0px 5px #c1c1c1;
			}
		</style>
	</head>

	<body>
		<table class="calculator">
			<tr>
				<td colspan="3">
					<input class="display-box" type="text" id="result" disabled />
				</td>
				<!-- clearScreen() function clear all the values  -->
				<td>
					<input
						class="button"
						type="button"
						value="C"
						onclick="clearScreen()"
						style="background-color: #fb0066"
					/>
				</td>
			</tr>
			<tr>
				<!-- display() function display the value of clicked button -->
				<td>
					<input
						class="button"
						type="button"
						value="1"
						onclick="display('1')"
					/>
				</td>
				<td>
					<input
						class="button"
						type="button"
						value="2"
						onclick="display('2')"
					/>
				</td>
				<td>
					<input
						class="button"
						type="button"
						value="3"
						onclick="display('3')"
					/>
				</td>
				<td>
					<input
						class="button"
						type="button"
						value="/"
						onclick="display('/')"
					/>
				</td>
			</tr>
			<tr>
				<td>
					<input
						class="button"
						type="button"
						value="4"
						onclick="display('4')"
					/>
				</td>
				<td>
					<input
						class="button"
						type="button"
						value="5"
						onclick="display('5')"
					/>
				</td>
				<td>
					<input
						class="button"
						type="button"
						value="6"
						onclick="display('6')"
					/>
				</td>
				<td>
					<input
						class="button"
						type="button"
						value="-"
						onclick="display('-')"
					/>
				</td>
			</tr>
			<tr>
				<td>
					<input
						class="button"
						type="button"
						value="7"
						onclick="display('7')"
					/>
				</td>
				<td>
					<input
						class="button"
						type="button"
						value="8"
						onclick="display('8')"
					/>
				</td>
				<td>
					<input
						class="button"
						type="button"
						value="9"
						onclick="display('9')"
					/>
				</td>
				<td>
					<input
						class="button"
						type="button"
						value="+"
						onclick="display('+')"
					/>
				</td>
			</tr>
			<tr>
				<td>
					<input
						class="button"
						type="button"
						value="."
						onclick="display('.')"
					/>
				</td>
				<td>
					<input
						class="button"
						type="button"
						value="0"
						onclick="display('0')"
					/>
				</td>
				<!-- calculate() function evaluate the mathematical expression  -->
				<td>
					<input
						class="button"
						type="button"
						value="="
						onclick="calculate()"
						style="background-color: #fb0066"
					/>
				</td>
				<td>
					<input
						class="button"
						type="button"
						value="*"
						onclick="display('*')"
					/>
				</td>
			</tr>
		</table>
		<script type="text/javascript">
			// This function clear all the values
			function clearScreen() {
				document.getElementById("result").value = "";
			}

			// This function display values
			function display(value) {
				document.getElementById("result").value += value;
			}
			// This function evaluates the expression and return result
			function calculate() {
				let p = document.getElementById("result").value;
				let q = eval(p);
				document.getElementById("result").value = q;
			}
		</script>
	</body>
</html>
