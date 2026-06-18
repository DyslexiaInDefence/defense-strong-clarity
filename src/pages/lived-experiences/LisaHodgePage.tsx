import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import StoryNav from "@/components/StoryNav";
import { getStory } from "@/data/livedStories";

const LisaHodgePage = () => {
  const story = getStory("lisa-hodge-civil-servant")!;

  return (
    <div className="py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <StoryNav currentSlug={story.slug} />

        <h1 className="text-3xl font-bold text-foreground md:text-4xl">
          Lisa Hodge – Civil Servant
        </h1>

        <p className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 p-4 text-sm italic leading-relaxed text-muted-foreground">
          Every dyslexic journey is different. These lived experiences provide personal perspectives from across the defence community. The views expressed are those of the individual and do not represent official MOD policy or the views of Dyslexia in Defence.
        </p>

        <article className="mt-8 text-base leading-relaxed text-foreground">
          <figure className="mb-6 md:float-right md:mb-4 md:ml-8 md:w-2/5">
            <img
              src={story.photoUrl}
              alt={story.photoAlt}
              className="w-full rounded-2xl shadow-md"
            />
            <figcaption className="mt-2 text-xs italic text-muted-foreground">
              {story.photoAlt}.
            </figcaption>
          </figure>

          <p>
            I was diagnosed with dyslexia in 2020 at the age of 32. Even now, it still feels strange to say that. Strange because it explains so much of my life, and strange because it took decades for anyone to notice. I spent years feeling like I was always a few steps behind everyone else, not because I wasn’t trying, but because my brain needed more time to process and hold on to information. I wasn’t slow. I wasn’t lazy. I just couldn’t retain key details the way others could, no matter how hard I pushed.
          </p>

          <p className="mt-4">
            I couldn’t read until I was around nine. Not because the words moved or blurred, but because my brain needed more time to make sense of them. I remember the heaviness of that. The way teachers assumed I wasn’t paying attention. The way other children seemed to absorb things instantly while I was still trying to catch up. I didn’t have the language for it then. I just thought I wasn’t good enough.
          </p>

          <p className="mt-4">
            My dad became my quiet anchor. He checked every piece of homework, every essay, every university assignment before I submitted it. I didn’t realise until adulthood how much of my education rested on his support. Without him, I don’t know how I would have made it through.
          </p>

          <p className="mt-4">
            By the time I reached adulthood, I knew deep down that something didn’t add up. I didn’t need anyone else to push me into getting assessed. I knew I needed answers for myself. I needed to understand why everything had always felt harder than it should. My son’s struggles echoed my own, but the decision to get assessed was mine. I wanted clarity. I wanted to stop guessing. I wanted to stop carrying the weight of “maybe it’s just me”.
          </p>

          <p className="mt-4">
            I’m incredibly fortunate that the MOD funded and supported my assessment. Without that support, I wouldn’t have been diagnosed. That moment changed everything. I now have a disability passport at work, with the adjustments and software that actually help me work in the way my brain works best.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-foreground">The moment of diagnosis</h2>

          <p className="mt-4">
            When the assessor said “you have dyslexia”, something inside me shifted. It was relief and grief wrapped together. Relief because there was finally a reason. Grief because I realised how long I had carried the blame for something that was never my fault.
          </p>

          <p className="mt-4">
            Reading the report was hard. Seeing your challenges written down so plainly can feel like being exposed. It felt like a punch to the stomach. But it was also the start of healing. It gave me permission to stop apologising for the way my brain works.
          </p>

          <p className="mt-4">
            Getting my own diagnosis made it easy to get my son assessed too. His report opened doors for him that I never had. Our journeys run alongside each other now, and I’m grateful every day that I took that step for myself. Understanding yourself is powerful at any age.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-foreground">Growing up undiagnosed</h2>

          <p className="mt-4">
            School was never just hard. It was isolating. I always felt like the weird kid, the one who didn’t quite fit, the one everyone quietly decided was a bit slow or a bit dumb. Children can be cruel without even realising it, and I was bullied for things I didn’t understand about myself. I learned early on that I didn’t belong in the spaces where everyone else seemed to thrive. I spent years trying to shrink myself, trying not to draw attention, trying to survive each day without being noticed.
          </p>

          <p className="mt-4">
            Every lesson felt like a mountain. Everyone else seemed to absorb information instantly while I was still trying to make sense of the first sentence. Education wasn’t built for people who learn the way I do. Those feelings of not fitting in, of being on the outside looking in, settled deep. They shape you in ways you don’t fully understand until much later.
          </p>

          <p className="mt-4">
            But dyslexia also gave me strengths. Creativity. Lateral thinking. The ability to see solutions others miss. I’m still learning to trust that part of myself. When something feels obvious to me, I assume it must be wrong. I’m learning that sometimes the simplest answer is the right one.
          </p>

          <p className="mt-4">
            I went through school and university undiagnosed and still achieved. I graduated with a 2:2, and I’m proud of that. Sitting in lectures, trying to take notes, trying to retain anything that was said, was almost impossible. I didn’t enjoy learning because it felt like a battle I couldn’t win. But I did it anyway.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-foreground">Where I am now</h2>

          <p className="mt-4">
            I am a founding member and Co-Chair of the Defence Dyslexia Network, something I’m incredibly proud of. Helping to shape it from the ground up and supporting others through their own dyslexic journeys has become one of the most meaningful parts of my life. I show up loudly and proudly about my own dyslexia and ADHD, because I know what it feels like to hide. I use my voice until others feel ready to use theirs.
          </p>

          <h2 className="mt-8 text-2xl font-bold text-foreground">My advice to anyone newly diagnosed</h2>

          <p className="mt-4">
            Your report is not a judgement. It’s a map. It shows where the challenges are, not who you are. You are made of so much more than the things you find difficult.
          </p>

          <p className="mt-4">
            Find support. Ask for adjustments. Talk to others. Share your story. It changes everything.
          </p>

          <p className="mt-4">
            We are not stupid. We want to learn. We just need the right conditions to do it. Small changes make a huge difference. Clear instructions. Bullet points. Space to process. A little patience.
          </p>

          <p className="mt-4">
            That’s all we’re asking for.
          </p>

          <div className="clear-both" />
        </article>

        <aside className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-2xl font-bold text-foreground">Share Your Story</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Lived experiences help others realise they are not alone. If you would like to share your own story, please contact Dyslexia in Defence.
          </p>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Contact Us
            <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default LisaHodgePage;