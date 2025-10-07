/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';
import { DynamicMetadata } from '@/components/DynamicMetadata';
import { GitCompare, Check, X, ArrowLeftRight, Eye, EyeOff, Diff, Layers, Code } from 'lucide-react';
import JSONEditor from '@/components/JSONEditor';
import JSONToolHero from '@/components/JSONToolHero';
import JSONToolFeatures from '@/components/JSONToolFeatures';
import JSONToolHowTo from '@/components/JSONToolHowTo';

const metadata = {
  title: 'JSON Comparer - Compare & Diff JSON Online | ImageConvertors',
  description:
    'Free online JSON comparison tool. Compare two JSON objects or arrays, visualize differences with color-coded highlighting, and get detailed diff reports. Perfect for API testing, data validation, and debugging.',
  keywords: [
    'json comparer',
    'json diff',
    'json compare',
    'compare json',
    'json difference',
    'json comparison tool',
    'json diff tool',
    'compare two json',
    'json online compare',
    'json validator compare',
    'json api compare',
    'json data compare',
    'json object compare',
    'json array compare',
    'json difference checker',
    'json merge compare',
    'json diff viewer',
    'compare json objects',
    'json debugging tool',
    'free json compare',
  ],
  openGraph: {
    title: 'JSON Comparer - Compare & Diff JSON Online | ImageConvertors',
    description:
      'Free online JSON comparison tool. Compare two JSON objects or arrays, visualize differences with color-coded highlighting, and get detailed diff reports. Perfect for API testing, data validation, and debugging.',
    images: [
      {
        url: '/json-compare.webp',
        width: 1200,
        height: 630,
        alt: 'JSON Comparer Tool',
      },
    ],
  },
};

type DiffType = 'added' | 'removed' | 'modified' | 'unchanged';

interface DiffItem {
  path: string;
  type: DiffType;
  oldValue?: any;
  newValue?: any;
}

