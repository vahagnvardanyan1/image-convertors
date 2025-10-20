import { Crop, Maximize, Move, CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Card } from '@/components/Card';
import { ToolGrid } from '@/components/tooling/ToolShell';

export const CropperFeatures = () => {
  const tCrop = useTranslations('cropTool');

  const features = [
    { icon: Crop, colorClass: 'bg-blue-100', iconColor: 'text-blue-600', titleKey: 'feature1Title', descKey: 'feature1Desc' },
    { icon: Maximize, colorClass: 'bg-purple-100', iconColor: 'text-purple-600', titleKey: 'feature2Title', descKey: 'feature2Desc' },
    { icon: Move, colorClass: 'bg-green-100', iconColor: 'text-green-600', titleKey: 'feature3Title', descKey: 'feature3Desc' },
    { icon: CheckCircle, colorClass: 'bg-orange-100', iconColor: 'text-orange-600', titleKey: 'feature4Title', descKey: 'feature4Desc' },
  ];

  return (
    <ToolGrid columns={2} className="lg:grid-cols-4 mb-12">
      {features.map(({ icon: Icon, colorClass, iconColor, titleKey, descKey }) => (
        <Card key={titleKey} className="p-6 text-center hover:shadow-lg transition-shadow">
          <div className={`w-12 h-12 ${colorClass} rounded-lg flex items-center justify-center mx-auto mb-4`}>
            <Icon className={iconColor} size={24} />
          </div>
          <h3 className="font-semibold text-gray-900 mb-2">{tCrop(titleKey)}</h3>
          <p className="text-gray-600 text-sm">{tCrop(descKey)}</p>
        </Card>
      ))}
    </ToolGrid>
  );
};
