import React, { useState } from 'react';
import { Button, Container, Textarea, TextInput } from '@mantine/core';

type FormEvent = {
    target: {
        name: string,
        value: string
    },
    preventDefault: () => {}
};

function RegistrationForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        npiNumber: '',
        businessAddress: '',
        telephoneNumber: '',
        emailAddress: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Here you can submit the formData to your backend or process it further
        console.log(formData);
    };

    return (
        <Container size="md">
            <form onSubmit={handleSubmit}>
                <TextInput
                  label="First Name2"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <TextInput
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
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
                  label="Business Address"
                  name="businessAddress"
                  value={formData.businessAddress}
                  onChange={handleChange}
                  required
                />
                <TextInput
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
                <Button type="submit" variant="filled" color="blue">
                    Submit
                </Button>
            </form>
        </Container>
    );
}

export default RegistrationForm;
