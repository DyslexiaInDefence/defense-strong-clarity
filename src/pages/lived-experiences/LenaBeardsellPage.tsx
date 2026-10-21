import { Link } from "@/lib/router-compat";
import { ArrowLeft } from "lucide-react";
import StoryNav from "@/components/StoryNav";
import { getStory } from "@/data/livedStories";

const QUOTE = "it's not failure if you can learn from it";

const PARAGRAPHS_BEFORE_QUOTE = [
  "As a child I suspected I was different from the other children, my mother had to spend additional time with me outside the classroom to develop my working memory, reading and spelling, my earliest memory being of a brightly coloured folder filled with different coloured flash cards. Early on I discovered I just had to work harder and longer than others. It was not till later life that I saw this as a negative thing, unlike many, since I had a supportive family, I did not see my dyslexia as a negative thing and learning overall was a positive experience.",
  "I loved problem solving and even part enjoyed course work getting to take my time over finding the answers. I never did manage to learn all my multiplications though, even with all the different songs on tape. I was diagnosed early, it was suspected at age 6, but it was not till I was almost twice that age we had it officially diagnosed for the first time. I have had 4 assessments in my life, which seems strange for a condition that is incurable and life long, it's just the way you think.",
  "During school, I often found I was not in my comfort zone, but that was ok, it would take me longer than others to comprehend some things. From age 11 to 18, I would always attend after school help and work through homework with teachers where possible. Far better to get homework done at school than take it home! Despite this I also had an active sporting life with swimming and kayaking teams taking up my free time and drama clubs. My brain as a child just wanted to try everything, and most of all, because academically I was not naturally gifted, I learned that it's ok to try, it's ok to fail, because it's not failure if you can learn from it. This I later reflect on and see as a great gift my life experience with dyslexia has taught me.",
];

const PARAGRAPHS_AFTER_QUOTE = [
  "As I grew up I picked the subjects that naturally would not have a time limited exam, despite being entitled to 25% extra time. I studied BA (Hons) Drama at university, it had only practical exams and essays with no timed conditions. I was rewarded by being assessed this way with first class honours, I went on to do a Masters in producing Musical Theatre, choosing instead of writing a dissertation to produce a show in the West End, I just missed the distinction mark due to some of my other essays brining me down, but gained my MA with Merit!",
  "Practical skills and being able to see the bigger picture in project planning and creating and using creative solutions is what made my production a success, alongside good people skills and being able to navigate emotions of others. This also served me well in my hobbies, which at university was just ULOTC I was the lead for running AT almost every year. Going through military training in UOTC when it came to practical tasks was easy, and when I transferred out into the Reserves going through training again to become a LCpl in the AGC (SPS) was great. I found the people that trained me were always willing to give extra time and support if I was vocal and said I was struggling, and I would practice over and over until I got it right. I never had to highlight that I was dyslexic as a reserve as it didn't matter, there would always be someone else that wanted the extra practice too.",
  "Op HERRICK was when I first discovered the difference between having a line manager (LMs) that is accepting of difference and one that is not. I have grown to discover that my dyslexia is not so much just about thinking different, but it has shaped me and it is part of who I am. I take every opportunity given to me, I am not afraid to fail or be laughed at, I try new things and enjoy meeting and working with a variety of people. So on HERRICK as a young LCpl I did not stick to just the routine of; work shift, gym, sleep repeat. I met with the Americans and Danish and learned to Salsa dance, I did the DANCAN March, I competed in CAMP LEATHERNECK/BASTIAN's got talent and won! All these additional things my LMs saw as negative, although in work I never slacked. The next RAO to come in took me aside and said I did not have a good rep with the previous, but whatever I could do to make life more tolerable he supported, he encouraged me to push myself outside of just my shift, to learn about what was needed to brush up my skills to become an officer. I had attempted AOSB before and had failed the first time. My final 3 months of HERRICK I worked night shift and in the day I worked on my current affairs and had discussions with officers, I went to the Education Centre and learned tricks to help with my maths, getting my processing speed in mental arithmetic up. When I finished my 7 months on HERRICK I came back to the UK having developed and learned new skills and upon attempting AOSB for the second time passed.",
  "I could write a whole chapter on the challenges of RMAS as a dyslexic. To summarise I will simply say I worked harder than I ever have in my entire life, desperate to get round the course in one go. There are no allowances or extra time in the military assessments, it is only in the academic 'Faraday Hall' exams and essays that dyslexia is acknowledged. Back into my worst kind of assessments, timed exams and tests. The answer is you just have to work harder to retain the information and repeat it over and over. Imposter syndrome crept in most days for me.",
  "I have never been so proud as I was on the day I commissioned and also had my PgCert in Conflict Studies from Cranfield University, but I still felt a bit like an imposter. I commissioned into the corps that had helped me with my education while on HERRICK, the AGC (ETS). Why would someone that is not naturally gifted academically and struggled their whole life with education become a teacher? My answer was easy, it was the teachers that helped, inspired me and so as a teacher I wanted to help others. 7 years into regular service and I would not do anything different than what I have. As a dyslexic, there are parts of my job that take me longer, writing course reports and preparing my lessons for example, I got a lot of red pen at the start, but every course I develop, I grow, I learn and most importantly I am able to help other do so also. I have been picked up for spelling mistakes on the board a couple times, but you know what, it's an opportunity and I have no shame in admitting I am dyslexic. After all I am made by dyslexia. I cannot escape that I have to write a 16,000 word dissertation for my MSc Education so am writing it on dyslexia support in the military.",
];

