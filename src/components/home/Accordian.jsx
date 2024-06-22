const Accordian = () => {
  return (
    <div className="my-20 px-8 w-3/4 mx-auto">
      <h1 className="my-16 text-center font-bold text-3xl">
        Frequently Asked Questions!
      </h1>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          What is the return policy?
        </div>
        <div className="collapse-content">
          <p>
            Our return policy allows you to return products within 30 days of
            receipt. The items must be unused and in their original packaging.
            To initiate a return, please contact our customer service team.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How long does shipping take?
        </div>
        <div className="collapse-content">
          <p>
            Shipping times vary depending on your location and the shipping
            method selected. Standard shipping typically takes 5-7 business
            days, while express shipping takes 2-3 business days.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          How can I track my order?
        </div>
        <div className="collapse-content">
          <p>
            Once your order has shipped, you will receive an email with a
            tracking number and a link to track your package. You can also log
            in to your account on our website to view the status of your order.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          What payment methods are accepted?
        </div>
        <div className="collapse-content">
          <p>
            We accept various payment methods including credit/debit cards
            (Visa, MasterCard, American Express), PayPal, and Apple Pay.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Can I change or cancel my order?
        </div>
        <div className="collapse-content">
          <p>
            Yes, you can change or cancel your order within 24 hours of placing
            it. Please contact our customer service team as soon as possible to
            make changes or cancel your order.
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          Do you offer international shipping?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we offer international shipping to most countries. Shipping
            costs and delivery times vary depending on the destination. Please
            refer to our shipping policy page for more details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
