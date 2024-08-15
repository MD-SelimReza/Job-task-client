// src/pages/TermsOfService.js

const TermsOfService = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600">
            Welcome to TaskFindr! These Terms of Service outline the rules and
            regulations for the use of our website and services.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By accessing or using our website and services, you agree to
              comply with and be bound by these Terms of Service. If you do not
              agree with these terms, you should not use our website or
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Use of Our Services
            </h2>
            <p className="text-gray-600">
              You may use our services only for lawful purposes and in
              accordance with these Terms of Service. You agree not to:
            </p>
            <ul className="list-disc list-inside text-gray-600 mt-4">
              <li>
                Use our services in any way that violates any applicable
                federal, state, local, or international law or regulation.
              </li>
              <li>
                Engage in any conduct that restricts or inhibits anyone's use or
                enjoyment of our services, or which, as determined by us, may
                harm us or users of our services or expose them to liability.
              </li>
              <li>
                Use our services to transmit or procure the sending of any
                advertising or promotional material without our prior written
                consent.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Intellectual Property Rights
            </h2>
            <p className="text-gray-600">
              All content, features, and functionality on our website are the
              exclusive property of TaskFindr and its licensors. You are granted
              a limited, non-exclusive, non-transferable license to access and
              use our website and services for your personal, non-commercial use
              only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-600">
              In no event shall TaskFindr or its affiliates be liable for any
              indirect, incidental, special, consequential, or punitive damages,
              including without limitation, loss of profits, data, or other
              intangible losses, resulting from your use or inability to use our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Changes to These Terms
            </h2>
            <p className="text-gray-600">
              We may update these Terms of Service from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We encourage you to review these terms
              periodically for any changes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
