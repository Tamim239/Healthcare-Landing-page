export const Accordion = () => {
  return (
    <div className="my-16">
        <div className="border border-[#343268] rounded-full inline-block py-2 px-4 ">
        <p>Faq</p>
      </div>
      <h2 className="text-3xl font-medium my-3">Frequently Asked Question</h2>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
        What are your office hours?
        </div>
        <div className="collapse-content">
          <p>Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        How can I schedule an appointment?
        </div>
        <div className="collapse-content">
          <p>Interactively impact fully researched total linkage without robust imperatives. Efficiently scale state of the art processes rather than world-class solutions. Credibly.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        Do you accept insurance?
        </div>
        <div className="collapse-content">
          <p>Interactively impact fully researched total linkage without robust imperatives. Efficiently scale state of the art processes rather than world-class solutions. Credibly.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        What should I bring to my appointment?
        </div>
        <div className="collapse-content">
          <p>Interactively impact fully researched total linkage without robust imperatives. Efficiently scale state of the art processes rather than world-class solutions. Credibly.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
        Do you offer telemedicine appointments?
        </div>
        <div className="collapse-content">
          <p>Interactively impact fully researched total linkage without robust imperatives. Efficiently scale state of the art processes rather than world-class solutions. Credibly.</p>
        </div>
      </div>
    </div>
  );
};
