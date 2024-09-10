import React from "react";
import FieldsCustom from "./FieldsCustom";
const Step2: React.FC = () => {

    return (

        <div>
            <div className="col-12">
                <div className="row">
                    <div className="col-6">
                        <div className="input-group-meta form-group mb-20">
                            <FieldsCustom

                                name="fname"
                                type="text"
                                label="First Name*"
                                placeholder="First Name*"
                            />

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="input-group-meta form-group mb-20">
                         
                            <FieldsCustom

                                name="lname"
                                type="text"
                                label="Last Name*"
                                placeholder="Last Name*"
                            />

                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                   
                    <FieldsCustom

                        name="mobile"
                        type="tel"
                        label="Mobile Number* (10 digits)"
                        placeholder="Mobile Number*"
                        min_length={10}
                        max_length={10}
                    />

                </div>
            </div>
            <div className="col-12">
                <div className="input-group-meta form-group mb-20">
                  
                   
                    <FieldsCustom

                        name="email"
                        type="email"
                        label="Email Address*"
                        placeholder="Email Address*"
                       
                    />

                </div>
            </div>


        </div>

    );
};

export default Step2;
