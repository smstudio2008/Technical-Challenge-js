const expect = require('chai').expect;
const should = require('chai').should();
const assert = require('chai').assert;

const romanChecker = require('../public/assets/js/formulaAssets').RomanValidation;
const formulaChecker = require('../public/assets/js/formulaCalculation').RomanFormula;
const dataInput = require('../public/assets/js/formulaAssets').DataValidation;
const rangeChecker = require('../public/assets/js/formulaAssets').OutOfRange;

describe('RomanValidation', () => {
	it('Check & returns  if the correct Numbers Object array has been changed or mis-typed', () => {
		expect(romanChecker().M).to.equal(1000);
		expect(romanChecker().CM).to.equal(900);
		expect(romanChecker().D).to.equal(500);
		expect(romanChecker().CD).to.equal(400);
		expect(romanChecker().C).to.equal(100);
		expect(romanChecker().XC).to.equal(90);
		expect(romanChecker().L).to.equal(50);
		expect(romanChecker().XL).to.equal(40);
		expect(romanChecker().X).to.equal(10);
		expect(romanChecker().IX).to.equal(9);
		expect(romanChecker().V).to.equal(5);
		expect(romanChecker().IV).to.equal(4);
		expect(romanChecker().I).to.equal(1);
	});
});

describe('RomanFormula', () => {
	it('Check & returns if the formula generate the correct value of the converted number', () => {
		formulaChecker(1).should.equal('I');
		formulaChecker(4).should.equal('IV');
		formulaChecker(5).should.equal('V');
		formulaChecker(9).should.equal('IX');
		formulaChecker(10).should.equal('X');
		formulaChecker(40).should.equal('XL');
		formulaChecker(50).should.equal('L');
		formulaChecker(90).should.equal('XC');
		formulaChecker(100).should.equal('C');
		formulaChecker(400).should.equal('CD');
		formulaChecker(500).should.equal('D');
		formulaChecker(900).should.equal('CM');
		formulaChecker(1000).should.equal('M');
	});
});

describe('DataValidation', () => {
	it('Check & returns if the input data is number', () => {
		assert.typeOf(dataInput(4), 'number');
		assert.typeOf(dataInput(34), 'number');
		assert.typeOf(dataInput(534), 'number');
		assert.typeOf(dataInput(344), 'number');
		assert.typeOf(dataInput(124), 'number');
		assert.typeOf(dataInput(412), 'number');
	});

	it('Check & returns if the input data is not number', () => {
		assert.isNotNumber(dataInput('e4'), 'number');
		assert.isNotNumber(dataInput('XL'), 'number');
		assert.isNotNumber(dataInput('NUM'), 'number');
		assert.isNotNumber(dataInput('sal'), 'number');
		assert.isNotNumber(dataInput('O'), 'number');
		assert.isNotNumber(dataInput('M'), 'number');
	});
});

describe('OutOfRange', () => {
	it('returns true if the number out of range [1, 3999]', () => {
		assert.isTrue(rangeChecker(-9), 'out of range');
		assert.isTrue(rangeChecker(344550), 'out of range');
		assert.isTrue(rangeChecker(12200), 'out of range');
		assert.isTrue(rangeChecker(43243242340), 'out of range');
	});
	it('returns false if the number out of range', () => {
		assert.isFalse(rangeChecker(45), 'In range');
		assert.isFalse(rangeChecker(201), 'In range');
		assert.isFalse(rangeChecker(9), 'In range');
	});
});
