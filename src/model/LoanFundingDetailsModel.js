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

import ApiClient from '../ApiClient';
import LoanFundingPaymentModel from './LoanFundingPaymentModel';

/**
 * The LoanFundingDetailsModel model module.
 * @module model/LoanFundingDetailsModel
 * @version v1.0
 */
class LoanFundingDetailsModel {
    /**
     * Constructs a new <code>LoanFundingDetailsModel</code>.
     * A model detailing a given loan&#39;s funding
     * @alias module:model/LoanFundingDetailsModel
     */
    constructor() { 
        
        LoanFundingDetailsModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoanFundingDetailsModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoanFundingDetailsModel} obj Optional instance to populate.
     * @return {module:model/LoanFundingDetailsModel} The populated <code>LoanFundingDetailsModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoanFundingDetailsModel();

            if (data.hasOwnProperty('fundingAmount')) {
                obj['fundingAmount'] = ApiClient.convertToType(data['fundingAmount'], 'Number');
            }
            if (data.hasOwnProperty('fundingDate')) {
                obj['fundingDate'] = ApiClient.convertToType(data['fundingDate'], 'Date');
            }
            if (data.hasOwnProperty('fundingPayments')) {
                obj['fundingPayments'] = ApiClient.convertToType(data['fundingPayments'], [LoanFundingPaymentModel]);
            }
            if (data.hasOwnProperty('amountFunded')) {
                obj['amountFunded'] = ApiClient.convertToType(data['amountFunded'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Gets or sets the Funding Amount, equal to the Amount Funded when the loan is fully funded
 * @member {Number} fundingAmount
 */
LoanFundingDetailsModel.prototype['fundingAmount'] = undefined;

/**
 * Gets or sets the date on which the loan became fully funded
 * @member {Date} fundingDate
 */
LoanFundingDetailsModel.prototype['fundingDate'] = undefined;

/**
 * Gets or sets a collection of Funding Payments
 * @member {Array.<module:model/LoanFundingPaymentModel>} fundingPayments
 */
LoanFundingDetailsModel.prototype['fundingPayments'] = undefined;

/**
 * Gets or sets the Amount Funded
 * @member {Number} amountFunded
 */
LoanFundingDetailsModel.prototype['amountFunded'] = undefined;






export default LoanFundingDetailsModel;

