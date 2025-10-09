import { FileImage, Shield, HardDrive, Layers, Settings, Heart } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../Accordion';

const faqs = [
  {
    question: 'What image formats do you support?',
    answer: 'We support all major image formats including PNG, JPG, JPEG, WebP, GIF, BMP, and TIFF. You can convert between any of these formats with maintained quality and optimal file sizes.',
    icon: FileImage,
  },
  {
    question: 'Is my data secure and private?',
    answer:
      'Absolutely! All image conversions happen directly in your browser using client-side processing. Your images never leave your device or get uploaded to our servers, ensuring complete privacy and security.',
    icon: Shield,
  },
  {
    question: 'Are there any file size limits?',
    answer:
      'Our tool can handle images up to 50MB in size. For optimal performance, we recommend images under 25MB. If you need to process larger files, consider resizing them first or contact our support team.',
    icon: HardDrive,
  },
  {
    question: 'Can I convert multiple images at once?',
    answer:
      'Currently, our tool processes one image at a time to ensure the best quality and performance. However, you can quickly convert multiple images by repeating the simple 4-step process for each file.',
    icon: Layers,
  },
  {
    question: 'Do you compress images during conversion?',
    answer:
      'We offer quality control options for certain formats like JPG and WebP. By default, we maintain high quality (95%) while optimizing file size. You can adjust compression settings before conversion if needed.',
    icon: Settings,
  },
  {
    question: 'Is this service really free?',
    answer: 'Yes! Our image converter is completely free to use with no hidden fees, subscriptions, or usage limits. We believe in providing accessible tools for everyone who works with images.',
    icon: Heart,
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Frequently Asked Questions</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">Have questions about our image converter? Find answers to the most common questions below.</p>
        </div>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              return (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 px-4 sm:px-6 py-2 data-[state=open]:bg-gradient-to-r data-[state=open]:from-blue-50 data-[state=open]:to-purple-50 data-[state=open]:border-blue-200"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-3 sm:py-4 [&[data-state=open]>svg]:rotate-180">
                    <div className="flex items-center space-x-3 sm:space-x-4 pr-2 sm:pr-4">
                      <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="text-white" size={18} />
                      </div>
                      <span className="font-bold text-gray-900 text-sm sm:text-base">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 ml-12 sm:ml-14">
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="font-bold mb-2 text-lg sm:text-xl">Still have questions?</h3>
            <p className="mb-4 text-blue-100 text-sm sm:text-base px-2">Our support team is here to help you with any questions about image conversion.</p>
            <a
              href="#"
              className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
