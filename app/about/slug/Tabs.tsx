import React from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const Tabs = () => {



    const categories = [
        {
          name: 'Intro',
          posts: [
            {
              id: 1,
              title:  `Hello👋, I'm Ervin. With over 2+ years of experience in Web Development, covering both frontend. I'm particularly passionate about frontend side, where I focus on creating web applications that are not only precise but also user-friendly experiences.      
              `,
              date: '5h ago',
              commentCount: 5,
              shareCount: 2,
            },
            {
              id: 2,
              title: "FYI, I really like and enjoy learning new things related to technology, as a front-end developer, I have to keep up with technological developments. In the future there will definitely be many new features, tools and programming languages that will make it easier for us to create and develop 🔨🔮 a website application. 💻📱,  I'am passionate about Frontend Developer and enjoy working on the Web. I love combining my technical knowledge and creativity to build engaging and user-friendly websites and applications. 🔮",
              date: '2h ago',
              commentCount: 3,
              shareCount: 2,
            },
            {
              id: 3,
              title: "",
              date: '2h ago',
              commentCount: 3,
              shareCount: 2,
            },
          ],
        },
        {
          name: 'Career',
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
          name: 'Education',
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



  return (
    <div>
        <TabGroup>
          <TabList className="flex gap-4">
            {categories.map(({ name }) => (
              <Tab
                key={name}
                className="rounded-full py-1 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {name}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {categories.map(({ name, posts }) => (
              <TabPanel key={name} className="rounded-xl dark:bg-white/5 bg-gray-200 p-3">
                <ul>
                  {posts.map((post) => (
                    <li key={post.id} className="relative rounded-md p-3 text-sm/6 transition hover:bg-white/5">
                      <a href="#" className="font-semibold text-white">
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                      {/* <ul className="flex gap-2 text-white/50" aria-hidden="true">
                        <li>{post.date}</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.commentCount} comments</li>
                        <li aria-hidden="true">&middot;</li>
                        <li>{post.shareCount} shares</li>
                      </ul> */}
                    </li>
                  ))}
                </ul>
              </TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
    </div>
  )
}

export default Tabs