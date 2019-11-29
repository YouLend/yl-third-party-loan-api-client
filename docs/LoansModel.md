# YlThirdPartyLoanApiClient.LoansModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | Gets or sets the loan&#39;s unique identifier | [optional] 
**loanNumber** | **Number** | Gets or sets the Loan Number, an ordinal value indicating which of a customer&#39;s loans is here detailed | [optional] 
**lenderId** | **String** | Gets or sets the lender&#39;s unique identifier | [optional] 
**lenderName** | **String** | Gets or sets the lender&#39;s full name | [optional] 
**borrowerId** | **String** | Gets or sets the borrower&#39;s unique identifier | [optional] 
**borrowerName** | **String** | Gets or sets the borrower&#39;s full name | [optional] 
**currentAmount** | **Number** | Gets or sets the Current Amount, the amount yet to be repaid | [optional] 
**loanType** | **String** | Gets or sets the Loan Type - \&quot;Initial\&quot;, \&quot;Refinanced\&quot; or \&quot;Renewal\&quot; | [optional] 
**status** | **String** | Gets or sets the loan&#39;s Status - \&quot;Deleted\&quot;, \&quot;Funded\&quot;, \&quot;Funded (Pending Settlement)\&quot;, \&quot;Refinanced\&quot;, \&quot;Repaid\&quot;, \&quot;Written Off\&quot; | [optional] 
**maturityDate** | **Date** | Gets or sets the date on which the loan is due to mature, and by which it should be fully repaid | [optional] 
**sweep** | **Number** | Gets or sets the Sweep, the decimal out of 100 representing the proportion of transaction income to be used to repay the loan | [optional] 
**autoRepaymentSweep** | **Boolean** | Gets or sets a value indicating whether an Auto Repayment Sweep is to be used - this feature automatically directs a chosen proportion, the Sweep, of transaction income towards repaying the loan | [optional] 
**currencyISOCode** | **String** | Gets or sets the loan&#39;s Currency ISO Code, e.g. \&quot;GBP\&quot; | [optional] 
**lendingPartnerIds** | **[String]** | Gets or sets the unique identifiers of any lending partners associated with the loan | [optional] 
**owners** | [**[LoanOwnerModel]**](LoanOwnerModel.md) | Gets or sets a collection detailing the loan&#39;s Owners YL.Web.Api.ThirdParty.Loan.Models.LoanOwnerModel | [optional] 
**currentAmountAtRepay** | **Number** | Gets or sets the Current Amount at the time of full loan repayment, if applicable | [optional] 
**currentAmountAtDelete** | **Number** | Gets or sets the Current Amount at the time of loan deletion, if applicable | [optional] 
**currentAmountAtWriteOff** | **Number** | Gets or sets the Current Amount at the time of loan write-off, if applicable | [optional] 


