/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var resolve = require( 'path' ).resolve;
var tape = require( 'tape' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var EPS = require( '@stdlib/constants-float32-eps' );
var uniform = require( '@stdlib/random-base-uniform' );
var abs = require( '@stdlib/math-base-special-abs' );
var float64ToFloat32 = require( '@stdlib/number-float64-base-to-float32' );
var tryRequire = require( '@stdlib/utils-try-require' );


// VARIABLES //

var asinf = tryRequire( resolve( __dirname, './../lib/native.js' ) );
var opts = {
	'skip': ( asinf instanceof Error )
};


// FIXTURES //

var data = require( './fixtures/julia/data.json' );
var smallNegative = require( './fixtures/julia/small_negative.json' );
var smallPositive = require( './fixtures/julia/small_positive.json' );


// TESTS //

tape( 'main export is a function', opts, function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof asinf, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function computes the arcsine', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = data.x;
	expected = data.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = asinf( ( ( x[ i ] ) ) );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.equal( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = 3.3 * EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the arcsine (small negative values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = smallNegative.x;
	expected = smallNegative.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = asinf( ( x[ i ] ) );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.equal( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function computes the arcsine (small positive values)', opts, function test( t ) {
	var expected;
	var delta;
	var tol;
	var x;
	var y;
	var i;
	var e;

	x = smallPositive.x;
	expected = smallPositive.expected;

	for ( i = 0; i < x.length; i++ ) {
		y = asinf( x[ i ] );
		e = float64ToFloat32( expected[ i ] );
		if ( y === e ) {
			t.equal( y, e, 'x: '+x[ i ]+'. E: '+e );
		} else {
			delta = abs( y - e );
			tol = EPS * abs( e );
			t.ok( delta <= tol, 'within tolerance. x: '+x[ i ]+'. y: '+y+'. E: '+e+'. tol: '+tol+'. Δ: '+delta+'.' );
		}
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN`', opts, function test( t ) {
	var v = asinf( NaN );
	t.equal( isnanf( v ), true, 'returns NaN' );
	t.end();
});

tape( 'the function returns `NaN` if provided a value less than `-1`', opts, function test( t ) {
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		v = v = uniform( -1.0e6, -1.0-EPS );
		t.equal( isnanf( asinf( v ) ), true, 'returns NaN when provided '+v );
	}
	t.end();
});

tape( 'the function returns `NaN` if provided a value greater than `+1`', opts, function test( t ) {
	var v;
	var i;

	for ( i = 0; i < 1e3; i++ ) {
		v = uniform( 1.0+EPS, 1.0e6 );
		t.equal( isnanf( asinf( v ) ), true, 'returns NaN when provided '+v );
	}
	t.end();
});
