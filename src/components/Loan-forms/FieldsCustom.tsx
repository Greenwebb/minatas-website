import React from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import ErrMsg from "../common/err-msg";

interface FieldProps extends UseControllerProps<any> {
  label?: string;
  placeholder?: string;
  type?: string;
  options?: { value: string; label: string }[];
  max_value?: number;
  min_value?: number;
  max_length?: number;
  min_length? :number;
  msg?: string; // Use lowercase `string`
}

const FieldsCustom: React.FC<FieldProps> = ({
  label,
  placeholder,
  type = 'text',
  msg = '', // Default to empty string
  options,
  min_value,
  max_value,
  max_length,
  min_length,
  ...rest
}) => {
  const { field, fieldState } = useController(rest);
  const { name, onChange, onBlur, value, ref } = field;
  const { error } = fieldState;

  if (type === 'select') {
    return (
      <div>
        {label && <label htmlFor={name}>{label}</label>}
        <select
          className='col-12 select-type'
          id={name}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="help-block with-errors">
          {error ? <ErrMsg msg={error.message || msg} /> : msg && <ErrMsg msg={msg} />} {/* Handle both error and msg */}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          className='col-12 select-type'
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          ref={ref}
          min={type === 'number' ? min_value : undefined} // Only apply if type is 'number'
          max={type === 'number' ? max_value : undefined}
          minLength={min_length}
          maxLength={max_length} // Only apply if type is 'number'
        />
        <div className="help-block with-errors">
          {error ? <ErrMsg msg={error.message || msg} /> : msg && <ErrMsg msg={msg} />} {/* Handle both error and msg */}
        </div>
      </div>
    );
  }
};

export default FieldsCustom;
