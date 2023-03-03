import React, { useState } from "react";
const RazorPay = () => {
  const [amount, setamount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount == "") {
      alert("Enter the amount");
    } else {
      var options = {
        key: "rzp_test_EKTNEeCe9bCeBu",
        key_secret: "jir9uK9m0Rr8yqJAA7Rnlsfy",
        amount: amount * 100,
        currency: "INR",
        name: "Housing society",
        description: "for testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Ramesh",
          email: "Ramesh@gmail.com",
          contact: "8898787667",
        },
        notes: {
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };
  return (
    <>
      <h1>Housing Society Payment</h1>
      <br />
      <input
        type="text"
        placeholder="Enter the amount"
        value={amount}
        onChange={(e) => {
          console.log(e.target.value);
          setamount(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
export default RazorPay;