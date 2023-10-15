import React from 'react';

import warningImg from './assets/exclamation-circle.svg';
import cl from './DeleteArticleMessage.module.css';

function DeleteArticleMessage({ submitDelete, discardDelete }) {
  return (
    <div className={cl.deleteArticle}>
      <div className={cl.deleteArticle__message}>
        <img src={warningImg} alt="Warn" className={cl.deleteArticle__message_img} />
        <p className={cl.deleteArticle__message_content}>Are you sure to delete this article?</p>
      </div>
      <div className={cl.deleteArticle__actions}>
        <button className={cl.deleteArticle__actions_discard} onClick={() => discardDelete()}>
          No
        </button>
        <button className={cl.deleteArticle__actions_submit} onClick={() => submitDelete()}>
          Yes
        </button>
      </div>
    </div>
  );
}

export default DeleteArticleMessage;
