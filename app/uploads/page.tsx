"use client";
import { CldUploadWidget } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");

  return (
    <>
      {publicId && (
        <CldImage
          width="400"
          height="300"
          src={publicId}
          sizes="100vw"
          crop="fill"
          alt="Description of my image"
        />
      )}

      <CldUploadWidget
        uploadPreset="pvqqd7zj"
        onSuccess={(result, { widget }) => {
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
          widget.close();
        }}
        options={{
          sources: ["local", "url", "google_drive", "camera", "instagram"],
          cropping: false,
          multiple: true,
          maxFiles: 5,
          maxFileSize: 10000000, // 10 MB
        }}
      >
        {({ open }) => {
          return (
            <button
              className="btn btn-outline btn-primary"
              onClick={() => open()}
            >
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
