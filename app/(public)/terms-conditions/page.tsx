"use client";
import React from "react";

const TermsConditionsPage = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 md:px-20 lg:px-40 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        Terms & Conditions
      </h1>
      <p className="mb-4">
        Welcome to <span className="font-semibold">[Your Company Name]</span>.
        By accessing or using our website and services, you agree to comply with
        and be bound by these Terms and Conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Services</h2>
      <p className="mb-4">
        You agree to use our services only for lawful purposes and in a manner
        that does not infringe the rights of others or restrict their use and
        enjoyment of the services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Intellectual Property
      </h2>
      <p className="mb-4">
        All content, designs, and intellectual property on this site are owned
        by <span className="font-semibold">[Your Company Name]</span> and
        protected under applicable laws. Unauthorized use is strictly
        prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Limitation of Liability
      </h2>
      <p className="mb-4">
        We are not liable for any indirect, incidental, or consequential damages
        resulting from your use of our services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
      <p className="mb-4">
        We reserve the right to suspend or terminate your access to our services
        at our discretion, without notice, if you violate these terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
      <p className="mb-4">
        These Terms & Conditions are governed by the laws of{" "}
        <span className="font-semibold">[Your Country/State]</span>.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms & Conditions from time to time. Your continued
        use of our services constitutes acceptance of the updated terms.
      </p>
    </div>
  );
};

export default TermsConditionsPage;
