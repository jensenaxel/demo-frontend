import React, { ChangeEvent, useState } from 'react';
import { Button, Container, Flex, Textarea, Title } from '@mantine/core';
import { PhoneNumberInput, TextInput } from '@/ui';
import { RESTRICT_REGEX } from '@/utils';

function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        npiNumber: '',
        businessAddress: '',
        telephoneNumber: '',
        emailAddress: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const {
            name,
            value,
        } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        alert('call an api through some sort of framework and state management library like xstate, or tanstack-query, or redux but typically something that promotes a scalable file structure to keep the tasks small and somewhat compartmentalized for multiple developers and scalability ');
        // Here you can submit the formData to your backend or process it further
        console.log(formData);
    };

    return (
        <>
            <Container size="sm">
                <Title>Register</Title>
                <Container pt={25} px={0} mx={0}>

                    <form onSubmit={handleSubmit}>
                        <TextInput
                          label="First Name"
                          name="firstName"
                          value={formData.firstName}
                          restrict={RESTRICT_REGEX.NAME_CASE}
                          onChange={handleChange}
                          required
                        />
                        <TextInput
                          label="Last Name"
                          name="lastName"
                          value={formData.lastName}
                          restrict={RESTRICT_REGEX.NAME_CASE}
                          onChange={handleChange}
                          required
                        />
                        <TextInput
                          label="NPI Number"
                          name="npiNumber"
                          value={formData.npiNumber}
                          onChange={handleChange}
                          required
                        />
                        <Textarea
                          label="Business Address (typically this would be multiple fields, with zipcode and state validation, etc...)"
                          name="businessAddress"
                          value={formData.businessAddress}
                          onChange={handleChange}
                          required
                        />
                        <PhoneNumberInput
                          label="Telephone Number"
                          name="telephoneNumber"
                          value={formData.telephoneNumber}
                          onChange={handleChange}
                          required
                        />
                        <TextInput
                          label="Email Address"
                          name="emailAddress"
                          type="email"
                          value={formData.emailAddress}
                          onChange={handleChange}
                          required
                        />
                        <Flex mt={20}>
                            <Button type="submit" variant="filled" color="blue">
                                Submit
                            </Button>
                        </Flex>

                        <pre>
                            {JSON.stringify(formData, null, 4)}
                        </pre>
                    </form>
                </Container>
            </Container>
        </>
    );
}

export default RegistrationForm;
