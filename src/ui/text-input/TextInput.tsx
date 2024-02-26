import { TextInput as MantineTextInput } from '@mantine/core';
import React, { ChangeEvent, FocusEvent, forwardRef, KeyboardEventHandler, ReactNode, useCallback } from 'react';
import { ChangeHandler } from 'react-hook-form';
import { noOp, replaceInvalidCharacters } from '@/utils';

type TextInputProps = {
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

const TextInput = forwardRef((props: TextInputProps, ref: React.Ref<HTMLInputElement>) => {
    const {
        ariaLabel = '',
        description,
        disabled,
        error,
        icon,
        label,
        maxLength,
        name,
        onBlur,
        onChange = noOp,
        onKeyDown,
        placeholder,
        required,
        restrict,
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
                val = replaceInvalidCharacters(val);
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
        <MantineTextInput
          aria-label={ariaLabel || stringLabel}
          data-test={testId}
          data-fieldtype={fieldType}
          description={description}
          disabled={disabled}
          error={error}
          icon={icon}
          label={label}
          maxLength={maxLength}
          name={name}
          onBlur={onBlur}
          onChange={handleChange}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
          ref={ref}
          withAsterisk={required}
          rightSection={rightSection}
          value={value}
          type={type}
          w={w}
          styles={{
                // Don't bump down the page when the error appears
                input: {
                    marginBottom: 20,
                },
                error: {
                    minHeight: 15,
                    marginTop: -15,
                },
            }}
        />
    );
});

TextInput.displayName = 'TextInput';

export { TextInput };
