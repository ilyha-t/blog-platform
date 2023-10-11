import React, { useState } from 'react';

import Button from '../Button/Button';

import cl from './TagsFragment.module.css';

const deleteBtn = {
  color: '#f5222d',
  borderColor: '#f5222d',
};

const addBtn = {
  color: '#1890FF',
  borderColor: '#1890FF',
};

function TagsFragment() {
  const [tags, setTags] = useState([]);

  function addTag(event) {
    event.preventDefault();
    setTags([...tags, { id: Date.now(), name: '' }]);
  }

  function deleteTag(event) {
    event.preventDefault();
    const deletedId = event.target.parentNode.getAttribute('data-input-id');
    setTags(tags.filter((tag) => tag.id != deletedId));
  }

  return (
    <div>
      <span>Tags</span>
      <ul className={cl.tags}>
        {tags.map((tag, index) => (
          <li className={cl.tags__item} key={tag.id} data-input-id={tag.id}>
            <input
              type="text"
              className={cl.tags__input}
              value={tag.name}
              placeholder={'Tag name'}
            />
            <Button text={'Delete'} styles={deleteBtn} onClick={deleteTag} />
            {tags.length - 1 === index && (
              <Button text={'Add tag'} styles={addBtn} onClick={addTag} />
            )}
          </li>
        ))}
        {tags.length === 0 && (
          <li className={cl.tags__item}>
            <Button text={'Add tag'} styles={addBtn} onClick={addTag} />
          </li>
        )}
      </ul>
    </div>
  );
}

export default TagsFragment;
