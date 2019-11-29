# YlThirdPartyLoanApiClient.LoanModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoRepaymentSweep** | **Boolean** | Gets or sets a value indicating whether an Auto Repayment Sweep is to be used - this feature automatically directs a chosen proportion, the Sweep, of transaction income towards repaying the loan | [optional] 
**borrowerId** | **String** | Gets or sets the Borrower ID | [optional] 
**borrowerName** | **String** | Gets or sets the Borrower Name | [optional] 
**creditRating** | **String** | Gets or sets the Credit Rating | [optional] 
**currencyISOCode** | **String** | Gets or sets the Currency ISO Code | [optional] 
**currentAmount** | **Number** | Gets or sets the Current Amount, the amount yet to be repaid | [optional] 
**currentServiceChargeRate** | **Number** | Gets or sets the Current Service Charge Rate | [optional] 
**defaultDetails** | [**DefaultDetailsModel**](DefaultDetailsModel.md) |  | [optional] 
**discount** | **Number** | Gets or sets the loan&#39;s discount rate | [optional] 
**id** | **String** | Gets or sets the loan&#39;s unique identifier | [optional] 
**lenderId** | **String** | Gets or sets the lender&#39;s unique identifier | [optional] 
**lenderName** | **String** | Gets or sets the lender&#39;s full name | [optional] 
**maturityDate** | **Date** | Gets or sets the date on which the loan is due to mature, and by which it should be fully repaid | [optional] 
**originalAmount** | **Number** | Gets or sets the Original Amount, the total amount due to be repaid on maturity | [optional] 
**originalProjectedAnnualisedReturn** | **Number** | Gets or sets the Original Projected Annualised Return | [optional] 
**originalServiceChargeRate** | **Number** | Gets or sets the Original Service Charge Rate | [optional] 
**projectedRepaymentDate** | **Date** | Gets or sets the Projected Repayment Date | [optional] 
**securityAndGuarantees** | **Boolean** | Gets or sets a value indicating whether the Security and Guarantees are in place | [optional] 
**loanType** | **String** | Gets or sets the Loan Type - \&quot;Initial\&quot;, \&quot;Refinanced\&quot; or \&quot;Renewal\&quot; | [optional] 
**status** | **String** | Gets or sets the loan&#39;s Status - \&quot;Deleted\&quot;, \&quot;Funded\&quot;, \&quot;Funded (Pending Settlement)\&quot;, \&quot;Refinanced\&quot;, \&quot;Repaid\&quot;, \&quot;Written Off\&quot; | [optional] 
**sweep** | **Number** | Gets or sets the Sweep, the decimal out of 100 representing the proportion of transaction income to be used to repay the loan | [optional] 
**useOfProceeds** | **String** | Gets or sets the Use Of Proceeds, i.e. to what end the loaned funds will be used | [optional] 
**loanNumber** | **Number** | Gets or sets the Loan Number, an ordinal value indicating which of a customer&#39;s loans is here detailed | [optional] 
**refinancingDetails** | [**LoanRefinancingDetailsModel**](LoanRefinancingDetailsModel.md) |  | [optional] 
**earlyRenewalDetails** | [**EarlyRenewalDetailsModel**](EarlyRenewalDetailsModel.md) |  | [optional] 
**fundingDetails** | [**LoanFundingDetailsModel**](LoanFundingDetailsModel.md) |  | [optional] 
**writeOffDetails** | [**LoanWriteOffDetailsModel**](LoanWriteOffDetailsModel.md) |  | [optional] 
**owners** | [**[LoanOwnerModel]**](LoanOwnerModel.md) | Gets or sets a collection detailing the loan&#39;s Owners YL.Web.Api.ThirdParty.Loan.Models.LoanOwnerModel | [optional] 
**thirdPartyReferences** | [**[ThirdPartyReferenceModel]**](ThirdPartyReferenceModel.md) | Gets or sets the loan&#39;s Third Party References YL.Web.Api.ThirdParty.Loan.Models.ThirdPartyReferenceModel | [optional] 
**documents** | [**[LoanDocumentModel]**](LoanDocumentModel.md) | Gets or sets the Documents YL.Web.Api.ThirdParty.Loan.Models.LoanDocumentModel supporting the loan application | [optional] 


