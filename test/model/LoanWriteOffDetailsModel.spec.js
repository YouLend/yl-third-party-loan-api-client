/**
 * Third Party Loan API
 * Through this API you can can retrieve loan data
 *
 * The version of the OpenAPI document: v1.0
 * Contact: mark.ufland@youlend.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.YlThirdPartyLoanApiClient);
  }
}(this, function(expect, YlThirdPartyLoanApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new YlThirdPartyLoanApiClient.LoanWriteOffDetailsModel();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LoanWriteOffDetailsModel', function() {
    it('should create an instance of LoanWriteOffDetailsModel', function() {
      // uncomment below and update the code to test LoanWriteOffDetailsModel
      //var instane = new YlThirdPartyLoanApiClient.LoanWriteOffDetailsModel();
      //expect(instance).to.be.a(YlThirdPartyLoanApiClient.LoanWriteOffDetailsModel);
    });

    it('should have the property paymentDate (base name: "paymentDate")', function() {
      // uncomment below and update the code to test the property paymentDate
      //var instane = new YlThirdPartyLoanApiClient.LoanWriteOffDetailsModel();
      //expect(instance).to.be();
    });

    it('should have the property paymentAmount (base name: "paymentAmount")', function() {
      // uncomment below and update the code to test the property paymentAmount
      //var instane = new YlThirdPartyLoanApiClient.LoanWriteOffDetailsModel();
      //expect(instance).to.be();
    });

  });

}));
