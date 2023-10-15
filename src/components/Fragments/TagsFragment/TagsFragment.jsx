import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';
import { addTagToArticle, changeTagArticle, deleteTagArticle } from '../../../store/articleSlice';

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
  const { myArticle } = useSelector((state) => state.article);
  const dispatch = useDispatch();

  function addTag(event) {
    event.preventDefault();
    dispatch(addTagToArticle([{ id: Date.now(), name: '' }]));
  }

  function deleteTag(event) {
    event.preventDefault();
    const deletedId = event.target.parentNode.getAttribute('data-input-id');
    dispatch(deleteTagArticle(myArticle.tagList.filter((tag) => tag.id != deletedId)));
  }

  function changeTag(id, value) {
    const findIndex = myArticle.tagList.findIndex((tag) => id === tag.id);
    dispatch(
      changeTagArticle([
        ...myArticle.tagList.slice(0, findIndex),
        { ...myArticle.tagList[findIndex], name: value },
        ...myArticle.tagList.slice(findIndex + 1),
      ])
    );
  }

  return (
    <div>
      <span>Tags</span>
      <ul className={cl.tags}>
        {myArticle.tagList.map((tag, index) => (
          <li className={cl.tags__item} key={tag.id} data-input-id={tag.id}>
            <input
              type="text"
              className={cl.tags__input}
              value={tag.name}
              placeholder={'Tag name'}
              onChange={(event) => changeTag(tag.id, event.target.value)}
            />
            <Button text={'Delete'} styles={deleteBtn} onClick={deleteTag} />
            {myArticle.tagList.length - 1 === index && (
              <Button text={'Add tag'} styles={addBtn} onClick={addTag} />
            )}
          </li>
        ))}
        {myArticle.tagList.length === 0 && (
          <li className={cl.tags__item}>
            <Button text={'Add tag'} styles={addBtn} onClick={addTag} />
          </li>
        )}
      </ul>
    </div>
  );
}

export default TagsFragment;
