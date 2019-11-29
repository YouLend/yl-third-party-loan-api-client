# YlThirdPartyLoanApiClient.LoansApi

All URIs are relative to *https://staging.youlendapi.com/loan*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllLoans**](LoansApi.md#getAllLoans) | **GET** /Loans/{customerId}/loans | Get all loans associated with your Customer ID
[**getLoan**](LoansApi.md#getLoan) | **GET** /Loans/{loanId} | Get a specific loan by its Loan ID
[**getRepayments**](LoansApi.md#getRepayments) | **GET** /Loans/{loanId}/repayments | Get the repayment information associated with a given loan&#39;s Loan ID



## getAllLoans

> [LoansModel] getAllLoans(customerId, opts)

Get all loans associated with your Customer ID

Sample request:                    GET Loans/1cd09db1-e6d2-4d64-aeba-9e64b818461a/loans

### Example

```javascript
import YlThirdPartyLoanApiClient from 'yl-third-party-loan-api-client';
let defaultClient = YlThirdPartyLoanApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyLoanApiClient.LoansApi();
let customerId = "''"; // String | Customer ID (a string)
let opts = {
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.getAllLoans(customerId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **String**| Customer ID (a string) | [default to &#39;&#39;]
 **apiVersion** | **String**|  | [optional] 

### Return type

[**[LoansModel]**](LoansModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## getLoan

> [LoanModel] getLoan(loanId, opts)

Get a specific loan by its Loan ID

Sample request:                    GET Loans/71abf3e6-d6a8-45d2-8394-55cc32260bee

### Example

```javascript
import YlThirdPartyLoanApiClient from 'yl-third-party-loan-api-client';
let defaultClient = YlThirdPartyLoanApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyLoanApiClient.LoansApi();
let loanId = "''"; // String | Loan ID (a string)
let opts = {
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.getLoan(loanId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **String**| Loan ID (a string) | [default to &#39;&#39;]
 **apiVersion** | **String**|  | [optional] 

### Return type

[**[LoanModel]**](LoanModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## getRepayments

> LoanRepaymentModel getRepayments(loanId, opts)

Get the repayment information associated with a given loan&#39;s Loan ID

Sample request:                    GET /Loans/71abf3e6-d6a8-45d2-8394-55cc32260bee/repayments

### Example

```javascript
import YlThirdPartyLoanApiClient from 'yl-third-party-loan-api-client';
let defaultClient = YlThirdPartyLoanApiClient.ApiClient.instance;
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new YlThirdPartyLoanApiClient.LoansApi();
let loanId = "''"; // String | Loan ID (a string)
let opts = {
  'apiVersion': "apiVersion_example" // String | 
};
apiInstance.getRepayments(loanId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loanId** | **String**| Loan ID (a string) | [default to &#39;&#39;]
 **apiVersion** | **String**|  | [optional] 

### Return type

[**LoanRepaymentModel**](LoanRepaymentModel.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