export default function JsonComparerPage() {
  const [jsonLeft, setJsonLeft] = useState('');
  const [jsonRight, setJsonRight] = useState('');
  const [leftErrorLine, setLeftErrorLine] = useState<number | undefined>();
  const [rightErrorLine, setRightErrorLine] = useState<number | undefined>();
  const [comparisonResult, setComparisonResult] = useState<{
    isValid: boolean;
    error?: string;
    differences?: DiffItem[];
    areEqual?: boolean;
  } | null>(null);
  const [showOnlyDifferences, setShowOnlyDifferences] = useState(false);

  const compareJson = () => {
    // Reset error lines
    setLeftErrorLine(undefined);
    setRightErrorLine(undefined);

    if (!jsonLeft.trim() || !jsonRight.trim()) {
      setComparisonResult({
        isValid: false,
        error: 'Please enter JSON in both fields',
      });
      return;
    }

    // Validate JSON 1
    try {
      JSON.parse(jsonLeft);
    } catch (error) {
      if (error instanceof Error) {
        const positionMatch = error.message.match(/position (\d+)/i);
        if (positionMatch) {
          const position = parseInt(positionMatch[1], 10);
          const lines = jsonLeft.substring(0, position).split('\n');
          setLeftErrorLine(lines.length);
        }
      }
      setComparisonResult({
        isValid: false,
        error: 'Invalid JSON in first input: ' + (error instanceof Error ? error.message : 'Invalid JSON'),
      });
      return;
    }

    // Validate JSON 2
    try {
      JSON.parse(jsonRight);
    } catch (error) {
      if (error instanceof Error) {
        const positionMatch = error.message.match(/position (\d+)/i);
        if (positionMatch) {
          const position = parseInt(positionMatch[1], 10);
          const lines = jsonRight.substring(0, position).split('\n');
          setRightErrorLine(lines.length);
        }
      }
      setComparisonResult({
        isValid: false,
        error: 'Invalid JSON in second input: ' + (error instanceof Error ? error.message : 'Invalid JSON'),
      });
      return;
    }

    // Both valid, proceed with comparison
    try {
      const parsedLeft = JSON.parse(jsonLeft);
      const parsedRight = JSON.parse(jsonRight);

      const differences = findDifferences(parsedLeft, parsedRight);
      const areEqual = differences.length === 0;

      setComparisonResult({
        isValid: true,
        differences,
        areEqual,
      });
    } catch (error) {
      setComparisonResult({
        isValid: false,
        error: error instanceof Error ? error.message : 'Error comparing JSON',
      });
    }
  };

  const findDifferences = (obj1: any, obj2: any, path = ''): DiffItem[] => {
    const diffs: DiffItem[] = [];

    // If both are the same reference or equal primitives
    if (obj1 === obj2) {
      return diffs;
    }

    // Handle null values
    if (obj1 === null || obj2 === null) {
      if (obj1 !== obj2) {
        diffs.push({
          path: path || '(root)',
          type: 'modified',
          oldValue: obj1,
          newValue: obj2,
        });
      }
      return diffs;
    }

    // Handle different types
    const type1 = Array.isArray(obj1) ? 'array' : typeof obj1;
    const type2 = Array.isArray(obj2) ? 'array' : typeof obj2;

    if (type1 !== type2) {
      diffs.push({
        path: path || '(root)',
        type: 'modified',
        oldValue: obj1,
        newValue: obj2,
      });
      return diffs;
    }

    // Handle objects and arrays
    if (typeof obj1 === 'object' && typeof obj2 === 'object') {
      const keys1 = Object.keys(obj1);
      const keys2 = Object.keys(obj2);
      const allKeys = new Set([...keys1, ...keys2]);

      allKeys.forEach(key => {
        const newPath = path ? `${path}.${key}` : key;

        if (!(key in obj1)) {
          diffs.push({
            path: newPath,
            type: 'added',
            newValue: obj2[key],
          });
        } else if (!(key in obj2)) {
          diffs.push({
            path: newPath,
            type: 'removed',
            oldValue: obj1[key],
          });
        } else {
          // Recursively compare
          const nestedDiffs = findDifferences(obj1[key], obj2[key], newPath);
          diffs.push(...nestedDiffs);
        }
      });
    } else if (obj1 !== obj2) {
      // Primitive values that are different
      diffs.push({
        path: path || '(root)',
        type: 'modified',
        oldValue: obj1,
        newValue: obj2,
      });
    }

    return diffs;
  };

  const handleSwap = () => {
    const temp = jsonLeft;
    setJsonLeft(jsonRight);
    setJsonRight(temp);
  };

  const handleLoadExample = () => {
    const example1 = {
      name: 'John Doe',
      age: 30,
      email: 'john@example.com',
      hobbies: ['reading', 'coding'],
    };

    const example2 = {
      name: 'John Doe',
      age: 31,
      email: 'john.doe@example.com',
      hobbies: ['reading', 'coding', 'traveling'],
      city: 'New York',
    };

    setJsonLeft(JSON.stringify(example1, null, 2));
    setJsonRight(JSON.stringify(example2, null, 2));
  };

  const formatValue = (value: any): string => {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (typeof value === 'string') return `"${value}"`;
    if (typeof value === 'object') return JSON.stringify(value, null, 2);
    return String(value);
  };

  const getDiffIcon = (type: DiffType) => {
    switch (type) {
      case 'added':
        return <span className="text-green-600 dark:text-green-400 font-bold">+</span>;
      case 'removed':
        return <span className="text-red-600 dark:text-red-400 font-bold">-</span>;
      case 'modified':
        return <span className="text-orange-600 dark:text-orange-400 font-bold">~</span>;
      default:
        return <span className="text-gray-600 dark:text-gray-400 font-bold">=</span>;
    }
  };

  const getDiffColor = (type: DiffType) => {
    switch (type) {
      case 'added':
        return 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700';
      case 'removed':
        return 'bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700';
      case 'modified':
        return 'bg-orange-50 dark:bg-orange-900/20 border-orange-300 dark:border-orange-700';
      default:
        return 'bg-gray-50 dark:bg-gray-900/20 border-gray-300 dark:border-gray-700';
    }
  };

  const heroFeatures = ['Side-by-Side Compare', 'Deep Comparison', 'Color-Coded Diff', 'Free Tool'];

  const keyFeatures = [
    {
      icon: GitCompare,
      title: 'Deep Comparison',
      description: 'Compare complex nested JSON structures with accurate field-by-field analysis.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Diff,
      title: 'Visual Differences',
      description: 'See added, removed, and modified fields with color-coded highlighting.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Layers,
      title: 'Nested Support',
      description: 'Handle deeply nested objects and arrays with path-based difference tracking.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Code,
      title: 'Validation First',
      description: 'Automatically validates both JSON inputs before comparison with error highlighting.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const howToSteps = [
    {
      number: 1,
      title: 'Paste First JSON',
      description: 'Enter your original JSON in the left editor',
    },
    {
      number: 2,
      title: 'Paste Second JSON',
      description: 'Enter the JSON to compare in the right editor',
    },
    {
      number: 3,
      title: 'Click Compare',
      description: 'Press compare to see the differences',
    },
    {
      number: 4,
      title: 'Review Changes',
      description: 'View color-coded differences and statistics',
    },
  ];

  return (
    <div>
      <DynamicMetadata title={metadata.title} description={metadata.description} keywords={metadata.keywords} openGraph={metadata.openGraph} />

      {/* Working Area */}
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">JSON Comparer & Diff Tool</h2>
        <p className="text-gray-600 dark:text-gray-400">Compare two JSON objects and visualize their differences</p>
      </div>

      {/* Controls */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <button
          onClick={handleLoadExample}
          className="px-4 py-1.5 text-sm rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Load Example
        </button>
        <button
          onClick={handleSwap}
          className="flex items-center gap-2 px-4 py-1.5 text-sm rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
        >
          <ArrowLeftRight size={16} />
          Swap
        </button>
      </div>

      {/* Input Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">JSON 1 (Original)</label>
          <JSONEditor value={jsonLeft} onChange={setJsonLeft} placeholder='Enter first JSON... e.g., {"name": "John"}' errorLine={leftErrorLine} height="320px" />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">JSON 2 (Comparing)</label>
          <JSONEditor value={jsonRight} onChange={setJsonRight} placeholder='Enter second JSON... e.g., {"name": "Jane"}' errorLine={rightErrorLine} height="320px" />
        </div>
      </div>

      <button
        onClick={compareJson}
        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl mb-6 flex items-center justify-center gap-2"
      >
        <GitCompare size={20} />
        Compare JSON
      </button>

      {/* Results Section */}
      {comparisonResult && (
        <div className="space-y-4">
          {comparisonResult.isValid ? (
            <>
              {/* Comparison Status */}
              <div
                className={`flex items-center gap-3 px-6 py-4 rounded-lg ${
                  comparisonResult.areEqual ? 'bg-green-50 dark:bg-green-900/20 border-2 border-green-500' : 'bg-orange-50 dark:bg-orange-900/20 border-2 border-orange-500'
                }`}
              >
                {comparisonResult.areEqual ? (
                  <>
                    <Check className="text-green-600 dark:text-green-400" size={28} />
                    <div>
                      <p className="font-bold text-lg text-green-900 dark:text-green-400">JSON Objects are Identical</p>
                      <p className="text-sm text-green-700 dark:text-green-500">No differences found</p>
                    </div>
                  </>
                ) : (
                  <>
                    <X className="text-orange-600 dark:text-orange-400" size={28} />
                    <div>
                      <p className="font-bold text-lg text-orange-900 dark:text-orange-400">Differences Found</p>
                      <p className="text-sm text-orange-700 dark:text-orange-500">
                        {comparisonResult.differences?.length} difference{comparisonResult.differences?.length !== 1 ? 's' : ''} detected
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Statistics */}
              {!comparisonResult.areEqual && comparisonResult.differences && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium">Added</p>
                    <p className="text-2xl font-bold text-green-900 dark:text-green-300">{comparisonResult.differences.filter(d => d.type === 'added').length}</p>
                  </div>
                  <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                    <p className="text-xs text-red-600 dark:text-red-400 font-medium">Removed</p>
                    <p className="text-2xl font-bold text-red-900 dark:text-red-300">{comparisonResult.differences.filter(d => d.type === 'removed').length}</p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                    <p className="text-xs text-orange-600 dark:text-orange-400 font-medium">Modified</p>
                    <p className="text-2xl font-bold text-orange-900 dark:text-orange-300">{comparisonResult.differences.filter(d => d.type === 'modified').length}</p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Total Changes</p>
                    <p className="text-2xl font-bold text-blue-900 dark:text-blue-300">{comparisonResult.differences.length}</p>
                  </div>
                </div>
              )}

              {/* Filter Toggle */}
              {!comparisonResult.areEqual && (
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <button
                    onClick={() => setShowOnlyDifferences(!showOnlyDifferences)}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    {showOnlyDifferences ? <Eye size={16} /> : <EyeOff size={16} />}
                    {showOnlyDifferences ? 'Show All' : 'Show Only Differences'}
                  </button>
                </div>
              )}

              {/* Differences List */}
              {!comparisonResult.areEqual && comparisonResult.differences && (
                <div className="bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <GitCompare size={20} />
                    Detailed Differences
                  </h3>
                  <div className="space-y-2">
                    {comparisonResult.differences.map((diff, index) => (
                      <div key={index} className={`p-4 rounded-lg border-2 ${getDiffColor(diff.type)}`}>
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-1">{getDiffIcon(diff.type)}</div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-900 dark:text-white mb-1">
                              <span className="font-mono text-sm bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">{diff.path}</span>
                            </p>
                            <div className="space-y-1 text-sm">
                              {diff.type === 'added' && (
                                <p className="text-green-700 dark:text-green-400">
                                  <span className="font-semibold">Added:</span> <span className="font-mono">{formatValue(diff.newValue)}</span>
                                </p>
                              )}
                              {diff.type === 'removed' && (
                                <p className="text-red-700 dark:text-red-400">
                                  <span className="font-semibold">Removed:</span> <span className="font-mono">{formatValue(diff.oldValue)}</span>
                                </p>
                              )}
                              {diff.type === 'modified' && (
                                <>
                                  <p className="text-red-700 dark:text-red-400">
                                    <span className="font-semibold">Old:</span> <span className="font-mono">{formatValue(diff.oldValue)}</span>
                                  </p>
                                  <p className="text-green-700 dark:text-green-400">
                                    <span className="font-semibold">New:</span> <span className="font-mono">{formatValue(diff.newValue)}</span>
                                  </p>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-500 rounded-lg px-6 py-4">
              <div className="flex items-start gap-3">
                <X className="text-red-600 dark:text-red-400 flex-shrink-0" size={24} />
                <div>
                  <p className="font-bold text-red-900 dark:text-red-400">Comparison Error</p>
                  <p className="text-sm text-red-700 dark:text-red-500 mt-1 font-mono">{comparisonResult.error}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Hero Section */}
      <div className="mt-16">
        <JSONToolHero
          icon={GitCompare}
          title="JSON Comparer & Diff Tool"
          description="Compare two JSON objects or arrays instantly. Visualize differences with color-coded highlighting and detailed change tracking."
          imageSrc="/json-compare.webp"
          imageAlt="JSON Comparer Tool"
          features={heroFeatures}
        />
      </div>

      {/* Key Features */}
      <JSONToolFeatures features={keyFeatures} />

      {/* How to Use */}
      <JSONToolHowTo steps={howToSteps} />
    </div>
  );
}
