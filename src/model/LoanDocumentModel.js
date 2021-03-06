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
 * The LoanDocumentModel model module.
 * @module model/LoanDocumentModel
 * @version v1.0
 */
class LoanDocumentModel {
    /**
     * Constructs a new <code>LoanDocumentModel</code>.
     * A model detailing a document provided in support of a loan application
     * @alias module:model/LoanDocumentModel
     */
    constructor() { 
        
        LoanDocumentModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LoanDocumentModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LoanDocumentModel} obj Optional instance to populate.
     * @return {module:model/LoanDocumentModel} The populated <code>LoanDocumentModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LoanDocumentModel();

            if (data.hasOwnProperty('document')) {
                obj['document'] = DocumentMetadataModel.constructFromObject(data['document']);
            }
            if (data.hasOwnProperty('documentType')) {
                obj['documentType'] = ApiClient.convertToType(data['documentType'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DocumentMetadataModel} document
 */
LoanDocumentModel.prototype['document'] = undefined;

/**
 * Gets or sets the Document Type - \"Loan Agreement\" or \"Transfer Agreement\"
 * @member {String} documentType
 */
LoanDocumentModel.prototype['documentType'] = undefined;






export default LoanDocumentModel;

