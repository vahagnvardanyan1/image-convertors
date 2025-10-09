import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../Accordion';

const steps = [
  {
    number: 1,
    title: 'Upload your image',
    description:
      'Start by selecting your image file. You can either drag and drop your image directly into the upload area or click the "Choose File" button to browse your computer. We support all major image formats including PNG, JPG, JPEG, WebP, GIF, BMP, and TIFF. The file will be automatically detected and ready for conversion.',
  },
  {
    number: 2,
    title: 'Choose output format',
    description:
      'Select your desired output format from the dropdown menu. Our converter supports conversion between all popular image formats. Choose PNG for transparency, JPG for smaller file sizes, WebP for modern web optimization, or any other format that suits your needs. The input format will be automatically detected from your uploaded file.',
  },
  {
    number: 3,
    title: 'Click convert',
    description:
      'Once you\'ve selected your input file and output format, simply click the "Convert Image" button. Our advanced processing engine will instantly convert your image while maintaining the highest quality possible. The conversion happens directly in your browser, ensuring your files remain private and secure.',
  },
  {
    number: 4,
    title: 'Download your file',
    description:
      "Your converted image is now ready! You can download the file directly to your device or copy a shareable link. The converted image will maintain its quality while being optimized for your chosen format. You'll also see detailed conversion information including file size reduction and processing time.",
  },
];

export function HowTo() {
  return (
    <section id="how-to" className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">How It Works</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-2">
            Convert your images in just four simple steps. Our streamlined process makes image conversion fast and effortless.
          </p>
        </div>

        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {steps.map((step, index) => (
              <AccordionItem
                key={index}
                value={`step-${index}`}
                className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 px-4 sm:px-6 py-2 data-[state=open]:bg-gradient-to-r data-[state=open]:from-blue-50 data-[state=open]:to-purple-50 data-[state=open]:border-blue-200"
              >
                <AccordionTrigger className="text-left hover:no-underline py-3 sm:py-4 [&[data-state=open]>svg]:rotate-180">
                  <div className="flex items-center space-x-3 sm:space-x-4 pr-2 sm:pr-4">
                    <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs sm:text-sm">{step.number}</span>
                    </div>
                    <span className="font-bold text-gray-900 text-sm sm:text-base">{step.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 ml-12 sm:ml-14">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{step.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Call to Action */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="font-bold mb-2 text-lg sm:text-xl">Ready to get started?</h3>
            <p className="mb-4 text-blue-100 text-sm sm:text-base">Follow these simple steps and convert your images in seconds.</p>
            <a
              href="#conversion-tool"
              className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base"
            >
              Start Converting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
