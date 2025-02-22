import useCandidates from "../customhook/useCandidates";
import CandidateSingleProfile from "./CandidateSingleProfile";

type Props = {};

export default function CandidatProfile({}: Props) {
  const { isLoading, candidates, error } = useCandidates();
  
  if (isLoading) {
    return <div>Loading candidates...</div>;
  }
  if (error) {
    return <div>Error loading candidates: {error.message}</div>;
  }
  return (
<div className="grid grid-cols-3 gap-x-6 gap-y-4 p-2">
  {candidates.map((candidate, index) => (
    <div
      key={candidate.id}
      className={`
        ${index % 3 === 0 ? "mt-0" : ""}
        ${index % 3 === 1 ? "mt-8" : ""}
        ${index % 3 === 2 ? "mt-16" : ""}
      `}
    >
      <CandidateSingleProfile candidate={candidate} />
    </div>
  ))}
</div>

  )
}
