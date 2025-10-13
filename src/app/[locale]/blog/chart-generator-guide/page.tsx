import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { localeMap } from '@/i18n/config';
import { BarChart3, LineChart, PieChart, Target, TrendingUp, Activity, Download, Palette, Plus, Eye } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.chartGeneratorGuide' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `https://imageconvertors.com/${locale}/blog/chart-generator-guide`,
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: `https://imageconvertors.com/${locale}/blog/chart-generator-guide`,
      siteName: 'ImageConvertors',
      type: 'article',
      locale: localeMap[locale] || 'en_US',
      images: [
        {
          url: '/chart-generator.webp',
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
  };
}

export default async function ChartGeneratorGuidePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blogChartGenerator' });
  const tCommon = await getTranslations({ locale, namespace: 'common' });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <BarChart3 size={48} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">{t('title')}</h1>
          <p className="text-xl text-center text-blue-100 max-w-3xl mx-auto mb-8">{t('subtitle')}</p>
          <div className="flex justify-center">
            <Link
              href="/chart-generator"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <BarChart3 className="mr-2" size={20} />
              {t('tryChartGenerator')}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">{t('intro1')}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{t('intro2')}</p>
          </div>
        </section>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-blue-100 shadow-xl">
            <Image
              src="/chart-generator.webp"
              alt="Screenshot of the ImageConvertors free chart generator tool showing customization options"
              width={1200}
              height={630}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="mt-4 text-sm text-center text-gray-500">Generate custom charts with our free online tool — choose from 6 chart types and customize colors.</p>
        </div>

        {/* What is Chart Generator */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-4"></div>
            {t('whatIsTitle')}
          </h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
            <p className="text-gray-700 leading-relaxed mb-4">{t('whatIsDesc')}</p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white p-4 rounded-xl border border-blue-100">
                <BarChart3 className="text-blue-600 mb-2" size={24} />
                <h3 className="font-semibold text-gray-900 mb-1">{t('freeToUse')}</h3>
                <p className="text-sm text-gray-600">{t('freeToUseDesc')}</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-purple-100">
                <Eye className="text-purple-600 mb-2" size={24} />
                <h3 className="font-semibold text-gray-900 mb-1">{t('browserBased')}</h3>
                <p className="text-sm text-gray-600">{t('browserBasedDesc')}</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-pink-100">
                <Download className="text-pink-600 mb-2" size={24} />
                <h3 className="font-semibold text-gray-900 mb-1">{t('multipleFormats')}</h3>
                <p className="text-sm text-gray-600">{t('multipleFormatsDesc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chart Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-4"></div>
            {t('chartTypesTitle')}
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border-2 border-blue-100 hover:border-blue-300 transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <BarChart3 className="text-blue-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('barChart')}</h3>
                  <p className="text-gray-700">{t('barChartDesc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-green-100 hover:border-green-300 transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <LineChart className="text-green-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('lineChart')}</h3>
                  <p className="text-gray-700">{t('lineChartDesc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-purple-100 hover:border-purple-300 transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <PieChart className="text-purple-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('pieChart')}</h3>
                  <p className="text-gray-700">{t('pieChartDesc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-pink-100 hover:border-pink-300 transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-pink-100 rounded-lg">
                  <Target className="text-pink-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('doughnutChart')}</h3>
                  <p className="text-gray-700">{t('doughnutChartDesc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-amber-100 hover:border-amber-300 transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <TrendingUp className="text-amber-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('areaChart')}</h3>
                  <p className="text-gray-700">{t('areaChartDesc')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-teal-100 hover:border-teal-300 transition-all">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-teal-100 rounded-lg">
                  <Activity className="text-teal-600" size={28} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{t('radarChart')}</h3>
                  <p className="text-gray-700">{t('radarChartDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-4"></div>
            {t('howToUseTitle')}
          </h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('step1Title')}</h3>
                <p className="text-gray-700">{t('step1Desc')}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('step2Title')}</h3>
                <p className="text-gray-700">{t('step2Desc')}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('step3Title')}</h3>
                <p className="text-gray-700">{t('step3Desc')}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('step4Title')}</h3>
                <p className="text-gray-700">{t('step4Desc')}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
              <div className="flex-1 pt-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('step5Title')}</h3>
                <p className="text-gray-700">{t('step5Desc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-4"></div>
            {t('keyFeaturesTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <Palette className="text-blue-600 mb-3" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('customColorsTitle')}</h3>
              <p className="text-gray-700">{t('customColorsDesc')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <Plus className="text-green-600 mb-3" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('dynamicDataTitle')}</h3>
              <p className="text-gray-700">{t('dynamicDataDesc')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <Download className="text-purple-600 mb-3" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('multiExportTitle')}</h3>
              <p className="text-gray-700">{t('multiExportDesc')}</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <Eye className="text-pink-600 mb-3" size={32} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('livePreviewTitle')}</h3>
              <p className="text-gray-700">{t('livePreviewDesc')}</p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-4"></div>
            {t('useCasesTitle')}
          </h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">📊</span>
                <span className="text-gray-700">{t('useCase1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-3 text-xl">📈</span>
                <span className="text-gray-700">{t('useCase2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3 text-xl">📉</span>
                <span className="text-gray-700">{t('useCase3')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-3 text-xl">💼</span>
                <span className="text-gray-700">{t('useCase4')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-3 text-xl">🎓</span>
                <span className="text-gray-700">{t('useCase5')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-3 text-xl">📱</span>
                <span className="text-gray-700">{t('useCase6')}</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Tips & Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-4"></div>
            {t('tipsTitle')}
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-1">💡 {t('tip1Title')}</h3>
              <p className="text-gray-700">{t('tip1Desc')}</p>
            </div>
            <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-1">💡 {t('tip2Title')}</h3>
              <p className="text-gray-700">{t('tip2Desc')}</p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-1">💡 {t('tip3Title')}</h3>
              <p className="text-gray-700">{t('tip3Desc')}</p>
            </div>
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-lg">
              <h3 className="font-semibold text-gray-900 mb-1">💡 {t('tip4Title')}</h3>
              <p className="text-gray-700">{t('tip4Desc')}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full mr-4"></div>
            {t('faqTitle')}
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('faq1Q')}</h3>
              <p className="text-gray-700">{t('faq1A')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('faq2Q')}</h3>
              <p className="text-gray-700">{t('faq2A')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('faq3Q')}</h3>
              <p className="text-gray-700">{t('faq3A')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('faq4Q')}</h3>
              <p className="text-gray-700">{t('faq4A')}</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('faq5Q')}</h3>
              <p className="text-gray-700">{t('faq5A')}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="text-xl text-blue-100 mb-6">{t('ctaSubtitle')}</p>
          <Link
            href="/chart-generator"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <BarChart3 className="mr-2" size={20} />
            {t('ctaButton')}
          </Link>
        </section>
      </div>
    </div>
  );
}
