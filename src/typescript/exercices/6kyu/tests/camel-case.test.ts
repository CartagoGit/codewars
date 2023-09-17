import { camelCase } from "../camel-case";
import { assert, config } from "chai";
config.truncateThreshold = 0;

describe("Sample Test Cases", function () {
	it("Should return a CamelCased string", function () {
		assert.equal(camelCase(""), "");
		assert.equal(camelCase("test case"), "TestCase");
		assert.equal(camelCase("camel case method"), "CamelCaseMethod");
		assert.equal(camelCase("say hello"), "SayHello");
		assert.equal(camelCase("camel case word"), "CamelCaseWord");

        assert.equal(camelCase("camel case word"), "CamelCaseWord");
	});
});
