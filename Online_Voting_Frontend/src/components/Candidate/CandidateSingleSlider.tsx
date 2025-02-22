import { Candidate } from "@/types/interfaces";
type Props = {
  candidate: Candidate;
};

export default function CandidateSingleSlider({ candidate }: Props) {
  { console.log(candidate.photo) }
  return (
    <>
      <img
        className="w-full h-full"
        src={candidate.photo} alt={`${candidate.first_name} ${candidate.last_name}`} />
      <div className=" absolute   text-background w-full bg-black/40 bottom-0  ">
        <h2> Mr.{`${candidate.first_name} ${candidate.last_name}`}</h2>
        <p>"{candidate.best_speech_quotes}"</p>
      </div>
    </>
  );
}
