# Coding Kata - Roman Numerals

### Usage

To convert a roman numeral through this function, run the NODE APP and pass it a number as an argument:

```
const generateNumber = function (InputNumber) {

	if (numberRange(InputNumber) && dataValidation(InputNumber)) {

		return 'Please provide a number between 1 and 3999';

	} else {
		return converterAlgorithm(InputNumber);

	}


}
```

#### Example

```
Change this function (generateNumber(34));

run npm install

run node app

```

Will output: `XXXIV`

#### Test suite

To run the test: install dependencies and run the NPM `test` script:

```
npm install
npm test
```