const LenaBeardsellPage = () => {
  const story = getStory("major-lena-beardsell")!;

  return (
    <div className="py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <StoryNav currentSlug={story.slug} />

        <header className="flex flex-col gap-6 sm:flex-row sm:items-end">
          {/* Swap the photo by replacing the file at story.photoUrl */}
          <div className="aspect-[3/4] w-40 shrink-0 overflow-hidden rounded-2xl border border-border bg-muted sm:w-48">
            <img
              src={story.photoUrl}
              alt="Major Lena Beardsell"
              width={864}
              height={1152}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-base font-semibold text-primary">
              Lived Experience: Dyslexia
            </p>
            <h1 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
              Major Lena Beardsell
            </h1>
          </div>
        </header>

        <p className="mt-8 rounded-lg border-l-4 border-primary bg-primary/5 p-4 text-base leading-relaxed text-muted-foreground">
          Every dyslexic journey is different. These lived experiences provide personal perspectives from across the defence community. The views expressed are those of the individual and do not represent official MOD policy or the views of Dyslexia in Defence.
        </p>

        <article className="mt-10 max-w-[68ch] text-left text-lg leading-[1.7] text-foreground">
          {PARAGRAPHS_BEFORE_QUOTE.map((p) => (
            <p key={p.slice(0, 24)} className="mb-7">{p}</p>
          ))}

          <blockquote className="my-10 rounded-xl border-l-4 border-primary bg-muted/40 px-6 py-5 text-xl font-semibold leading-[1.6] text-foreground">
            “{QUOTE}”
          </blockquote>

          {PARAGRAPHS_AFTER_QUOTE.map((p) => (
            <p key={p.slice(0, 24)} className="mb-7">{p}</p>
          ))}
        </article>

        <aside className="mt-12 max-w-[68ch] rounded-2xl border border-border bg-card p-6 md:p-8">
          <p className="text-lg leading-[1.7] text-foreground">
            <Link
              to="/contact"
              className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Want to share your own story? Get in touch.
            </Link>
          </p>
          <Link
            to="/lived-experiences"
            className="mt-4 inline-flex min-h-11 items-center gap-2 text-base font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Lived Experiences
          </Link>
        </aside>
      </div>
    </div>
  );
};

export default LenaBeardsellPage;
