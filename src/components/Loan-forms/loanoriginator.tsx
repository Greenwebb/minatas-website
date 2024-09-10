import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

export interface FormData {
  loanType: string;
  amount: number;
  duration: number;
  fname: string;
  lname: string;
  mobile: string;
  email: string;
  terms: boolean;
}

const defaultValues: FormData = {
  loanType: "",
  amount: 500,
  duration: 1,
  fname: "",
  lname: "",
  mobile: "",
  email: "",
  terms: false,
};

// Define validation schemas for each step
const validationSchemas = [
  yup.object({
    loanType: yup.string().required('Loan type is required'),
    amount: yup.number().required('Amount is required').positive('Amount must be positive').min(500, 'Amount must be at least 500'),
    duration: yup.number().required('Duration is required').positive('Duration must be positive').min(1, 'Duration must be at least 1'),
  }),
  yup.object({
    fname: yup.string().required('First Name is required'),
    lname: yup.string().required('Last Name is required'),
    mobile: yup.string().required('Phone is required').min(10, 'Phone number must be at least 10 digits'),
    email: yup.string().required('Email is required').email('Email must be valid'),
  }),
  yup.object({
    terms: yup.boolean().oneOf([true], 'You must agree to the terms and conditions').required(),
  })
];

function getStepContent(step: number, formData: FormData) {
  switch (step) {
    case 0:
      return <Step1 />;
    case 1:
      return <Step2 />;
    case 2:
      return <Step3 formData={formData} />;
    default:
      return <p>Unknown step</p>;
  }
}

const LoanOriginator: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Step1", "Step2", "Step3"];

  const currentValidationSchema = validationSchemas[activeStep];

  const methods = useForm<FormData>({
    shouldUnregister: false,
    defaultValues,
    resolver: yupResolver(currentValidationSchema as yup.AnyObjectSchema),
    mode: "onChange",
  });

  const { reset, trigger, watch } = methods;
  const formData = watch();

  const handleNext = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    reset();
  };

  // Custom submit handler with preventDefault
  const handleCustomSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    setLoading(true);
    const loadingToast = toast.loading('Submitting form...', {
      position: 'top-center',
    })

    try {
      // Add your form submission logic here
      const data = methods.getValues(); // Get form values
      const response = await fetch("https://jtet.com", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) throw new Error("Failed to submit");

      const result = await response.json();
      console.log(result);
      // toast("Form submitted successfully!");
      toast.success("Form submitted successfully!", {
        id: loadingToast,
        duration: 3000,
      })
      handleReset();
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('NetworkError') || error.message.includes('Failed to fetch')) {
          toast.error('Network error. Please check your connection.', { id: loadingToast, icon: '🌐' })
        } else if (error.message.includes('Timeout')) {
          toast.error('Request timed out. Please try again.', { id: loadingToast, icon: '⏱️' })
        } else if (error.message.includes('HTTP error! status: 400')) {
          toast.error('Bad request. Please check your input.', { id: loadingToast, icon: '❌' })
        } else if (error.message.includes('HTTP error! status: 401')) {
          toast.error('Unauthorized. Please log in again.', { id: loadingToast, icon: '🔒' })
        } else if (error.message.includes('HTTP error! status: 403')) {
          toast.error('Forbidden. You don\'t have permission to access this resource.', { id: loadingToast, icon: '🚫' })
        } else if (error.message.includes('HTTP error! status: 404')) {
          toast.error('Resource not found.', { id: loadingToast, icon: '🔍' })
        } else if (error.message.includes('HTTP error! status: 422')) {
          toast.error('Validation error. Please check your input.', { id: loadingToast, icon: '⚠️' })
        } else if (error.message.includes('HTTP error! status: 500')) {
          toast.error('Internal server error. Please try again later.', { id: loadingToast, icon: '🔧' })
        } else {
          toast.error(`An unexpected error occurred: ${error.message}`, { id: loadingToast, icon: '❓' })
        }
      } else {
        toast.error('An unexpected error occurred', { id: loadingToast, icon: '❓' })
      }
      // toast("Form submission failed!");
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="lead-form ms-xl-5 md-mt-30 col-12">
      {activeStep != null && activeStep < 2 && (
        <div>
          <h3>Apply below</h3>
          <h5 className="mb-30">Fill in the form to get started!</h5>
        </div>
      )}
      {activeStep === steps.length ? (
        <>
          <button type="button" onClick={handleReset}>Reset</button>
        </>
      ) : (
        <FormProvider {...methods}>
          {/* Use the custom submit handler here */}
          <form onSubmit={handleCustomSubmit}>
            <div>
              {getStepContent(activeStep, formData)}
            </div>
            <div className="col-12">
              <div className="row">
                {activeStep != null && activeStep > 0 && (
                  <div className="col-4">
                    <button
                      onClick={handleBack}
                      className="color-six fw-500 tran3s w-100 mt-20"
                      disabled={loading}
                    >
                      Back
                    </button>
                  </div>
                )}
                <div className={activeStep != null && activeStep > 0 ? "col-8" : "col-12"}>
                  {activeStep === steps.length - 1 && activeStep >= 2 ? (
                    <div>
                      <button
                        className="bg-primary-color fw-500 tran3s w-100 mt-20"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Please wait..." : "Submit"}
                      </button>
                      <Toaster position="top-center" toastOptions={{
                        className: 'default_toast',
                        success: {
                          style: {
                            background: 'green',
                          },
                          iconTheme: {
                            primary: 'green',
                            secondary: 'black',
                          },
                        },
                        error: {
                          style: {
                            background: 'red',
                          },
                        },
                      }} />
                    </div>
                  ) : (
                    <button
                      className="bg-primary-color fw-500 tran3s w-100 mt-20"
                      type="button"
                      onClick={handleNext}
                      disabled={loading}
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </FormProvider>
      )}
    </div>
  );
};

export default LoanOriginator;
