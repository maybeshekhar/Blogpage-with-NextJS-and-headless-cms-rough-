export function formatDate(dateString, options) {
    const { format } = new Intl.DateTimeFormat('en-US', options);
    return format.call(new Date(dateString)); // Access format through the prototype
  }