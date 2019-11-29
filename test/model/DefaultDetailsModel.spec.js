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
    instance = new YlThirdPartyLoanApiClient.DefaultDetailsModel();
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

  describe('DefaultDetailsModel', function() {
    it('should create an instance of DefaultDetailsModel', function() {
      // uncomment below and update the code to test DefaultDetailsModel
      //var instane = new YlThirdPartyLoanApiClient.DefaultDetailsModel();
      //expect(instance).to.be.a(YlThirdPartyLoanApiClient.DefaultDetailsModel);
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instane = new YlThirdPartyLoanApiClient.DefaultDetailsModel();
      //expect(instance).to.be();
    });

    it('should have the property reasonDetails (base name: "reasonDetails")', function() {
      // uncomment below and update the code to test the property reasonDetails
      //var instane = new YlThirdPartyLoanApiClient.DefaultDetailsModel();
      //expect(instance).to.be();
    });

    it('should have the property dateDefaulted (base name: "dateDefaulted")', function() {
      // uncomment below and update the code to test the property dateDefaulted
      //var instane = new YlThirdPartyLoanApiClient.DefaultDetailsModel();
      //expect(instance).to.be();
    });

    it('should have the property currentAmountAtTimeOfDefault (base name: "currentAmountAtTimeOfDefault")', function() {
      // uncomment below and update the code to test the property currentAmountAtTimeOfDefault
      //var instane = new YlThirdPartyLoanApiClient.DefaultDetailsModel();
      //expect(instance).to.be();
    });

  });

}));