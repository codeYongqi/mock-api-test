const { assert } = require('chai');
const sinon = require('sinon');
const request = require('supertest');
const app = require('../app');
const { user } = require('../routes/router1');

describe('router1 test2', function () {
	/*
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
		*/

	const agent = request.agent(app);
	agent.set('Accept', 'application/json')

	it('this should return user\'s info', function (done) {
		const body = {
			"name": "admin",
			"passwd": "root"
		}

		agent
		.post('/')
		.send(body)
		.expect(function (res) {
			let body = res.body.userInfo;
			console.log(body)
			assert.equal(body.age, 20);
			assert.equal(body.gender, 'male');
		})
		.expect(200, done);
	});
});

