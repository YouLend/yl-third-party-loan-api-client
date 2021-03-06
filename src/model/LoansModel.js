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
import LoanOwnerModel from './LoanOwnerModel';

/**
 * The LoansModel model module.
 * @module model/LoansModel
 * @version v1.0
 */
class LoansModel {
    /**
     * Constructs a new <code>LoansModel</code>.
     * Model representing one of a selection of loans
     * @alias module:model/LoansModel
     */
    constructor() { 
        
        LoansModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoansModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoansModel} obj Optional instance to populate.
     * @return {module:model/LoansModel} The populated <code>LoansModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoansModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('loanNumber')) {
                obj['loanNumber'] = ApiClient.convertToType(data['loanNumber'], 'Number');
            }
            if (data.hasOwnProperty('lenderId')) {
                obj['lenderId'] = ApiClient.convertToType(data['lenderId'], 'String');
            }
            if (data.hasOwnProperty('lenderName')) {
                obj['lenderName'] = ApiClient.convertToType(data['lenderName'], 'String');
            }
            if (data.hasOwnProperty('borrowerId')) {
                obj['borrowerId'] = ApiClient.convertToType(data['borrowerId'], 'String');
            }
            if (data.hasOwnProperty('borrowerName')) {
                obj['borrowerName'] = ApiClient.convertToType(data['borrowerName'], 'String');
            }
            if (data.hasOwnProperty('currentAmount')) {
                obj['currentAmount'] = ApiClient.convertToType(data['currentAmount'], 'Number');
            }
            if (data.hasOwnProperty('loanType')) {
                obj['loanType'] = ApiClient.convertToType(data['loanType'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('maturityDate')) {
                obj['maturityDate'] = ApiClient.convertToType(data['maturityDate'], 'Date');
            }
            if (data.hasOwnProperty('sweep')) {
                obj['sweep'] = ApiClient.convertToType(data['sweep'], 'Number');
            }
            if (data.hasOwnProperty('autoRepaymentSweep')) {
                obj['autoRepaymentSweep'] = ApiClient.convertToType(data['autoRepaymentSweep'], 'Boolean');
            }
            if (data.hasOwnProperty('currencyISOCode')) {
                obj['currencyISOCode'] = ApiClient.convertToType(data['currencyISOCode'], 'String');
            }
            if (data.hasOwnProperty('lendingPartnerIds')) {
                obj['lendingPartnerIds'] = ApiClient.convertToType(data['lendingPartnerIds'], ['String']);
            }
            if (data.hasOwnProperty('owners')) {
                obj['owners'] = ApiClient.convertToType(data['owners'], [LoanOwnerModel]);
            }
            if (data.hasOwnProperty('currentAmountAtRepay')) {
                obj['currentAmountAtRepay'] = ApiClient.convertToType(data['currentAmountAtRepay'], 'Number');
            }
            if (data.hasOwnProperty('currentAmountAtDelete')) {
                obj['currentAmountAtDelete'] = ApiClient.convertToType(data['currentAmountAtDelete'], 'Number');
            }
            if (data.hasOwnProperty('currentAmountAtWriteOff')) {
                obj['currentAmountAtWriteOff'] = ApiClient.convertToType(data['currentAmountAtWriteOff'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Gets or sets the loan's unique identifier
 * @member {String} id
 */
LoansModel.prototype['id'] = undefined;

/**
 * Gets or sets the Loan Number, an ordinal value indicating which of a customer's loans is here detailed
 * @member {Number} loanNumber
 */
LoansModel.prototype['loanNumber'] = undefined;

/**
 * Gets or sets the lender's unique identifier
 * @member {String} lenderId
 */
LoansModel.prototype['lenderId'] = undefined;

/**
 * Gets or sets the lender's full name
 * @member {String} lenderName
 */
LoansModel.prototype['lenderName'] = undefined;

/**
 * Gets or sets the borrower's unique identifier
 * @member {String} borrowerId
 */
LoansModel.prototype['borrowerId'] = undefined;

/**
 * Gets or sets the borrower's full name
 * @member {String} borrowerName
 */
LoansModel.prototype['borrowerName'] = undefined;

/**
 * Gets or sets the Current Amount, the amount yet to be repaid
 * @member {Number} currentAmount
 */
LoansModel.prototype['currentAmount'] = undefined;

/**
 * Gets or sets the Loan Type - \"Initial\", \"Refinanced\" or \"Renewal\"
 * @member {String} loanType
 */
LoansModel.prototype['loanType'] = undefined;

/**
 * Gets or sets the loan's Status - \"Deleted\", \"Funded\", \"Funded (Pending Settlement)\", \"Refinanced\", \"Repaid\", \"Written Off\"
 * @member {String} status
 */
LoansModel.prototype['status'] = undefined;

/**
 * Gets or sets the date on which the loan is due to mature, and by which it should be fully repaid
 * @member {Date} maturityDate
 */
LoansModel.prototype['maturityDate'] = undefined;

/**
 * Gets or sets the Sweep, the decimal out of 100 representing the proportion of transaction income to be used to repay the loan
 * @member {Number} sweep
 */
LoansModel.prototype['sweep'] = undefined;

/**
 * Gets or sets a value indicating whether an Auto Repayment Sweep is to be used - this feature automatically directs a chosen proportion, the Sweep, of transaction income towards repaying the loan
 * @member {Boolean} autoRepaymentSweep
 */
LoansModel.prototype['autoRepaymentSweep'] = undefined;

/**
 * Gets or sets the loan's Currency ISO Code, e.g. \"GBP\"
 * @member {String} currencyISOCode
 */
LoansModel.prototype['currencyISOCode'] = undefined;

/**
 * Gets or sets the unique identifiers of any lending partners associated with the loan
 * @member {Array.<String>} lendingPartnerIds
 */
LoansModel.prototype['lendingPartnerIds'] = undefined;

/**
 * Gets or sets a collection detailing the loan's Owners YL.Web.Api.ThirdParty.Loan.Models.LoanOwnerModel
 * @member {Array.<module:model/LoanOwnerModel>} owners
 */
LoansModel.prototype['owners'] = undefined;

/**
 * Gets or sets the Current Amount at the time of full loan repayment, if applicable
 * @member {Number} currentAmountAtRepay
 */
LoansModel.prototype['currentAmountAtRepay'] = undefined;

/**
 * Gets or sets the Current Amount at the time of loan deletion, if applicable
 * @member {Number} currentAmountAtDelete
 */
LoansModel.prototype['currentAmountAtDelete'] = undefined;

/**
 * Gets or sets the Current Amount at the time of loan write-off, if applicable
 * @member {Number} currentAmountAtWriteOff
 */
LoansModel.prototype['currentAmountAtWriteOff'] = undefined;






export default LoansModel;

