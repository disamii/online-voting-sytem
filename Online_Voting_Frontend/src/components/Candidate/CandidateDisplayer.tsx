import useCandidates from "../customhook/useCandidates";
import CandidateSingleSlider from "./CandidateSingleSlider";

type Props = {};

export default function CandidateDisplayer({}: Props) {
  const { isLoading, candidates, error } = useCandidates();
  
  if (isLoading) {
    return <div>Loading candidates...</div>;
  }
  if (error) {
    return <div>Error loading candidates: {error.message}</div>;
  }
  return (
    <div className="flex  gap-4 p-2  ">
    {candidates.map((candidate) => (
      <div
        key={candidate.id}
        className="flex-1 bg-black min-w-2 transition-[min-width] duration-300 hover:min-w-[60rem] grayscale hover:grayscale-0 e  relative h-[30rem] skew-x-12"
      >
        <CandidateSingleSlider candidate={candidate} />
      </div>
    ))}
  </div>
  )
}
