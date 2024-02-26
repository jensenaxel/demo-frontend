import React, { ChangeEvent, FocusEvent, forwardRef, KeyboardEventHandler, ReactNode, useCallback } from 'react';
import { ChangeHandler } from 'react-hook-form';
import { TextInput } from '@/ui';
import { formatPhoneNumber, noOp, replaceInvalidCharacters, RESTRICT_REGEX } from '@/utils';

type PhoneNumberProps = {
    ariaLabel?: string;
    description?: ReactNode;
    disabled?: boolean;
    error?: ReactNode;
    icon?: ReactNode;
    label?: ReactNode;
    maxLength?: number;
    name?: string;
    placeholder?: string;
    required?: boolean;
    restrict?: RegExp;
    rightSection?: ReactNode;
    testId?: string;
    value?: string;
    fieldType?: string;
    type?: string;
    onChange?: ((e: ChangeEvent<HTMLInputElement>) => void) | ChangeHandler;
    // react-hook-form useController returns field which has onBlur with 'Noop' type (doesn't pass event)
    onBlur?: ((e?: FocusEvent<HTMLInputElement>) => void) | ChangeHandler;
    onKeyDown?: KeyboardEventHandler<Element>;
    w?: number | string;
};

const PhoneNumberInput = forwardRef((props: PhoneNumberProps, ref: React.Ref<HTMLInputElement>) => {
    const {
        ariaLabel = '',
        description,
        disabled,
        error,
        label,
        maxLength,
        name,
        onBlur,
        onChange = noOp,
        onKeyDown,
        placeholder,
        required,
        restrict = RESTRICT_REGEX.PHONE,
        rightSection,
        testId = name,
        fieldType = 'text',
        type,
        value,
        w,
    } = props;

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const {
                target: { value: targetValue },
            } = e;
            // Strip leading spaces
            let val: string | undefined = targetValue.replace(/^\s+/g, '');
            if (restrict) {
                const match = targetValue.match(restrict);
                if (match) {
                    val = match.join('');
                } else if (targetValue === '') {
                    val = targetValue;
                } else {
                    val = value;
                }
            }

            if (val) {
                val = formatPhoneNumber(replaceInvalidCharacters(val));
            } else {
                val = '';
            }
            e.target.value = val;
            onChange(e);
        },
        [onChange, value, restrict]
    );

    const stringLabel = label && typeof label === 'string' ? label : '';

    return (
        <TextInput
          aria-label={ariaLabel || stringLabel}
          data-test={testId}
          data-fieldtype={fieldType}
          description={description}
          disabled={disabled}
          error={error}
          label={label}
          maxLength={maxLength}
          name={name}
          onBlur={onBlur}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          ref={ref}
          required={required}
          rightSection={rightSection}
          value={value}
          type={type}
          w={w}
        />
    );
});

PhoneNumberInput.displayName = 'PhoneNumber';

export { PhoneNumberInput };
