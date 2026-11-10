import PostActions from "./ui/post-actions";
import WaitlistForm from "./ui/waitlist-form";
import {
  CameraIcon,
  CompassIcon,
  HeartIcon,
  HomeIcon,
  PlusIcon,
  SendIcon,
  TableIcon,
  UserIcon,
} from "./ui/icons";

const brandGradient = "bg-linear-to-tr from-tafel-amber via-tafel-400 to-tafel-600";

const stories = [
  { name: "Your story", tone: "from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-600", seen: true },
  { name: "mira", tone: "from-amber-200 to-rose-400" },
  { name: "jonas", tone: "from-sky-300 to-indigo-500" },
  { name: "ade", tone: "from-emerald-300 to-teal-600" },
  { name: "lena", tone: "from-fuchsia-300 to-purple-600" },
];

const features = [
  {
    icon: CameraIcon,
    title: "Post what's on your plate",
    body: "Photos, carousels and short clips, all shown the way you shot them. No crops, no filters forced on you.",
  },
  {
    icon: TableIcon,
    title: "Tables for your people",
    body: "Make a private Table for family, roommates or the Sunday-dinner crew. Only the people at the Table see what's shared there.",
  },
  {
    icon: CompassIcon,
    title: "Discover without the noise",
    body: "Explore is ranked by what your friends save, not by what keeps you scrolling. Close the app whenever you like.",
  },
];

