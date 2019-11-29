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
import DocumentMetadataModel from './DocumentMetadataModel';

/**
 * The LoanOwnerModel model module.
 * @module model/LoanOwnerModel
 * @version v1.0
 */
class LoanOwnerModel {
    /**
     * Constructs a new <code>LoanOwnerModel</code>.
     * A model representing a loan owner
     * @alias module:model/LoanOwnerModel
     */
    constructor() { 
        
        LoanOwnerModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoanOwnerModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoanOwnerModel} obj Optional instance to populate.
     * @return {module:model/LoanOwnerModel} The populated <code>LoanOwnerModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoanOwnerModel();

            if (data.hasOwnProperty('ownerLenderId')) {
                obj['ownerLenderId'] = ApiClient.convertToType(data['ownerLenderId'], 'String');
            }
            if (data.hasOwnProperty('ownerLenderNumber')) {
                obj['ownerLenderNumber'] = ApiClient.convertToType(data['ownerLenderNumber'], 'Number');
            }
            if (data.hasOwnProperty('ownershipPercentage')) {
                obj['ownershipPercentage'] = ApiClient.convertToType(data['ownershipPercentage'], 'Number');
            }
            if (data.hasOwnProperty('ownershipPaymentStatus')) {
                obj['ownershipPaymentStatus'] = ApiClient.convertToType(data['ownershipPaymentStatus'], 'String');
            }
            if (data.hasOwnProperty('ownershipPaymentAmountPaid')) {
                obj['ownershipPaymentAmountPaid'] = ApiClient.convertToType(data['ownershipPaymentAmountPaid'], 'Number');
            }
            if (data.hasOwnProperty('expectedOwnershipPaymentAmount')) {
                obj['expectedOwnershipPaymentAmount'] = ApiClient.convertToType(data['expectedOwnershipPaymentAmount'], 'Number');
            }
            if (data.hasOwnProperty('ownerName')) {
                obj['ownerName'] = ApiClient.convertToType(data['ownerName'], 'String');
            }
            if (data.hasOwnProperty('refinancingRepaymentAmountDue')) {
                obj['refinancingRepaymentAmountDue'] = ApiClient.convertToType(data['refinancingRepaymentAmountDue'], 'Number');
            }
            if (data.hasOwnProperty('totalRepaymentsReceived')) {
                obj['totalRepaymentsReceived'] = ApiClient.convertToType(data['totalRepaymentsReceived'], 'Number');
            }
            if (data.hasOwnProperty('totalRepaymentsOwed')) {
                obj['totalRepaymentsOwed'] = ApiClient.convertToType(data['totalRepaymentsOwed'], 'Number');
            }
            if (data.hasOwnProperty('generatedTransferAgreement')) {
                obj['generatedTransferAgreement'] = DocumentMetadataModel.constructFromObject(data['generatedTransferAgreement']);
            }
            if (data.hasOwnProperty('transferAgreementDocumentSigningId')) {
                obj['transferAgreementDocumentSigningId'] = ApiClient.convertToType(data['transferAgreementDocumentSigningId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Gets or sets the owner's Lender ID
 * @member {String} ownerLenderId
 */
LoanOwnerModel.prototype['ownerLenderId'] = undefined;

/**
 * Gets or sets the owner's Lender Number
 * @member {Number} ownerLenderNumber
 */
LoanOwnerModel.prototype['ownerLenderNumber'] = undefined;

/**
 * Gets or sets the Ownership Percentage
 * @member {Number} ownershipPercentage
 */
LoanOwnerModel.prototype['ownershipPercentage'] = undefined;

/**
 * Gets or sets the OwnershipPaymentStatus - \"Failed\", \"Paid\", \"Partially Paid\", or \"Requested\"
 * @member {String} ownershipPaymentStatus
 */
LoanOwnerModel.prototype['ownershipPaymentStatus'] = undefined;

/**
 * Gets or sets the Ownership Payment Amount Paid
 * @member {Number} ownershipPaymentAmountPaid
 */
LoanOwnerModel.prototype['ownershipPaymentAmountPaid'] = undefined;

/**
 * Gets or sets the Expected Ownership Payment Amount
 * @member {Number} expectedOwnershipPaymentAmount
 */
LoanOwnerModel.prototype['expectedOwnershipPaymentAmount'] = undefined;

/**
 * Gets or sets the owner's full name
 * @member {String} ownerName
 */
LoanOwnerModel.prototype['ownerName'] = undefined;

/**
 * Gets or sets the Refinancing Repayment Amount Due, if applicable
 * @member {Number} refinancingRepaymentAmountDue
 */
LoanOwnerModel.prototype['refinancingRepaymentAmountDue'] = undefined;

/**
 * Gets or sets the Total Repayments Received
 * @member {Number} totalRepaymentsReceived
 */
LoanOwnerModel.prototype['totalRepaymentsReceived'] = undefined;

/**
 * Gets or sets the Total Repayments Owed
 * @member {Number} totalRepaymentsOwed
 */
LoanOwnerModel.prototype['totalRepaymentsOwed'] = undefined;

/**
 * @member {module:model/DocumentMetadataModel} generatedTransferAgreement
 */
LoanOwnerModel.prototype['generatedTransferAgreement'] = undefined;

/**
 * Gets or sets the Transfer Agreement Document Signing ID
 * @member {String} transferAgreementDocumentSigningId
 */
LoanOwnerModel.prototype['transferAgreementDocumentSigningId'] = undefined;






export default LoanOwnerModel;

