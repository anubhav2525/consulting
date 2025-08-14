"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconMail, IconMap, IconMapPin, IconPhone } from "@tabler/icons-react";
import React from "react";

type Props = {
  companyName?: string;
  effectiveDate?: string;
  email?: string;
  phone?: string;
  address?: string;
};

const PrivacyPolicyPage: React.FC<Props> = ({
  companyName = "Radiance Technologies",
  effectiveDate = "August 14, 2025",
  email = "info@example.com",
  phone = "+91 123 123 1231",
  address = "123 Street Name, City, Country",
}) => {
  return (
    <main className="min-h-screen">
      {/* Hero / Header */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-10 border-b">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Effective Date: <span className="font-medium">{effectiveDate}</span>
          </p>
          <p className="mt-6 max-w-3xl text-slate-600">
            At <span className="font-semibold">{companyName}</span> (“we,”
            “our,” “us”), we respect your privacy and are committed to
            protecting the personal information you share with us. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you visit our website or use our services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="space-y-12">
          {/* 1. Information We Collect */}
          <article id="information-we-collect">
            <h2 className="text-2xl font-semibold text-slate-900">
              1. Information We Collect
            </h2>
            <div className="mt-4 space-y-6 text-slate-700">
              <div>
                <h3 className="text-lg font-medium text-slate-900">
                  1.1 Personal Information
                </h3>
                <p className="mt-2">
                  Information you voluntarily provide when contacting us,
                  signing up for our services, or requesting information, such
                  as:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Job title</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-slate-900">
                  1.2 Non-Personal Information
                </h3>
                <p className="mt-2">
                  Information automatically collected when you use our website,
                  including:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Device type and operating system</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-slate-900">
                  1.3 Cookies and Tracking Technologies
                </h3>
                <p className="mt-2">
                  We use cookies and similar technologies to enhance your
                  browsing experience, analyze website traffic, and understand
                  user behavior. You can manage cookie preferences through your
                  browser settings.
                </p>
              </div>
            </div>
          </article>

          {/* 2. How We Use Your Information */}
          <article id="how-we-use">
            <h2 className="text-2xl font-semibold text-slate-900">
              2. How We Use Your Information
            </h2>
            <p className="mt-4 text-slate-700">
              We use the collected information for purposes such as:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-slate-700">
              <li>Providing and improving our services</li>
              <li>Responding to inquiries and support requests</li>
              <li>
                Sending updates, offers, or newsletters (with your consent)
              </li>
              <li>Analyzing website usage for performance improvements</li>
              <li>Complying with legal obligations</li>
            </ul>
          </article>

          {/* 3. Sharing of Information */}
          <article id="sharing">
            <h2 className="text-2xl font-semibold text-slate-900">
              3. Sharing of Information
            </h2>
            <p className="mt-4 text-slate-700">
              We do <span className="font-semibold">not</span> sell, rent, or
              trade your personal information. We may share it only in the
              following cases:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-slate-700">
              <li>
                <span className="font-medium">With Service Providers:</span>{" "}
                Trusted third parties who assist in website hosting, analytics,
                or marketing.
              </li>
              <li>
                <span className="font-medium">For Legal Compliance:</span> When
                required by law or to protect our legal rights.
              </li>
              <li>
                <span className="font-medium">Business Transfers:</span> In case
                of a merger, acquisition, or sale of assets.
              </li>
            </ul>
          </article>

          {/* 4. Data Security */}
          <article id="security">
            <h2 className="text-2xl font-semibold text-slate-900">
              4. Data Security
            </h2>
            <p className="mt-4 text-slate-700">
              We implement industry-standard measures to protect your personal
              information from unauthorized access, alteration, disclosure, or
              destruction. However, no data transmission over the internet is
              completely secure, so we cannot guarantee absolute security.
            </p>
          </article>

          {/* 5. Your Rights */}
          <article id="your-rights">
            <h2 className="text-2xl font-semibold text-slate-900">
              5. Your Rights
            </h2>
            <p className="mt-4 text-slate-700">
              Depending on your location, you may have the right to:
            </p>
            <ul className="mt-2 list-inside list-disc space-y-1 text-slate-700">
              <li>Access, update, or delete your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Request a copy of the data we hold about you</li>
              <li>Withdraw consent for data processing</li>
            </ul>
            <p className="mt-3 text-slate-700">
              To exercise these rights, contact us at{" "}
              <a
                className="font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-700"
                href={`mailto:${email}`}
              >
                {email}
              </a>
              .
            </p>
          </article>

          {/* 6. Third-Party Links */}
          <article id="third-party-links">
            <h2 className="text-2xl font-semibold text-slate-900">
              6. Third-Party Links
            </h2>
            <p className="mt-4 text-slate-700">
              Our website may contain links to third-party sites. We are not
              responsible for the privacy practices of those websites and
              encourage you to review their privacy policies.
            </p>
          </article>

          {/* 7. Children’s Privacy */}
          <article id="children">
            <h2 className="text-2xl font-semibold text-slate-900">
              7. Children’s Privacy
            </h2>
            <p className="mt-4 text-slate-700">
              Our services are not intended for individuals under the age of 16,
              and we do not knowingly collect personal information from
              children.
            </p>
          </article>

          {/* 8. Changes */}
          <article id="changes">
            <h2 className="text-2xl font-semibold text-slate-900">
              8. Changes to This Privacy Policy
            </h2>
            <p className="mt-4 text-slate-700">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date.
            </p>
          </article>

          {/* 9. Contact */}
          <article id="contact">
            <h2 className="text-2xl font-semibold text-slate-900">
              9. Contact Us
            </h2>
            <Card className="w-full shadow-none rounded-sm">
              <CardHeader>
                <CardTitle>Company name</CardTitle>
                <CardDescription>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quibusdam repudiandae et eius rem odio incidunt.
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <IconMail size={20} className="text-slate-500" />{" "}
                  <span>{email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconPhone size={20} className="text-slate-500" />{" "}
                  <span>{phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <IconMapPin size={20} className="text-slate-500" />{" "}
                  <span>{address}</span>
                </div>
              </CardContent>
            </Card>
          </article>
        </div>
      </section>
    </main>
  );
};
export default PrivacyPolicyPage;
