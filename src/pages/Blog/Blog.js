import React from 'react';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiPageHeader,
  EuiPageHeaderSection,
  EuiTitle,
  EuiSpacer,
  EuiText,
} from '@elastic/eui';
import Paragraph from './Paragraph';

import './Blog.css';

const Blog = () => (
  <EuiPage>
    <EuiPageBody>
      <EuiPageHeader>
        <EuiPageHeaderSection>
          <EuiTitle size="l">
            <h1>Blog</h1>
          </EuiTitle>
        </EuiPageHeaderSection>
      </EuiPageHeader>
      <EuiPageContent>
        <EuiPageContentHeader>
          <EuiPageContentHeaderSection>
            <EuiTitle size="l">
              <h2>Learning how to learn, techniques for developers</h2>
            </EuiTitle>
          </EuiPageContentHeaderSection>
        </EuiPageContentHeader>
        <EuiPageContentBody>
          <Paragraph
            content={(
              <>
                <p>
                  Learning how to learn is one of the most successful courses in
                  Coursera. By McMaster University & University of California
                  San Diego, is free and it teaches some learning techniques
                  explaining why they work.
                </p>
                <p>
                  I am going to try to map some of the techniques in the course
                  to my context. I’ve been involved in software development and
                  agile methodologies playing several roles including Business
                  Analysis and Product Management. If f you are a developer or
                  have any other role in a software development team, this could
                  be useful for you.
                </p>
                <p>
                  Software industry requires to be constantly updated, even if
                  you work in a maintenance project, chances to get outdated or
                  not be considered for a more exciting job increases if you do
                  not learn new things on your own time, but how to achieve
                  this? Let&apos;s consider that you already found a new programming
                  language, library or framework that you want to learn, you
                  have researched a bit and found some material but you are
                  struggling about how to learn it quickly.
                </p>
              </>
            )}
          />
          <EuiText>
            <blockquote>
              <p>Take control of your learning experience</p>
            </blockquote>
          </EuiText>
          <EuiSpacer />
          <Paragraph
            title="Plan weekly and daily"
            content={(
              <>
                <p>
                  If you are working on agile methodologies you might be
                  familiar with the concept of POC. If something is unknown,
                  just plan a small test so you can be familiarized with the new
                  concept or library. As you intend to learn something new here,
                  plan some time in your week to skim a book or a blog. Include
                  also your finish time and some leisure activities.
                </p>
                <p>
                  I&apos;ve used a couple of approaches, the one that I like the most
                  is to have separate calendars for my work and my personal
                  life, so one regular day could look like this: At work I have
                  a similar calendar with more specific work related tasks, and
                  cook time is a face-to-face time that I spend with my husband.
                  TodoIst, Trello and Notion works very well for this, my
                  recommendation, just keep your system as simple as you can.
                  Noticed that in my daily plan, hours are just part of the task
                  name, as I usually have the same working hours, duplicate
                  cards works for me.
                </p>
              </>
            )}
          />
          <Paragraph
            title="The Pomodoro technique"
            content={(
              <p>
                This works well also at work. If you need help to avoid some
                distractions, plan yourself for being 15-20 minutes working in
                one task, and give you 5 or so for being distracted. After 4
                pomodoros you should plan for a longer rest, let&apos;s say 20
                minutes. You can use Chrome extensions like Marinara Pomodoro
                Assistant if you want extra help with timing. Try different time
                configurations for a while and see if that works for you, if so,
                the habit will come.
              </p>
            )}
          />
          <Paragraph
            title="Deliberate practice"
            content={(
              <p>
                If you are learning a new programming language, try to include
                problems of different levels and work on the hardest ones for
                your current level. Most of the materials are made to increase
                the level over time, but you can jump to more advanced material
                or search for it on the internet.
              </p>
            )}
          />
          <Paragraph
            title="Eat your frogs first"
            content={(
              <p>
                Tracking your daily routine for a while could give you useful
                insights about your habits, when you feel more energetic, what
                triggers make you succumb to procrastination and so on. Planning
                your day according to this data will make you more effective,
                for example in my case I have more energy at morning, so I plan
                for tasks that do not appeal too much to me first thing at
                morning. I was also planning for studying Monday to Thursday but
                it is not working for me, on Thursday I do not want to sit at my
                desk, and I was starting again on Sunday. So I will add a break
                on Wednesday and test it for a few weeks.
              </p>
            )}
          />
          <Paragraph
            title="Avoid multitasking"
            content={(
              <p>
                At some point I was amazed by people who could keep a
                face-to-face conversation and multiple chats &quot;at the same time&quot;,
                not anymore. Multitasking is proven to be ineffective, not only
                in your learning process but also in your interactions, but how
                to overcome this bad habit that I have for years? In my case
                this bad habit grabs my mind in the middle of a conversation and
                take me to other unexpected places, and do not take me wrong,
                that is the diffuse mode working, the issue is when I will allow
                it to work. So I started to look for techniques for focus and
                concentration, and no surprise here, I ended up on meditation
                and mindfulness. The idea behind this is to take control of my
                thoughts so I can decide when I want to be focus on what.
                Remember, plan for leisure activities, exercise and rest, that
                is when you can have those mind journeys.
              </p>
            )}
          />
          <Paragraph
            title="Exercise and eat healthy"
            content={(
              <p>
                Perhaps you are sick of this, but, it works. Hope this is useful
                for someone, if you have comments or questions, just let me know
                on the discussion section below the title.
              </p>
            )}
          />
        </EuiPageContentBody>
      </EuiPageContent>
    </EuiPageBody>
  </EuiPage>
);

export default Blog;
