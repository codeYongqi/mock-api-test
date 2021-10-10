const { assert } = require('chai');
const sinon = require('sinon');
const request = require('supertest');
const { app1, user } = require('../server/app1');

describe('app1 test', function () {
	let fakeGetUserInfo;

	before(function () {
		fakeGetUserInfo = sinon.stub(user, 'getUserInfo');
		fakeGetUserInfo.returns({
			age: 20,
    	gender: 'male',
    	hobbies: ['swimming'],
		})
	});

	after(() => {
		fakeGetUserInfo.restore();
	});

	it('this should return user\'s info',function (done) {
		request(app1)
			.get('/')
			.type('application/json')
			.send({
				"name": "admin",
				"passwd": "root"
			})
			.expect('Content-Type','application/json; charset=utf-8')
			.expect(function (res) {
				const userInfo = res.body.userInfo
				assert.equal(userInfo.age, 20);
				assert.equal(userInfo.gender, 'male');
				assert.equal(userInfo.hobbies[0], 'swimming');
			})
      .expect(200, done);
	});
});