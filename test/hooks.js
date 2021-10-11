const app = require("../app")
const port = 3000

exports.mochaHooks = {
	beforeAll() {
		app.listen(port, () => {
			console.log(`Example app listening at http://localhost:${port}`)
		})
	}
}