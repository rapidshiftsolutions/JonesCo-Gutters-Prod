import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "What are seamless gutters?",
    answer:
      "Seamless gutters are a type of rain gutter that is manufactured from a single piece of material. They are custom-fit to your home, reducing the likelihood of leaks and providing a more streamlined appearance.",
  },
  {
    question: "Why should I choose JonesCo Seamless Gutter Systems?",
    answer:
      "JonesCo Seamless Gutter Systems offers high-quality installation, repair, and cleaning services for seamless gutters. Our experienced team uses the best materials and techniques to ensure your home is protected from water damage.",
  },
  {
    question: "How do I maintain my seamless gutters?",
    answer:
      "To maintain your seamless gutters, you should regularly clean them to remove debris, check for any signs of damage, and ensure that water flows freely. We offer professional gutter cleaning services to keep your gutters in top condition.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer seamless gutter installation, gutter replacement, gutter cleaning, gutter guards installation, custom gutter solutions, and downspout installation & repair.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "JonesCo Seamless Gutter Systems serves multiple locations in Eastern Tennessee, including Cocke County, Jefferson County, Hamblen County, Greene County, Sevier County, Washington County, Knox County, and Blount County.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-white">
      <div className="px-6 py-16 mx-auto max-w-7xl sm:py-24 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-JonesCo-Blue-600">
          <h2 className="text-2xl font-bold tracking-tight leading-10 text-black">Frequently Asked Questions</h2>
          <dl className="mt-10 space-y-6 divide-y divide-JonesCo-Blue-500">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="pt-6">
                <dt>
                  <Disclosure.Button className="flex justify-between items-start w-full text-left text-JonesCo-Blue-950 group">
                    <span className="font-semibold leading-7 text-semibold">{faq.question}</span>
                    <span className="flex items-center ml-6 h-7">
                      <PlusSmallIcon aria-hidden="true" className="w-6 h-6 group-open:hidden" />
                      <MinusSmallIcon aria-hidden="true" className="hidden w-6 h-6 group-open:block" />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="pr-12 mt-2">
                  <p className="text-base leading-7 text-JonesCo-Blue-900">{faq.answer}</p>
                </Disclosure.Panel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}