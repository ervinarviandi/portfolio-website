import Navigation from '@/components/commons/Navigation'
import FlickeringGrid from '@/components/magicui/flickering-grid'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { canvas } from 'leaflet'
import { Fullscreen } from 'lucide-react'
import WritingArticles from './slug/Writing'
import ArticlesBlog from './ArticlesBlog'

const categories = [
  {
    name: 'Recent',
    posts: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
  },
  {
    name: 'Popular',
    posts: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
  },
  {
    name: 'Trending',
    posts: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  },
]

export default function Example() {
  return (
    <>
    <Navigation/>
    <div className="full h-screen relative">
      <div className='lg:max-w-5xl mx-auto px-5 pt-10 z-50'>
      <h2 className='lg:text-5xl text-2xl font-bold pt-16'>Blog</h2>
      <h4 className='font-bold py-5 lg:text-3xl text-2xl  '>Ervin Arviandi Writings : Stories & Learnings</h4>
        <p className='lg:text-lg text-sm mt-5   dark:text-[#777777]'> crafting scalable, user-centric web solutions. Expertise in modern frameworks with a focus on performance optimization and intuitive interfaces 👋.</p>
        <hr className='border-2 border-dashed w-full mt-5' />
        <div className=''>
          <ArticlesBlog/>
        </div>
      </div>
    <FlickeringGrid
        className="z-0 absolute inset-0 size-full  "
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
        height={330}
        // width={ 300 }
      />
    </div>
    </>
  )
}