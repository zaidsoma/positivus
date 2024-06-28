/* eslint-disable @next/next/no-img-element */

import ServiceCard from "@/components/service-card";
import { SERVICESLIST } from "@/db/data";
import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl space-y-10">
      <section className="grid grid-cols-2">
        <div className="flex w-full flex-col space-y-5">
          <h1 className="text-6xl text-black">
            Navigating the digital landscape for success
          </h1>
          <p className="text-base text-black">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="self-start rounded-lg bg-[#191A23] px-5 py-4 text-white">
            Book a consultation
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img
            src="/images/Illustration.png"
            alt="Digital Marketing at Positivus"
          />
        </div>
      </section>
      <section className="grid grid-cols-6 items-center justify-center gap-4">
        <img className="h-8" src="/images/amazon.png" alt="amazon" />
        <img className="h-8" src="/images/dribbble.png" alt="dribbble" />
        <img className="h-8" src="/images/hubspot.png" alt="hubspot" />
        <img className="h-8" src="/images/notion.png" alt="notion" />
        <img className="h-8" src="/images/netflix.png" alt="netflix" />
        <img className="h-8" src="/images/zoom.png" alt="zoom" />
      </section>
      <section className="flex w-full flex-col gap-y-10">
        <div className="flex w-full items-center gap-10">
          <h2 className="bg-green p-1 text-2xl font-medium text-black">
            Services
          </h2>
          <p className="max-w-lg text-black">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online. These services include:
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {SERVICESLIST.cards.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>
    </main>
  );
}
