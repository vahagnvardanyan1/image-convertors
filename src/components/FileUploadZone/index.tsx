import { Upload, FileImage } from 'lucide-react';

import { Button } from '../ui/button';

interface FileUploadZoneProps {
  isDragOver: boolean;
  selectedFile: File | null;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent) => void;
  onClick: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  onFileSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  dragOverText?: string;
  defaultText?: string;
  browseText?: string;
  releaseText?: string;
  chooseFileText?: string;
}

export const FileUploadZone = ({
  isDragOver,
  selectedFile,
  onDragOver,
  onDragLeave,
  onDrop,
  onClick,
  fileInputRef,
  onFileSelect,
  accept = 'image/*',
  dragOverText = 'Drop file here',
  defaultText = 'Drag & drop your image here',
  browseText = 'or click to browse',
  releaseText = 'Release to upload',
  chooseFileText = 'Choose File',
}: FileUploadZoneProps) => {
  return (
    <div
      className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 cursor-pointer ${
        isDragOver ? 'border-blue-500 bg-blue-50 scale-105' : selectedFile ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
      }`}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={() => !selectedFile && onClick()}
    >
      {selectedFile ? (
        <div className="flex items-center justify-center space-x-4">
          <FileImage className="text-green-600" size={48} />
          <div className="text-left">
            <p className="font-medium text-gray-900">{selectedFile.name}</p>
            <p className="text-sm text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
        </div>
      ) : (
        <div>
          <Upload className={`mx-auto mb-4 transition-all duration-200 ${isDragOver ? 'text-blue-500 scale-110' : 'text-gray-400'}`} size={48} />
          <p className={`text-lg font-medium mb-2 transition-colors duration-200 ${isDragOver ? 'text-blue-600' : 'text-gray-900'}`}>{isDragOver ? dragOverText : defaultText}</p>
          <p className={`text-gray-500 mb-4 transition-colors duration-200 ${isDragOver ? 'text-blue-500' : 'text-gray-500'}`}>{isDragOver ? releaseText : browseText}</p>
          {!isDragOver && (
            <Button
              variant="outline"
              onClick={e => {
                e.stopPropagation();
                onClick();
              }}
              className="rounded-lg"
            >
              {chooseFileText}
            </Button>
          )}
        </div>
      )}

      <input type="file" ref={fileInputRef} onChange={onFileSelect} accept={accept} className="hidden" />
    </div>
  );
};
