"use client";

interface Props {
  error: Error;
  reset: () => void;
}
const Error = ({ error, reset }: Props) => {
  return (
    <div>
      <h2>An unexpected error has occurred!</h2>
      <button className="btn btn-error" onClick={() => reset()}>
        Retry
      </button>
    </div>
  );
};

export default Error;
