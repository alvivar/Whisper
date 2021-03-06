import React, { useState, useEffect } from 'react'
import logo from './logo.svg'

import './App.css'
import './styles/index.css'
import './styles/tailwind.css'

import InputField from './components/InputField'
import TextArea from './components/TextArea'
import PostButton from './components/PostButton'
import WordCount from './components/WordCount'
import PostList from './components/PostList'
import BlogList from './components/BlogList'

var randomWords = require('random-words')
const data = {
  blogs: [
    {
      name: randomWords({ exactly: 4, join: ' ' }),
      posts: [
        {
          title: randomWords({ exactly: 4, join: ' ' }),
          content: randomWords({ exactly: 50, join: ' ' })
        },
        {
          title: randomWords({ exactly: 4, join: ' ' }),
          content: randomWords({ exactly: 50, join: ' ' })
        },
        {
          title: randomWords({ exactly: 4, join: ' ' }),
          content: randomWords({ exactly: 50, join: ' ' })
        }
      ]
    },
    {
      name: randomWords({ exactly: 4, join: ' ' }),
      posts: [
        {
          title: randomWords({ exactly: 4, join: ' ' }),
          content: randomWords({ exactly: 50, join: ' ' })
        },
        {
          title: randomWords({ exactly: 4, join: ' ' }),
          content: randomWords({ exactly: 50, join: ' ' })
        },
        {
          title: randomWords({ exactly: 4, join: ' ' }),
          content: randomWords({ exactly: 50, join: ' ' })
        }
      ]
    },
    {
      name: randomWords({ exactly: 4, join: ' ' }),
      posts: [
        {
          title: randomWords({ exactly: 4, join: ' ' }),
          content: randomWords({ exactly: 50, join: ' ' })
        },
        {
          title: randomWords({ exactly: 4, join: ' ' }),
          content: randomWords({ exactly: 50, join: ' ' })
        },
        {
          title: randomWords({ exactly: 4, join: ' ' }),
          content: randomWords({ exactly: 50, join: ' ' })
        }
      ]
    }
  ]
}

function App () {
  // Data

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const allBlogs = data.blogs || []
  const currentBlog = allBlogs.find(x => x.name === title) || []
  const currentPosts = currentBlog.posts || []

  // Words & letters

  const [wordCount, setWordCount] = useState(0)
  const [letterCount, setLetterCount] = useState(0)

  useEffect(() => {
    setWordCount((content.trim().match(/\S+/g) || []).length)
    setLetterCount(content.trim().length)
  }, [content])

  return (
    <div className='container mx-auto max-w-4xl'>
      <div className='flex'>
        <div className='w-3/4 mt-2 pl-2'>
          <InputField
            defaultValue={title}
            OnValueChange={setTitle}
          ></InputField>
          <TextArea
            defaultValue={content}
            OnValueChange={setContent}
          ></TextArea>
          <PostButton enabled={true}></PostButton>
          <WordCount words={wordCount} letters={letterCount}></WordCount>
          <PostList posts={currentPosts}></PostList>
        </div>
        <div className='w-1/4 mt-2 pl-2'>
          <BlogList blogs={allBlogs} OnBlogClick={setTitle}></BlogList>
        </div>
      </div>
    </div>
  )
}

export default App
