export const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0]; // Converts Date to 'YYYY-MM-DD' format
};
