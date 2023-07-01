import React, { useState } from 'react';

const TableOfContents = () => {
  const [chapters, setChapters] = useState([
    {
      title: 'Chapter 1',
      completed: true,
      subChapters: [
        { title: 'Subchapter 1.1', completed: true },
        { title: 'Subchapter 1.2', completed: false },
      ],
    },
    {
      title: 'Chapter 2',
      completed: false,
      subChapters: [
        { title: 'Subchapter 2.1', completed: false },
        { title: 'Subchapter 2.2', completed: false },
      ],
    },
    // Add more chapters with their sub-chapters as needed
  ]);

  const toggleCompletion = (chapterIndex, subChapterIndex) => {
    const updatedChapters = [...chapters];
    updatedChapters[chapterIndex].subChapters[subChapterIndex].completed = !updatedChapters[chapterIndex].subChapters[subChapterIndex].completed;
    setChapters(updatedChapters);
  };

  return (
    <div className="table-of-contents">
      <h1 className="title">Table of Contents</h1>
      <ul className="chapters">
        {chapters.map((chapter, chapterIndex) => (
          <li key={chapterIndex} className="chapter">
            <input
              type="checkbox"
              checked={chapter.completed}
              onChange={() => toggleCompletion(chapterIndex, null)}
            />
            <span
              className={chapter.completed ? 'completed' : ''}
            >
              {chapter.title}
            </span>
            <ul className="sub-chapters">
              {chapter.subChapters.map((subChapter, subChapterIndex) => (
                <li key={subChapterIndex} className="sub-chapter">
                  <input
                    type="checkbox"
                    checked={subChapter.completed}
                    onChange={() => toggleCompletion(chapterIndex, subChapterIndex)}
                  />
                  <span
                    className={subChapter.completed ? 'completed' : ''}
                  >
                    {subChapter.title}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
