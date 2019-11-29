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
    instance = new YlThirdPartyLoanApiClient.LoanRefinancingDetailsModel();
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

  describe('LoanRefinancingDetailsModel', function() {
    it('should create an instance of LoanRefinancingDetailsModel', function() {
      // uncomment below and update the code to test LoanRefinancingDetailsModel
      //var instane = new YlThirdPartyLoanApiClient.LoanRefinancingDetailsModel();
      //expect(instance).to.be.a(YlThirdPartyLoanApiClient.LoanRefinancingDetailsModel);
    });

    it('should have the property refinancingFromLoanDetails (base name: "refinancingFromLoanDetails")', function() {
      // uncomment below and update the code to test the property refinancingFromLoanDetails
      //var instane = new YlThirdPartyLoanApiClient.LoanRefinancingDetailsModel();
      //expect(instance).to.be();
    });

    it('should have the property refinancingToLoanDetails (base name: "refinancingToLoanDetails")', function() {
      // uncomment below and update the code to test the property refinancingToLoanDetails
      //var instane = new YlThirdPartyLoanApiClient.LoanRefinancingDetailsModel();
      //expect(instance).to.be();
    });

  });

}));
