import React from "react";

interface PhotoId {
  params: { id: number; photoId: number };
}

// const PhotoDetails = ({ params }: PhotoId) => {
//   console.log(params.photoId);

//   return <div>PhotoDetails {params.photoId}</div>;
// };
// OR ->

const PhotoDetails = ({ params: { id, photoId } }: PhotoId) => {
  console.log(photoId);

  return (
    <div>
      User: {id} <br /> PhotoDetails {photoId}
    </div>
  );
};

export default PhotoDetails;
