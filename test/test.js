const { assert } = require('chai');
const request = require('supertest');
const app = require('../server/app1');


describe('app2', function () {
	it('msg should be hello, server2 ', function (done) {
		request(app)
			.get('/')
			.expect(function (res) {
				assert.equal(res.body.msg, 'hello, server2');
			})
			.expect(200, done);
	});	
});

describe('app1', function () {
	it('', function (done) {
		request(app)
			.get('/')
			.expect(function (res) {
				console.log(res.body);
			})
			.expect(200, done);
	});
});