import React from "react";
import FieldsCustom from "./FieldsCustom";

const Step1: React.FC = () => {
  return (

    <div>
      <div className="col-12">
        <div className="input-group-meta form-group mb-20">
          <FieldsCustom

            name="loanType"
            type="select"
            label="What type of loan do you need?*"
            options={[
              { value: "", label: "Select loan type" },
              { value: "GRZ", label: "Civil Servant Advance (GRZ)" },
              { value: "Private", label: "Scheme-Backed Loan (Private Institutions)" },
              { value: "Mid-term", label: "Medium-term Loans (Business Owners - Salary Backed)" }
            ]}
          />
        </div>
      </div>

      <div className="col-12">
        <div className="input-group-meta form-group mb-20">
          <FieldsCustom
            name="amount"
            type="number"
            label="How much do you need?"
            placeholder="Amount*"
            min_value={500}
            max_value={100000}
            min_length={2}

          />
        </div>
      </div>



      <FieldsCustom
        name="duration"
        type="number"
        label="Loan Duration (Months)"
        placeholder="Duration*"
      />

    </div>
  );
};

export default Step1;
