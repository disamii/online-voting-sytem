import CandidateDisplayer from '../Candidate/CandidateDisplayer'
import CandidatProfile from '../Candidate/CandidateProfile'
import Footer from '../ui/Footer'
import Header from '../ui/Header'
import Vote from '../vote/voteInvitation'
import VoteIntro from '../vote/VoteIntro'

type Props = {}

export default function HomePage({ }: Props) {
  return (
    <div className='bg-[var(--blue-black)]  text-accent-foreground ' >
      <Header />
      <section>
        <VoteIntro />
      </section>
      <section className='px-0'>
        <CandidateDisplayer />
      </section>
      <section>
        <Vote />

      </section>
      <section>
        <CandidatProfile/>
      </section>
        <Footer/>
    </div>
  )
}