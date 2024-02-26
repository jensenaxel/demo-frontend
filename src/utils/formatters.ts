const formatPhoneNumber = (phoneNumber: string) =>
    // Implement your phone number formatting logic here
    // Example: (123) 456-7890
    phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
export {
    formatPhoneNumber,
};
