export const Contact = () => {
  const handleFormSubmit = (formData) => {
    // console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title fade-in-up">Contact Us</h2>

      <div className="contact-wrapper container">
        <form action={handleFormSubmit} className="fade-in-up delay-1">
          <input
            type="text"
            className="form-control"
            placeholder="enter your name"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="form-control"
            placeholder="Enter you email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
