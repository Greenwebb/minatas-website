import React from "react";

interface Step3Props {
    formData: {
      loanType: string;
      amount: number;
      duration: number;
      fname: string;
      lname: string;
      mobile: string;
      email: string;
      terms: boolean;
    };
  }

const Step3: React.FC<Step3Props> = ({ formData }) => {
    return (
        <div>
            <div className="col-12">
                <div className="loan-summary">
                    <div className="loan-summary__header">
                        <h2 className="loan-summary__title">Your Loan Details</h2>
                        <h6 className="loan-summary__status">{formData.loanType}</h6>
                    </div>
                    <center>
                        <div className="loan-summary__details">
                            <div className="loan-summary__detail">
                                <span className="loan-summary__label">Amount:</span>
                                <span className="loan-summary__value">{formData.amount}</span>
                            </div>
                            <div className="loan-summary__detail">
                                <span className="loan-summary__label">Interest Rate:</span>
                                <span className="loan-summary__value">30%</span> {/* Example value */}
                            </div>
                            <div className="loan-summary__detail">
                                <span className="loan-summary__label">Term:</span>
                                <span className="loan-summary__value">{formData.duration} month(s)</span>
                            </div>
                            <div className="loan-summary__detail">
                                <span className="loan-summary__label">Monthly Payment:</span>
                                <span className="loan-summary__value">2200</span> {/* Example value */}
                            </div>
                            <div className="loan-summary__detail">
                                <span className="loan-summary__label">Total Repayment:</span>
                                <span className="loan-summary__value">2200</span> {/* Example value */}
                            </div>
                        </div>
                    </center>
                    <div className="loan-summary__footer">
                        <div className="terms-container">
                            <label className="checkbox-wrapper">
                                <input type="checkbox" className="checkbox" aria-label="I agree to the terms and conditions" />
                                <span className="checkmark"></span>
                                By submitting this form, you agree to our
                                <span className="terms-text">
                                    <a href="#" className="terms-link">Terms & Conditions</a>.
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step3;
