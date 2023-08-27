//* https://www.codewars.com/kata/616eedc41d5644001ff97462/train/typescript
import { assert } from 'chai';
import { countAndSort } from '../kingdoms-ep3';



describe('Basic Tests', function () {
	it('basic', function () {
		assert.deepEqual(countAndSort(['z**', 'a**', '**z']), ['a', 'z']);
		assert.deepEqual(countAndSort(['z**', '*a*', '***']), ['z', 'a']);
		assert.deepEqual(countAndSort(['z*B', '*a*', '**z']), ['b', 'z', 'a']);
		assert.deepEqual(
			countAndSort(['a****', '*****', '**z**', 'a*k**', '****z']),
			['a', 'k', 'z']
		);
		assert.deepEqual(
			countAndSort([
				'a*****S',
				'*******',
				'**z****',
				'a*kOA**',
				'***L**z',
				'*****gG',
				'******z',
			]),
			['s', 'k', 'g', 'z', 'l', 'a', 'o']
		);
		assert.deepEqual(countAndSort(['*a*', '***', '*b*']), ['a', 'b']);
		assert.deepEqual(countAndSort(['*A*', '*b*', '***']), ['a', 'b']);
		assert.deepEqual(countAndSort(['A']), ['a']);
		assert.deepEqual(countAndSort(['*']), []);
	});

	it('New Edge', function () {
		assert.deepEqual(
			countAndSort([
				'**f*c*f**',
				'*Yf*yAF**',
				'Z*D***e**',
				'*dy**d*d*',
				'**Ze***Dd',
				'**Z*e*Y*A',
				'Da*yfC***',
				'F***Y*z**',
				'zez***f**',
			]),
			['c', 'a', 'e', 'f', 'z', 'd', 'y']
		);
	});
});
