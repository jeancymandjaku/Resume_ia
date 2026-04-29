import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface fileUploaderProps {
  onFileSelect: (file: File) => void;
}

const FileUploader = ({ onFileSelect }: fileUploaderProps) => {
  // const [file, setFile] = useState<File | null>(null)

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Do something with the files
      // console.log(acceptedFiles)
      const file = acceptedFiles[0] || null;

      onFileSelect?.(file);
    },
    [onFileSelect],
  );

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: { "application/pdf": [".pdf"] },
      maxSize: 20 * 1024 * 1024,
    });

  const file = acceptedFiles[0];

  return (
    <div className="w-full gradient-border">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {/* {
            isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        } */}
        <div className="space-y-4 cursor-pointer">
          
          {file ? (
            <div className="uploader-selected-file " onClick={(e) => e.stopPropagation()}>
              <img src="/images/pdf.png" alt="pdf" className="size-10" />
                <div className="flex items-center space-x-3">
              <div>
                <p className="text-sm font-medium text-gray-700 max-w-xs truncate">
                  {file.name}
                </p>
                <p className="text-sm text-gray-500">{file.size}</p>
              </div>
            </div>

            <button className="p-2 cursor-pointer" onClick={(e) => {onFileSelect?.(file)}}>
                <img src="/icons/cross.svg" alt="remove" className="w-4 h-4"/>
            </button>
            </div>
          ) : (
            <div>
                <div className="mx-auto w-16 h-16 flex items-center justify-center mb-2">
            <img src="/icons/info.svg" alt="upload" className="size-20" />
          </div>
              <p className="text-lg text-gray-500">
                <span className="font-semibold">
                  Click to select a file or drag and drop
                </span>
              </p>
              <p className="text-lg text-gray-500">
                Supported formats:{" "}
                <span className="font-semibold">
                  PDF, DOCX, TXT (max 20 MB)
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
