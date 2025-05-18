// ...existing code...

const handlePaymentSubmit = (e) => {
  e.preventDefault();
  console.log("Form submitted"); // Add logging
  navigateToPaymentPage();
};

const handleButtonClick = (e) => {
  console.log("Button clicked directly");
  // Navigate directly if form submission isn't working
  navigateToPaymentPage();
};

// ...existing code...

return (
  <div className="payment-form-container">
    // ...existing code...
    <form onSubmit={handlePaymentSubmit}>
      // ...existing code...
      <button 
        type="submit"
        className="payment-button"
        disabled={false}
        onClick={handleButtonClick}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer',
          opacity: 1
        }}
      >
        Payer maintenant
      </button>
    </form>
  </div>
);