const explore = [
  { tone: "from-orange-200 via-rose-300 to-fuchsia-500", likes: "2.4k", caption: "Harbour at golden hour" },
  { tone: "from-lime-200 via-emerald-300 to-teal-600", likes: "981", caption: "Market greens" },
  { tone: "from-sky-200 via-blue-400 to-indigo-700", likes: "5.1k", caption: "First swim of the year" },
  { tone: "from-amber-100 via-amber-300 to-orange-600", likes: "1.7k", caption: "Sourdough, attempt 14" },
  { tone: "from-violet-200 via-purple-400 to-slate-800", likes: "3.3k", caption: "Rooftop, 11pm" },
  { tone: "from-rose-100 via-pink-300 to-red-500", likes: "742", caption: "Grandma's garden" },
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2" aria-label="Tafel home">
      <span className={`grid size-8 place-items-center rounded-[10px] text-white ${brandGradient}`}>
        <TableIcon className="size-5" />
      </span>
      <span className="text-xl font-bold tracking-tight">Tafel</span>
    </a>
  );
}

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[300px] shrink-0">
      <div className="overflow-hidden rounded-[2.75rem] border-[10px] border-zinc-900 bg-white text-zinc-900 shadow-2xl shadow-tafel-500/20 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
        {/* App bar */}
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <span className="text-lg font-bold tracking-tight">Tafel</span>
          <div className="flex gap-3">
            <HeartIcon className="size-5" />
            <SendIcon className="size-5" />
          </div>
        </div>

        {/* Stories */}
        <ul className="flex gap-3 overflow-hidden px-4 pb-3">
          {stories.map((s) => (
            <li key={s.name} className="flex w-14 shrink-0 flex-col items-center gap-1">
              <span
                className={`rounded-full p-[2px] ${s.seen ? "bg-zinc-200 dark:bg-zinc-700" : brandGradient}`}
              >
                <span className="block rounded-full bg-white p-[2px] dark:bg-zinc-950">
                  <span className={`block size-12 rounded-full bg-linear-to-br ${s.tone}`} />
                </span>
              </span>
              <span className="w-full truncate text-center text-[10px] text-zinc-600 dark:text-zinc-400">
                {s.name}
              </span>
            </li>
          ))}
        </ul>

        {/* Post */}
        <article className="border-t border-zinc-100 dark:border-zinc-900">
          <header className="flex items-center gap-2 px-3 py-2.5">
            <span className="size-7 rounded-full bg-linear-to-br from-amber-200 to-rose-400" />
            <div className="leading-tight">
              <p className="text-[13px] font-semibold">mira.cooks</p>
              <p className="text-[11px] text-zinc-500">Lisbon, Portugal</p>
            </div>
          </header>
          <div className="relative aspect-square bg-linear-to-br from-amber-200 via-orange-400 to-rose-600">
            <div className="absolute inset-x-8 bottom-10 h-16 rounded-[50%] bg-white/25 blur-md" />
            <div className="absolute top-10 right-10 size-16 rounded-full bg-amber-100/70 blur-sm" />
          </div>
          <PostActions likes={1284} />
          <p className="px-3 pt-1 text-[13px]">
            <span className="font-semibold">mira.cooks</span> Long table, longer lunch. Thanks
            for coming, everyone.
          </p>
          <p className="px-3 pt-1 pb-3 text-[11px] text-zinc-500">View all 48 comments</p>
        </article>

        {/* Bottom nav */}
        <nav className="flex justify-around border-t border-zinc-100 py-3 dark:border-zinc-900" aria-label="App preview navigation">
          <HomeIcon className="size-6" />
          <CompassIcon className="size-6" />
          <PlusIcon className="size-6" />
          <TableIcon className="size-6" />
          <UserIcon className="size-6" />
        </nav>
      </div>

      {/* Floating notification */}
      <div className="absolute top-28 -left-28 hidden items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 text-zinc-900 shadow-xl ring-1 ring-zinc-900/5 lg:flex dark:bg-zinc-900 dark:text-zinc-100 dark:ring-white/10">
        <span className="size-8 rounded-full bg-linear-to-br from-emerald-300 to-teal-600" />
        <p className="text-xs leading-snug">
          <span className="font-semibold">ade</span> joined
          <br />
          <span className="text-zinc-500">your Table &ldquo;Sunday dinner&rdquo;</span>
        </p>
      </div>
      <div className="absolute -right-20 bottom-36 hidden items-center gap-2 rounded-full bg-white px-3.5 py-2 text-zinc-900 shadow-xl ring-1 ring-zinc-900/5 lg:flex dark:bg-zinc-900 dark:text-zinc-100 dark:ring-white/10">
        <HeartIcon filled className="size-4 text-tafel-500" />
        <span className="text-xs font-semibold">+128 likes</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-zinc-100 bg-background/80 backdrop-blur dark:border-zinc-900">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <nav className="hidden gap-8 text-sm text-zinc-600 md:flex dark:text-zinc-400">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#explore" className="hover:text-foreground">Explore</a>
            <a href="#join" className="hover:text-foreground">Join</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#" className="hidden rounded-full px-4 py-2 text-sm font-medium hover:bg-zinc-100 sm:block dark:hover:bg-zinc-900">
              Log in
            </a>
            <a href="#join" className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90">
              Sign up
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute -top-40 right-0 size-[36rem] rounded-full bg-tafel-100/70 blur-3xl dark:bg-tafel-500/10" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div className="flex flex-col items-start gap-6">
              <span className="rounded-full bg-tafel-50 px-3 py-1 text-xs font-semibold text-tafel-600 dark:bg-tafel-500/15 dark:text-tafel-400">
                Now in early access
              </span>
              <h1 className="text-5xl font-bold tracking-tight text-balance sm:text-6xl">
                Pull up a chair.{" "}
                <span className={`bg-clip-text text-transparent ${brandGradient}`}>
                  Share the everyday.
                </span>
              </h1>
              <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Tafel is a photo-sharing app for the moments worth passing around the table.
                Post to everyone, or keep it to the people who matter.
              </p>
              <WaitlistForm />
              <p className="text-sm text-zinc-500">Free to use. No ads inside your Tables.</p>
            </div>
            <PhoneMockup />
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-t border-zinc-100 bg-zinc-50 py-20 dark:border-zinc-900 dark:bg-zinc-950">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to stay close. Nothing you don&apos;t.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {features.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-3xl bg-white p-7 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-white/10"
                >
                  <span className="grid size-11 place-items-center rounded-2xl bg-tafel-50 text-tafel-600 dark:bg-tafel-500/15 dark:text-tafel-400">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 leading-7 text-zinc-600 dark:text-zinc-400">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore */}
        <section id="explore" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Fresh on Tafel</h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                  A taste of what people are sharing this week.
                </p>
              </div>
              <a href="#join" className="text-sm font-semibold text-tafel-600 hover:underline dark:text-tafel-400">
                See more when you join &rarr;
              </a>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3">
              {explore.map((p) => (
                <li
                  key={p.caption}
                  className={`group relative aspect-square overflow-hidden rounded-2xl bg-linear-to-br ${p.tone}`}
                >
                  <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/50 via-black/0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                    <p className="text-sm font-semibold">{p.caption}</p>
                    <p className="mt-1 flex items-center gap-1 text-xs">
                      <HeartIcon filled className="size-3.5" /> {p.likes}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section id="join" className="px-4 pb-20 sm:px-6">
          <div className={`mx-auto flex max-w-6xl flex-col items-center gap-6 rounded-[2rem] px-6 py-16 text-center text-white ${brandGradient}`}>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              There&apos;s room at the table.
            </h2>
            <p className="max-w-md text-white/85">
              We&apos;re letting people in a few hundred at a time. Add your email and we&apos;ll
              send your invite.
            </p>
            <WaitlistForm inverted />
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100 dark:border-zinc-900">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:px-6">
          <Logo />
          <p>&copy; 2026 Tafel. A landing page test.</p>
        </div>
      </footer>
    </div>
  );
}
