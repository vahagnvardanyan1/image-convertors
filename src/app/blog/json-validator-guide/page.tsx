import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, FileJson, Zap, CheckCircle, HelpCircle, AlertCircle, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free JSON Validator & Formatter Online – Validate JSON Syntax | ImageConvertors',
  description: 'Validate and format JSON data instantly with our free online JSON validator. Get detailed error messages, line-by-line highlighting, and beautify your JSON with custom indentation.',
  keywords: ['json validator', 'json formatter', 'validate json', 'json syntax checker', 'json beautifier', 'json lint', 'json parser', 'json error checker', 'format json online'],
  alternates: {
    canonical: 'https://imageconvertors.com/blog/json-validator-guide',
  },
  openGraph: {
    title: 'The Complete Guide to JSON Validation and Formatting',
    description: 'Validate and format JSON data instantly with our free online JSON validator. Get detailed error messages and beautify your JSON.',
    url: 'https://imageconvertors.com/blog/json-validator-guide',
    siteName: 'ImageConvertors',
    type: 'article',
    images: [
      {
        url: '/json-validate.webp',
        width: 1200,
        height: 630,
        alt: 'JSON Validator Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Complete Guide to JSON Validation and Formatting',
    description: 'Validate and format JSON data instantly with our free online JSON validator.',
    images: ['/json-validate.webp'],
  },
};

export default function JsonValidatorGuidePage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/">
            <Button variant="outline" className="mb-4 flex items-center">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <FileJson className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Complete Guide to JSON Validation and Formatting</h1>
              <p className="text-gray-600 text-lg">Validate, Debug, and Beautify Your JSON Data</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span>Published on {new Date('2025-10-07').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="mx-2">•</span>
            <span>8 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            JSON (JavaScript Object Notation) is the universal language of data exchange on the web. Whether you&apos;re working with APIs, configuration files, or database records,{' '}
            <strong>valid JSON syntax</strong> is crucial. A single misplaced comma or missing bracket can break your entire application.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            In this comprehensive guide, we&apos;ll explore everything you need to know about JSON validation, common errors, best practices, and how to use online validators to save hours of
            debugging time.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-blue-100 shadow-xl">
            <Image
              src="/json-validate.webp"
              alt="JSON Validator showing error highlighting and validation results"
              width={1024}
              height={683}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <p className="mt-4 text-sm text-center text-gray-500">Validate and format JSON instantly with real-time error detection and line highlighting.</p>
        </div>

        {/* What is JSON Validation */}
        <Card className="p-8 mb-8 border-l-4 border-blue-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <CheckCircle className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What is JSON Validation?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            JSON validation is the process of checking whether a JSON string adheres to the JSON syntax rules defined in the RFC 8259 specification. Valid JSON must follow strict formatting rules:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>All strings must be enclosed in double quotes (not single quotes)</li>
            <li>Object keys must be strings</li>
            <li>No trailing commas after the last element in objects or arrays</li>
            <li>Proper nesting of objects and arrays</li>
            <li>Valid data types: string, number, boolean, null, object, array</li>
          </ul>
        </Card>

        {/* Common JSON Errors */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common JSON Syntax Errors</h2>

          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <AlertCircle className="text-red-500 mr-2" size={20} />
                1. Trailing Commas
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-3">
                <code className="text-red-400 text-sm">
                  {`// ❌ Invalid - trailing comma
{
  "name": "John",
  "age": 30,
}

// ✅ Valid
{
  "name": "John",
  "age": 30
}`}
                </code>
              </div>
              <p className="text-gray-700 text-sm">Trailing commas after the last item are not allowed in JSON.</p>
            </Card>

            <Card className="p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <AlertCircle className="text-red-500 mr-2" size={20} />
                2. Single Quotes
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-3">
                <code className="text-red-400 text-sm">
                  {`// ❌ Invalid - single quotes
{'name': 'John'}

// ✅ Valid
{"name": "John"}`}
                </code>
              </div>
              <p className="text-gray-700 text-sm">JSON requires double quotes for all strings, including object keys.</p>
            </Card>

            <Card className="p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <AlertCircle className="text-red-500 mr-2" size={20} />
                3. Missing Commas
              </h3>
              <div className="bg-gray-900 rounded-lg p-4 mb-3">
                <code className="text-red-400 text-sm">
                  {`// ❌ Invalid - missing comma
{
  "name": "John"
  "age": 30
}

// ✅ Valid
{
  "name": "John",
  "age": 30
}`}
                </code>
              </div>
              <p className="text-gray-700 text-sm">Each key-value pair must be separated by a comma.</p>
            </Card>
          </div>
        </div>

        {/* Why Use a JSON Validator */}
        <Card className="p-8 mb-8 bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Use a JSON Validator?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <Zap className="text-blue-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Save Time</h3>
                <p className="text-gray-700 text-sm">Instantly identify syntax errors instead of manually debugging</p>
              </div>
            </div>
            <div className="flex items-start">
              <Code className="text-purple-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Auto-Format</h3>
                <p className="text-gray-700 text-sm">Beautify minified JSON with proper indentation</p>
              </div>
            </div>
            <div className="flex items-start">
              <AlertCircle className="text-red-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Error Details</h3>
                <p className="text-gray-700 text-sm">Get line numbers and specific error messages</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Validation Confidence</h3>
                <p className="text-gray-700 text-sm">Ensure your JSON is specification-compliant</p>
              </div>
            </div>
          </div>
        </Card>

        {/* How to Use */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Use Our JSON Validator</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Paste Your JSON</h3>
                <p className="text-gray-700">Copy your JSON data from APIs, config files, or any source and paste it into the editor.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Click Validate</h3>
                <p className="text-gray-700">Press the validate button to check your JSON syntax instantly.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">View Results</h3>
                <p className="text-gray-700">See validation results, error messages with line numbers, and formatted output.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Copy Formatted JSON</h3>
                <p className="text-gray-700">Copy the beautified JSON with proper indentation (2, 4, or 8 spaces).</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card className="p-6">
              <div className="flex items-start mb-2">
                <HelpCircle className="text-blue-600 mr-2 flex-shrink-0" size={20} />
                <h3 className="font-semibold text-gray-900">Is the JSON validator free to use?</h3>
              </div>
              <p className="text-gray-700 ml-7">Yes, our JSON validator is completely free with no limits on usage or file size.</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-start mb-2">
                <HelpCircle className="text-blue-600 mr-2 flex-shrink-0" size={20} />
                <h3 className="font-semibold text-gray-900">Is my JSON data secure?</h3>
              </div>
              <p className="text-gray-700 ml-7">All validation happens in your browser. Your JSON data never leaves your computer.</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-start mb-2">
                <HelpCircle className="text-blue-600 mr-2 flex-shrink-0" size={20} />
                <h3 className="font-semibold text-gray-900">Can I format minified JSON?</h3>
              </div>
              <p className="text-gray-700 ml-7">Yes, paste your minified JSON and our tool will beautify it with proper indentation and line breaks.</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-start mb-2">
                <HelpCircle className="text-blue-600 mr-2 flex-shrink-0" size={20} />
                <h3 className="font-semibold text-gray-900">What do the error line numbers mean?</h3>
              </div>
              <p className="text-gray-700 ml-7">Error line numbers show exactly where the syntax error occurs, and the line is highlighted in red with the error context displayed.</p>
            </Card>
          </div>
        </div>

        {/* Conclusion */}
        <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <h2 className="text-2xl font-bold mb-4">Start Validating JSON Today</h2>
          <p className="mb-6 text-blue-50">
            Save time debugging and ensure your JSON is always valid. Our free online JSON validator provides instant feedback with detailed error messages and auto-formatting.
          </p>
          <Link href="/texts/json-validator">
            <Button className="bg-white text-blue-600 hover:bg-blue-50">Try JSON Validator Now →</Button>
          </Link>
        </Card>
      </div>
    </>
  );
}
