import "./WhyUsSection.css"; // Assuming you have a CSS file for styling

const WhyUsSection = () => {
  return (
    <div className="why-us-container">
      <h2 className="why-us-title">Why Choose Us?</h2>
      <div className="why-us-cards">
        <div className="why-us-card">
          <img
            src="https://media.istockphoto.com/id/1471886621/photo/young-adult-woman-gestures-and-talks-during-interview-with-businesswoman.jpg?s=612x612&w=0&k=20&c=57hyY3qxneb2MzzXnjpYzasqJWuPpaTVm92Kgf5bGgQ="
            alt="Experienced Counselors"
            className="why-us-card-image"
          />
          <h3 className="why-us-card-title">Experienced Counselors</h3>
          <p className="why-us-card-text">
            Our team consists of highly trained professionals with years of
            experience in various fields of mental health.
          </p>
        </div>
        <div className="why-us-card">
          <img
            src="https://st3.depositphotos.com/4218696/32449/i/450/depositphotos_324496952-stock-photo-sad-african-american-woman-sharing.jpg"
            alt="Personalized Approach"
            className="why-us-card-image"
          />
          <h3 className="why-us-card-title">Personalized Approach</h3>
          <p className="why-us-card-text">
            We understand that each individual is unique, and we tailor our
            counseling strategies to meet your specific needs.
          </p>
        </div>
        <div className="why-us-card">
          <img
            src="https://binarytradingfactory.com/wp-content/uploads/2023/03/student-support-counselling-internal-image.jpg"
            alt="Confidential and Safe"
            className="why-us-card-image"
          />
          <h3 className="why-us-card-title">Confidential and Safe</h3>
          <p className="why-us-card-text">
            We provide a confidential and safe environment where you can freely
            express yourself without fear of judgment.
          </p>
        </div>
        <div className="why-us-card">
          <img
            src="https://dy7glz37jgl0b.cloudfront.net/advice/images/118926fddbb5e00add913b8c8e5d2021-black-therapist-female-takes-notes_l.jpg"
            alt="Supportive Community"
            className="why-us-card-image"
          />
          <h3 className="why-us-card-title">Supportive Community</h3>
          <p className="why-us-card-text">
            Join a community of individuals who are on similar journeys and gain
            support from peers as well as professionals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
