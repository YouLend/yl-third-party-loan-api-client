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

/**
 * The DocumentMetadataModel model module.
 * @module model/DocumentMetadataModel
 * @version v1.0
 */
class DocumentMetadataModel {
    /**
     * Constructs a new <code>DocumentMetadataModel</code>.
     * A model characterising a given document
     * @alias module:model/DocumentMetadataModel
     */
    constructor() { 
        
        DocumentMetadataModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DocumentMetadataModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DocumentMetadataModel} obj Optional instance to populate.
     * @return {module:model/DocumentMetadataModel} The populated <code>DocumentMetadataModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DocumentMetadataModel();

            if (data.hasOwnProperty('documentId')) {
                obj['documentId'] = ApiClient.convertToType(data['documentId'], 'String');
            }
            if (data.hasOwnProperty('documentName')) {
                obj['documentName'] = ApiClient.convertToType(data['documentName'], 'String');
            }
            if (data.hasOwnProperty('documentType')) {
                obj['documentType'] = ApiClient.convertToType(data['documentType'], 'String');
            }
            if (data.hasOwnProperty('dateUploaded')) {
                obj['dateUploaded'] = ApiClient.convertToType(data['dateUploaded'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * Gets or sets the document's unique identifier
 * @member {String} documentId
 */
DocumentMetadataModel.prototype['documentId'] = undefined;

/**
 * Gets or sets the Document Name
 * @member {String} documentName
 */
DocumentMetadataModel.prototype['documentName'] = undefined;

/**
 * Gets or sets the Document Type - \"Loan Agreement\" or \"Transfer Agreement\"
 * @member {String} documentType
 */
DocumentMetadataModel.prototype['documentType'] = undefined;

/**
 * Gets or sets the date on which the document was uploaded
 * @member {Date} dateUploaded
 */
DocumentMetadataModel.prototype['dateUploaded'] = undefined;






export default DocumentMetadataModel;

